import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import DashboardTitle from "../DashboardTitle";

const PurchasedCourses = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  const { data: courses = [] } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/purchasedCourses?email=${user.email}`);
      return res.data;
    },
  });

  return (
    <div className="max-w-7xl mx-auto p-6">
      <DashboardTitle title="Registered Courses" />

      <div className="overflow-x-auto">
        {/* total data count */}
        <p className="text-sm pb-4">
          Showing <span className="text-primary-700">{courses.length}</span> courses
        </p>

        <table className="table-auto w-full border-collapse">
          <thead>
            <tr>
              <th className="border px-4 py-2">SL</th>
              <th className="border px-4 py-2">Course Name</th>
              <th className="border px-4 py-2">Image</th>
              <th className="border px-4 py-2">Enroll Date</th>
              <th className="border px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, idx) => (
              <tr key={course._id}>
                <td className="border px-4 py-2">{idx + 1}</td>
                <td className="border px-4 py-2">{course.title}</td>
                <td className="border px-4 py-2">
                  <div className="flex justify-center">
                    <img src={course.image_url} alt={course.title} className="h-10 w-10 object-cover" />
                  </div>
                </td>
                <td className="border px-4 py-2">{new Date(course.timestamp).toDateString()}</td>
                <td className="border px-4 py-2">
                  <div className="flex justify-center">
                    <Link to={`/course-details/${course.courseId}`} className="bg-primary-700 hover:bg-primary-800 text-white font-bold py-2 px-4 rounded">
                      View
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PurchasedCourses;
