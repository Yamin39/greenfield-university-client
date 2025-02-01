import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import DashboardTitle from "../DashboardTitle";
import { useQuery } from '@tanstack/react-query'
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const ManageCourse = () => {
   const axiosPublic = useAxiosPublic();
   const { user } = useAuth();


   const { data: courses = [], refetch } = useQuery({
      queryKey: ['userCourses', user?.email],
      enabled: !!user?.email,
      queryFn: async () => {
         const { data } = await axiosPublic.get(`/userCourses?email=${user?.email}`);
         return data;
      }
   });

   const handleDelete = async (id) => {
      const result = await Swal.fire({
         title: "Are you sure?",
         text: "You won't be able to revert this!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
         try {
            const res = await axiosPublic.delete(`/course/${id}`);
            if (res.data.deletedCount > 0) {
               toast.success("Course has been deleted!");
               refetch();
            }
         } catch (error) {
            toast.error(error.message || "Something went wrong!");
            console.log(error);
         }
      }
   };


   console.log(courses);

   return (
      <div>
         <DashboardTitle title="Mange Course" />
         <div className="max-w-7xl mx-auto">
            <div className="overflow-x-auto">
               <table className="min-w-full text-xs border ">
                  <colgroup>
                     <col />
                     <col />
                     <col />
                     <col />
                     <col />
                     <col />
                  </colgroup>
                  <thead>
                     <tr className="text-left bg-slate-100">
                        <th className="p-3">SL</th>
                        <th className="p-3">Image</th>
                        <th className="p-3">Title</th>
                        <th className="p-3">Name</th>
                        <th className="p-3 text-center">Email</th>
                        <th className="p-3 text-center">category</th>
                        {/* <th className="p-3">Update</th> */}
                        <th className="p-3">Delete</th>
                     </tr>
                  </thead>
                  <tbody>
                     {courses.map((course, i) => (
                        <tr key={i} className="border *:py-4">
                           <td className="p-2">
                              <p>{i + 1}</p>
                           </td>
                           <td className="p-2">
                              <img src={course.image_url} alt="" className="w-12 h-12 object-cover" />
                           </td>
                           <td className="p-2">
                              <p>{(course.title).slice(0, 20)}...</p>
                           </td>

                           <td className="p-2">
                              <p>{course.instructorDetails.name}</p>
                           </td>
                           <td className="p-2 text-center">
                              <p>{course.instructorDetails.email}</p>
                           </td>

                           <td className="p-2">
                              <p className="text-center"><span className="bg-pink-50 border border-pink-200 text-center p-1 rounded-lg text-pink-600">{course.category}</span></p>
                           </td>
                           {/* <td
                              className="p-2"
                           >
                              <Link to={`/dashboard/updateCourse/${course._id}`} className="px-3 py-1 font-semibold rounded-md bg-primary-700 text-white cursor-pointer">
                                 <span>Update</span>
                              </Link>
                           </td> */}
                           <td
                              onClick={() => handleDelete(course._id)}
                              className="p-2"
                           >
                              <span className="px-3 py-1 font-semibold rounded-md bg-red-500 text-white cursor-pointer">
                                 <span>Delete</span>
                              </span>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>

      </div>
   );
};

export default ManageCourse;