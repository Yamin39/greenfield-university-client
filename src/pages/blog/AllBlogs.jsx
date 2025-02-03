import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { FaArrowRightLong, FaRegCalendarCheck } from "react-icons/fa6";
import { IoChatbubblesOutline, IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import sidebar from "../../assets/images/sidebar-ads.png";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useFormatTimestamp from "../../hooks/useFormatTimestamp";

const AllBlogs = () => {
  const axiosPublic = useAxiosPublic();
  const [tags, setTags] = useState([]);

  const { data: blogs = [], isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await axiosPublic.get("/blogs");
      setTags([...new Set(res.data.map((blog) => blog.category))]);
      return res.data;
    },
  });

  const formatTimestamp = useFormatTimestamp;

  if (isLoading) return <div>Loading...</div>;

  console.log(blogs);
  return (
    <div className="bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto pb-12 px-3 mt-24">
        <div className=" grid grid-cols-1 lg:grid-cols-3 items-start gap-10">
          <div className="h-fit lg:col-span-2">
            <div className="space-y-10">
              {blogs.map((blog, index) => (
                <div key={index} className="bg-[#F7F5F2] rounded-xl shadow-box ">
                  <div className="overflow-hidden group rounded-t-xl">
                    <Link to={`/blog-details/${blog._id}`} className="relative block transition-transform duration-500 ">
                      <div className="overflow-hidden">
                        <img className="w-full object-cover transition-transform duration-500 group-hover:scale-110" src={blog.thumbnail} alt="thumbnail" />
                      </div>
                      <span className="group-hover:bg-black/30 transition-opacity duration-500 absolute w-full h-full top-0 left-0"></span>
                    </Link>

                    <div className="p-8 md:p-12 bg-[#FFFFFF] border-t-slate-200">
                      <Link to={"#"}>
                        <p className="text-lg text-[#656561] hover:text-primary-700 transition duration-300">{blog.category}</p>
                      </Link>
                      <Link to={`/blog-details/${blog._id}`}>
                        <h2 className="text-2xl md:text-3xl my-2 hover:text-primary-700 transition duration-300">{blog.title}</h2>
                      </Link>
                      <div className="flex items-center gap-x-5 pt-2">
                        <p className="flex items-center gap-x-2 text-[#656561]">
                          <FaRegCalendarCheck size={20} className="text-primary-700"></FaRegCalendarCheck>
                          <span>{formatTimestamp(blog.timestamp)}</span>
                        </p>
                        <span className="w-[2px] h-4 bg-gray-200"></span>
                        <p className="flex items-center gap-x-2 text-[#656561]">
                          <IoChatbubblesOutline size={20} className="text-primary-700"></IoChatbubblesOutline>
                          <span>Com {blog.comments.length}</span>
                        </p>
                      </div>
                      <p className="text-[#656561] pt-4">{blog.description.slice(0, 200)}...</p>
                      <Link
                        to={`/blog-details/${blog._id}`}
                        className="hover:bg-primary-800 rounded-md py-2 px-5 mt-8 font-semibold hover:bg-primary-800/50 flex justify-center items-center gap-x-2 text-primary-800 border border-primary-800 transition duration-500 hover:text-white"
                      >
                        <span>Learn More</span>
                        <FaArrowRightLong size={20}></FaArrowRightLong>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side */}
          <div className="lg:col-span-1 h-auto w-full lg:max-w-[22rem] xl:max-w-sm bg-white p-5 md:p-8 shadow-box rounded-xl">
            <div>
              <div>
                <p className="text-xl md:text-2xl pb-5 pt-10 text-[#353533] font-semibold">Search</p>
                <div className="flex items-center gap-x-4 border border-primary-800 rounded-lg py-2 md:py-4 px-3 md:px-6">
                  <IoSearch className="text-[#797975] " size={25}></IoSearch>
                  <input className="w-full outline-none bg-transparent text-lg " type="text" placeholder="Search" />
                </div>
              </div>
              {/* Latest Post */}
              <div className="mt-12 md:mt-16">
                <h2 className="text-xl md:text-2xl font-semibold">Latest Post</h2>
                <div className="grid grid-cols-1 gap-5 mt-5 md:mt-8">
                  {blogs.slice(0, 2).map((blog, index) => (
                    <div key={index} className="border-b border-gray-200 last:border-b-0 space-y-5 pb-5">
                      <div className="flex gap-x-6 ">
                        <Link to={`/blog-details/${blog._id}`} className=" ">
                          <img className="w-[100px] h-[80px] rounded-md" src={blog.thumbnail} alt="thumbnail" />
                        </Link>
                        <div>
                          <Link to={`/blog-details/${blog._id}`}>
                            <h2 className="text-[16px] md:text-[18px] hover:text-primary-700 transition duration-300 pb-2">{blog.title.slice(0, 60)}...</h2>
                          </Link>
                          <p className="flex items-center gap-x-2 text-[#656561]">
                            <FaRegCalendarCheck size={20} className="text-primary-700"></FaRegCalendarCheck>
                            <span>{formatTimestamp(blog.timestamp)}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Categories */}
                <div className="mt-12 md:mt-16">
                  <h2 className="text-xl md:text-2xl font-semibold">Categories</h2>
                  <div className="grid grid-cols-1 gap-3 mt-3 md:mt-5">
                    {blogs.map((item, index) => (
                      <div key={index} className=" ">
                        <div className="flex justify-between items-center">
                          <Link to={"#"}>
                            <h2 className="text-[16px] md:text-[18px] hover:text-primary-700 transition duration-300 ">{item.category}</h2>
                          </Link>
                          <p className="flex items-center gap-x-2 text-[#656561]">
                            <span>(1)</span>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/*Sidebar Add*/}
                <div className="mt-12 md:mt-16">
                  <img className="w-fit" src={sidebar} alt="pic" />
                </div>
                {/*Tags*/}
                <div className="mt-12 md:mt-16 mb-8">
                  <h2 className="text-xl md:text-2xl font-semibold">Tags</h2>
                  <div className="flex flex-wrap items-center gap-3 mt-3 md:mt-5">
                    {tags.slice(0, 7).map((tag, index) => (
                      <button
                        key={index}
                        className="hover:bg-primary-800 rounded-md py-2 px-3 font-semibold hover:bg-primary-800/50 flex justify-center items-center text-primary-800 border border-primary-800 transition duration-500 hover:text-white"
                      >
                        <span>{tag}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
