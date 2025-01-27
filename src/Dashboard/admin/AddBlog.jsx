import { useState } from "react";
import DashboardTitle from "../DashboardTitle";
import useAuth from "../../hooks/useAuth";
import { TbFidgetSpinner } from "react-icons/tb";
import { toast } from 'react-hot-toast'
import useAxiosPublic from "../../hooks/useAxiosPublic";
import axios from "axios";

const imageUpload = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_ImgBB_api_key}`

const AddBlog = () => {
   const axiosPublic = useAxiosPublic();
   const [loading, setLoading] = useState(false);
   const [tags, setTags] = useState([])
   const { user } = useAuth();

   const handleStoreTags = e => {
      const tag = e.target.value.split(",")
      setTags(tag)
   }

   const handleAddBlog = async e => {
      e.preventDefault();
      const form = e.target;
      const title = form.title.value;
      const description = form.description.value;
      const currentThumbnail = form.thumbnail.files[0]
      const timestamp = new Date().toLocaleString();
      const category = form.category.value;
      const comments = []

      if (!currentThumbnail) {
         return toast.error('Please upload a photo.')
      }

      const formData = new FormData();
      formData.append("image", currentThumbnail);

      const res = await axios.post(imageUpload, formData, {
         headers: {
            "Content-Type": "multipart/form-data",
         }
      })
      const author = {
         name : user?.displayName,
         img : user?.photoURL,
         role : "instructor",
         email : user?.email
      }

      const thumbnail = res.data.data.display_url;

      const blog = {
         title,
         description,
         thumbnail,
         timestamp,
         tags,
         category,
         comments,
         author
      }

      if (res.data.data.display_url) {
         const res = await axiosPublic.post('/blog', blog)
         if (res.data.insertedId) {
            toast.success('Blog has been posted successfully!')
            form.reset();
         }
      }





   }
   return (
      <div>
         <DashboardTitle title="Add A Blog" />

         <form onSubmit={handleAddBlog} className="  border p-10 bg-slate-50 space-y-6 max-w-3xl mx-auto">

            <div className="*:w-full space-y-1">
               <label>Title :</label>
               <input type="text" name="title" placeholder="Write the title" className="border p-2.5 outline-green-500" required />
            </div>

            <div className="*:w-full space-y-1">
               <label>Thumbnail :</label>
               <input type="file" name="thumbnail" className="border outline-green-500 file:p-2.5 file:border-none cursor-pointer file:cursor-pointer" required />
            </div>

            <div className={`flex flex-wrap gap-2 ${tags[0] === "" || tags[0] === " " ? "mb-0" : "mb-4"} ${tags.length === 0 ? "hidden" : ""}`}>
               {tags.map((tag, index) => (
                  <span key={index} className={`text-primary-700 bg-gray-200 p-1 rounded ${tag === "" || tag === " " ? "hidden" : ""}`}>
                     {tag}
                  </span>
               ))}
            </div>

            <div className="*:w-full space-y-1">
               <label>Tags :</label>
               <input value={tags} id="tags" type="text" name="tags" placeholder="write tags and separate by comma" className="border p-2.5 outline-green-500" onChange={(e) => handleStoreTags(e)} required />
            </div>

            <div className="*:w-full space-y-1">
               <label>Category :</label>
               <select name="category" className="border p-2.5 outline-green-500" required>
                  <option value="Science">Science</option>
                  <option value="Technology">Technology</option>
                  <option value="Development">Development</option>
                  <option value="Mobile Development">Mobile Development</option>
                  <option value="Gaming">Gaming</option>
               </select>
            </div>

            <div className="*:w-full space-y-1">
               <label>Author Information:</label>
               <div className="flex items-center *:flex-grow gap-5">
                  <input type="text" name="name" defaultValue={user?.displayName} className="border p-2.5 outline-green-500" required />
                  <input type="email" name="email" defaultValue={user?.email} className="border p-2.5 outline-green-500" required />
               </div>

            </div>

            <div className=" space-y-1">
               <textarea name="description" className="w-full border outline-green-500 p-2.5" rows={5} required></textarea>
            </div>

            <button className="bg-primary-700 text-white p-2.5 px-8 hover:bg-primary-800 w-48">
               {
                  loading ? <TbFidgetSpinner className="text-2xl animate-spin mx-auto " /> : <span className="">Post Blog</span>
               }
            </button>

         </form>

      </div>
   );
};

export default AddBlog;