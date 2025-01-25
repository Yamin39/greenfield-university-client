import DashboardTitle from "../DashboardTitle";

const PostAnnouncements = () => {
   return (
      <div>
         <DashboardTitle title="Post Announcements" />

         <form className="  border p-10 bg-slate-50">


            <div className="*:w-full space-y-1">
               <label>Title :</label>
               <input type="text" name="title" placeholder="Write the title" className="border p-2.5 outline-green-500" />
            </div>

            <div className="*:w-full space-y-1">
               <label>Time Stamp :</label>
               <input type="datetime-local" name="title" placeholder="Write the title" className="border p-2.5 outline-green-500" />
            </div>

            <div className="*:w-full space-y-1">
               <label>Title :</label>
               <input type="text" name="title" placeholder="Write the title" className="border p-2.5 outline-green-500" />
            </div>



            

            







         </form>


      </div>
   );
};

export default PostAnnouncements;