import { Link } from 'react-router-dom';
import university from '../../assets/images/gu55.jpg'
import { IoIosArrowRoundForward } from 'react-icons/io';

const AboutUniversity = () => {
   return (
      <div className='flex max-w-7xl mx-auto px-3 gap-12 py-16 flex-col md:flex-row'>

         <div className='basis-[45%] space-y-4'>
            <h2 className='text-3xl sm:text-4xl font-semibold text-gray-700'><span className='text-primary-800'>Greenfield</span> University</h2>
            <img src={university} alt="university" className='w-full rounded-xl' />

         </div>

         <div className='basis-[55%] pt-3 space-y-6'>
            <h4 className='font-serif font-semibold text-3xl'>About Course</h4>
            <p className='text-[#757373] text-lg font-light text-justify'>At GreenField University, we prepare you to launch your career by providing a supportive, creative, and professional environment from which to learn practical skills, build a network of industry contacts.</p>

            <p className='text-[#757373] text-lg font-light text-justify'>GreenField University is affordable for all admitted students. Financial aid covers all demonstrated need for all students, regardless of citizenship or citizenship status. Families making under <span className='font-semibold text-black'>$85,000</span> a year pay nothing for their student's education, and families making between <span className='font-semibold text-black'>$85,000-$150,000 pay 0-10% of their incomes.</span></p>

            <div className="flex items-center justify-center md:justify-start">
            <Link to='/' className="bg-primary-700 flex items-center justify-center w-40 text-white py-3 pr-2 hover:bg-primary-800 rounded-md group transition-all duration-300 relative">
              <span className="relative -ml-4">Find Course</span>
              <IoIosArrowRoundForward className="text-2xl -mb-1 group-hover:right-4 transition-all duration-300 absolute right-6" />
            </Link>
          </div>


         </div>

      </div>
   );
};

export default AboutUniversity;