import { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { IoIosArrowUp } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Nav = () => {
  const cartCount = 0;
  const [moreCard, setMoreCard] = useState(false);
  const [admissionCard, setAdmissionCard] = useState(false);
  const [admissionSubCard, setAdmissionSubCard] = useState(false);
  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  return (
    <>
      <nav className="bg-white fixed w-full z-[9999] top-0 start-0 shadow-box">
        <div className="max-w-7xl mx-auto flex gap-6 justify-between items-center p-4">
          <div className="flex flex-col justify-center items-center ">
            <img src={logo} className="w-8 h-6 object-contain" alt="Greenfield University Logo" />
            <h3 className="text-sm font-bold tracking-tight text-gray-800">
              <span className="text-[#1AB69D]">Greenfield</span>
              <span className="text-gray-600 ml-1">University</span>
            </h3>
          </div>

          <div className="flex gap-10 items-center justify-center">
            <div className="hidden lg:flex gap-10 items-center justify-center">
              <Link to="/" className="hover:text-primary-800 duration-300">
                Home
              </Link>
              <div
                className="inline-block relative after:size-full after:absolute after:-bottom-6"
                onMouseEnter={() => setAdmissionCard(true)}
                onMouseLeave={() => setAdmissionCard(false)}
              >
                <button className="hover:text-primary-800 duration-300 flex items-center justify-center gap-1">
                  Admission <IoIosArrowUp className={`duration-300 ${admissionCard ? "rotate-180" : ""}`} />
                </button>
                <div
                  className={`text-gray-600 w-max flex-col absolute overflow-y-hidden -right-10 bg-white hidden lg:flex p-6 duration-300 border rounded-lg ${
                    admissionCard ? "top-10 opacity-100" : "-top-[20rem] opacity-0"
                  }`}
                >
                  <Link to="/university-overview" className="hover:text-primary-800 duration-300 py-2 border-b hover:bg-gray-50">
                    Overview
                  </Link>
                  <Link to="/university-apply" className="hover:text-primary-800 duration-300 py-2 border-b hover:bg-gray-50">
                    How To Apply
                  </Link>
                  <Link to="/tuition-fees" className="hover:text-primary-800 duration-300 py-2 border-b hover:bg-gray-50">
                    Tuition fees
                  </Link>
                  <Link to="/financial-aid" className="hover:text-primary-800 duration-300 py-2 border-b hover:bg-gray-50">
                    Financial Aid
                  </Link>
                  <Link to="/dates-deadlines" className="hover:text-primary-800 duration-300 py-2 hover:bg-gray-50">
                    Dates & Deadlines
                  </Link>
                </div>
              </div>
              <Link to="/our-course" className="hover:text-primary-800 duration-300">
                Courses
              </Link>
              <Link to="/blogs" className="hover:text-primary-800 duration-300">
                Blogs
              </Link>
              <Link to="/contact" className="hover:text-primary-800 duration-300">
                Contact
              </Link>
              <div
                className="inline-block relative after:size-full after:absolute after:-bottom-6"
                onMouseEnter={() => setMoreCard(true)}
                onMouseLeave={() => setMoreCard(false)}
              >
                <button className="hover:text-primary-800 duration-300 flex items-center justify-center gap-1">
                  More <IoIosArrowUp className={`duration-300 ${moreCard ? "rotate-180" : ""}`} />
                </button>
                <div
                  className={`text-gray-600 flex-col absolute overflow-y-hidden -right-10 bg-white hidden lg:flex p-6 duration-300 border rounded-lg ${
                    moreCard ? "top-10 opacity-100" : "-top-[20rem] opacity-0"
                  }`}
                >
                  <Link to="/instructors" className="hover:text-primary-800 duration-300 py-2 border-b hover:bg-gray-50">
                    Instructors
                  </Link>
                  <Link to="/events" className="hover:text-primary-800 duration-300 py-2 border-b hover:bg-gray-50">
                    Events
                  </Link>
                  <Link to="/shop" className="hover:text-primary-800 duration-300 py-2 border-b hover:bg-gray-50">
                    Shop
                  </Link>
                  <Link to="/community" className="hover:text-primary-800 duration-300 py-2 border-b hover:bg-gray-50">
                    Community
                  </Link>
                  <Link to="/gallery" className="hover:text-primary-800 duration-300 py-2 border-b hover:bg-gray-50">
                    Gallery
                  </Link>
                  <Link to="/announcements" className="hover:text-primary-800 duration-300 py-2 border-b hover:bg-gray-50">
                    Announcements
                  </Link>
                  <Link to="/about" className="hover:text-primary-800 duration-300 py-2 hover:bg-gray-50">
                    About
                  </Link>
                </div>
              </div>
            </div>
            <ul className="flex gap-10 items-center justify-center lg:border-s border-gray-300 lg:pl-10">
              <li className="relative inline-block">
                <Link to="/cart" className="relative text-2xl">
                  <BsCart2 className="hover:text-primary-800 duration-300" />
                  <span className="absolute -top-2 -right-2 text-xs flex justify-center items-center size-[18px] rounded-full bg-primary-800 text-white">
                    {cartCount}
                  </span>
                </Link>
              </li>
              <li className="hidden lg:inline-block">
                <Link to="/" className="bg-primary-700 text-white pt-1.5 pb-2 px-3 hover:bg-primary-800 rounded-md duration-300">
                  Login
                </Link>
              </li>
              <li className="lg:hidden">
                <button onClick={() => setHamburgerMenu(!hamburgerMenu)}>
                  <RxHamburgerMenu className="text-2xl" />
                </button>

                {/* hamburgerMenu */}
                <div
                  className={`absolute h-screen top-0 bg-white p-6 border-l ${hamburgerMenu ? "right-0" : "-right-full"} duration-500 shadow-lg ${
                    admissionSubCard ? "overflow-y-scroll" : ""
                  }`}
                >
                  <button onClick={() => setHamburgerMenu(!hamburgerMenu)} className="absolute top-2 right-2">
                    <IoCloseOutline className="text-2xl" />
                  </button>
                  <Link to="/" className="bg-primary-700 text-white text-center pt-1.5 pb-2 px-3 hover:bg-primary-800 rounded-md duration-300 block mt-4">
                    Login
                  </Link>
                  <Link to="/" className="hover:text-primary-800 duration-300 py-2 border-b hover:bg-gray-50 block">
                    Home
                  </Link>
                  <div>
                    <button
                      className="w-full text-left hover:text-primary-800 duration-300 py-2 border-b hover:bg-gray-50 flex items-center justify-between"
                      onClick={() => setAdmissionSubCard(!admissionSubCard)}
                    >
                      Admission <IoIosArrowUp className={`duration-300 ${admissionSubCard ? "rotate-180" : ""}`} />
                    </button>

                    <div className={`pl-5 duration-300 flex flex-col w-max overflow-hidden ${admissionSubCard ? "h-[204px]" : "h-0"}`}>
                      <Link to="/university-overview" className="hover:text-primary-800 duration-300 py-2 border-b hover:bg-gray-50">
                        Overview
                      </Link>
                      <Link to="/university-apply" className="hover:text-primary-800 duration-300 py-2 border-b hover:bg-gray-50">
                        How To Apply
                      </Link>
                      <Link to="/tuition-fees" className="hover:text-primary-800 duration-300 py-2 border-b hover:bg-gray-50">
                        Tuition fees
                      </Link>
                      <Link to="/financial-aid" className="hover:text-primary-800 duration-300 py-2 border-b hover:bg-gray-50">
                        Financial Aid
                      </Link>
                      <Link to="/dates-deadlines" className="hover:text-primary-800 duration-300 py-2 border-b hover:bg-gray-50">
                        Dates & Deadlines
                      </Link>
                    </div>
                  </div>
                  <Link to="/our-course" className="hover:text-primary-800 duration-300 py-2 border-b hover:bg-gray-50 block">
                    Courses
                  </Link>
                  <Link to="/blogs" className="hover:text-primary-800 duration-300 py-2 border-b hover:bg-gray-50 block">
                    Blogs
                  </Link>
                  <Link to="/about" className="hover:text-primary-800 duration-300 py-2 border-b hover:bg-gray-50 block">
                    About
                  </Link>
                  <Link to="/contact" className="hover:text-primary-800 duration-300 py-2 border-b hover:bg-gray-50 block">
                    Contact
                  </Link>
                  <Link to="/instructors" className="hover:text-primary-800 duration-300 py-2 border-b hover:bg-gray-50 block">
                    Instructors
                  </Link>
                  <Link to="/events" className="hover:text-primary-800 duration-300 py-2 border-b hover:bg-gray-50 block">
                    Events
                  </Link>
                  <Link to="/shop" className="hover:text-primary-800 duration-300 py-2 border-b hover:bg-gray-50 block">
                    Shop
                  </Link>
                  <Link to="/community" className="hover:text-primary-800 duration-300 py-2 border-b hover:bg-gray-50 block">
                    Community
                  </Link>
                  <Link to="/gallery" className="hover:text-primary-800 duration-300 py-2 border-b hover:bg-gray-50 block">
                    Gallery
                  </Link>
                  <Link to="/announcements" className="hover:text-primary-800 duration-300 py-2 hover:bg-gray-50 block">
                    Announcements
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
