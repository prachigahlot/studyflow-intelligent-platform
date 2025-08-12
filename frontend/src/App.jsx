import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import SubjectPage from "./pages/SubjectPage";
import PomodoroPage from "./pages/PomodoroPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes (with layout) */}
        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
             <Route path="/subject/:id" element={<SubjectPage />} />
             <Route path="/pomodoro" element={<PomodoroPage />} />
            {/* More protected routes go here later */}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
