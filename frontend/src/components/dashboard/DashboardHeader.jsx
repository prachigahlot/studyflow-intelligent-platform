import useAuthStore from "../../store/authStore";

const DashboardHeader = () => {
  const user = useAuthStore((state) => state.user);
  const date = new Date().toLocaleDateString();

  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-3xl font-bold text-primary">
          Welcome back, {user?.email?.split("@")[0] || "Learner"} 👋
        </h1>
        <p className="text-gray-500">Today's Date: {date}</p>
      </div>
      <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center">
        {user?.email?.charAt(0).toUpperCase()}
      </div>
    </div>
  );
};

export default DashboardHeader;
