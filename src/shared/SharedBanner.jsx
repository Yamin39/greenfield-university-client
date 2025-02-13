import { Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { motion, useTransform, useMotionValue } from 'framer-motion';
import { useEffect } from 'react';
import shape from '../assets/homeImages/shape_1.png';

const SharedBanner = ({ title }) => {
   // Motion values to track mouse movement
   const mouseX = useMotionValue(0);
   const mouseY = useMotionValue(0);

   useEffect(() => {
      const handleMouseMove = (event) => {
         mouseX.set(event.clientX);
         mouseY.set(event.clientY);
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
   }, [mouseX, mouseY]);

   // Transform values for left image
   const xLeft = useTransform(mouseX, [0, window.innerWidth], [-20, 20]);
   const yLeft = useTransform(mouseY, [0, window.innerHeight], [-20, 20]);

   // Transform values for right image
   const xRight = useTransform(mouseX, [0, window.innerWidth], [20, -20]);
   const yRight = useTransform(mouseY, [0, window.innerHeight], [20, -20]);

   return (
      <div className='pt-52 pb-28 bg-[#F5F9FA] flex items-center justify-center flex-col space-y-4 overflow-hidden relative'>
         <motion.h2 
            className='text-4xl font-semibold sm:text-5xl'
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
         >
            {title}
         </motion.h2>
         
         <motion.ul 
            className='flex items-center space-x-3'
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
         >
            <Link to='/' className='hover:text-primary-700'>Home</Link>
            <MdKeyboardDoubleArrowRight />
            <span className='font-semibold'>{title}</span>
         </motion.ul>

         {/* Left Floating Image */}
         <motion.img 
            src={shape} 
            alt="" 
            className='absolute left-10 hidden md:inline-block' 
            style={{ x: xLeft, y: yLeft }}
         />

         {/* Right Floating Image */}
         <motion.img 
            src={shape} 
            alt="" 
            className='absolute right-10 hidden md:inline-block' 
            style={{ x: xRight, y: yRight }}
         />
      </div>
   );
};

export default SharedBanner;
