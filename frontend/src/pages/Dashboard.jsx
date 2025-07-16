import DashboardCards from "../components/dashboard/DashboardCards";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import RecentlyEdited from "../components/dashboard/RecentlyEdited";
import SubjectForm from "../components/dashboard/SubjectForm";
import SubjectGrid from "../components/dashboard/SubjectGrid";

const Dashboard = () => {
    const selectedSubjectId = "68712780cd0b120eb1893f29";
  return (
    <div className="space-y-8">
      <DashboardHeader />
      <DashboardCards />
      <SubjectForm />
      <RecentlyEdited />

      <SubjectGrid />
    
    </div>
  );
};

export default Dashboard;
