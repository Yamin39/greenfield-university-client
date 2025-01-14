import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import girl from '../../assets/images/girl55.jpeg'

const TuitionFees = () => {
   return (
      <div className="px-3 my-12">
         <div className="max-w-7xl mx-auto bg-[#164951] text-white py-14 px-10 rounded-lg flex items-center gap-10 flex-col-reverse md:flex-row">
            <div className="space-y-4 basis-[60%]">
               <h2 className="text-3xl sm:text-4xl">Calculate Your Estimated Scholarship.</h2>
               <p className="text-gray-200">How affordable is Greenfield University? See for yourself with our Net Price Calculator.</p>

               <Link to='/tuitionFees' className="inline-flex items-center space-x-3  py-2.5 px-8 rounded-lg bg-white text-black bg-opacity-90 hover:bg-opacity-70">
                  <span>New Price Calculator</span>
                  <IoIosArrowForward className="mt-1" />
               </Link>

            </div>
            <div className="basis-[35%] ">
               <img src={girl} alt="" className="rounded-lg border-2" />
            </div>
         </div>


      </div>
   );
};

export default TuitionFees;