import React from "react";
import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import girl from "../../assets/images/girl55.jpeg";

const TuitionFees = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const textVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="px-3 my-12">
      <div className="max-w-7xl mx-auto bg-[#164951] text-white py-14 px-10 rounded-lg flex items-center gap-10 flex-col-reverse md:flex-row">
        <motion.div 
          className="space-y-4 basis-[60%]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl"
            variants={textVariants}
          >
            Calculate Your Estimated Scholarship.
          </motion.h2>
          
          <motion.p 
            className="text-gray-200"
            variants={textVariants}
          >
            How affordable is Greenfield University? See for yourself with our
            Net Price Calculator.
          </motion.p>

          <motion.div variants={textVariants}>
            <Link
              to="/tuitionFees"
              className="inline-flex items-center space-x-3 py-2.5 px-8 rounded-lg bg-white text-black bg-opacity-90 hover:bg-opacity-70"
            >
              <span>New Price Calculator</span>
              <IoIosArrowForward className="mt-1" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          className="basis-[35%]"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img src={girl} alt="" className="rounded-lg border-2" />
        </motion.div>
      </div>
    </div>
  );
};

export default TuitionFees;