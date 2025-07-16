import AuthForm from "../components/AuthForm";
import axios from "axios";
import useAuthStore from "../store/authStore";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const setToken = useAuthStore((state) => state.setToken);
  const setUser = useAuthStore((state) => state.setUser);

  const handleLogin = async ({ email, password }) => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      const user = res.data.user;
      const token = res.data.token;

      console.log("🔐 Received from backend →", { user, token });

      if (!user || !token) {
        throw new Error("Invalid response from server");
      }

      setToken(token);
      setUser(user);
      console.log("✅ Saved user:", user);
      console.log("✅ Saved token:", token);

      // Small delay to ensure Zustand persists
      setTimeout(() => {
        navigate("/");
      }, 100);
    } catch (err) {
      console.error("❌ Login error:", err);
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return <AuthForm type="login" onSubmit={handleLogin} />;
};

export default Login;

