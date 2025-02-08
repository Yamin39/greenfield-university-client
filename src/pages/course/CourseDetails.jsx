import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import { CiGlobe } from "react-icons/ci";
import { FaAngleRight, FaFacebookF, FaLinkedinIn, FaMoneyCheckAlt, FaPlay } from "react-icons/fa";
import { FaBookOpenReader } from "react-icons/fa6";
import { GoClock } from "react-icons/go";
import { ImBooks } from "react-icons/im";
import { IoIosPerson, IoLogoTwitter, IoMdStar } from "react-icons/io";
import { LiaCertificateSolid } from "react-icons/lia";
import { TbWorld } from "react-icons/tb";
import { Link, useParams } from "react-router-dom";
import LoadingModal from "../../components/LoadingModal";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useRole from "../../hooks/useRole";
import CourseDetailsTab from "./CourseDetailsTab";
import YourCourses from "./YourCourses";

const CourseDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const role = useRole(user?.email);
  const axiosPublic = useAxiosPublic();
  const [isLoading, setIsLoading] = useState(false);

  const { data: course = [], isLoading: isCourseLoading } = useQuery({
    queryKey: ["course"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/course/${id}`);
      return res.data;
    },
  });

  const {
    data: purchasedCourses = {},
    isLoading: isPurchasedCourseLoading,
    refetch,
  } = useQuery({
    queryKey: ["purchasedCourses", role, user?.email, course?._id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/purchasedCourses?id=${course._id}&email=${user.email}`);
      return res.data;
    },
  });

  if (isCourseLoading) {
    return <div>Loading...</div>;
  }

  const handlePurchase = () => {
    setIsLoading(true);
    if (role !== "student") {
      return toast.error("Only registered students can purchase courses");
    }

    const purchaseData = {
      ...course,
      courseId: course._id,
      price: 0,
      timestamp: new Date().getTime(),
      author: {
        name: user.displayName,
        email: user.email,
      },
    };

    // remove _id and status from purchaseData object
    delete purchaseData._id;
    delete purchaseData.status;

    console.log(purchaseData);

    axiosPublic
      .post(`/purchasedCourses`, purchaseData)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          toast.success("Course purchased successfully");
        } else {
          toast.error("Failed to purchase course");
        }
        setIsLoading(false);
        refetch();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong! Please try again.");
        setIsLoading(false);
      });
  };

  return (
    <div className="bg-[#F5F9FA] py-[86px] mb-10">
      {isLoading && <LoadingModal text="Purchasing course..." />}

      <div className="max-w-7xl mx-auto px-5">
        <div className="space-x-1">
          <Link to="/" className="text-xl">
            Home
          </Link>
          <FaAngleRight size={13} className="inline-block" />
          <Link to="/our-course" className="text-xl">
            Course
          </Link>
          <FaAngleRight size={13} className="inline-block" />
          <Link to={`/course-details/${course._id}`} className="text-xl">
            {course.title}
          </Link>
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
              <p className="text-[16px] pl-2">({course.reviews.length} Reviews)</p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pb-12 px-3  md:mb-56">
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="h-fit lg:col-span-2">
            <CourseDetailsTab course={course} />
          </div>
          {/* Right side */}
          <div className="lg:col-span-1 lg:absolute lg:top-[-250px] lg:right-0 w-full lg:max-w-[22rem] xl:max-w-sm bg-white p-5 shadow-box rounded-xl">
            <div className="relative">
              <img className="w-full rounded-xl" src={course.image_url} alt="" />
              <div className="bg-black/50 flex justify-center items-center absolute top-0 left-0 w-full h-full rounded-xl">
                <div className="relative z-20 group">
                  <span className="bg-white rounded-full w-16 h-16 transition duration-200 group-hover:bg-primary-700 flex justify-center items-center">
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
                  {!purchasedCourses._id ? (
                    <button
                      onClick={handlePurchase}
                      className="text-xl text-center py-4 transition duration-300 bg-primary-700 text-white w-full rounded-md hover:bg-[#31B978] disabled:bg-gray-700 disabled:cursor-not-allowed"
                      disabled={isPurchasedCourseLoading}
                    >
                      Enroll Now
                    </button>
                  ) : (
                    <div className="flex items-center gap-2">
                      <p className="text-[16px] text-[#656561]">
                        Already purchased.{" "}
                        <Link to="/dashboard/registeredCourse" className="text-primary-700 hover:text-primary-800 transition duration-300">
                          See
                        </Link>
                      </p>
                    </div>
                  )}
                  <h2 className="text-2xl mt-6">Share On:</h2>
                  <div className="flex flex-row items-center mt-6 gap-5">
                    <span className="w-10 h-10 text-[#888888] border border-gray-100 hover:bg-primary-700 hover:text-white rounded-full flex justify-center transition duration-300 items-center">
                      <FaFacebookF size={20} />
                    </span>
                    <span className="w-10 h-10 text-[#888888] transition duration-300 border border-gray-100 hover:bg-primary-700 hover:text-white rounded-full flex justify-center items-center">
                      <IoLogoTwitter size={20} />
                    </span>
                    <span className="w-10 h-10 text-[#888888] border border-gray-100 transition duration-300 hover:bg-primary-700 hover:text-white rounded-full flex justify-center items-center">
                      <FaLinkedinIn size={20} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <YourCourses />
    </div>
  );
};

export default CourseDetails;
