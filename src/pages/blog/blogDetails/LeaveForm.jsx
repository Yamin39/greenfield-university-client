/* eslint-disable react/prop-types */
import { useState } from "react";
import toast from "react-hot-toast";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const LeaveForm = ({ blogId, refetch }) => {
  const axiosPublic = useAxiosPublic();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const desc = form.desc.value;
    const timestamp = new Date().getTime();
    const newComment = { name, email, desc, timestamp };

    console.log(newComment);

    axiosPublic
      .patch(`/blogs/${blogId}/comment`, newComment)
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          toast.success("Comment added successfully!");
          form.reset();
        } else {
          toast.error("Failed to add the comment. Please try again.");
        }
        refetch();
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Something went wrong! Please try again.");
        setIsLoading(false);
      });
  };
  return (
    <div className="bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto pb-12 px-3 mt-24">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold">Leave a Reply</h2>
          <p className="text-[16px] text-[#888888]">Your email address will not be published. Required fields are marked *</p>
          <div className="w-full sm:w-11/12 md:w-3/5 mt-6 md:mt-10">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8">
                <input
                  className="w-full shadow-box py-3 outline-[.5px] outline-primary-800/80 px-3 rounded-[3px]"
                  type="text"
                  name="name"
                  placeholder="Name*"
                  required
                />
                <input className="w-full shadow-box py-3 px-3 rounded-[3px] outline-primary-800/80" type="email" name="email" placeholder="Email*" required />
              </div>
              <textarea
                name="desc"
                className="w-full shadow-box py-2 px-3 rounded-[3px] outline-primary-800/80"
                placeholder="Comment*"
                cols={50}
                rows={6}
                required
              ></textarea>
              <input
                className="rounded-md py-3 px-6 font-semibold hover:bg-primary-800 flex justify-center items-center text-primary-800 text-lg border hover:border-primary-800 border-primary-800/50 bg-primary-800/5 transition duration-500 hover:text-white cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                type="submit"
                value={isLoading ? "Loading..." : "Post Comment"}
                disabled={isLoading}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaveForm;
