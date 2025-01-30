import { TbFidgetSpinner } from "react-icons/tb";
import DashboardTitle from "../DashboardTitle";
import { useLoaderData} from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useState } from "react";
import toast from "react-hot-toast";


const UpdateFaq = () => {
    const faq = useLoaderData();
   const axiosPublic = useAxiosPublic();
   const [loading, setLoading] = useState(false);

   const handleUpdateFaq = async(e) =>{
    e.preventDefault();
    const form = e.target;
    const title = form.title.value
    const description = form.description.value;
    const updateFaq = {
        title, description
    }
    const {data} = await axiosPublic.patch(`updateFaq/${faq._id}`, updateFaq)
    if(data.modifiedCount >0){
        toast.success("Blog updated successfully!");
        setLoading(false)
    }

   }

    return (
        <div>
            <DashboardTitle title="Update FAQ" />
      <form
        onSubmit={handleUpdateFaq}
        className="  border p-10 bg-slate-50 space-y-6 max-w-3xl mx-auto"
      >
        <div className="*:w-full space-y-1">
          <label>Title :</label>
          <input
            type="text"
            name="title"
            defaultValue={faq?.title}
            placeholder="Write the title"
            className="border p-2.5 outline-green-500"
            required
          />
        </div>

        <div className=" space-y-1">
          <textarea
            name="description"
            defaultValue={faq?.description}
            className="w-full border outline-green-500 p-2.5"
            rows={5}
            required
          ></textarea>
        </div>

        <button className="bg-primary-700 text-white p-2.5 px-8 hover:bg-primary-800 w-48">
          {loading ? (
            <TbFidgetSpinner className="text-2xl animate-spin mx-auto " />
          ) : (
            <span className="">Update Faq</span>
          )}
        </button>
      </form>
        </div>
    );
};

export default UpdateFaq;