import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SharedBanner from "../../shared/SharedBanner";

const Testimonials = () => {
  const axiosPublic = useAxiosPublic();

  const { data: testimonials = [] } = useQuery({
    queryKey: ["testimonials"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/testimonials");
      return data;
    },
  });
  return (
    <div>
      <SharedBanner title="Testimonials" />

      <div className="max-w-7xl mx-auto px-5 text-center">
        <div className="md:min-w-[50%] flex flex-col items-center justify-center py-10 sm:py-20">
          <p className="text-lg md:text-xl uppercase text-[#808080] font-semibold">TESTIMONIALS</p>

          <h1 className="text-3xl md:text-[42px] text-[#181818] font-bold mt-6 leading-tight">
            What <span className="text-[#1AB69D]">Our Students</span> <br /> Have To Say
          </h1>

          <img className="w-28 mt-2 mb-7" src="https://i.ibb.co/hH8Jpm2/about-Style.png" alt="style" />
        </div>

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {testimonials.map((item, idx) => (
              <div key={idx} className="px-8 py-10 h-fit sm:max-w-96 bg-white rounded-xl flex flex-col items-center border-2">
                <img src={item.img} alt={item.name} className="w-20 h-20 object-cover rounded-full mb-6 border-4 border-gray-200 shadow-sm" />

                <p className="text-gray-700 text-sm mb-6 leading-relaxed">{item.content}</p>

                <div className="mt-4">
                  <p className="text-yellow-500 text-lg font-semibold mb-1">{"⭐".repeat(Math.round(item.rating))}</p>
                  <p className="text-gray-800 text-base font-bold mt-2">{item.name}</p>
                  <p className="text-gray-500 text-sm mt-1">{item.designation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
