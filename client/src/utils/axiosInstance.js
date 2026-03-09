import axios from 'axios';
import { logout } from '../features/authSlice';
let store;

export const injectStore = (_store) => {
  store = _store;
};

const publicEndpoints = [
  '/auth/signup',
  '/auth/login',
  '/auth/refresh-token',
  '/auth/verify-email',
  '/auth/forgot-password',
  '/auth/reset-password',
];

// Create Axios instance
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api/',
  headers: { 'Content-Type': 'application/json' },
  timeout: 10000,
  withCredentials: true,
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // The browser natively handles HTTP-only cookies securely and automatically 
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    const isAuthError = error.response?.status === 401;
    const isPublic = publicEndpoints.some((url) => originalRequest.url.includes(url));
    const alreadyRetried = originalRequest._retry;

    if (isAuthError && !isPublic && !alreadyRetried) {
      originalRequest._retry = true;

      try {
        const rawAxios = axios.create({
          baseURL: import.meta.env.VITE_API_URL || '/api/',
          withCredentials: true,
        });
        await rawAxios.post('/auth/refresh-token');

        // Retry the original request
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        store.dispatch(logout());
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;