import { HiOutlineDesktopComputer } from "react-icons/hi";
import { IoIosFitness } from "react-icons/io";
import { TiTime } from "react-icons/ti";
import img_87 from "../../assets/images/img_87.jfif";

const CampusLife = () => {
  return (
    <div className="max-w-7xl mx-auto bg-[#FFFFFF] flex justify-center items-center py-20 ">
      <div className="flex flex-col md:flex-row justify-center gap-y-6 lg:justify-between px-3">
        <div className="basis-1/2 relative sm:-top-20 sm:-right-20">
          <img className="w-full rounded-xl" src={img_87} alt="pic" />
        </div>

        {/* Right side */}
        <div className="shadow-box basis-1/2 border relative z-20 bg-white w-full p-12 rounded-xl">
          <h2 className="text-lg md:text-xl  uppercase text-[#808080]  font-semibold">CAMPUS</h2>
          <h1 className="text-3xl md:text-[42px]  text-[#181818] font-bold mt-6 leading-tight">Campus Life</h1>
          <img className="w-[100px] h-[15px] mt-4" src="https://i.ibb.co.com/hH8Jpm2/about-Style.png" alt="" />
          <div className="mt-12 space-y-2">
            <div className="flex items-center gap-5 group">
              <span className="group-hover:bg-[#EE4A62] bg-[#ee4a631a] p-2 rounded-full text-[#EE4A62] group-hover:text-white ">
                <TiTime size={50} className="text-center"></TiTime>
              </span>
              <span>
                <h2 className="text-xl py-2 font-semibold">Student Life</h2>
                <p>Nostrud exer ciation laboris nis aliqup comodo perspiatix omnis iste natus.</p>
              </span>
            </div>
            <div className="flex items-center gap-5 group">
              <span className="group-hover:bg-primary-700 bg-[#1ab69c23] p-3 rounded-full group-text-primary-700 group-hover:text-white ">
                <HiOutlineDesktopComputer size={45}></HiOutlineDesktopComputer>
              </span>
              <span>
                <h2 className="text-xl py-2 font-semibold">Arts & Clubs</h2>
                <p>Omnis iste natus error sit voluptatem accusan tium doloreque laudantum.</p>
              </span>
            </div>
            <div className="flex items-center gap-5 group">
              <span className="group-hover:bg-[#F8941F] bg-[#f8931f29] p-2 rounded-full text-[#F8941F] group-hover:text-white ">
                <IoIosFitness size={50}></IoIosFitness>
              </span>
              <span>
                <h2 className="text-xl py-2 font-semibold">Sports & Fitness</h2>
                <p>Tempor incididunt ut labore et dolore magna aliqua enim minim veniam quis.</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampusLife;
