import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CourseDetailsTab from './CourseDetailsTab';
import { FaAngleRight, FaFacebookF, FaLinkedinIn, FaMoneyCheckAlt, FaPlay } from 'react-icons/fa';
import { IoIosPerson, IoLogoTwitter, IoMdStar } from 'react-icons/io';
import { LiaCertificateSolid } from 'react-icons/lia';
import { CiGlobe } from 'react-icons/ci';
import { FaBookOpenReader } from 'react-icons/fa6';
import { ImBooks } from 'react-icons/im';
import { GoClock } from 'react-icons/go';
import { TbWorld } from 'react-icons/tb';

const CourseDetails = () => {
  const { _id } = useParams();
  console.log(_id)
  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetch('/courseData.json')
      .then(response => response.json())
      .then(data => {  
        const selectedCourse = data.find(course => course._id == _id);
        setCourse(selectedCourse);
      })
      .catch(error => console.error('Error fetching course details:', error));
  }, [_id]);

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-[#F5F9FA] py-[86px] mb-10">
      <div className="max-w-7xl mx-auto px-5">
        <div className="space-x-1">
          <Link to="/" className="text-xl">Home</Link>
          <FaAngleRight size={13} className="inline-block" />
          <Link to="/courses" className="text-xl">Course</Link>
          <FaAngleRight size={13} className="inline-block" />
          <Link to={`/course-details/${course._id}`} className="text-xl">{course.title}</Link>
        </div>
        <div className="w-full lg:w-1/2 my-[35px] lg:my-[50px]">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#181818] font-bold">{course.title}</h2>
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mt-6">
            <div className="flex items-center gap-x-2 md:border-r-2 border-gray-200 md:pr-4">
              <IoIosPerson size={25} className="text-[#2CBCA5]" />
              <p className="text-[16px]">By {course.instructorDetails.name}</p>
            </div>
            <div className="flex items-center gap-x-2 md:border-r-2 border-gray-200 md:pr-4">
              <TbWorld size={25} className="text-[#2CBCA5]" />
              <p className="text-[16px]">Business</p>
            </div>
            <div className="flex items-center gap-x-[2px]">
              {[...Array(5)].map((_, i) => (
                <IoMdStar key={i} size={20} className="text-[#F8B81F]" />
              ))}
              <p className="text-[16px] pl-2">(3 Reviews)</p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pb-12 px-3">
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="h-fit lg:col-span-2">
            <CourseDetailsTab course={course} />
          </div>
          {/* Right side */}
          <div className="lg:col-span-1 lg:absolute lg:top-[-250px] lg:right-0 max-w-sm bg-white p-5 shadow-box rounded-xl">
            <div className="relative">
              <img className="w-full rounded-xl" src={course.image_url} alt="" />
              <div className="bg-black/50 flex justify-center items-center absolute top-0 left-0 w-full h-full rounded-xl">
                <div className="relative z-20 group">
                  <span className="bg-white rounded-full w-16 h-16 transition duration-200 group-hover:bg-[#1AB69D] flex justify-center items-center">
                    <FaPlay size={20} className="text-[#EE4A62] transition duration-200 group-hover:text-white" />
                  </span>
                </div>
              </div>
            </div>
            <div className="px-5">
              <h1 className="text-2xl py-6">Course Includes:</h1>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <p className="text-xl flex items-center text-[#323232] gap-x-2">
                    <FaMoneyCheckAlt size={20} />
                    <span>Price</span>
                  </p>
                  <p className="text-xl text-[#EE4A62] font-semibold">Free</p>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <p className="text-[#323232] text-xl flex items-center gap-x-2">
                    <IoIosPerson size={20} />
                    <span>Instructor:</span>
                  </p>
                  <p className="text-[16px]">{course.instructorDetails.name}</p>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <p className="text-[#323232] text-xl flex items-center gap-x-2">
                    <GoClock size={20} />
                    <span>Duration:</span>
                  </p>
                  <p className="text-[16px]">20 hours</p>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <p className="text-[#323232] text-xl flex items-center gap-x-2">
                    <ImBooks size={20} />
                    <span>Lessons:</span>
                  </p>
                  <p className="text-[16px]">{course.curriculum.reduce((acc, section) => acc + section.lessons.length, 0)}</p>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <p className="text-[#323232] text-xl flex items-center gap-x-2">
                    <FaBookOpenReader size={20} />
                    <span>Students:</span>
                  </p>
                  <p className="text-[16px]">125</p>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <p className="text-[#323232] text-xl flex items-center gap-x-2">
                    <CiGlobe size={20} />
                    <span>Language:</span>
                  </p>
                  <p className="text-[16px]">English</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-[#323232] text-xl flex items-center gap-x-2">
                    <LiaCertificateSolid size={20} />
                    <span>Certifications:</span>
                  </p>
                  <p className="text-[16px]">Yes</p>
                </div>
                <div className="pt-5 lg:pt-8">
                  <button className="text-xl text-center py-4 transition duration-300 bg-[#1AB69D] text-white w-full rounded-md hover:bg-[#31B978]">Start Now</button>
                  <h2 className="text-2xl mt-6">Share On:</h2>
                  <div className="flex flex-row items-center mt-6 gap-5">
                    <span className="w-10 h-10 text-[#888888] border border-gray-100 hover:bg-[#1AB69D] hover:text-white rounded-full flex justify-center transition duration-300 items-center">
                      <FaFacebookF size={20} />
                    </span>
                    <span className="w-10 h-10 text-[#888888] transition duration-300 border border-gray-100 hover:bg-[#1AB69D] hover:text-white rounded-full flex justify-center items-center">
                      <IoLogoTwitter size={20} />
                    </span>
                    <span className="w-10 h-10 text-[#888888] border border-gray-100 transition duration-300 hover:bg-[#1AB69D] hover:text-white rounded-full flex justify-center items-center">
                      <FaLinkedinIn size={20} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;