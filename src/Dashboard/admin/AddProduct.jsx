import { TbFidgetSpinner } from "react-icons/tb";
import DashboardTitle from "../DashboardTitle";
import toast from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useState } from "react";
import axios from "axios";
const imageUpload = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_ImgBB_api_key}`

const AddProduct = () => {
   const axiosPublic = useAxiosPublic();
   const [loading, setLoading] = useState(false);

   const handleAddProduct = async e => {
      e.preventDefault();
      setLoading(true)
      const form = e.target;
      const name = form.name.value;
      const discount = form.discount.value;
      const price = form.price.value;
      const desc = form.desc.value;
      const summary = form.summary.value;
      const currentPic = form.pic.files[0]
      const timestamp = new Date().toLocaleString();
      const category = form.category.value;
      const review = []

      if (!currentPic || !currentPic.type.startsWith("image/")) {
         setLoading(false)
         return toast.error('Please upload a photo.')
      }

      const formData = new FormData();
      formData.append("image", currentPic);

      const res = await axios.post(imageUpload, formData, {
         headers: {
            "Content-Type": "multipart/form-data",
         }
      })

      const pic = res.data.data.display_url;

      const product = {
         category,
         name,
         pic,
         price,
         discount,
         desc,
         summary,
         timestamp,
         review
      }

      if (res.data.data.display_url) {
         const res = await axiosPublic.post('/product', product)
         if (res.data.insertedId) {
            toast.success('Product has been posted successfully!')
            form.reset();
            setLoading(false)
         }
      }
   }
   return (
      <div>
         <DashboardTitle title="Add A Product" />

         <form onSubmit={handleAddProduct} className="  border p-10 bg-slate-50 space-y-6 max-w-3xl mx-auto">

            <div className="*:w-full space-y-1">
               <label>Name :</label>
               <input type="text" name="name" placeholder="Write the Name" className="border p-2.5 outline-green-500" required />
            </div>

            <div className="*:w-full space-y-1">
               <label>Image :</label>
               <input type="file" name="pic" className="border outline-green-500 file:p-2.5 file:border-none cursor-pointer file:cursor-pointer" required />
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
               <div className="flex items-center *:flex-grow gap-5">
                  <div className="*:w-full space-y-1">
                     <label>Price :</label>
                     <input type="number" name="price" placeholder="Write the Name" className="border p-2.5 outline-green-500" required />
                  </div>
                  <div className="*:w-full space-y-1">
                     <label>Discount :</label>
                     <input type="number" name="discount" placeholder="Write the Name" className="border p-2.5 outline-green-500" required />
                  </div>
               </div>

            </div>

            <div className=" space-y-1">
            <label>Description :</label>
               <textarea name="desc" className="w-full border outline-green-500 p-2.5" rows={5} required></textarea>
            </div>
            <div className="*:w-full space-y-1">
               <label>Summary :</label>
               <input type="text" name="summary" placeholder="Summary" className="border p-2.5 outline-green-500" required />
            </div>

            <button className="bg-primary-700 text-white p-2.5 px-8 hover:bg-primary-800 w-48">
               {
                  loading ? <TbFidgetSpinner className="text-2xl animate-spin mx-auto " /> : <span className="">Post Product</span>
               }
            </button>

         </form>

      </div>
   );
};

export default AddProduct;