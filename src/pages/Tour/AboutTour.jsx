import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'

const AboutTour = () => {
   return (
      <div className="bg-primary-700 text-white py-12 mt-16 px-3">
         <div className="max-w-7xl mx-auto flex items-center  justify-between gap-8 flex-col md:flex-row text-center md:text-left">
            <img src={logo} alt="logo" className=' w-20'/>
            <div className='flex-grow space-y-6 md:space-y-1'>
               <p className='uppercase font-serif text-lg'>Course for free, register now</p>
               <h2 className='uppercase text-3xl'>Creative in research and teaching</h2>
               
            </div>
            <Link to='/' className='bg-white text-primary-700 font-semibold px-12 py-2 rounded-lg hover:bg-gray-100'>Apply Now</Link>
         </div>
      </div>
   );
};

export default AboutTour;