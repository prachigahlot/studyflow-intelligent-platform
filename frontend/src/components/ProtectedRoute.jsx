import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "../store/authStore";

const ProtectedRoute = () => {
  const { user, token } = useAuthStore();

  console.log("🛡️ ProtectedRoute → user:", user);
  console.log("🛡️ ProtectedRoute → token:", token);

  return user && token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
