import { FaPlay } from "react-icons/fa";

const CampusIntro = () => {
  return (
    <>
      <div className="bg-[url('https://i.ibb.co.com/5179YXW/intro-banner.jpg')] bg-cover bg-center bg-no-repeat ">
        <div className="bg-black/50  ">
          <div className="py-32 md:py-40 lg:py-56 space-y-16">
            <div className="flex justify-center items-center relative z-20">              
              <span className="bg-[#EE4A62] rounded-full w-20 h-20  flex justify-center items-center">
              <FaPlay size={25} className=" text-white"></FaPlay>
              <span className="border absolute border-spacing-12   animate-ping border-white w-24 h-24 rounded-full"> </span>
              <span className="border absolute border-spacing-12  delay-1000 animate-ping border-white w-20 h-20 rounded-full"> </span>
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl text-center text-white  font-bold relative z-10">
              Take a Video Tour to Learn <br className="hidden md:block" /> Intro of Campus
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default CampusIntro;
