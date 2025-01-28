/* eslint-disable react/prop-types */
import { FaFacebookF, FaLinkedinIn, FaRegCalendarCheck } from "react-icons/fa6";
import { IoChatbubblesOutline, IoLogoTwitter } from "react-icons/io5";
import { Link } from "react-router-dom";
import useFormatTimestamp from "../../../hooks/useFormatTimestamp";

const BlogDetailsPage = ({ data }) => {
  return (
    <div className="bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto pb-12 px-3 mt-24">
        <div>
          <Link to={"#"}>
            <p className="text-lg text-[#656561] hover:text-primary-700 transition duration-300">{data?.category}</p>
          </Link>
          <h2 className="text-3xl md:text-5xl my-2 ">{data?.title}</h2>
          <div className="flex items-center gap-x-5 mb-12 md:mb-20">
            <p className="flex items-center gap-x-2 text-[#656561]">
              <FaRegCalendarCheck size={20} className="text-primary-700"></FaRegCalendarCheck>
              <span>{useFormatTimestamp(data?.timestamp)}</span>
            </p>
            <span className="w-[2px] h-4 bg-gray-200"></span>
            <p className="flex items-center gap-x-2 text-[#656561]">
              <IoChatbubblesOutline size={20} className="text-primary-700"></IoChatbubblesOutline>
              <span>Com {data?.comments?.length}</span>
            </p>
          </div>
        </div>
        <div>
          <img className="w-full rounded-xl" src={data?.thumbnail} alt="thumbnail" />
        </div>
        <div className=" md:py-12 bg-[#FFFFFF] border-t-slate-200">
          <p className="text-[#656561] text-sm md:text-lg text-justify pt-4">{data?.description}</p>
        </div>
        <div>
          {/*Tags*/}
          <div className="mt-12 md:mt-16 mb-8 ">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8">
              <div className=" flex sm:items-center gap-x-5">
                <h2 className="text-xl text-[#888888] font-semibold">Tags:</h2>
                <div className="flex flex-wrap items-center gap-3 ">
                  {data?.tags?.map((tag, index) => (
                    <button
                      key={index}
                      className="rounded-md py-2 px-3 font-semibold hover:bg-primary-800 flex justify-center items-center text-[#888888] border hover:border-primary-800 border-[#888888] transition duration-500 hover:text-white"
                    >
                      <span>{tag}</span>
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-x-5">
                <h2 className="text-2xl text-[#888888]">Share on : </h2>
                <div className="flex flex-row items-center gap-5">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${location}`}
                    target="_blank"
                    className=" text-[#888888] hover:text-primary-800 transition duration-300"
                  >
                    <FaFacebookF size={20} />
                  </a>
                  <a
                    href={`https://twitter.com/share?url=${location}`}
                    target="_blank"
                    className="text-[#888888] hover:text-primary-800 transition duration-300"
                  >
                    <IoLogoTwitter size={20} />
                  </a>
                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${location}`}
                    target="_blank"
                    className="text-[#888888] hover:text-primary-800 transition duration-300"
                  >
                    <FaLinkedinIn size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPage;
