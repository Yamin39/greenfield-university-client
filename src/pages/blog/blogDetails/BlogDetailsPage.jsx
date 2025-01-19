import { FaFacebookF, FaLinkedinIn, FaRegCalendarCheck } from "react-icons/fa6";
import student4 from "../../../assets/images/gu55.jpg";
import { Link } from "react-router-dom";
import { IoChatbubblesOutline, IoLogoTwitter } from "react-icons/io5";

const BlogDetailsPage = () => {
  const blogData = {
    tile: "ScienceCrafting Effective Learning Guide Line",
    category: "Science",
    pic: student4,
    date: "15 Nov, 2023",
    chat: "Com 0",
    desc: "Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.",
  };

  return (
    <div className="bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto pb-12 px-3 mt-24">
        <div className=" ">
          <Link to={"#"}>
            <p className="text-lg text-[#656561] hover:text-primary-700 transition duration-300">
              {blogData.category}
            </p>
          </Link>
          <h2 className="text-3xl md:text-5xl my-2 ">
            {blogData.tile}
          </h2>
          <div className="flex items-center gap-x-5  mb-12 md:mb-20">
            <p className="flex items-center gap-x-2 text-[#656561]">
              <FaRegCalendarCheck
                size={20}
                className="text-primary-700"
              ></FaRegCalendarCheck>
              <span>{blogData.date}</span>
            </p>
            <span className="w-[2px] h-4 bg-gray-200"></span>
            <p className="flex items-center gap-x-2 text-[#656561]">
              <IoChatbubblesOutline
                size={20}
                className="text-primary-700"
              ></IoChatbubblesOutline>
              <span>{blogData.chat}</span>
            </p>
          </div>
        </div>
        <div className="  ">
          <img className="w-full rounded-xl" src={blogData.pic} alt="pic" />
        </div>
        <div className=" md:py-12 bg-[#FFFFFF] border-t-slate-200">
          <p className="text-[#656561] text-sm md:text-lg text-justify pt-4">{blogData.desc}</p>
        </div>
        <div>
          {/*Tags*/}
          <div className="mt-12 md:mt-16 mb-8 ">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8">
              <div className=" flex sm:items-center gap-x-5">
                <h2 className="text-xl text-[#888888] font-semibold">
                  Tags:
                </h2>
                <div className="flex flex-wrap items-center gap-3 ">
                  <button className="rounded-md py-2 px-3  font-semibold hover:bg-primary-800 flex justify-center items-center  text-[#888888] border hover:border-primary-800 border-[#888888] transition duration-500 hover:text-white">
                    <span>Child Education</span>
                  </button>
                  <button className="rounded-md py-2 px-3  font-semibold hover:bg-primary-800 flex justify-center items-center  text-[#888888] border hover:border-primary-800 border-[#888888] transition duration-500 hover:text-white">
                    <span>Classroom</span>
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-x-5">
                <h2 className="text-2xl text-[#888888]">Share on : </h2>
                <div className="flex flex-row items-center gap-5">
                  <span className=" text-[#888888]  hover:text-primary-800  transition duration-300">
                    <FaFacebookF size={20} />
                  </span>
                  <span className="text-[#888888]  hover:text-primary-800  transition duration-300">
                    <IoLogoTwitter size={20} />
                  </span>
                  <span className="text-[#888888]  hover:text-primary-800  transition duration-300">
                    <FaLinkedinIn size={20} />
                  </span>
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
