import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import banner from '../../assets/homeImages/banner.webp'
import shape_1 from '../../assets/homeImages/shape_1.png'

const Banner = () => {
  return (
    <header className="py-24 max-w-7xl mx-auto px-3 flex items-center flex-col md:flex-row relative gap-y-6">
      <div className="space-y-6 basis-[45%] relative z-10 text-center md:text-left">
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

      <img src={shape_1} alt="" className="absolute top-36 -left-16 hidden xl:inline-block" />

    </header>
  );
};

export default Banner;
