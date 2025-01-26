import { useState } from "react";
import toast from "react-hot-toast";
import { IoIosArrowDown } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { VscRobot } from "react-icons/vsc";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import useAuth from "../hooks/useAuth";

const Nav = () => {
  const [moreCard, setMoreCard] = useState(false);
  const [admissionCard, setAdmissionCard] = useState(false);
  const [admissionSubCard, setAdmissionSubCard] = useState(false);
  const [userCard, setUserCard] = useState(false);
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut().then(() => {
      console.log("Logged out successfully");
      toast.success("Logged out successfully");
    });
  };

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
              <div className="inline-block relative" onMouseEnter={() => setAdmissionCard(true)} onMouseLeave={() => setAdmissionCard(false)}>
                <button className="hover:text-primary-800 duration-300 flex items-center justify-center gap-1">
                  Admission <IoIosArrowDown className={`duration-300 ${admissionCard ? "rotate-180" : ""}`} />
                </button>
                <div
                  className={`text-gray-600 w-max flex-col absolute -right-10 bg-white hidden lg:flex p-6 duration-300 border rounded-lg after:w-full after:h-20 after:absolute after:-top-20 after:left-0 ${
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
                  <Link to="/dates-deadlines" className="hover:text-primary-800 duration-300 py-2 border-b hover:bg-gray-50">
                    Dates & Deadlines
                  </Link>
                  <Link to="/tour" className="hover:text-primary-800 duration-300 py-2 hover:bg-gray-50">
                    Schedule a Tour
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
              <div className="inline-block relative" onMouseEnter={() => setMoreCard(true)} onMouseLeave={() => setMoreCard(false)}>
                <button className="hover:text-primary-800 duration-300 flex items-center justify-center gap-1">
                  More <IoIosArrowDown className={`duration-300 ${moreCard ? "rotate-180" : ""}`} />
                </button>
                <div
                  className={`text-gray-600 flex-col absolute -right-10 bg-white hidden lg:flex p-6 duration-300 border rounded-lg after:w-full after:h-20 after:absolute after:-top-20 after:left-0 ${
                    moreCard ? "top-10 opacity-100" : "-top-[30rem] opacity-0"
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
                  <Link to="/queries" className="hover:text-primary-800 duration-300 py-2 border-b hover:bg-gray-50">
                    Queries
                  </Link>
                  <Link to="/gallery" className="hover:text-primary-800 duration-300 py-2 border-b hover:bg-gray-50">
                    Gallery
                  </Link>
                  <Link to="/announcements" className="hover:text-primary-800 duration-300 py-2 border-b hover:bg-gray-50">
                    Announcements
                  </Link>
                  <Link to="/about" className="hover:text-primary-800 duration-300 py-2 border-b hover:bg-gray-50">
                    About
                  </Link>
                  <Link to="/testimonials" className="hover:text-primary-800 duration-300 py-2 border-b hover:bg-gray-50">
                    Testimonials
                  </Link>
                  <Link to="/news" className="hover:text-primary-800 duration-300 py-2 border-b hover:bg-gray-50">
                    News
                  </Link>
                  <Link to="/faq" className="hover:text-primary-800 duration-300 py-2 hover:bg-gray-50">
                    FAQ&apos;s
                  </Link>
                </div>
              </div>
            </div>
            <ul className="flex gap-4 lg:gap-8 items-center justify-center lg:border-s border-gray-300 lg:pl-10">
              <li className="relative hidden lg:inline-block">
                <Link to="/chatbot" className="text-3xl">
                  <VscRobot />
                </Link>
              </li>
              <li>
                {user ? (
                  <div className="relative">
                    <button onClick={() => setUserCard(!userCard)} className="size-10 rounded-full">
                      {user.photoURL ? (
                        <img src={user.photoURL} alt="User photo" className="size-full rounded-full object-cover" />
                      ) : (
                        <div className="size-full rounded-full bg-primary-800 flex justify-center items-center">
                          <span className="text-white">{user.displayName.charAt(0)}</span>
                        </div>
                      )}
                    </button>

                    <div
                      className={`absolute top-11 right-0 bg-white px-6 py-3 border duration-300 flex-col ${
                        userCard ? "animate-open-user-card flex rounded-xl" : "animate-close-user-card hidden"
                      }`}
                    >
                      <Link to="/profile" className="hover:text-primary-800 duration-300 py-2 pr-5 border-b hover:bg-gray-50">
                        Profile
                      </Link>
                      <Link to="/dashboard" className="hover:text-primary-800 duration-300 py-2 pr-5 border-b hover:bg-gray-50">
                        Dashboard
                      </Link>
                      <Link to="/cart" className="hover:text-primary-800 duration-300 py-2 pr-5 border-b hover:bg-gray-50">
                        Cart
                      </Link>
                      <Link to="/wishlist" className="hover:text-primary-800 duration-300 py-2 pr-5 border-b hover:bg-gray-50">
                        Wishlist
                      </Link>
                      <button
                        onClick={() => {
                          handleLogOut();
                          setUserCard(false);
                        }}
                        className="text-red-500 hover:text-red-800 duration-300 py-2 pr-5 hover:bg-gray-50 text-left"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                ) : (
                  <Link to="/login" className="bg-primary-700 text-white pt-1.5 pb-2 px-3 hover:bg-primary-800 rounded-md duration-300">
                    Login
                  </Link>
                )}
              </li>
              <li className="lg:hidden">
                <button onClick={() => setHamburgerMenu(!hamburgerMenu)}>
                  <RxHamburgerMenu className="text-2xl" />
                </button>

                {/* hamburgerMenu */}
                <div
                  className={`scrollable-card absolute h-screen top-0 bg-white p-6 border-l ${
                    hamburgerMenu ? "right-0" : "-right-full"
                  } duration-500 shadow-lg ${admissionSubCard ? "overflow-y-scroll" : ""}`}
                >
                  <button onClick={() => setHamburgerMenu(!hamburgerMenu)} className="absolute top-2 right-2">
                    <IoCloseOutline className="text-2xl" />
                  </button>
                  <Link to="/" className="hover:text-primary-800 duration-300 py-2 border-b hover:bg-gray-50 block">
                    Home
                  </Link>
                  <Link to="/chatbot" className="hover:text-primary-800 duration-300 py-2 border-b hover:bg-gray-50 block">
                    Chatbot
                  </Link>
                  <div>
                    <button
                      className="w-full text-left hover:text-primary-800 duration-300 py-2 border-b hover:bg-gray-50 flex items-center justify-between"
                      onClick={() => setAdmissionSubCard(!admissionSubCard)}
                    >
                      Admission <IoIosArrowDown className={`duration-300 ${admissionSubCard ? "rotate-180" : ""}`} />
                    </button>

                    <div className={`pl-5 duration-300 flex flex-col w-max overflow-hidden ${admissionSubCard ? "h-[245px]" : "h-0"}`}>
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
                      <Link to="/tour" className="hover:text-primary-800 duration-300 py-2 border-b hover:bg-gray-50">
                        Schedule a Tour
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
                  <Link to="/queries" className="hover:text-primary-800 duration-300 py-2 border-b hover:bg-gray-50 block">
                    Queries
                  </Link>
                  <Link to="/gallery" className="hover:text-primary-800 duration-300 py-2 border-b hover:bg-gray-50 block">
                    Gallery
                  </Link>
                  <Link to="/announcements" className="hover:text-primary-800 duration-300 py-2 border-b hover:bg-gray-50 block">
                    Announcements
                  </Link>
                  <Link to="/testimonials" className="hover:text-primary-800 duration-300 py-2 border-b hover:bg-gray-50 block">
                    Testimonials
                  </Link>
                  <Link to="/news" className="hover:text-primary-800 duration-300 py-2 border-b hover:bg-gray-50 block">
                    News
                  </Link>
                  <Link to="/faq" className="hover:text-primary-800 duration-300 py-2 hover:bg-gray-50 block">
                    FAQ&apos;s
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
