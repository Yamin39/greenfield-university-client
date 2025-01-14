import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import banner from '../../assets/homeImages/banner.webp'
import shape_1 from '../../assets/homeImages/shape_1.png'
import { PiChalkboardTeacherLight, PiGraduationCapLight } from "react-icons/pi";
import instructor from '../../assets/homeImages/instructor.png'
import { BsBookmarks } from "react-icons/bs";

const Banner = () => {
  return (
    <header className="w-full bg-[#F3F7F8] relative ">
      <div className="pt-32 pb-16 max-w-7xl mx-auto px-3 flex items-center flex-col md:flex-row relative gap-y-6">
        <div className="space-y-6 basis-[50%] relative z-10 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-wide text-gray-700" style={{ lineHeight: '3.5rem' }}>Get <span className="text-primary-700">2500+</span> Best Online Courses From <span className="text-primary-700">Greenfield University</span></h1>
          <p className="text-lg font-semibold text-gray-600">Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.</p>
          <div className="flex items-center justify-center md:justify-start">
            <Link to='/' className="bg-primary-700 flex items-center justify-center w-40 text-white py-3 pr-2 hover:bg-primary-800 rounded-md group transition-all duration-300 relative">
              <span className="relative -ml-4">Find Course</span>
              <IoIosArrowRoundForward className="text-2xl -mb-1 group-hover:right-4 transition-all duration-300 absolute right-6" />
            </Link>
          </div>
        </div>
        <div className="basis-[45%]">
          <img src={banner} alt="banner image" className="w-full" />
        </div>

        {/* utilities */}

        <img src={shape_1} alt="" className="absolute top-36 -left-16 hidden xl:inline-block" />

        {/* instructors */}

        <div className="bg-white p-5 border absolute rounded-lg md:right-96 bottom-28 z-20">
          <h4 className="text-xl font-semibold text-gray-700 pb-3 pl-1">Instructor</h4>
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <img src={instructor} alt="" />
              <Link to='/instructors' className="bg-primary-800 text-white text-3xl rounded-full text-center w-9 h-9 flex items-center justify-center -ml-1 -mb-1">
                +
              </Link>
            </div>

            <div className="leading-5">
              <h4 className="text-primary-800 font-semibold">500+</h4>
              <p>Instructors</p>
            </div>

          </div>


        </div>

      </div>

      {/* sub cards */}

      <div className="px-3 -mt-20 relative z-10">
        <div className="bg-white max-w-7xl mx-auto rounded-t-xl flex items-center border border-b-0 flex-col md:flex-row">
          <div className="flex space-x-3 py-16 px-10 hover:bg-green-50">
            <PiGraduationCapLight className="text text-[90px] text-primary-800" />
            <div className="space-y-4">
              <h3 className="font-semibold text-xl">Scholarship Facility</h3>
              <p className="text-[#aca8a8]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="flex space-x-3 py-16 px-10 hover:bg-pink-50">
            <PiChalkboardTeacherLight className="text text-[90px] text-pink-500" />
            <div className="space-y-4">
              <h3 className="font-semibold text-xl">Skilled Lecturers</h3>
              <p className="text-[#aca8a8]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="flex space-x-3 py-16 px-10 hover:bg-purple-50">
            <BsBookmarks className="text text-[90px] text-purple-500" />
            <div className="space-y-4">
              <h3 className="font-semibold text-xl">Book Library & Store</h3>
              <p className="text-[#aca8a8]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Banner;
