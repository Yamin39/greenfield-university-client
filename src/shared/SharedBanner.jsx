import React from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { motion } from 'framer-motion';

const SharedBanner = ({ title }) => {
   return (
      <div className='pt-52 pb-28 bg-[#F5F9FA] flex items-center justify-center flex-col space-y-4 overflow-hidden'>
         <motion.h2 
            className='text-4xl font-semibold sm:text-5xl'
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
               duration: 0.6,
               ease: "easeOut"
            }}
         >
            {title}
         </motion.h2>
         
         <motion.ul 
            className='flex items-center space-x-3'
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
               duration: 0.6,
               delay: 0.2,
               ease: "easeOut"
            }}
         >
            <Link to='/' className='hover:text-primary-700'>Home</Link>
            <MdKeyboardDoubleArrowRight />
            <span className='font-semibold'>{title}</span>
         </motion.ul>
      </div>
   );
};

export default SharedBanner;