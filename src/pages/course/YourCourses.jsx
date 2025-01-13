
// import { useState } from "react";
import { FaArrowRight, FaRegClock } from "react-icons/fa6";
import { ImBooks } from "react-icons/im";
import { IoIosPerson, IoMdStar } from "react-icons/io";
import { VscHeart } from "react-icons/vsc";


const YourCourses = () => {
    // const [isHover, setIsHover] = useState(false)

  return (
    <div className="max-w-7xl mx-auto   px-5  mt-12 mb-12">
        <h2 className="text-4xl text-[#181818] font-semibold py-10">Courses You May Like</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 items-center  justify-center md:justify-between">
        <div  className=" group relative flex bg-[#F7F5F2] flex-col  group rounded overflow-hidden  shadow-box   ">
            <div className="relative">
                 <img
              className="w-full  object-cover transition-transform duration-300 overflow-hidden group-hover:scale-110"
              src="https://demo.edublink.co/wp-content/uploads/2023/03/course-08-590x430.jpg"
              alt=""
            />
            <p className="flex absolute top-2 right-3 py-1 px-2 rounded-md items-center gap-2 bg-[#F8B81F] text-white"><FaRegClock  size={18} className=""></FaRegClock > <span>12 Hours</span></p>
            </div>
            {/* Text Section */}
          <div className=" bg-[#F7F5F2]  duration-500  flex flex-col p-4  ">
            <h2 className="my-2"><span className="text-xl py-[2px] px-2  rounded-sm bg-green-100 text-green-600 ">Expert</span></h2>
            <h3 className="text-xl  mb-2">Grow Personal Finalcial Security Thinking & principles</h3>
            <div className="flex items-center gap-x-[2px]">
                <IoMdStar size={18} className="text-[#F8B81F]"></IoMdStar>
                <IoMdStar size={18} className="text-[#F8B81F]"></IoMdStar>
                <IoMdStar size={18} className="text-[#F8B81F]"></IoMdStar>
                <IoMdStar size={18} className="text-[#F8B81F]"></IoMdStar>
                <IoMdStar size={18} className="text-[#F8B81F]"></IoMdStar>
                <p className="text-[14px] pl-2">(5.0/3 Rating)</p>
            </div>
            <p className="my-3 text-red-600 text-2xl font-medium">$49 </p>
            <div className="flex gap-x-4 items-center  pb-3">
                <p className="text-[#888888] text-sm flex items-center gap-x-2"><ImBooks  size={20} className=""></ImBooks > <span>8 Lessons </span></p>
                <p className="text-[#888888] text-sm flex items-center gap-x-2"><IoIosPerson size={20} className=""></IoIosPerson> <span>72 Students </span></p>
            </div>
          </div>
          {/* Hover Section */}
           <div className=" flex absolute group-hover:opacity-100 opacity-0 top-0 left-0 w-full transition-opacity duration-300 h-full  flex-col  group rounded overflow-hidden  py-4 pl-8 pr-3 bg-[#1AB69D] text-white  group space-y-3  ">
          <div className="">
            <p className="w-full flex justify-end text-end "><span className="w-10 h-10 bg-[#8dddd0] hover:bg-red-500 transition duration-300 rounded-full text-end flex justify-center items-center"><VscHeart size={20} className="text-white "></VscHeart></span></p>
            <h2 className="mt-6 mb-3 "><span className="text-lg py-[2px] px-2  rounded-sm bg-gray-50 text-gray-900 ">Expert</span></h2>
            <h3 className="text-xl  mb-2">Grow Personal Finalcial Security Thinking & principles</h3>
            <div className="flex items-center gap-x-[2px]">
                <IoMdStar size={18} className="text-[#F8B81F]"></IoMdStar>
                <IoMdStar size={18} className="text-[#F8B81F]"></IoMdStar>
                <IoMdStar size={18} className="text-[#F8B81F]"></IoMdStar>
                <IoMdStar size={18} className="text-white"></IoMdStar>
                <IoMdStar size={18} className="text-white"></IoMdStar>
                <p className="text-[14px] pl-2">(5.0/3 Rating)</p>
            </div>
            <p className="my-4 text-white text-2xl font-medium">$49 </p>
            <p className="text-[18px] ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor magnam atque repudiandae similique quibusdam iure vero facilis aperiam fugit sequi.</p>
            <div className="flex gap-x-4 items-center  my-5">
                <p className="text-white text-sm flex items-center gap-x-2"><ImBooks  size={20} className=""></ImBooks > <span>8 Lessons </span></p>
                <p className="text-white text-sm flex items-center gap-x-2"><IoIosPerson size={20} className=""></IoIosPerson> <span>702 Students </span></p>
            </div>

            {/* Enroll Button */}
            <button className=" mt-4  px-6 py-[5px] bg-red-500 text-[16px] text-white hover:text-gray-900 transition duration-300 rounded-md hover:bg-gray-50 flex items-center gap-x-2">
              <span>Enroll Now</span> <FaArrowRight></FaArrowRight>
            </button>
          </div>
        </div>
        </div>
        {/* card 2 */}
        <div className=" flex group relative bg-[#F7F5F2] flex-col  group rounded overflow-hidden  shadow-box   ">
            <div className="relative">
                 <img
              className="w-full  object-cover transition-transform duration-300 overflow-hidden group-hover:scale-110"
              src="https://demo.edublink.co/wp-content/uploads/2023/03/course-47-590x430.jpg"
              alt=""
            />
            <p className="flex absolute top-2 right-3 py-1 px-2 rounded-md items-center gap-2 bg-[#F8B81F] text-white"><FaRegClock  size={18} className=""></FaRegClock > <span>12 Hours</span></p>
            </div>
          {/* Text Section */}
          <div className=" bg-[#F7F5F2]  duration-500  flex flex-col p-4  ">
            <h2 className="my-2"><span className="text-xl py-[2px] px-2  rounded-sm bg-green-100 text-green-600 ">Expert</span></h2>
            <h3 className="text-xl  mb-2">Grow Personal Finalcial Security Thinking & principles</h3>
            <div className="flex items-center gap-x-[2px]">
                <IoMdStar size={18} className="text-[#F8B81F]"></IoMdStar>
                <IoMdStar size={18} className="text-[#F8B81F]"></IoMdStar>
                <IoMdStar size={18} className="text-[#F8B81F]"></IoMdStar>
                <IoMdStar size={18} className="text-[#F8B81F]"></IoMdStar>
                <IoMdStar size={18} className="text-[#F8B81F]"></IoMdStar>
                <p className="text-[14px] pl-2">(5.0/3 Rating)</p>
            </div>
            <p className="my-3 text-red-600 text-2xl font-medium">$49 </p>
            <div className="flex gap-x-4 items-center  pb-3">
                <p className="text-[#888888] text-sm flex items-center gap-x-2"><ImBooks  size={20} className=""></ImBooks > <span>8 Lessons </span></p>
                <p className="text-[#888888] text-sm flex items-center gap-x-2"><IoIosPerson size={20} className=""></IoIosPerson> <span>72 Students </span></p>
            </div>
          </div>
          {/* Hover Section */}
          <div className=" flex absolute group-hover:opacity-100 opacity-0 top-0 left-0 w-full transition-opacity duration-300 h-full  flex-col  group rounded overflow-hidden  py-4 pl-8 pr-3 bg-[#1AB69D] text-white  group space-y-3  ">
          <div className="">
            <p className="w-full flex justify-end text-end "><span className="w-10 h-10 bg-[#8dddd0] hover:bg-red-500 transition duration-300 rounded-full text-end flex justify-center items-center"><VscHeart size={20} className="text-white "></VscHeart></span></p>
            <h2 className="mt-6 mb-3 "><span className="text-lg py-[2px] px-2  rounded-sm bg-gray-50 text-gray-900 ">Expert</span></h2>
            <h3 className="text-xl  mb-2">Grow Personal Finalcial Security Thinking & principles</h3>
            <div className="flex items-center gap-x-[2px]">
                <IoMdStar size={18} className="text-[#F8B81F]"></IoMdStar>
                <IoMdStar size={18} className="text-[#F8B81F]"></IoMdStar>
                <IoMdStar size={18} className="text-[#F8B81F]"></IoMdStar>
                <IoMdStar size={18} className="text-white"></IoMdStar>
                <IoMdStar size={18} className="text-white"></IoMdStar>
                <p className="text-[14px] pl-2">(5.0/3 Rating)</p>
            </div>
            <p className="my-4 text-white text-2xl font-medium">$49 </p>
            <p className="text-[18px] ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor magnam atque repudiandae similique quibusdam iure vero facilis aperiam fugit sequi.</p>
            <div className="flex gap-x-4 items-center  my-5">
                <p className="text-white text-sm flex items-center gap-x-2"><ImBooks  size={20} className=""></ImBooks > <span>8 Lessons </span></p>
                <p className="text-white text-sm flex items-center gap-x-2"><IoIosPerson size={20} className=""></IoIosPerson> <span>702 Students </span></p>
            </div>

            {/* Enroll Button */}
            <button className=" mt-4  px-6 py-[5px] bg-red-500 text-[16px] text-white hover:text-gray-900 transition duration-300 rounded-md hover:bg-gray-50 flex items-center gap-x-2">
              <span>Enroll Now</span> <FaArrowRight></FaArrowRight>
            </button>
          </div>
        </div>
        </div>
        {/* Card 3 */}
        <div className=" flex bg-[#F7F5F2] flex-col group relative  group rounded overflow-hidden  shadow-box   ">
            <div className="relative">
                 <img
              className="w-full  object-cover transition-transform duration-300 overflow-hidden group-hover:scale-110"
              src="https://demo.edublink.co/wp-content/uploads/2023/03/course-07-590x430.jpg"
              alt=""
            />
            <p className="flex absolute top-2 right-3 py-1 px-2 rounded-md items-center gap-2 bg-[#F8B81F] text-white"><FaRegClock  size={18} className=""></FaRegClock > <span>30 Hours</span></p>
            </div>
          {/* Text Section */}
          <div className=" bg-[#F7F5F2]  duration-500  flex flex-col p-4  ">
            <h2 className="my-2"><span className="text-xl py-[2px] px-2  rounded-sm bg-green-100 text-green-600 ">Expert</span></h2>
            <h3 className="text-xl  mb-2">Grow Personal Finalcial Security Thinking & principles</h3>
            <div className="flex items-center gap-x-[2px]">
                <IoMdStar size={18} className="text-[#F8B81F]"></IoMdStar>
                <IoMdStar size={18} className="text-[#F8B81F]"></IoMdStar>
                <IoMdStar size={18} className="text-[#F8B81F]"></IoMdStar>
                <IoMdStar size={18} className="text-[#F8B81F]"></IoMdStar>
                <IoMdStar size={18} className="text-[#F8B81F]"></IoMdStar>
                <p className="text-[14px] pl-2">(5.0/3 Rating)</p>
            </div>
            <p className="my-3 text-red-600 text-2xl font-medium">$49 </p>
            <div className="flex gap-x-4 items-center  pb-3">
                <p className="text-[#888888] text-sm flex items-center gap-x-2"><ImBooks  size={20} className=""></ImBooks > <span>8 Lessons </span></p>
                <p className="text-[#888888] text-sm flex items-center gap-x-2"><IoIosPerson size={20} className=""></IoIosPerson> <span>702 Students </span></p>
            </div>
          </div>
          {/* Hover Section */}
          <div className=" flex absolute group-hover:opacity-100 opacity-0 top-0 left-0 w-full transition-opacity duration-300 h-full  flex-col  group rounded overflow-hidden  py-4 pl-8 pr-3 bg-[#1AB69D] text-white  group space-y-3  ">
          <div className="">
            <p className="w-full flex justify-end text-end "><span className="w-10 h-10 bg-[#8dddd0] hover:bg-red-500 transition duration-300 rounded-full text-end flex justify-center items-center"><VscHeart size={20} className="text-white "></VscHeart></span></p>
            <h2 className="mt-6 mb-3 "><span className="text-lg py-[2px] px-2  rounded-sm bg-gray-50 text-gray-900 ">Expert</span></h2>
            <h3 className="text-xl  mb-2">Grow Personal Finalcial Security Thinking & principles</h3>
            <div className="flex items-center gap-x-[2px]">
                <IoMdStar size={18} className="text-[#F8B81F]"></IoMdStar>
                <IoMdStar size={18} className="text-[#F8B81F]"></IoMdStar>
                <IoMdStar size={18} className="text-[#F8B81F]"></IoMdStar>
                <IoMdStar size={18} className="text-white"></IoMdStar>
                <IoMdStar size={18} className="text-white"></IoMdStar>
                <p className="text-[14px] pl-2">(5.0/3 Rating)</p>
            </div>
            <p className="my-4 text-white text-2xl font-medium">$49 </p>
            <p className="text-[18px] ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor magnam atque repudiandae similique quibusdam iure vero facilis aperiam fugit sequi.</p>
            <div className="flex gap-x-4 items-center  my-5">
                <p className="text-white text-sm flex items-center gap-x-2"><ImBooks  size={20} className=""></ImBooks > <span>8 Lessons </span></p>
                <p className="text-white text-sm flex items-center gap-x-2"><IoIosPerson size={20} className=""></IoIosPerson> <span>702 Students </span></p>
            </div>

            {/* Enroll Button */}
            <button className=" mt-4  px-6 py-[5px] bg-red-500 text-[16px] text-white hover:text-gray-900 transition duration-300 rounded-md hover:bg-gray-50 flex items-center gap-x-2">
              <span>Enroll Now</span> <FaArrowRight></FaArrowRight>
            </button>
          </div>
        </div>
        </div>       
      </div>
    </div>
  );
};

export default YourCourses;
