import { IoIosArrowRoundForward } from 'react-icons/io';
import university from '../../assets/images/university55.jpg'
import { Link } from 'react-router-dom';

const Apply = () => {
   return (
      <div className='flex max-w-7xl mx-auto px-3 gap-12 py-16 flex-col md:flex-row items-center'>

         <div className='basis-[45%] space-y-4'>
            <img src={university} alt="university" className='w-full rounded-xl' />
         </div>

         <div className='basis-[55%] pt-3 space-y-6 text-center md:text-left'>
            <h4 className='font-serif font-semibold text-3xl sm:text-4xl'>Apply for 2025</h4>
            <p className='text-[#757373] text-lg font-light text-justify'>We’ll guide you through the Common Application or Coalition Application, Powered by Scoir, and answer any questions you have along the way.</p>

            <div className="flex items-center justify-center md:justify-start">
            <Link to='/' className="bg-primary-700 flex items-center justify-center w-40 text-white py-3 pr-2 hover:bg-primary-800 rounded-md group transition-all duration-300 relative">
              <span className="relative -ml-6">How To Apply</span>
              <IoIosArrowRoundForward className="text-2xl -mb-1 group-hover:right-4 transition-all duration-300 absolute right-6" />
            </Link>
          </div>


         </div>

      </div>
   );
};

export default Apply;