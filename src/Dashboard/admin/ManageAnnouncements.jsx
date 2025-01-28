import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import DashboardTitle from "../DashboardTitle";
import { format } from "date-fns";
import { toast } from 'react-hot-toast'

const ManageAnnouncements = () => {
   const axiosPublic = useAxiosPublic();

   const { data: announcements = [], refetch } = useQuery({
      queryKey: ['announcements'],
      queryFn: async () => {
         const res = await axiosPublic.get('/announcements')
         return res.data;
      }
   })

   const handleDelete = async (id) => {
      const res = await axiosPublic.delete(`/announcement/${id}`)
      if(res.data.deletedCount > 0){
         toast.success("Announcement has been deleted.")
         refetch()
      }
   }

   return (
      <div>

         <DashboardTitle title="Manage Announcements" />

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
                     <tr className="text-left">
                        <th className="p-3">SL</th>
                        <th className="p-3">Title</th>
                        <th className="p-3">Date & Time</th>
                        <th className="p-3">Description</th>
                        <th className="p-3">Delete</th>
                     </tr>
                  </thead>
                  <tbody>
                     {
                        announcements.map((announcement, i) => <tr key={i} className="border">
                           <td className="p-2">
                              <p>{i + 1}</p>
                           </td>
                           <td className="p-2">
                              <p>{announcement.title}</p>
                           </td>
                           <td className="p-2">
                              <p>{format(new Date(announcement.timestamp), "yyyy-MM-dd hh:mm a")}</p>
                           </td>
                           <td className="p-2">
                              <p>{(announcement.description).slice(0, 40)}...</p>
                           </td>
                           <td onClick={() => handleDelete(announcement._id)} className="p-2">
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

export default ManageAnnouncements;