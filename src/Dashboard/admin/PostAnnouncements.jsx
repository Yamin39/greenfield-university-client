import { TbFidgetSpinner } from "react-icons/tb";
import DashboardTitle from "../DashboardTitle";
import { useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { toast } from 'react-hot-toast'

const PostAnnouncements = () => {
   const [loading, setLoading] = useState(false)
   const axiosPublic = useAxiosPublic()

   const handlePostAnnouncements = async e => {
      e.preventDefault();
      setLoading(true)
      const form = e.target;
      const title = form.title.value;
      const timestamp = new Date().getTime();
      const description = form.description.value;

      const announcement = {
         title,
         timestamp,
         description
      }

      const res = await axiosPublic.post('/announcement', announcement)
      if (res.data.insertedId) {
         toast.success('Announcement has been posted successfully!')
         setLoading(false)
         form.reset()
      }

   }
   return (
      <div>
         <DashboardTitle title="Post Announcements" />

         <form onSubmit={handlePostAnnouncements} className="  border p-10 bg-slate-50 space-y-6 max-w-3xl mx-auto">


            <div className="*:w-full space-y-1">
               <label>Title :</label>
               <input type="text" name="title" placeholder="Write the title" className="border p-2.5 outline-green-500" />
            </div>

            <div className=" space-y-1">
               <textarea name="description" id="" className="w-full border outline-green-500 p-2.5" rows={5}></textarea>
            </div>

            <button className="bg-primary-700 text-white p-2.5 px-8 hover:bg-primary-800 w-60">
               {
                  loading ? <TbFidgetSpinner className="text-2xl animate-spin mx-auto " /> : <span className="">Post Announcements</span>
               }

            </button>

         </form>


      </div>
   );
};

export default PostAnnouncements;