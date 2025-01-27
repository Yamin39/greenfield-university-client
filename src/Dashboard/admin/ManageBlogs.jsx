import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import DashboardTitle from "../DashboardTitle";
import toast from "react-hot-toast";
import { format } from "date-fns";

const ManageBlogs = () => {
   const axiosPublic = useAxiosPublic();

   const { data: blogs = [], refetch } = useQuery({
      queryKey: ['blogs'],
      queryFn: async () => {
         const res = await axiosPublic.get('/blogs')
         return res.data;
      }
   })

   const handleDelete = async (id) => {
      const res = await axiosPublic.delete(`/blog/${id}`)
      if(res.data.deletedCount > 0){
         toast.success("Blog has been deleted.")
         refetch()
      }
   }
   return (
      <div>
         <DashboardTitle title="Manage Blogs" />

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
                              <tr className="text-left">
                                 <th className="p-3">SL</th>
                                 <th className="p-3">Author Name</th>
                                 <th className="p-3">Photo</th>
                                 <th className="p-3">Title</th>
                                 <th className="p-3">Thumbnail</th>
                                 <th className="p-3">Date & Time</th>
                                 <th className="p-3">Email</th>
                                 <th className="p-3">Role</th>
                                 <th className="p-3">Delete</th>
                              </tr>
                           </thead>
                           <tbody>
                              {
                                 blogs.map((blog, i) => <tr key={i} className="border">
                                    <td className="p-2">
                                       <p>{i + 1}</p>
                                    </td>
                                    <td className="p-2">
                                       <p>{blog?.author?.name}</p>
                                    </td>
                                    <td className="p-2">
                                       <img src={blog?.author?.img} alt="" className="w-12 h-8 object-cover rounded-lg hover:scale-105 duration-300"/>
                                    </td>
                                    <td className="p-2">
                                       <p>{(blog.title).slice(0, 20)}...</p>
                                    </td>
                                    <td className="p-2">
                                       <img src={blog.thumbnail} alt="" className="w-12 h-8 object-cover rounded-lg hover:scale-105 duration-300"/>
                                    </td>
                                    {/* <td className="p-2">
                                       <p>{format(new Date(blog.timestamp), "yyyy-MM-dd hh:mm a")}</p>
                                    </td> */}
                                    <td className="p-2">
                                       <p>{blog?.author?.email}</p>
                                    </td>
                                    <td className="p-2">
                                       <p>{blog?.author?.role}</p>
                                    </td>
                                    <td onClick={() => handleDelete(blog._id)} className="p-2">
                                       <span className="px-3 py-1 font-semibold rounded-md bg-red-500 text-white cursor-pointer">
                                          <span>Delete</span>
                                       </span>
                                    </td>
                                 </tr>)
                              }
                           </tbody>
                        </table>
                     </div>
                  </div>

      </div>
   );
};

export default ManageBlogs;