import { useState } from "react";
import { ImSpinner10 } from "react-icons/im";

const TourForm = () => {
   const [loading, setLoading] = useState(false)

   const handleMessage = e => {
      e.preventDefault();
      setLoading(true)
      const form = e.target;
      const firstName = form.firstName.value;
      const lastName = form.lastName.value;
      const email = form.email.value;
      const zipCode = form.zipCode.value;
      const phone = form.phone.value;
      const visitedTime = form.visitedTime.value;
      const message = form.message.value;
      
      const postedMessage = {
         firstName, 
         lastName,
         email,
         zipCode,
         phone,
         visitedTime,
         message
      }
      console.table(postedMessage);

   }
   return (
      <div className="max-w-7xl mx-auto px-3 my-16 ">
         <form onSubmit={handleMessage} className="p-10 border rounded-lg space-y-6">
            <h4 className="text-2xl font-semibold">Book a Schedule of Tour.</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               <div className="space-y-1">
                  <label className="font-light text-gray-800">First Name</label>
                  <input type="text" name="firstName" className="p-3 border outline-none w-full" required />
               </div>

               <div className="space-y-1">
                  <label className="font-light text-gray-800">Last Name</label>
                  <input type="text" name="lastName" className="p-3 border outline-none w-full" required />
               </div>
            </div>

            <div className="space-y-1">
               <label className="font-light text-gray-800">Email Address</label>
               <input type="text" name="email" className="p-3 border outline-none w-full" required />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               <div className="space-y-1">
                  <label className="font-light text-gray-800">Zip Code</label>
                  <input type="text" name="zipCode" className="p-3 border outline-none w-full" required />
               </div>

               <div className="space-y-1">
                  <label className="font-light text-gray-800">Phone Number</label>
                  <input type="text" name="phone" className="p-3 border outline-none w-full" required />
               </div>
            </div>

            <div className="space-y-1">
               <label className="font-light text-gray-800">When would you like to visit?</label>
               <input type="text" name="visitedTime" className="p-3 border outline-none w-full" required />
            </div>

            <div className="space-y-1">
               <label className="font-light text-gray-800">Your Extra Information</label>
               <textarea rows={5} name="message" className="p-3 border outline-none w-full" required></textarea>
            </div>

            <div className="flex items-center space-x-3">
               <input type="checkbox" required />
               <p className="text-sm text-gray-700 font-light">I accepts all terms and conditions.</p>
            </div>

            <button type="submit" className="py-3 px-10 bg-primary-700 hover:bg-primary-800 text-white w-56">
               {
                  loading ? <ImSpinner10 className="text-2xl animate-spin mx-auto" /> : <span>Send Message</span>
               }
            </button>
         </form>

      </div>
   );
};

export default TourForm;