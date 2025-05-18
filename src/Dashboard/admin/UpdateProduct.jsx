import { TbFidgetSpinner } from "react-icons/tb";
import DashboardTitle from "../DashboardTitle";
import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const imageUpload = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_ImgBB_api_key}`;
const UpdateProduct = () => {
    const product = useLoaderData();
   const axiosPublic = useAxiosPublic();
   const [loading, setLoading] = useState(false);


   const handleUpdateProduct = async(e) =>{
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

      const updateProduct = {
         category,
         name,
         pic,
         price,
         discount,
         desc,
         summary,
         timestamp
      }

      if (res.data.data.display_url) {
         const res = await axiosPublic.patch(`/updateProduct/${product._id}`, updateProduct)
         if (res.data.modifiedCount > 0) {
            toast.success('Product updated successfully!')   
            setLoading(false)
            form.reset();
         }
      }

   }
    return (
        <div>
         <DashboardTitle title="Update A Product" />

         <form onSubmit={handleUpdateProduct} className="  border p-10 bg-slate-50 space-y-6 max-w-3xl mx-auto">

            <div className="*:w-full space-y-1">
               <label>Name :</label>
               <input type="text" name="name" defaultValue={product.name}  className="border p-2.5 outline-green-500" required />
            </div>

            <div className="*:w-full space-y-1  ">
                <label>Image :</label>
               <div className="flex justify-between space-x-2 items-center">              
                  <input type="file" name="pic"  className="border flex-1 outline-green-500 file:p-2.5 file:border-none cursor-pointer file:cursor-pointer" required />
                 <div className="rounded-sm bg-gray-200 ">
                   <img className="w-12 rounded-sm  p-1" src={product.pic} alt="Preview" />
                 </div>
               </div>
            </div>

            <div className="*:w-full space-y-1">
               <label>Category :</label>
               <select name="category" defaultValue={product.category} className="border p-2.5 outline-green-500" required>
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
                     <input type="number" name="price" defaultValue={product.price} className="border p-2.5 outline-green-500" required />
                  </div>
                  <div className="*:w-full space-y-1">
                     <label>Discount :</label>
                     <input type="number" name="discount" defaultValue={product.discount} className="border p-2.5 outline-green-500" required />
                  </div>
               </div>

            </div>

            <div className=" space-y-1">
            <label>Description :</label>
               <textarea name="desc" defaultValue={product.desc} className="w-full border outline-green-500 p-2.5" rows={5} required></textarea>
            </div>
            <div className="*:w-full space-y-1">
               <label>Summary :</label>
               <input type="text" name="summary" defaultValue={product.summary} className="border p-2.5 outline-green-500" required />
            </div>

            <button className="bg-primary-700 text-white p-2.5 px-8 hover:bg-primary-800 w-48">
               {
                  loading ? <TbFidgetSpinner className="text-2xl animate-spin mx-auto " /> : <span className="">Update Product</span>
               }
            </button>

         </form>

      </div>
    );
};

export default UpdateProduct;