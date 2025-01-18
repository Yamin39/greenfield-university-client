import { Link, NavLink } from 'react-router-dom'
import { TfiEmail } from "react-icons/tfi";

const Footer = () => {
  return (
    <footer className="bg-[#f2f2ff] mt-20">
      <div className="rounded-xl w-full py-6 lg:p-9 max-w-7xl mx-auto px-4">
        <div className="flex justify-center md:justify-between gap-8 w-full flex-col md:flex-row text-center md:text-left">

          <div className="space-y-4 basis-2/6">
            <h2 className="text-3xl"><span className="text-primary-700 font-semibold">Greenfield</span> University</h2>
            <p className='text-gray-600 font-light'>Our university is a leading institution dedicated to providing world-class education and fostering innovation.</p>

            <div className='space-y-2'>
              <p>Any Query ? Call us</p>
              <h3 className='font-semibold text-lg'>+880 100000000</h3>
              <div className='flex items-center space-x-2 justify-center md:justify-start'>
                <TfiEmail className='text-xl' />
                <p className='inline-block'>greenfield@gmail.com</p>
              </div>
            </div>

          </div>


          <div className="basis-1/6">
            <h3 className="text-[1.2rem] font-semibold text-text mb-2">About Us</h3>
            <div className="flex text-black flex-col gap-[10px] nav">
              <NavLink to='/' className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Home</NavLink>
              <NavLink to='/course' className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Course</NavLink>
              <NavLink to='/blogs' className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Blogs</NavLink>
              <NavLink to='/contact' className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Contact</NavLink>
              <NavLink to='/gallery' className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Gallery</NavLink>
              <NavLink to='/about' className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">About</NavLink>

            </div>
          </div>


          <div className="basis-1/6">
            <h3 className="text-[1.2rem] font-semibold text-text mb-2">Quick Links</h3>
            <div className="flex text-black flex-col gap-[10px] nav">
              <NavLink to='/instructors' className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Instructors</NavLink>
              <NavLink to='/events' className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Events</NavLink>
              <NavLink to='/shop' className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Shop</NavLink>
              <NavLink to='/announcement' className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Announcement</NavLink>
              <NavLink to='/queries' className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Queries</NavLink>
              <NavLink to='/tour' className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Schedule a Tour</NavLink>

            </div>
          </div>

          <div className="basis-2/6 space-y-2">
            <h3 className="text-[1.2rem] font-semibold text-text mb-2">Join a Newsletter</h3>
            <p className='text-[#727070]'>Our university is a leading institution is a leading institution</p>
            <form className='flex items-center border-2 bg-white rounded-lg'>
              <input type="email" name="email" id="" placeholder='Enter Your Email' className='flex-grow p-2.5 outline-none  rounded-l-lg' />
              <input type="submit" value="send" className='bg-primary-700 hover:bg-primary-800 p-2.5 text-white cursor-pointer rounded-r-lg' />
            </form>

          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 text-center">
          <p className="text-[0.9rem] text-gray-600">© 2025, All rights reserved <Link to='/' className="hover:underline hover:text-primary-700">Greenfield University</Link></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
