import { CiLocationOn } from "react-icons/ci";
import { MdOutlineAddIcCall, MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";

const ContactCard = () => {
   return (
      <div className="max-w-7xl mx-auto px-3">
         <h4 className="text-2xl font-semibold sm:text-3xl font-serif text-center text-gray-700">Let us know how we can help</h4>

         {/* cards */}

         <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="border p-6 rounded-xl space-y-3 hover:bg-gray-50">
               <MdOutlineMail className="text-gray-600 text-5xl border p-2" />
               <h4 className="text-xl font-semibold text-[#4f4e4e]">Feedbacks</h4>
               <p className="text-sm text-gray-700">Speak to our Friendly team.</p>
               <p className="text-[#838282] inline-block">greenfield@gmail.com</p>

            </div>
            <div className="border p-6 rounded-xl space-y-3 hover:bg-gray-50">
               <MdOutlineAddIcCall className="text-gray-600 text-5xl border p-2" />
               <h4 className="text-xl font-semibold text-[#4f4e4e]">Call Us</h4>
               <p className="text-sm text-gray-700">Mon-Fri from 8am to 5pm</p>
               <p className="text-[#838282] inline-block">+880 1232323232</p>

            </div>
            <div className="border p-6 rounded-xl space-y-3 hover:bg-gray-50">
               <CiLocationOn className="text-gray-600 text-5xl border p-2" />
               <h4 className="text-xl font-semibold text-[#4f4e4e]">Visit Us</h4>
               <p className="text-sm text-gray-700">Visit our office HQ.</p>
               <p className="text-[#838282] inline-block">Virtual Office, Road-24 </p>

            </div>
         </div>
      </div>
   );
};

export default ContactCard;