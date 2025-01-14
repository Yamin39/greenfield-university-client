import arrow from '../assets/icons/arrow.png'
const SharedAbout = ({ title }) => {
   return (
      <div className='py-20'>

         <div className='w-full flex items-center justify-center'>
            <img src={arrow} alt="" />
         </div>

         <h1 style={{ lineHeight: '4.5rem' }} className='pt-8 px-6 text-center max-w-6xl mx-auto text-4xl sm:text-5xl md:text-6xl text-gray-700 font-light'>{title}</h1>

      </div>
   );
};

export default SharedAbout;


