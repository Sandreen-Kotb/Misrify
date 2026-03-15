import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TailSpin } from 'react-loader-spinner';

const ProtectedRoute = ({ allowedRoles }) => {
    const location = useLocation();
    const { isAuthenticated, loading, hasCheckedAuth, user } = useSelector((state) => state.auth);

    if (loading || !hasCheckedAuth) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
                <TailSpin color="#2B3D5B" height={100} width={100} timeout={5000} />
            </div>
        );
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // Role-Based Guard Check
    if (allowedRoles && !allowedRoles.includes(user?.role)) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;