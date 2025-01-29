import { useState, useEffect } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import DashboardTitle from "../DashboardTitle";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa6";
import { TbFidgetSpinner } from "react-icons/tb";
import { useLoaderData, useNavigate } from "react-router-dom";

const imageUpload = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_ImgBB_api_key}`;

const UpdateBlog = () => {
   const blog = useLoaderData();
   const axiosPublic = useAxiosPublic();
   const [loading, setLoading] = useState(false);
   const [tags, setTags] = useState([]); // Tags state
   const { user } = useAuth();
   const navigate = useNavigate();

   // Initialize tags when the component mounts
   useEffect(() => {
      if (blog.tags) {
         setTags(blog.tags); // Set initial tags from the blog data
      }
   }, [blog.tags]);

   const handleStoreTags = (e) => {
      const tag = e.target.value.split(",").map((item) => item.trim()); // Split and trim input
      setTags(tag); // Update the tags state
   };

   const handleAddBlog = async (e) => {
      e.preventDefault();
      setLoading(true);
      const form = e.target;
      const title = form.title.value;
      const description = form.description.value;
      const currentThumbnail = form.thumbnail.files[0];
      const timestamp = new Date().toLocaleString();
      const category = form.category.value;
      const role = form.role.value;
      const comments = [];

      const formData = new FormData();
      formData.append("image", currentThumbnail);

      const res = await axios.post(imageUpload, formData, {
         headers: {
            "Content-Type": "multipart/form-data",
         },
      });
      const author = {
         name: user?.displayName,
         img: user?.photoURL,
         role,
         email: user?.email,
      };

      const thumbnail = res.data.data.display_url;

      const updatedBlog = {
         title,
         description,
         thumbnail,
         timestamp,
         tags,
         role,
         category,
         comments,
         author,
      };

      const { data } = await axiosPublic.patch(`/blog/${blog._id}`, updatedBlog);
      if (data.insertedId) {
         toast.success("Blog updated successfully!");
         setLoading(false);
      }
   };

   return (
      <div>
         <DashboardTitle title="Update Blog" />

         <form
            onSubmit={handleAddBlog}
            className="border p-10 bg-slate-50 space-y-6 max-w-3xl mx-auto"
         >
            <div className="*:w-full space-y-1">
               <label>Title :</label>
               <input
                  defaultValue={blog.title}
                  type="text"
                  name="title"
                  placeholder="Write the title"
                  className="border p-2.5 outline-green-500"
                  required
               />
            </div>

            <div className="*:w-full space-y-1">
               <label>Thumbnail :</label>
               <input
                  type="file"
                  name="thumbnail"
                  className="border outline-green-500 file:p-2.5 file:border-none cursor-pointer file:cursor-pointer bg-white"

               />
            </div>

            {/* Tags Display */}
            <div
               className={`flex flex-wrap gap-2 ${tags.length === 0 ? "hidden" : "mb-4"
                  }`}
            >
               {tags.map((tag, index) => (
                  <span
                     key={index}
                     className="text-primary-700 bg-gray-200 p-1 rounded"
                  >
                     {tag}
                  </span>
               ))}
            </div>

            {/* Tags Input */}
            <input
               value={tags.join(",")}
               id="tags"
               type="text"
               name="tags"
               placeholder="write tags and separate by comma"
               className="border p-2.5 outline-green-500 w-full"
               onChange={(e) => handleStoreTags(e)}
               required
            />

            <div className="*:w-full space-y-1">
               <label>Category :</label>
               <select
                  name="category"
                  className="border p-2.5 outline-green-500"
                  defaultValue={blog.category}
                  required
               >
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
                  <input
                     type="text"
                     name="name"
                     defaultValue={user?.displayName}
                     className="border p-2.5 outline-green-500"
                     required
                  />
                  <input
                     type="email"
                     name="email"
                     defaultValue={user?.email}
                     className="border p-2.5 outline-green-500"
                     required
                  />
               </div>
            </div>

            <div className="*:w-full space-y-1">
               <label>Role :</label>
               <select
                  name="role"
                  className="border p-2.5 outline-green-500"
                  defaultValue={blog.author.role}
                  required
               >
                  <option value="Admin">Admin</option>
                  <option value="Instructor">Instructor</option>
                  <option value="Student">Student</option>
               </select>
            </div>

            <div className="space-y-1">
               <textarea
                  name="description"
                  defaultValue={blog.description}
                  className="w-full border outline-green-500 p-2.5"
                  rows={5}
                  required
               ></textarea>
            </div>

            <button disabled className="bg-primary-700 text-white p-2.5 px-8 hover:bg-primary-800 w-48">
               {loading ? (
                  <TbFidgetSpinner className="text-2xl animate-spin mx-auto " />
               ) : (
                  <span className="">Update Blog</span>
               )}
            </button>
         </form>

         <div onClick={() => navigate(-1)} className="flex items-center space-x-2 bg-red-600 text-white p-1.5 px-4 absolute top-4 right-3 cursor-pointer rounded-lg">
            <FaArrowLeft  className="mt-1"/>
            <span>Go Back</span>
         </div>
      </div>
   );
};

export default UpdateBlog;
