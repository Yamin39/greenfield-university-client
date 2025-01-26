/* eslint-disable react/prop-types */
import { useState } from "react";
import { CiLock } from "react-icons/ci";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { GiCheckMark } from "react-icons/gi";
import { GrDown } from "react-icons/gr";
import { IoLogoTwitter, IoMdCheckmark, IoMdStar } from "react-icons/io";
import { IoDocumentTextOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const CourseDetailsTab = ({ course }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [htmlOpen, setHtmlOpen] = useState(false);

  const open = () => {
    setIsOpen(!isOpen);
  };
  const openHtml = () => {
    setHtmlOpen(!htmlOpen);
  };

  const ratingData = {
    averageRating: (course?.reviews.reduce((acc, curr) => acc + curr.rating, 0) / course?.reviews.length).toFixed(1),
    totalRatings: course?.reviews.length,
    allRatings: [
      { rating: 5, count: course?.reviews.filter((review) => review.rating === 5).length },
      { rating: 4, count: course?.reviews.filter((review) => review.rating === 4).length },
      { rating: 3, count: course?.reviews.filter((review) => review.rating === 3).length },
      { rating: 2, count: course?.reviews.filter((review) => review.rating === 2).length },
      { rating: 1, count: course?.reviews.filter((review) => review.rating === 1).length },
    ],
  };

  console.log(ratingData);

  console.log(course); // Debugging: Check the course prop

  return (
    <div className="mt-12">
      <Tabs>
        <TabList className={"border-b-2 border-gray-200 flex justify-evenly"}>
          <Tab>
            <span
              className={
                "hover:text-[#23B9A1] react-tab-css text-lg md:text-xl font-semibold duration-300 after:w-0 hover:after:w-full after:duration-300 after:h-0.5 after:absolute after:-bottom-3 after:bg-[#23B9A1] after:left-0 relative"
              }
            >
              Overview
            </span>
          </Tab>
          <Tab>
            <span
              className={
                "hover:text-[#23B9A1] text-lg md:text-xl font-semibold duration-300 after:w-0 hover:after:w-full after:duration-300 after:h-0.5 after:absolute after:-bottom-3 after:bg-[#23B9A1] after:left-0 relative"
              }
            >
              Curriculum
            </span>
          </Tab>
          <Tab>
            <span
              className={
                "hover:text-[#23B9A1] text-lg md:text-xl font-semibold duration-300 after:w-0 hover:after:w-full after:duration-300 after:h-0.5 after:absolute after:-bottom-3 after:bg-[#23B9A1] after:left-0 relative"
              }
            >
              Instructor
            </span>
          </Tab>
          <Tab>
            <span
              className={
                "hover:text-[#23B9A1] text-lg md:text-xl font-semibold duration-300 after:w-0 hover:after:w-full after:duration-300 after:h-0.5 after:absolute after:-bottom-3 after:bg-[#23B9A1] after:left-0 relative"
              }
            >
              Reviews
            </span>
          </Tab>
        </TabList>
        {/* Tab Panel-1 */}
        <TabPanel>
          <div>
            <h2 className="text-black text-3xl mt-12 font-bold">Course Description</h2>
            <p className="text-[#888888] text-lg pt-5">{course?.description}</p>
            <h3 className="text-xl font-semibold py-8">What You’ll Learn?</h3>
            <div className="mt-4 space-y-3">
              {course?.whatYouLearn?.map((item, index) => (
                <p key={index} className="text-lg flex flex-row gap-x-5 items-center font-semibold text-[#888888]">
                  <GiCheckMark size={20} className="text-[#1EB79F]"></GiCheckMark>
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </div>
        </TabPanel>
        {/* Tab Panel-2 */}
        <TabPanel>
          <div>
            {course?.curriculum?.map((section, index) => (
              <div key={index} className="border border-gray-200 p-10 mt-12">
                <button onClick={index === 0 ? open : openHtml} className="w-full flex justify-between items-center">
                  <span className="text-xl font-medium">{section.section}</span>
                  <span className="border w-8 h-8 border-gray-200 border-spacing-5 p-2 rounded-full">
                    <GrDown size={15} className={`${(index === 0 ? isOpen : htmlOpen) && "rotate-180"}`}></GrDown>
                  </span>
                </button>
                {(index === 0 ? isOpen : htmlOpen) && (
                  <ul className="relative top-[px] left-0 w-full space-y-2 mt-4 rounded-md">
                    {section.lessons.map((lesson, idx) => (
                      <li key={idx}>
                        <Link to={""} className="flex justify-between items-center group border-b border-gray-100 pb-2">
                          <p className="flex items-center gap-x-2 flex-1">
                            <IoDocumentTextOutline></IoDocumentTextOutline>
                            <span className="group-hover:text-green-400">{lesson.title}</span>
                          </p>
                          <p className="flex items-center gap-x-2">
                            <span className={`${lesson.locked ? "bg-[#f1647920] text-[#F16478]" : "bg-[#6C77E5] text-white"} py-[2px] px-[14px] rounded-sm`}>
                              {lesson.duration}
                            </span>
                            {lesson.locked ? <CiLock></CiLock> : <IoMdCheckmark></IoMdCheckmark>}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </TabPanel>
        {/* Tab Panel-3 */}
        <TabPanel>
          <div className="mt-12">
            <div className="flex flex-col md:flex-row md:justify-between gap-10">
              <img className="w-full object-cover md:max-w-[270px]" src={course?.instructorDetails?.img} alt="" />
              <div>
                <Link to={""} className="hover:text-green-400 duration-500 text-3xl">
                  {course?.instructorDetails?.name}
                </Link>
                <h2 className="text-xl pb-3 text-[#888888]">{course?.instructorDetails?.designation}</h2>
                <p className="text-[#888888] text-lg my-6">{course?.instructorDetails?.bio}</p>
                <div className="flex flex-row items-center gap-5">
                  <span className="w-12 h-12 text-[#888888] border p-3 border-gray-100 rounded-full flex justify-center items-center">
                    <FaFacebookF size={25}></FaFacebookF>
                  </span>
                  <span className="w-12 h-12 text-[#888888] border p-3 border-gray-100 rounded-full flex justify-center items-center">
                    <IoLogoTwitter size={25}></IoLogoTwitter>
                  </span>
                  <span className="w-12 h-12 text-[#888888] border p-3 border-gray-100 rounded-full flex justify-center items-center">
                    <FaLinkedinIn size={25}></FaLinkedinIn>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        {/* Tab Panel-4 */}
        <TabPanel>
          <div className="mt-12">
            <div className="flex flex-col sm:flex-row justify-between gap-10">
              <div className="bg-white shadow-box rounded-lg py-6 px-10 space-y-3">
                <h2 className="text-center text-3xl font-semibold text-[#EE4A62]">{ratingData.averageRating}</h2>
                <div className="flex items-center justify-center">
                  {[...Array(Math.floor(ratingData.averageRating))].map((_, i) => (
                    <IoMdStar key={i} size={20} className="text-[#F8B81F]"></IoMdStar>
                  ))}
                </div>
                <p className="text-[16px] pl-2 text-center text-[#888888]">{course?.reviews.length} Ratings</p>
              </div>
              <div>
                {ratingData.allRatings.map((rating, index) => (
                  <div key={index} className="grid grid-cols-12 gap-5 flex-1 items-center justify-center">
                    <div className="col-span-1 flex gap-2 text-lg">
                      <span>{rating.rating}</span>
                      <IoMdStar size={20} className="text-[#F8B81F]"></IoMdStar>
                    </div>
                    <span className="w-full bg-gray-200 h-2 rounded-lg col-span-10">
                      <span className="block bg-[#F8B81F] h-full rounded-lg" style={{ width: `${(rating.count / ratingData.totalRatings) * 100}%` }}></span>
                    </span>
                    <span className="col-span-1">{rating.count}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-12 space-y-3">
              <h2 className="text-[40px] font-semibold py-8">Reviews</h2>
              {course?.reviews?.map((review, index) => (
                <div key={index} className="flex gap-6">
                  <div className="">
                    <img className="w-[100px] rounded-full" src="https://i.ibb.co.com/mNBVP15/commenter.png" alt="pic" />
                  </div>
                  <div>
                    <div className="flex items-center">
                      {[...Array(review.rating)].map((_, i) => (
                        <IoMdStar key={i} size={20} className="text-[#F8B81F]"></IoMdStar>
                      ))}
                    </div>
                    <h2 className="text-2xl font-medium pt-2">{review.user}</h2>
                    <h4 className="text-[#080303ae] text-lg">{review.comment}</h4>
                    <p className="text-[#888888] text-lg my-4">{review.review}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default CourseDetailsTab;
