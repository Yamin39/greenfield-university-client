import { Link, useLoaderData } from "react-router-dom";
import SharedBanner from "../../shared/SharedBanner";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoLogoTwitter, IoMdStar } from "react-icons/io";
import FamousCourse from "./FamousCourse";

const InstructorDetails = () => {
  const { _id, universityId, name, phone, email,address, designation, img, rating, bio } =
    useLoaderData();
  return (
    <div>
      <SharedBanner title="Instructor Details" />
      <div className="max-w-7xl mx-auto py-12 md:py-16 ">
        <div className="grid grid-cols-1 justify-center lg:justify-between lg:grid-cols-3 gap-12">
          <div className="col-span-1 flex flex-col  items-center p-5  space-y-5">
            <img
              className="w-[340px] h-[340px] rounded-full"
              src={img}
              alt=""
            />
            <div className="flex flex-row  items-center mt-8 gap-3">
             
              <a
                target="_blank"
                href={`https://www.facebook.com/sharer/sharer.php?u=${location}`}
              >
                <span className="w-11 h-11 text-[#888888] border border-gray-100 hover:bg-[#1AB69D] hover:text-white rounded-full flex justify-center transition duration-300 items-center">
                  <FaFacebookF size={20} />
                </span>
              </a>
              <a
                target="_blank"
                href={`https://twitter.com/share?url=${location}`}
              >
                <span className="w-11 h-11 text-[#888888] transition duration-300 border border-gray-100 hover:bg-[#1AB69D] hover:text-white rounded-full flex justify-center items-center">
                  <IoLogoTwitter size={20} />
                </span>
              </a>
              <a
                target="_blank"
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${location}`}
              >
                <span className="w-11 h-11 text-[#888888] border border-gray-100 transition duration-300 hover:bg-[#1AB69D] hover:text-white rounded-full flex justify-center items-center">
                  <FaLinkedinIn size={20} />
                </span>
              </a>
            </div>
          </div>
          {/* Right */}
          <div className="col-span-2  p-5  ">
            <div className="text-center lg:text-start">
              <p className="text-xl font-medium text-primary-700 pb-3">
                INSTRUCTOR
              </p>
              <h1 className="text-3xl font-bold  text-[#181818]">{name}</h1>
              <p className="text-xl font-medium text-[#8A8A8A] py-2">
                {designation}
              </p>
              <div className="flex justify-center lg:justify-start">
              <div className=" text-center flex flex-col md:flex-row justify-center md:justify-start md:items-center pt-3   gap-x-3">
                <div className="flex items-center gap-x-[2px]">
                  <IoMdStar size={18} className="text-[#F8B81F]"></IoMdStar>
                  <IoMdStar size={18} className="text-[#F8B81F]"></IoMdStar>
                  <IoMdStar size={18} className="text-[#F8B81F]"></IoMdStar>
                  <IoMdStar size={18} className="text-[#F8B81F]"></IoMdStar>
                  <IoMdStar size={18} className="text-[#F8B81F]"></IoMdStar>
                  <p className="text-[14px] pl-2">({rating} Rating)</p>
                </div>
              </div>
              </div>
              <h2 className="text-2xl font-semibold pb-6 pt-10 text-[#181818]">
                About Me
              </h2>
              <p className="text-lg text-[#8A8A8A] py-2">{bio}</p>
            </div>
            <div className=" text-center lg:text-start">
              <h2 className="text-2xl font-semibold pb-5 pt-10 text-[#181818]">
                Contact Me
              </h2>
              <p className="text-lg font-semibold  text-[#8A8A8A] ">
                <span className="text-[#181818]">Address: </span>
                {address ?  address:'Not given'}
              </p>
              <p className="text-lg font-semibold py-2 text-[#8A8A8A] ">
                <span className="text-[#181818]">Email: </span>
                <Link
                  className="hover:text-primary-700 transition duration-300"
                  to={""}
                >
                  {email}
                </Link>
              </p>
              <p className="text-lg font-semibold pb-2 text-[#8A8A8A] ">
                <span className="text-[#181818]">Phone: </span>
                <Link
                  className="hover:text-primary-700 transition duration-300"
                  to={""}
                >
                  {phone ?  phone:'Not given'}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-3">
         <FamousCourse></FamousCourse>
      </div>
    </div>
  );
};

export default InstructorDetails;
