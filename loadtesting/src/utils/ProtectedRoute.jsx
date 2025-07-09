import { Navigate, useLocation } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const ProtectedRoute = ({ children, roles = [] }) => {
  const location = useLocation();
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/log-in" state={{ from: location }} replace />;
  }

  try {
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000;

    if (decoded.exp < currentTime) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      return <Navigate to="/log-in" state={{ from: location }} replace />;
    }

    if (roles.length > 0 && !roles.includes(decoded.role)) {
      return <Navigate to="/unauthorized" replace />;
    }

    return children;
  } catch (error) {
    console.error("Token decoding failed:", error);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return <Navigate to="/log-in" state={{ from: location }} replace />;
  }
};

export default ProtectedRoute;
