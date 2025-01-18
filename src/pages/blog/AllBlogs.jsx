import { CiGlobe } from "react-icons/ci";
import { FaMoneyCheckAlt } from "react-icons/fa";
import {
  FaBookOpenReader,
  FaFacebookF,
  FaLinkedinIn,
  FaPlay,
} from "react-icons/fa6";
import { GoClock } from "react-icons/go";
import { ImBooks } from "react-icons/im";
import { IoIosPerson, IoLogoTwitter } from "react-icons/io";
import { LiaCertificateSolid } from "react-icons/lia";
import student4 from "../../assets/images/gu55.jpg";
import student5 from "../../assets/images/student5.png";
import dateCheck from "../../assets/icons/check.png";
import chat from "../../assets/icons/conversation.png";
import rightArrow from "../../assets/icons/right.png";
import { Link } from "react-router-dom";

const AllBlogs = () => {
  const blogData = [
    {
      tile: "ScienceCrafting Effective Learning Guide Line",
      subtitle: "Science",
      pic: student4,
      dateIcon: dateCheck,
      chatIcon: chat,
      arrowIcon: rightArrow,
      desc: "Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat....",
    },
    {
      tile: "ScienceCrafting Effective Learning Guide Line",
      subtitle: "Science",
      pic: student5,
      dateIcon: dateCheck,
      chatIcon: chat,
      arrowIcon: rightArrow,
      desc: "Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat....",
    },
  ];
  return (
    <div className="bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto pb-12 px-3 mt-24">
        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="h-fit lg:col-span-2">
            <div className="space-y-10">
              {blogData.map((item, index) => (
                <div key={index} className="bg-[#F7F5F2]  rounded-xl  shadow-box ">
                  <div className="overflow-hidden  group group  rounded-t-xl">
                    <Link to={"#"} className="relative transition-transform duration-500 ">
                      <img className="w-full  object-cover transition-transform duration-500  group-hover:scale-110" src={item.pic} alt="pic" />
                      <span className="group-hover:bg-black/30 transition-transform duration-500 absolute w-full h-full top-0 left-0 group-hover:scale-110"></span>
                    </Link>
                    
                    <div className="p-8 md:p-12 bg-[#FFFFFF] border-t-slate-200">
                      <Link to={"#"}>
                        <p className="text-lg text-[#656561]">
                          {item.subtitle}
                        </p>
                      </Link>
                      <Link to={"#"} className="">
                        <h2 className="text-2xl md:text-3xl my-2">
                          {item.tile}
                        </h2>
                      </Link>
                      <div className="flex items-center gap-x-5 pt-2">
                        <p className="flex items-center gap-x-2 text-[#656561]">
                          <img
                            className="w-5 h-5"
                            src={item.dateIcon}
                            alt="pic"
                          />
                          <span>15 Nov, 2023</span>
                        </p>
                        <span className="w-[2px] h-4 bg-gray-200"></span>
                        <p className="flex items-center gap-x-2 text-[#656561]">
                          <img
                            className="w-5 h-5"
                            src={item.chatIcon}
                            alt="pic"
                          />
                          <span>Com 0</span>
                        </p>
                      </div>
                      <p className="text-[#656561] pt-4">{item.desc}</p>
                      <button className="bg-primary-800/20 rounded-md py-2 px-5 mt-8 font-semibold hover:bg-primary-800/50 flex justify-center items-center gap-x-2 text-black">
                        <span>Learn More</span>
                        <img className="w-[22px] h-[22px]" src={item.arrowIcon} alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Right side */}
          <div className="lg:col-span-1  w-full lg:max-w-[22rem] xl:max-w-sm bg-white p-5 shadow-box rounded-xl">
            <div className="relative">
              <img className="w-full rounded-xl" src="" alt="" />
              <div className="bg-black/50 flex justify-center items-center absolute top-0 left-0 w-full h-full rounded-xl">
                <div className="relative z-20 group">
                  <span className="bg-white rounded-full w-16 h-16 transition duration-200 group-hover:bg-primary-700 flex justify-center items-center">
                    <FaPlay
                      size={20}
                      className="text-[#EE4A62] transition duration-200 group-hover:text-white"
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className="px-5">
              <h1 className="text-2xl py-6">Course Includes:</h1>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <p className="text-xl flex items-center text-[#323232] gap-x-2">
                    <FaMoneyCheckAlt size={20} />
                    <span>Price</span>
                  </p>
                  <p className="text-xl text-[#EE4A62] font-semibold">Free</p>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <p className="text-[#323232] text-xl flex items-center gap-x-2">
                    <IoIosPerson size={20} />
                    <span>Instructor:</span>
                  </p>
                  <p className="text-[16px]">12</p>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <p className="text-[#323232] text-xl flex items-center gap-x-2">
                    <GoClock size={20} />
                    <span>Duration:</span>
                  </p>
                  <p className="text-[16px]">20 hours</p>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <p className="text-[#323232] text-xl flex items-center gap-x-2">
                    <ImBooks size={20} />
                    <span>Lessons:</span>
                  </p>
                  <p className="text-[16px]">12</p>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <p className="text-[#323232] text-xl flex items-center gap-x-2">
                    <FaBookOpenReader size={20} />
                    <span>Students:</span>
                  </p>
                  <p className="text-[16px]">125</p>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <p className="text-[#323232] text-xl flex items-center gap-x-2">
                    <CiGlobe size={20} />
                    <span>Language:</span>
                  </p>
                  <p className="text-[16px]">English</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-[#323232] text-xl flex items-center gap-x-2">
                    <LiaCertificateSolid size={20} />
                    <span>Certifications:</span>
                  </p>
                  <p className="text-[16px]">Yes</p>
                </div>
                <div className="pt-5 lg:pt-8">
                  <button className="text-xl text-center py-4 transition duration-300 bg-[#1AB69D] text-white w-full rounded-md hover:bg-[#31B978]">
                    Start Now
                  </button>
                  <h2 className="text-2xl mt-6">Share On:</h2>
                  <div className="flex flex-row items-center mt-6 gap-5">
                    <span className="w-10 h-10 text-[#888888] border border-gray-100 hover:bg-[#1AB69D] hover:text-white rounded-full flex justify-center transition duration-300 items-center">
                      <FaFacebookF size={20} />
                    </span>
                    <span className="w-10 h-10 text-[#888888] transition duration-300 border border-gray-100 hover:bg-[#1AB69D] hover:text-white rounded-full flex justify-center items-center">
                      <IoLogoTwitter size={20} />
                    </span>
                    <span className="w-10 h-10 text-[#888888] border border-gray-100 transition duration-300 hover:bg-[#1AB69D] hover:text-white rounded-full flex justify-center items-center">
                      <FaLinkedinIn size={20} />
                    </span>
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
