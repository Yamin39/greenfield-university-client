import thumb from "../../assets/images/thumb.png.webp";
import { FaArrowRight } from "react-icons/fa6";

const MissionValues = () => {
  return (
    <div className="bg-[#F6F4EE]">
      <div className="max-w-7xl mx-auto px-5  py-12 md:py-16 lg:py-24 ">
        <div className=" grid grid-cols-1 lg:grid-cols-3 relative gap-8 justify-between">
          <div className="col-span-1 sticky top-0">
            <img className="w-[250px] h-[364px]" src={thumb} alt="" />
          </div>
          <div className="col-span-2 overflow-y-hidden">
            <h1 className="text-3xl md:text-5xl text-[#031F42] font-medium pb-5">
              Mission and values
            </h1>
            <p className="text-lg pb-8 text-[#57585E]">
              We prepare you to launch your career by providing a supportive,
              creative, and professional. Our mission is to prepare students to
              understand, contribute to, and succeed in a rapidly changing
              society,
            </p>
            <div className="space-y-8 ">
              <div className=" bg-[#FFFFFF] rounded-md py-10 md:py-12 lg:py-16  px-10 md:px-12  shadow-box ">
                <div className="space-y-4 md:space-y-6">
                  <p className="text-3xl font-bold text-[#263750]">
                    Creativity
                  </p>
                  <p className="text-lg sm:w-1/2 text-[#5F6167] ">
                    Encouraging behaviours which encompass notions of
                    originality, and problem-solving in all that we do.
                  </p>
                  <button className="bg-primary-800/80 rounded-md py-2 px-5 mt-8 font-semibold hover:bg-primary-800 flex justify-center items-center gap-x-2 text-white">
                    <span>Learn More</span>
                    <FaArrowRight size={20}></FaArrowRight>
                  </button>
                </div>
              </div>
              <div className=" bg-[#FFFFFF] rounded-md py-10 md:py-12 lg:py-16  px-10 md:px-12  shadow-box ">
                <div className="space-y-4 md:space-y-6">
                  <p className="text-3xl font-bold text-[#263750]">
                    Scholarship
                  </p>
                  <p className="text-lg sm:w-1/2 text-[#5F6167] ">
                    Encouraging behaviours which encompass notions of
                    originality, and problem-solving in all that we do.
                  </p>
                  <button className="bg-primary-800/80 rounded-md py-2 px-5 mt-8 font-semibold hover:bg-primary-800 flex justify-center items-center gap-x-2 text-white">
                    <span>Learn More</span>
                    <FaArrowRight size={20}></FaArrowRight>
                  </button>
                </div>
              </div>
              <div className=" bg-[#FFFFFF] rounded-md py-10 md:py-12 lg:py-16  px-10 md:px-12  shadow-box ">
                <div className="space-y-4 md:space-y-6">
                  <p className="text-3xl font-bold text-[#263750]">Community</p>
                  <p className="text-lg sm:w-1/2 text-[#5F6167] ">
                    Encouraging behaviours which encompass notions of
                    originality, and problem-solving in all that we do.
                  </p>
                  <button className="bg-primary-800/80 rounded-md py-2 px-5 mt-8 font-semibold hover:bg-primary-800 flex justify-center items-center gap-x-2 text-white">
                    <span>Learn More</span>
                    <FaArrowRight size={20}></FaArrowRight>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionValues;
