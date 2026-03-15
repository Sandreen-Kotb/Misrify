import { createBrowserRouter } from 'react-router-dom';
import NotFound from '../Components/Errors/NotFound';
import Login from '../Pages/Login/Login';
import Signup from '../Pages/Signup/Signup';
import Verification from '../Pages/Verification/Verification';
import ForgotPassword from '../Pages/ForgetPassword/ForgetPassword';
import ResetPassword from '../Pages/ResetPassword/ResetPassword';
import CheckGmail from '../Pages/CheckGmail/CheckGmail';
import PasswordSuccess from "../Pages/PasswordSuccess/PasswordSuccess";
import Layout from '../Components/Layout/Layout';
import Contact from '../Components/Contact/Contact';
import AboutUs from '../Pages/ِAboutUs/AboutUs';
import Home from '../Pages/Home/Home';
import Analytics from '../Components/Analytics/Analytics';
import DashboardLayout from '../Components/DashboardLayout/DashboardLayout';
import Users from '../Components/Users/Users';
import Products from '../Components/Products/Products';
import Categories from '../Components/Categories/Categories';
import Merchants from '../Components/Merchants/Merchants';
import Support from '../Components/Support/Support';
import Profile from './../Pages/Profile/Profile';
import Messages from '../Components/Messages/Messages';
import Notifications from '../Components/Notifications/Notifications';
import StartupGuide from '../Pages/Students/StartupGuide';
import RequestedProducts from '../Components/Products/RequestedProducts';
import { MerchantOrders } from '../Components/MerchantOrders/MerchantOrders';
import MerchantReviews from '../Components/MerchantReviews/MerchantReviews';
import ProtectedRoute from './ProtectedRoutes';
import ErrorBoundary from '../Components/Errors/ErrorBoundary';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      { index: true, element: <Home /> },
      { path: "/aboutus", element: <AboutUs /> },
      { path: '/verification', element: <Verification /> },
      { path: '/login', element: <Login /> },
      { path: '/signup', element: <Signup /> },
      { path: '/forgot-password', element: <ForgotPassword /> },
      { path: '/check-gmail', element: <CheckGmail /> },
      { path: '/reset-password', element: <ResetPassword /> },
      { path: '/password-success', element: <PasswordSuccess /> },
      { path: '/contact', element: <Contact /> },
      { path: '/students', element: <StartupGuide /> },
      {
        path: '/profile',
        element: <ProtectedRoute />,
        children: [{ index: true, element: <Profile /> }],
      },
      {
        path: '/notifications',
        element: <ProtectedRoute />,
        children: [{ index: true, element: <Notifications /> }],
      },
    ],
  },
  {
    path: '/analytics',
    element: <ProtectedRoute allowedRoles={['admin', 'merchant']} />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        element: <DashboardLayout />,
        children: [
          { index: true, element: <Analytics /> },
          // Shared analytical routes
          { path: 'products', element: <Products /> },
          { path: 'requested-products', element: <RequestedProducts /> },
          { path: 'support', element: <Support /> },

          // Admin ONLY Routes
          {
            element: <ProtectedRoute allowedRoles={['admin']} />,
            children: [
              { path: 'users', element: <Users /> },
              { path: 'merchants', element: <Merchants /> },
              { path: 'categories', element: <Categories /> },
              { path: 'messages', element: <Messages /> },
            ],
          },

          // MERCHANT ONLY Routes
          {
            element: <ProtectedRoute allowedRoles={['merchant']} />,
            children: [
              { path: 'orders', element: <MerchantOrders /> },
              { path: 'reviews', element: <MerchantReviews /> },
            ],
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;