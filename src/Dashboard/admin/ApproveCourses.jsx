import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import DashboardTitle from "../DashboardTitle";
import { FcApproval } from "react-icons/fc";
import { CiCircleRemove } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";
import toast from "react-hot-toast";

const ApproveCourses = () => {
   const axiosPublic = useAxiosPublic();

   const { data: courses = [], refetch } = useQuery({
      queryKey: ["courses"],
      queryFn: async () => {
         const res = await axiosPublic.get(`/courses`);
         return res.data;
      },
   });

   const handleUpdateStatus = async (id, value) => {
      const status = value;
      console.log(status);
      try {
         const { data } = await axiosPublic.patch(`/approveCourse/${id}`, { status })
         refetch()
         console.log(data);
         toast.success('Status updated successfully')
      } catch (error) {
         console.log(error)
         toast.error(error.message || 'Something went wrong.')
      }
   }

   console.log(courses);

   return (
      <div>
         <DashboardTitle title="Approve Blog" />

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
                     <col />
                     <col />
                  </colgroup>
                  <thead>
                     <tr className="text-left bg-slate-100">
                        <th className="p-3">SL</th>
                        <th className="p-3">Author Name</th>
                        <th className="p-3">Photo</th>
                        <th className="p-3">Title</th>
                        <th className="p-3">Banner</th>
                        <th className="p-3">Email</th>
                        <th className="p-3">Status</th>
                        <th className="p-3">Change Status</th>
                     </tr>
                  </thead>
                  <tbody>
                     {courses.map((course, i) => (
                        <tr key={i} className="border">
                           <td className="p-2">
                              <p>{i + 1}</p>
                           </td>
                           <td className="p-2">
                              <p>{course?.instructorDetails?.name}</p>
                           </td>
                           <td className="p-2">
                              <img
                                 src={
                                    course?.instructorDetails?.img
                                       ? course.instructorDetails?.img
                                       : "https://greenfield-university.netlify.app/assets/banner_66-Bq6KXLtZ.png"
                                 }
                                 alt=""
                                 className="w-12 h-8 object-cover rounded-lg hover:scale-105 duration-300"
                              />
                           </td>
                           <td className="p-2">
                              <p>{course.title}</p>
                           </td>

                           <td className="p-2">
                              <p>
                                 <img
                                    src={
                                       course?.image_url
                                          ? course.image_url : "https://greenfield-university.netlify.app/assets/banner_66-Bq6KXLtZ.png"
                                    }
                                    alt=""
                                    className="w-12 h-8 object-cover rounded-lg hover:scale-105 duration-300"
                                 />
                              </p>
                           </td>
                           <td className="p-2">
                              <p>
                                 {
                                    course.instructorDetails.email
                                 }
                              </p>
                           </td>

                           <td className="p-2">

                              {course.status === 'pending' && <BsThreeDots className="animate-ping mx-auto text-lg text-blue-500" />}

                              {course.status === 'approved' && <FcApproval className="mx-auto text-lg " />}

                              {course.status === 'rejected' && <CiCircleRemove className="mx-auto text-lg text-red-500" />}
                           </td>
                           <td className="p-2">
                              <select defaultValue={course.status} onChange={(e) => handleUpdateStatus(course._id, e.target.value)} className="border py-0.5 border-green-600 rounded-sm">
                                 <option value="pending">Pending</option>
                                 <option value="approved">approved</option>
                                 <option value="rejected">Rejected</option>
                              </select>
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

export default ApproveCourses;