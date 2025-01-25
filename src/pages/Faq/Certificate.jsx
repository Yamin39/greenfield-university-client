import { Link } from "react-router-dom";

const Certificate = () => {
   return (
      <div className="bg-[#f2f2ff] text-center py-16 space-y-6">
         <h1 style={{lineHeight : '3rem'}} className="text-3xl font-semibold sm:text-4xl text-gray-700 max-w-3xl mx-auto">Get Your Quality Skills <span className="text-primary-700">Certificate</span> Through <span className="text-primary-700">Greenfield University</span></h1>
         <Link className="bg-primary-700 text-white inline-block py-3 px-10 hover:bg-primary-800">Get Started Now</Link>
         
      </div>
   );
};

export default Certificate;