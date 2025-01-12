import { FaLongArrowAltRight } from "react-icons/fa";

const HeadingComp = () => {
    return (
        <div className="h-60 flex flex-col text-center items-center justify-center  bg-[#1AB69D]/5">

            <p className=" text-2xl md:text-4xl font-semibold   ">Get Your Quality  <span className="text-[#1AB69D]">Certificate</span>  <br />
            Through EduBlink</p>


            
                    <button className="flex items-center gap-1.5  bg-[#1AB69D] rounded mt-4 text-white px-4 py-2.5">
                      Get Started Now <FaLongArrowAltRight />
                    </button>

                    <img className="absolute -left-10  w-36" src="https://demo.edublink.co/wp-content/uploads/2023/05/shape-13.png" alt="" />
                   
        </div>
    );
};

export default HeadingComp;