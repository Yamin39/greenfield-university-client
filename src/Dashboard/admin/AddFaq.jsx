import { TbFidgetSpinner } from "react-icons/tb";
import DashboardTitle from "../DashboardTitle";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useState } from "react";
import toast from "react-hot-toast";
// import useAuth from "../../hooks/useAuth";


const AddFaq = () => {
    const axiosPublic = useAxiosPublic();
   const [loading, setLoading] = useState(false);
//    const { user } = useAuth();

   const handleAddFaq = async e => {
    e.preventDefault();
    setLoading(true)
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const addFaq = {
        title,
        description
     }

     const res = await axiosPublic.post('/addFaq', addFaq)
     if (res.data.insertedId) {
        toast.success('FAQ has been posted successfully!')
        setLoading(false)
        form.reset()
     }
}
    return (
        <div>
            <DashboardTitle title="Add FAQ" />

<form onSubmit={handleAddFaq} className="  border p-10 bg-slate-50 space-y-6 max-w-3xl mx-auto">

   <div className="*:w-full space-y-1">
      <label>Title :</label>
      <input type="text" name="title" placeholder="Write the title" className="border p-2.5 outline-green-500" required />
   </div>

   <div className=" space-y-1">
      <textarea name="description" className="w-full border outline-green-500 p-2.5" rows={5} required></textarea>
   </div>

   <button className="bg-primary-700 text-white p-2.5 px-8 hover:bg-primary-800 w-48">
      {
         loading ? <TbFidgetSpinner className="text-2xl animate-spin mx-auto " /> : <span className="">Post Faq</span>
      }
   </button>

</form>
        </div>
    );
};

export default AddFaq;