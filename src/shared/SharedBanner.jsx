import { Link } from 'react-router-dom'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const SharedBanner = ({ title }) => {
   return (
      <div className='pt-52 pb-28 bg-[#F5F9FA] flex items-center justify-center flex-col space-y-4'>
         <h2 className='text-4xl font-semibold sm:text-5xl'>{title}</h2>
         <ul className=' flex items-center  space-x-3'>
            <Link to='/' className='hover:text-primary-700'>Home</Link>
            <MdKeyboardDoubleArrowRight />
            <span className='font-semibold'>{title}</span>
         </ul>
      </div>
   );
};

export default SharedBanner;