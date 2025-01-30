import { useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import DashboardTitle from "../DashboardTitle";
import toast from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import { useLoaderData, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const UpdateAnnouncement = () => {
  const [loading, setLoading] = useState(false);
  const announcement = useLoaderData();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  console.log(announcement);

  const handleUpdateAnnouncement = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const form = e.target;
      const title = form.title.value;
      const timestamp = new Date().getTime();
      const description = form.description.value;

      const updateAnnouncement = { title, timestamp, description };

      const res = await axiosPublic.patch(
        `/announcement/${announcement._id}`,
        updateAnnouncement
      );

      if (res.data.modifiedCount > 0) {
        toast.success("Announcement has been posted successfully!");
        setLoading(false);
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message || "Something went wrong.");
      setLoading(false)
    }
  };
  return (
    <div>
      <DashboardTitle title="Update Announcement" />
      <form
        onSubmit={handleUpdateAnnouncement}
        className="  border p-10 bg-slate-50 space-y-6 max-w-3xl mx-auto"
      >
        <div className="*:w-full space-y-1">
          <label>Title :</label>
          <input
            defaultValue={announcement.title}
            type="text"
            name="title"
            placeholder="Write the title"
            className="border p-2.5 outline-green-500"
          />
        </div>

        <div className=" space-y-1">
          <textarea
            name="description"
            defaultValue={announcement.description}
            className="w-full border outline-green-500 p-2.5"
            rows={5}
          ></textarea>
        </div>

        <button className="bg-primary-700 text-white p-2.5 px-8 hover:bg-primary-800 w-60">
          {loading ? (
            <TbFidgetSpinner className="text-2xl animate-spin mx-auto " />
          ) : (
            <span className="">Update Announcements</span>
          )}
        </button>
      </form>

      <div
        onClick={() => navigate(-1)}
        className="flex items-center space-x-2 bg-red-600 text-white p-1.5 px-4 absolute top-4 right-3 cursor-pointer rounded-lg"
      >
        <FaArrowLeft className="mt-1" />
        <span>Go Back</span>
      </div>
    </div>
  );
};

export default UpdateAnnouncement;
