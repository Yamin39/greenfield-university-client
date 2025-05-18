import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import shape_1 from '../../assets/homeImages/shape_1.png'
import { PiChalkboardTeacherLight, PiGraduationCapLight } from "react-icons/pi";
import instructor from '../../assets/homeImages/instructor.png'
import userBanner from '../../assets/images/banner_66.png'
import { BsBookmarks } from "react-icons/bs";

const Banner = () => {
  // Previous animation variants remain the same
  const headingVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const paragraphVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.4
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.8
      }
    }
  };

  const bannerImageVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  const instructorCardVariants = {
    hidden: { opacity: 0, x: 100, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 1.2
      }
    }
  };

  // Updated timing for bottom cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2, // Reduced delay to start with h1
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <header className="w-full bg-[#F3F7F8] relative">
      <div className="pt-32 pb-16 max-w-7xl mx-auto px-3 flex items-center flex-col md:flex-row relative gap-y-6">
        <div className="space-y-6 basis-[50%] relative z-10 text-center md:text-left">
          <motion.h1 
            className="text-4xl sm:text-5xl font-bold tracking-wide text-gray-700" 
            style={{ lineHeight: '3.5rem' }}
            variants={headingVariants}
            initial="hidden"
            animate="visible"
          >
            Get <span className="text-primary-700">2500+</span> Best Online Courses From{" "}
            <span className="text-primary-700">Greenfield University</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg font-semibold text-gray-600"
            variants={paragraphVariants}
            initial="hidden"
            animate="visible"
          >
            Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.
          </motion.p>
          
          <motion.div 
            className="flex items-center justify-center md:justify-start"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
          >
            <Link to='/our-course' className="bg-primary-700 flex items-center justify-center w-40 text-white py-3 pr-2 hover:bg-primary-800 rounded-md group transition-all duration-300 relative">
              <span className="relative -ml-4">Find Course</span>
              <IoIosArrowRoundForward className="text-2xl -mb-1 group-hover:right-4 transition-all duration-300 absolute right-6" />
            </Link>
          </motion.div>
        </div>

        <motion.div 
          className="basis-[45%]"
          variants={bannerImageVariants}
          initial="hidden"
          animate="visible"
        >
          <img src={userBanner} alt="banner image" className="w-full" />
        </motion.div>

        <img src={shape_1} alt="" className="absolute top-48 -left-16 hidden xl:inline-block" />

        <motion.div 
          className="bg-white p-5 border absolute rounded-lg md:right-96 bottom-28 z-20"
          variants={instructorCardVariants}
          initial="hidden"
          animate="visible"
        >
          <h4 className="text-xl font-semibold text-gray-700 pb-3 pl-1">Instructor</h4>
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <img src={instructor} alt="" />
              <Link to='/instructors' className="bg-primary-800 text-white text-3xl rounded-full text-center w-9 h-9 flex items-center justify-center -ml-1 -mb-1">
                +
              </Link>
            </div>
            <div className="leading-5">
              <h4 className="text-primary-800 font-semibold">500+</h4>
              <p>Instructors</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="px-3 -mt-20 relative z-10">
        <motion.div 
          className="bg-white max-w-7xl mx-auto rounded-t-xl flex items-center border border-b-0 flex-col md:flex-row"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="flex space-x-3 py-16 px-10 hover:bg-green-50 transition-colors duration-300"
            variants={cardVariants}
          >
            <PiGraduationCapLight className="text text-[90px] text-primary-800" />
            <div className="space-y-4">
              <h3 className="font-semibold text-xl">Scholarship Facility</h3>
              <p className="text-[#aca8a8]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </motion.div>

          <motion.div 
            className="flex space-x-3 py-16 px-10 hover:bg-pink-50 transition-colors duration-300"
            variants={cardVariants}
          >
            <PiChalkboardTeacherLight className="text text-[90px] text-pink-500" />
            <div className="space-y-4">
              <h3 className="font-semibold text-xl">Skilled Lecturers</h3>
              <p className="text-[#aca8a8]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </motion.div>

          <motion.div 
            className="flex space-x-3 py-16 px-10 hover:bg-purple-50 transition-colors duration-300"
            variants={cardVariants}
          >
            <BsBookmarks className="text text-[90px] text-purple-500" />
            <div className="space-y-4">
              <h3 className="font-semibold text-xl">Book Library & Store</h3>
              <p className="text-[#aca8a8]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
};

export default Banner;