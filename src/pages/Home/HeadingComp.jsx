import { FaLongArrowAltRight } from "react-icons/fa";

const HeadingComp = () => {
  return (
    <div className="h-[400px] flex flex-col text-center items-center justify-center  bg-primary-700/5 mb-28">
      <p className=" text-2xl md:text-4xl font-semibold" style={{lineHeight: "50px"}}>
        Get Your Quality <span className="text-primary-700">Certificate</span> <br />
        Through Greenfield University
      </p>

      <button className="flex items-center gap-1.5  bg-primary-700 rounded mt-6 text-white px-4 py-2.5">
        Get Started Now <FaLongArrowAltRight />
      </button>

      <img className="absolute -left-10  w-36" src="https://demo.edublink.co/wp-content/uploads/2023/05/shape-13.png" alt="" />
    </div>
  );
};

export default HeadingComp;
