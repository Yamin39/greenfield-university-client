import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";
import AdminStatistics from "./admin/AdminStatistics";
import DashboardTitle from "./DashboardTitle";
import InstructorStatistics from "./instructor/InstructorStatistics";
import StudentStatistics from "./student/StudentStatistics";

const Statistics = () => {
  const { user } = useAuth();
  const role = useRole(user?.email);

  if (!role)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-semibold text-gray-600">Loading...</p>
      </div>
    );

  return (
    <div>
      <DashboardTitle title="Statistics" />

      {role === "admin" && <AdminStatistics />}

      {role === "instructor" && <InstructorStatistics />}

      {role === "student" && <StudentStatistics />}
    </div>
  );
};

export default Statistics;
