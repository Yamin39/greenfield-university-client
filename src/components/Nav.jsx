import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { IoIosArrowDown } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { VscRobot } from "react-icons/vsc";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";

const Nav = () => {
  const [moreCard, setMoreCard] = useState(false);
  const [admissionCard, setAdmissionCard] = useState(false);
  const [admissionSubCard, setAdmissionSubCard] = useState(false);
  const [userCard, setUserCard] = useState(false);
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  const { user, logOut } = useAuth();
  const role = useRole(user?.email);
  const sidebarRef = useRef(null);
  const userCardRef = useRef(null);

  const handleLogOut = () => {
    logOut().then(() => {
      toast.success("Logged out successfully");
    });
  };

  // sidebar related

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setHamburgerMenu(false);
      }
    };

    if (hamburgerMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [hamburgerMenu]);

  // profile related

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userCardRef.current && !userCardRef.current.contains(event.target)) {
        setUserCard(false);
      }
    };

    if (userCard) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [userCard]);

  return (
    <>
      <nav className="bg-white fixed w-full z-[9999] top-0 start-0 shadow-box">
        <div className="max-w-7xl mx-auto flex gap-6 justify-between items-center p-4">
          <Link to="/" className="flex flex-col justify-center items-center ">
            <img src={logo} className="w-8 h-6 object-contain" alt="Greenfield University Logo" />
            <h3 className="text-sm font-bold tracking-tight text-gray-800">
              <span className="text-primary-700">Greenfield</span>
              <span className="text-gray-600 ml-1">University</span>
            </h3>
          </Link>

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

                    {/* userProfile12 */}

                    <div
                      ref={userCardRef}
                      className={`text-gray-600 flex-col absolute right-7 top-9 bg-white flex p-6 duration-500 transform origin-top-right border *:py-2 *:border-b hover:*:bg-gray-50 ${
                        !user && "scale-0"
                      }  rounded-lg ${userCard ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
                    >
                      <Link to={`/dashboard/${role}/my-profile`} className="hover:text-primary-800 duration-300 py-2 pr-5 border-b hover:bg-gray-50">
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
                  ref={sidebarRef}
                  className={`fixed top-0 right-0 h-screen w-64 bg-white p-6 border-l shadow-lg transform transition-transform duration-700 ease-in-out ${
                    hamburgerMenu ? "translate-x-0" : "translate-x-full"
                  }`}
                >
                  <button onClick={() => setHamburgerMenu(false)} className="absolute top-2 right-2">
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
