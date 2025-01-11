import { useEffect, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const RecentBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="max-w-7xl  mx-auto bg-[#FFFFFF] p-4 text-center">
      {/* Heading Section */}
      <div>
        <p className="text-lg md:text-xl uppercase text-[#808080] font-semibold">
          ARTICLES
        </p>
        <h1 className="text-3xl md:text-[42px] text-[#181818] font-bold mt-6 leading-tight">
          Get News with <span className="text-[#1AB69D]">Greenfield</span>
        </h1>
        <img
          className="w-28 mt-2 mb-7 mx-auto"
          src="https://i.ibb.co/hH8Jpm2/aboutStyle.png"
          alt="style"
        />
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 md:gap-8 mt-10 mx-auto">
        {blogs?.map((blog, idx) => (
          <div className="relative border mx-auto group" key={idx}>
            <img
              className="w-72 transition-transform duration-300 group-hover:scale-105 h-64 object-cover rounded"
              src={blog.image}
              alt={blog.title}
            />

            {/* Button with Animation */}
            <button
              className="z-[99999999] opacity-0 translate-y-[20px] absolute top-20 right-16 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-[-4px] bg-[#1AB69D] text-white w-14 h-14 rounded-full flex items-center justify-center mx-auto"
            >
              <FaLongArrowAltRight className="text-xl" />
            </button>

            <div className="bg-white shadow-lg rounded-md absolute -bottom-12 z-10 w-64 left-36 transform -translate-x-1/2 p-4">
              <p className="text-sm text-[#808080]">{blog.category}</p>
              <h2 className="text-lg font-bold mt-2">{blog.title}</h2>
              <p className="text-sm text-[#808080] mt-2">{blog.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentBlogs;