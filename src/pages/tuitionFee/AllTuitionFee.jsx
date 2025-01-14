import { useState } from "react";
import { GrDown } from "react-icons/gr";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { MdManageHistory, MdOutlineStackedBarChart } from "react-icons/md";
import { RiPaintFill } from "react-icons/ri";

const AllTuitionFee = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [manageOpen, setManageOpen] = useState(false);
  const [businessOpen, setBusinessOpen] = useState(false);
  const [computerOpen, setComputerOpen] = useState(false);
  const [artOpen, setArtOpen] = useState(false);

  const open = () => {
    setIsOpen(!isOpen);
  };
  const openManage = () => {
    setManageOpen(!manageOpen);
  };
  const openBusiness = () => {
    setBusinessOpen(!businessOpen);
  };
  const openComputer = () => {
    setComputerOpen(!computerOpen);
  };
  const openArt = () => {
    setArtOpen(!artOpen);
  };
  return (
    <div className="bg-[#F6F4EE]">
      <div className="max-w-7xl mx-auto px-5 pb-12 pt-12 md:pt-16 lg:pt-24 space-y-10">
        <div className=" bg-[#FFFFFF] rounded-md p-6 md:p-10 shadow-box">
          <button
            onClick={open}
            className="w-full flex justify-between items-center"
          >
            <p className="flex items-center gap-x-2 text-primary-700">
              <MdOutlineStackedBarChart
                size={30}
                className=""
              ></MdOutlineStackedBarChart>
              <span className="text-xl md:text-2xl font-bold">Economics</span>
            </p>
            <span className="">
              <GrDown
                size={25}
                className={`${
                  isOpen === true && "rotate-180 transition duration-300"
                } transition duration-300`}
              ></GrDown>
            </span>
          </button>

          {isOpen && (
            <div className="mx-[10px]  md:mx-7 lg:mx-9  py-6">
              <h2 className="text-lg font-medium  ">Domestic Fees</h2>
              <ul className="relative transition duration-500 top-0 left-0 w-full space-y-2  mt-4 rounded-md ">
                <li>
                  <div className=" space-y-3">
                    <h2 className="flex flex-row justify-between px-5 items-center bg-pink-200 text-[16px] md:text-lg font-medium py-3 rounded-md">
                      <span>Expense</span>
                      <span>Semester</span>
                      <span>Annual</span>
                    </h2>
                    <p className="flex flex-row justify-between px-5 py-3 items-center text-[16px] md:text-lg font-medium text-[#656561] border-b border-gray-200">
                      <span>Tuition Fees</span>
                      <span>$4,860</span>
                      <span>$14,860</span>
                    </p>
                    <p className="flex flex-row justify-between px-5 items-center text-[16px] md:text-lg font-medium text-[#656561]">
                      <span>Enrollment</span>
                      <span>$4,260</span>
                      <span>$45,860</span>
                    </p>
                  </div>
                </li>
              </ul>
              <h2 className="text-lg font-medium mt-12 ">International Fees</h2>
              <ul className="relative transition duration-500 top-0 left-0 w-full space-y-2  mt-4 rounded-md ">
                <li>
                  <div className=" space-y-3">
                    <h2 className="flex flex-row justify-between px-5 items-center bg-pink-200 text-[16px] md:text-lg font-medium py-3 rounded-md">
                      <span>Expense</span>
                      <span>Semester</span>
                      <span>Annual</span>
                    </h2>
                    <p className="flex flex-row justify-between px-5 py-3 items-center text-[16px] md:text-lg font-medium text-[#656561] border-b border-gray-200">
                      <span>Tuition Fees</span>
                      <span>$2,860</span>
                      <span>$20,860</span>
                    </p>
                    <p className="flex flex-row justify-between px-5 py-3 items-center text-[16px] md:text-lg font-medium text-[#656561] border-b border-gray-200">
                      <span>Related Cost</span>
                      <span>$860</span>
                      <span>$2,860</span>
                    </p>
                    <p className="flex flex-row justify-between px-5 py-3 items-center text-[16px] md:text-lg font-medium text-[#656561] border-b border-gray-200">
                      <span>Insurance</span>
                      <span>$860</span>
                      <span>$2,860</span>
                    </p>
                    <p className="flex flex-row justify-between px-5 items-center text-[16px] md:text-lg font-medium text-[#656561]">
                      <span>Enrollment</span>
                      <span>$4,260</span>
                      <span>$45,860</span>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>
        {/* Management Accordion */}
        <div className=" bg-[#FFFFFF] rounded-md p-6 md:p-10 shadow-box ">
          <button
            onClick={openManage}
            className="w-full flex justify-between items-center"
          >
            <p className="flex items-center gap-x-2 text-primary-700">
              <MdManageHistory 
                size={30}
                className=""
              ></MdManageHistory>
              <span className="text-xl md:text-2xl font-bold">Management</span>
            </p>
            <span className="">
              <GrDown
                size={25}
                className={`${
                  manageOpen === true && "rotate-180 transition duration-300"
                } transition duration-300`}
              ></GrDown>
            </span>
          </button>

          {manageOpen && (
            <div className="mx-5 md:mx-7 lg:mx-9  py-6">
              <h2 className="text-[16px] md:text-lg font-medium  ">Domestic Fees</h2>
              <ul className="relative transition duration-500 top-0 left-0 w-full space-y-2  mt-4 rounded-md ">
                <li>
                  <div className=" space-y-3">
                    <h2 className="flex flex-row justify-between px-5 items-center bg-pink-200 text-[16px] md:text-lg font-medium py-3 rounded-md">
                      <span>Expense</span>
                      <span>Semester</span>
                      <span>Annual</span>
                    </h2>
                    <p className="flex flex-row justify-between px-5 py-3 items-center text-[16px] md:text-lg font-medium text-[#656561] border-b border-gray-200">
                      <span>Tuition Fees</span>
                      <span>$5,860</span>
                      <span>$14,860</span>
                    </p>
                    <p className="flex flex-row justify-between px-5 items-center text-[16px] md:text-lg font-medium text-[#656561]">
                      <span>Enrollment</span>
                      <span>$3,260</span>
                      <span>$40,860</span>
                    </p>
                  </div>
                </li>
              </ul>
              <h2 className="text-[16px] md:text-lg font-medium mt-12 ">International Fees</h2>
              <ul className="relative transition duration-500 top-0 left-0 w-full space-y-2  mt-4 rounded-md ">
                <li>
                  <div className=" space-y-3">
                    <h2 className="flex flex-row justify-between px-5 items-center bg-pink-200 text-[16px] md:text-lg font-medium py-3 rounded-md">
                      <span>Expense</span>
                      <span>Semester</span>
                      <span>Annual</span>
                    </h2>
                    <p className="flex flex-row justify-between px-5 py-3 items-center text-[16px] md:text-lg font-medium text-[#656561] border-b border-gray-200">
                      <span>Tuition Fees</span>
                      <span>$3,860</span>
                      <span>$27,860</span>
                    </p>
                    <p className="flex flex-row justify-between px-5 py-3 items-center text-[16px] md:text-lg font-medium text-[#656561] border-b border-gray-200">
                      <span>Related Costs</span>
                      <span>$3,360</span>
                      <span>$26,860</span>
                    </p>
                    <p className="flex flex-row justify-between px-5 py-3 items-center text-[16px] md:text-lg font-medium text-[#656561] border-b border-gray-200">
                      <span>Insurance</span>
                      <span>$660</span>
                      <span>$6,860</span>
                    </p>
                    <p className="flex flex-row justify-between px-5 items-center text-[16px] md:text-lg font-medium text-[#656561]">
                      <span>Enrollment</span>
                      <span>$3,260</span>
                      <span>$42,860</span>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>
        {/* Business Accordion */}
        <div className=" bg-[#FFFFFF] rounded-md p-6 md:p-10 shadow-box ">
          <button
            onClick={openBusiness}
            className="w-full flex justify-between items-center"
          >
            <p className="flex items-center gap-x-2 text-primary-700">
              <LuBriefcaseBusiness   
                size={30}
                className=""
              ></LuBriefcaseBusiness >
              <span className="text-xl md:text-2xl font-bold">Business & Adminitration</span>
            </p>
            <span className="">
              <GrDown
                size={25}
                className={`${
                  businessOpen === true && "rotate-180 transition duration-300"
                } transition duration-300`}
              ></GrDown>
            </span>
          </button>

          {businessOpen && (
            <div className="mx-5 md:mx-7 lg:mx-9  py-6">
              <h2 className="text-[16px] md:text-lg font-medium  ">Domestic Fees</h2>
              <ul className="relative transition duration-500 top-0 left-0 w-full space-y-2  mt-4 rounded-md ">
                <li>
                  <div className=" space-y-3">
                    <h2 className="flex flex-row justify-between px-5 items-center bg-pink-200 text-[16px] md:text-lg font-medium py-3 rounded-md">
                      <span>Expense</span>
                      <span>Semester</span>
                      <span>Annual</span>
                    </h2>
                    <p className="flex flex-row justify-between px-5 py-3 items-center text-[16px] md:text-lg font-medium text-[#656561] border-b border-gray-200">
                      <span>Tuition Fees</span>
                      <span>$3,860</span>
                      <span>$11,860</span>
                    </p>
                    <p className="flex flex-row justify-between px-5 items-center text-[16px] md:text-lg font-medium text-[#656561]">
                      <span>Enrollment</span>
                      <span>$5,260</span>
                      <span>$47,860</span>
                    </p>
                  </div>
                </li>
              </ul>
              <h2 className="text-[16px] md:text-lg font-medium mt-12 ">International Fees</h2>
              <ul className="relative transition duration-500 top-0 left-0 w-full space-y-2  mt-4 rounded-md ">
                <li>
                  <div className=" space-y-3">
                    <h2 className="flex flex-row justify-between px-5 items-center bg-pink-200 text-[16px] md:text-lg font-medium py-3 rounded-md">
                      <span>Expense</span>
                      <span>Semester</span>
                      <span>Annual</span>
                    </h2>
                    <p className="flex flex-row justify-between px-5 py-3 items-center text-[16px] md:text-lg font-medium text-[#656561] border-b border-gray-200">
                      <span>Tuition Fees</span>
                      <span>$2,460</span>
                      <span>$19,860</span>
                    </p>
                    <p className="flex flex-row justify-between px-5 py-3 items-center text-[16px] md:text-lg font-medium text-[#656561] border-b border-gray-200">
                      <span>Related Costs</span>
                      <span>$3,000</span>
                      <span>$31,860</span>
                    </p>
                    <p className="flex flex-row justify-between px-5 py-3 items-center text-[16px] md:text-lg font-medium text-[#656561] border-b border-gray-200">
                      <span>Insurance</span>
                      <span>$960</span>
                      <span>$9,860</span>
                    </p>
                    <p className="flex flex-row justify-between px-5 items-center text-[16px] md:text-lg font-medium text-[#656561]">
                      <span>Enrollment</span>
                      <span>$3,260</span>
                      <span>$41,860</span>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>
        {/* Computer Accordion */}
        <div className=" bg-[#FFFFFF] rounded-md p-6 md:p-10 shadow-box ">
          <button
            onClick={openComputer}
            className="w-full flex justify-between items-center"
          >
            <p className="flex items-center gap-x-2 text-primary-700">
              <HiOutlineDesktopComputer    
                size={30}
                className=""
              ></HiOutlineDesktopComputer  >
              <span className="text-xl md:text-2xl font-bold">Computer Science & A.I.</span>
            </p>
            <span className="">
              <GrDown
                size={25}
                className={`${
                  computerOpen === true && "rotate-180 transition duration-300"
                } transition duration-300`}
              ></GrDown>
            </span>
          </button>

          {computerOpen && (
            <div className="mx-5 md:mx-7 lg:mx-9  py-6">
              <h2 className="text-[16px] md:text-lg font-medium  ">Domestic Fees</h2>
              <ul className="relative transition duration-500 top-0 left-0 w-full space-y-2  mt-4 rounded-md ">
                <li>
                  <div className=" space-y-3">
                    <h2 className="flex flex-row justify-between px-5 items-center bg-pink-200 text-[16px] md:text-lg font-medium py-3 rounded-md">
                      <span>Expense</span>
                      <span>Semester</span>
                      <span>Annual</span>
                    </h2>
                    <p className="flex flex-row justify-between px-5 py-3 items-center text-[16px] md:text-lg font-medium text-[#656561] border-b border-gray-200">
                      <span>Tuition Fees</span>
                      <span>$4,160</span>
                      <span>$15,860</span>
                    </p>
                    <p className="flex flex-row justify-between px-5 items-center text-[16px] md:text-lg font-medium text-[#656561]">
                      <span>Enrollment</span>
                      <span>$4,320</span>
                      <span>$44,800</span>
                    </p>
                  </div>
                </li>
              </ul>
              <h2 className="text-[16px] md:text-lg font-medium mt-12 ">International Fees</h2>
              <ul className="relative transition duration-500 top-0 left-0 w-full space-y-2  mt-4 rounded-md ">
                <li>
                  <div className=" space-y-3">
                    <h2 className="flex flex-row justify-between px-5 items-center bg-pink-200 text-[16px] md:text-lg font-medium py-3 rounded-md">
                      <span>Expense</span>
                      <span>Semester</span>
                      <span>Annual</span>
                    </h2>
                    <p className="flex flex-row justify-between px-5 py-3 items-center text-[16px] md:text-lg font-medium text-[#656561] border-b border-gray-200">
                      <span>Tuition Fees</span>
                      <span>$2,770</span>
                      <span>$20,390</span>
                    </p>
                    <p className="flex flex-row justify-between px-5 py-3 items-center text-[16px] md:text-lg font-medium text-[#656561] border-b border-gray-200">
                      <span>Related Costs</span>
                      <span>$2,060</span>
                      <span>$23,860</span>
                    </p>
                    <p className="flex flex-row justify-between px-5 py-3 items-center text-[16px] md:text-lg font-medium text-[#656561] border-b border-gray-200">
                      <span>Insurance</span>
                      <span>$960</span>
                      <span>$1,990</span>
                    </p>
                    <p className="flex flex-row justify-between px-5 items-center text-[16px] md:text-lg font-medium text-[#656561]">
                      <span>Enrollment</span>
                      <span>$4,300</span>
                      <span>$40,999</span>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>
        {/* Art Accordion */}
        <div className=" bg-[#FFFFFF] rounded-md p-6 md:p-10 shadow-box ">
          <button
            onClick={openArt}
            className="w-full flex justify-between items-center"
          >
            <p className="flex items-center gap-x-2 text-primary-700">
              <RiPaintFill     
                size={30}
                className=""
              ></RiPaintFill   >
              <span className="text-xl md:text-2xl font-bold">Art & Design</span>
            </p>
            <span className="">
              <GrDown
                size={25}
                className={`${
                  artOpen === true && "rotate-180 transition duration-300"
                } transition duration-300`}
              ></GrDown>
            </span>
          </button>

          {artOpen && (
            <div className="mx-5 md:mx-7 lg:mx-9  py-6">
              <h2 className="text-[16px] md:text-lg font-medium  ">Domestic Fees</h2>
              <ul className="relative transition duration-500 top-0 left-0 w-full space-y-2  mt-4 rounded-md ">
                <li>
                  <div className=" space-y-3">
                    <h2 className="flex flex-row justify-between px-5 items-center bg-pink-200 text-[16px] md:text-lg font-medium py-3 rounded-md">
                      <span>Expense</span>
                      <span>Semester</span>
                      <span>Annual</span>
                    </h2>
                    <p className="flex flex-row justify-between px-5 py-3 items-center text-[16px] md:text-lg font-medium text-[#656561] border-b border-gray-200">
                      <span>Tuition Fees</span>
                      <span>$4,060</span>
                      <span>$13,990</span>
                    </p>
                    <p className="flex flex-row justify-between px-5 items-center text-[16px] md:text-lg font-medium text-[#656561]">
                      <span>Enrollment</span>
                      <span>$4,220</span>
                      <span>$45,866</span>
                    </p>
                  </div>
                </li>
              </ul>
              <h2 className="text-[16px] md:text-lg font-medium mt-12 ">International Fees</h2>
              <ul className="relative transition duration-500 top-0 left-0 w-full space-y-2  mt-4 rounded-md ">
                <li>
                  <div className=" space-y-3">
                    <h2 className="flex flex-row justify-between px-5 items-center bg-pink-200 text-[16px] md:text-lg font-medium py-3 rounded-md">
                      <span>Expense</span>
                      <span>Semester</span>
                      <span>Annual</span>
                    </h2>
                    <p className="flex flex-row justify-between px-5 py-3 items-center text-[16px] md:text-lg font-medium text-[#656561] border-b border-gray-200">
                      <span>Tuition Fees</span>
                      <span>$3,000</span>
                      <span>$21,100</span>
                    </p>
                    <p className="flex flex-row justify-between px-5 py-3 items-center text-[16px] md:text-lg font-medium text-[#656561] border-b border-gray-200">
                      <span>Related Costs</span>
                      <span>$2,110</span>
                      <span>$22,010</span>
                    </p>
                    <p className="flex flex-row justify-between px-5 py-3 items-center text-[16px] md:text-lg font-medium text-[#656561] border-b border-gray-200">
                      <span>Insurance</span>
                      <span>$960</span>
                      <span>$2,111</span>
                    </p>
                    <p className="flex flex-row justify-between px-5 items-center text-[16px] md:text-lg font-medium text-[#656561]">
                      <span>Enrollment</span>
                      <span>$4,980</span>
                      <span>$43,999</span>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllTuitionFee;
