import { useQuery } from "@tanstack/react-query";
import { ArrowRight, CircleCheckBig, GraduationCap, NotepadText } from "lucide-react";
import { Link } from "react-router-dom";
import LoadingModal from "../../components/LoadingModal";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const InstructorStatistics = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  const { data: instructorStatistics = {}, isLoading } = useQuery({
    queryKey: ["studentStatistics"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/instructorStatistics?email=${user.email}`);
      return res.data;
    },
  });

  console.log(instructorStatistics);

  if (isLoading) return <LoadingModal text={"Loading..."} />;
  return (
    <div className="max-w-7xl mx-auto pb-12 px-3">
      <div className="flex flex-col md:flex-row gap-6 p-6">
        {/* Courses Created */}
        <div className="flex-1 bg-white rounded-2xl p-6" style={{ boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.05)" }}>
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-orange-500" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-1">{instructorStatistics?.coursesCreated}</h2>
              <p className="text-gray-500">Courses Created</p>
            </div>
          </div>
          <Link
            to="/dashboard/manageCourse"
            className="flex border-t border-dashed pt-3 items-center text-gray-500 hover:text-gray-700 transition-colors cursor-pointer"
          >
            <span className="mr-2">View details</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Courses Approved */}
        <div className="flex-1 bg-white rounded-2xl p-6" style={{ boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.05)" }}>
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center">
              <CircleCheckBig className="w-6 h-6 text-emerald-500" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-1">{instructorStatistics?.coursesApproved}</h2>
              <p className="text-gray-500">Courses Approved</p>
            </div>
          </div>
          <Link
            to="/dashboard/manageCourse"
            className="flex border-t border-dashed pt-3 items-center text-gray-500 hover:text-gray-700 transition-colors cursor-pointer"
          >
            <span className="mr-2">View details</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Blogs Written */}
        <div className="flex-1 bg-white rounded-2xl p-6" style={{ boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.05)" }}>
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
              <NotepadText className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-1">{instructorStatistics?.blogs}</h2>
              <p className="text-gray-500">Blogs Written</p>
            </div>
          </div>
          <Link
            to="/dashboard/manageBlogs"
            className="flex border-t border-dashed pt-3 items-center text-gray-500 hover:text-gray-700 transition-colors cursor-pointer"
          >
            <span className="mr-2">View details</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InstructorStatistics;
