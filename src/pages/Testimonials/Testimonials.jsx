import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SharedBanner from "../../shared/SharedBanner";
import useAuth from "../../hooks/useAuth";
import {  useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import TestimonialModal from "./TestimonialModal";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useTestimonials } from "../../hooks/useTestimonials";

const Testimonials = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
const { testimonials, refetch } = useTestimonials();


  // //get all
  //  const { data: testimonials = [] } = useQuery({
  //   queryKey: ["testimonials"],
  //   queryFn: async () => {
  //     const { data } = await axiosPublic.get("/testimonials");
  //     return data; 
  //   },
  // });

    // Use the custom hook to fetch testimonials

  const isUser = () => {
    if (user) {
      setIsModalOpen(true);
      
    } else {
      toast.error("Please login to submit a testimonial");
      navigate("/login");
    }
  };

  const { data: mytestimonial = [] } = useQuery({
    queryKey: ["mytestimonial", user?.email],
    queryFn: async () => {
      const { data } = await axiosPublic.get(
        `/mytestimonial?email=${user?.email}`,
        {
          data: {
            email: user?.email,
          },
        }
      );
      return data;
    },
  });

  const handleSubmitTestimonial = async (formData) => {
    if (!user) {
      throw new Error("Please login to submit a testimonial");
    }

    try {
      if (!mytestimonial) {
        // If testimonial exists, send PUT request to update
        await axiosPublic.post("/testimonial", formData);
        toast.success("Testimonial Posted , Thank you");
      } else {
        // If no testimonial exists, send POST request to add new

        await axiosPublic.put("/mytestimonial", {
          email: user.email,
          updatedTestimonial: formData,
        });
        toast.success("Testimonial Update , Thank you");
      }

      // Refetch testimonials after submission
      queryClient.invalidateQueries("testimonials");
    } catch (error) {
      console.error("Failed to submit testimonial", error);
    }
  };

  return (
    <div>
      <SharedBanner title="Testimonials" />
      <div className="max-w-7xl mx-auto px-5 text-center">
        <div className="md:min-w-[50%] flex flex-col items-center justify-center py-10 sm:py-20">
          <p className="text-lg md:text-xl uppercase text-[#808080] font-semibold">
            TESTIMONIALS
          </p>
          <h1 className="text-3xl md:text-[42px] text-[#181818] font-bold mt-6 leading-tight">
            What <span className="text-[#1AB69D]">Our Students</span> <br />{" "}
            Have To Say
          </h1>
          <img
            className="w-28 mt-2 mb-7"
            src="https://i.ibb.co/hH8Jpm2/about-Style.png"
            alt="style"
          />
          <button
            className="p-2 bg-primary-700 text-white rounded-md hover:bg-primary-800"
            onClick={isUser}
          >
            {mytestimonial?.length === 0
              ? "Add Testimonial"
              : "Manage Testimonial"}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="px-8 py-10 h-fit sm:max-w-96 bg-white rounded-xl flex flex-col items-center border-2"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-full mb-6 border-4 border-gray-200 shadow-sm"
              />
              <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                {item.content}
              </p>
              <div className="mt-4">
                <p className="text-yellow-500 text-lg font-semibold mb-1">
                  {"⭐".repeat(Math.round(item.rating))}
                </p>
                <p className="text-gray-800 text-base font-bold mt-2">
                  {item.name}
                </p>
                <p className="text-gray-500 text-sm mt-1">{item.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <TestimonialModal
        mytestimonial={mytestimonial}
        user={user}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmitTestimonial}
      />
    </div>
  );
};

export default Testimonials;
