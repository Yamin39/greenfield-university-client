import { Link } from "react-router-dom";
import { TiSocialFacebook, TiSocialLinkedin } from "react-icons/ti";
import { RiTwitterXFill } from "react-icons/ri";

const Teacher = ({ instructor }) => {

   return (
      <Link className="border p-6 rounded-lg group">
         <div className="relative h-[400px]">
            <img src={instructor.img} alt="teacher" className="w-full rounded-lg h-full object-cover" />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-green-600 rounded-lg bg-opacity-0 group-hover:bg-opacity-60 duration-500"></div>

            <div className="absolute top-3 group-hover:top-1/2 left-1/2       -translate-x-1/2 -translate-y-1/2 flex items-center duration-500 opacity-0  group-hover:opacity-100">
               <span className="p-2"><TiSocialFacebook className="text-3xl rounded-full text-white hover:bg-white hover:text-primary-800" /></span>
               <span className=""><RiTwitterXFill className="text-3xl p-1 rounded-full text-white hover:bg-white hover:text-primary-800" /></span>
               <span className="p-2"><TiSocialLinkedin className="text-3xl rounded-full text-white hover:bg-white hover:text-primary-800" /></span>
            </div>

         </div>
         <div className="text-center space-y-2 py-3">
            <h2 className="text-xl font-semibold">{instructor.name}</h2>
            <p className="text-xs text-[#959393]">{instructor.role}</p>
            <p className="text-[#959393] font-light">{(instructor.bio).slice(0, 50)}...</p>
         </div>
      </Link>
   );
};

export default Teacher;