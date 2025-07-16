import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-white p-4 space-y-4">
      <NavLink to="/" className="block">📁 Dashboard</NavLink>
      <NavLink to="/notes" className="block">📝 Notes</NavLink>
      <NavLink to="/pomodoro" className="block">⏲️ Pomodoro</NavLink>
      <NavLink to="/quiz" className="block">🧠 Quiz</NavLink>
    </div>
  );
};

export default Sidebar; 