import React from 'react';
import { motion } from 'framer-motion';

const OfferOverview = () => {
  const cardVariants = {
    hidden: { scale: 0 },
    visible: { 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="px-3 pb-12">
      <motion.div 
        className="max-w-7xl mx-auto rounded-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div 
          className="space-y-2 p-14 shadow-[0_0_7px_0] rounded-lg shadow-gray-300 hover:shadow-green-300"
          variants={cardVariants}
        >
          <h1 className="text-6xl sm:text-7xl font-semibold italic font-mono text-primary-700">156</h1>
          <p className="text-xl font-light text-gray-500">Degree & diploma programs offered</p>
        </motion.div>

        <motion.div 
          className="space-y-2 p-14 shadow-[0_0_7px_0] rounded-lg shadow-gray-300 hover:shadow-pink-300"
          variants={cardVariants}
        >
          <h1 className="text-6xl sm:text-7xl font-semibold italic font-mono text-pink-500">87%</h1>
          <p className="text-xl font-light text-gray-500">Of undergraduate students receive financial aid</p>
        </motion.div>

        <motion.div 
          className="space-y-2 p-14 shadow-[0_0_7px_0] rounded-lg shadow-gray-300 hover:shadow-purple-300"
          variants={cardVariants}
        >
          <h1 className="text-6xl sm:text-7xl font-semibold italic font-mono text-purple-600">79%</h1>
          <p className="text-xl font-light text-gray-500">Of graduates had two or more internships as students</p>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default OfferOverview;