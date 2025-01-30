import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const RecentBlogs = () => {
  const axiosPublic = useAxiosPublic();

  const { data: newses = [] } = useQuery({
    queryKey: ["newses"],
    queryFn: async () => {
      const res = await axiosPublic.get("/newses");
      return res.data;
    },
  });

  return (
    <div className="max-w-7xl  mx-auto bg-[#FFFFFF] p-4 text-center">
      {/* Heading Section */}
      <div>
        <p className="text-lg md:text-xl uppercase text-[#808080] font-semibold">ARTICLES</p>
        <h1 className="text-3xl md:text-[42px] text-[#181818] font-bold mt-6 leading-tight">
          Get News with <span className="text-[#1AB69D]">Greenfield</span>
        </h1>
        <img className="w-28 mt-2 mb-7 mx-auto" src="https://i.ibb.co/hH8Jpm2/aboutStyle.png" alt="style" />
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 md:gap-8 mt-10 mx-auto">
        {newses?.map((news, idx) => (
          <div className="relative md:mb-12 mx-auto group" key={idx}>
            <img className="w-72 transition-transform duration-300 group-hover:scale-105 h-64 object-cover rounded" src={news.image} alt={news.title} />

            <div className="bg-white shadow-lg rounded-md absolute -bottom-12 z-10 w-64 left-36 transform -translate-x-1/2 p-4">
              <p className="text-sm text-[#808080]">{news.category}</p>
              <h2 className="text-lg font-bold mt-2">{news.title}</h2>
              <p className="text-sm text-[#808080] mt-2">{news.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentBlogs;
