import { Link } from 'react-router-dom';
import banner from '../../assets/images/university55.jpg'

const TourBanner = () => {
   return (
      <div style={{backgroundImage : `linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${banner})`,}} className='bg-center bg-cover py-24 lg:py-36 px-10'>
         <div className='flex items-center justify-between max-w-7xl mx-auto gap-6 *:rounded-xl flex-col md:flex-row'>
            <h1 className='text-3xl lg:text-4xl font-bold text-white  font-serif text-center md:text-left'>Plan Your Meeting With Us.</h1>
            <Link to='/faculty' className='border p-20 text-4xl text-white hover:border-primary-700 hover:bg-primary-700 duration-200'>
               <span className='font-serif'>Faculty</span>
            </Link>
            <Link to='/gallery' className='border p-20 text-4xl text-white hover:border-primary-700 hover:bg-primary-700 duration-200'>
               <span className='font-serif'>Gallery</span>
            </Link>
            <Link to='/faculty' className='border p-20 text-4xl text-white hover:border-primary-700 hover:bg-primary-700 duration-200'>
               <span className='font-serif'>Contact</span>
            </Link>
         </div>                    
         
      </div>
   );
};

export default TourBanner;