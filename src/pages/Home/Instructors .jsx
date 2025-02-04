import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Instructors = () => {
  const axiosPublic = useAxiosPublic();

  const { data: instructors = [] } = useQuery({
    queryKey: ["instructor"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/instructors");
      return data;
    },
  });

  return (
    <div className="max-w-7xl mx-auto bg-[#FFFFFF] p-4 text-center">
      {/* Heading Section */}
      <div>
        <p className="text-lg md:text-xl uppercase text-[#808080] font-semibold">Instructors</p>
        <h1 className="text-3xl md:text-[42px] text-[#181818] font-bold mt-6 leading-tight">
          Course <span className="text-primary-700">Instructors</span>
        </h1>
        <img className="w-28 mt-2 mb-7 mx-auto" src="https://i.ibb.co.com/9kQWLt0S/images-removebg-preview.png" alt="style" />
      </div>

      {/* Instructors Section */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-10">
        {instructors.map((instructor) => (
          <Link
            to={`instructor/${instructor._id}`}
            key={instructor._id}
            className="w-full bg-white rounded-2xl transition-transform transform hover:-translate-y-2   cursor-pointer  "
          >
            {/* Image Section */}
            <div className="relative h-[304px] overflow-hidden rounded-t-lg">
              <img
                src={instructor.img}
                className="size-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
                alt={instructor.name}
              />
              {/* Hover Overlay Section */}
              <div className="absolute  rounded-2xl   inset-0 bg-black bg-opacity-70 text-white flex flex-col items-center justify-center   opacity-0 hover:opacity-100 transition-opacity duration-700">
                <p className="text-sm w-[80%] font-semibold text-start mb-2">{instructor.bio}</p>
                <p className="text-sm ">Rating: {instructor.rating}/5</p>
                <div className=" h-full rounded-2xl  absolute opacity-20 w-full bg-primary-700 "></div>
              </div>
            </div>

            {/* Info Section */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800">{instructor.name}</h3>
              <p className="text-sm text-gray-600">{instructor.role}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
