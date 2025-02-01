import { Link, NavLink, useNavigate } from "react-router-dom";
import { GoDependabot } from "react-icons/go";
import { IoIosAddCircleOutline, IoIosLogOut } from "react-icons/io";
import logo from '../assets/images/logo.png'
import { CgProfile } from "react-icons/cg";
import { LiaChalkboardTeacherSolid, LiaUserSlashSolid, LiaUserSolid } from "react-icons/lia";
import { PiChalkboardTeacher, PiChalkboardTeacherFill, PiChalkboardTeacherThin } from "react-icons/pi";
import { TfiAnnouncement, TfiGallery } from "react-icons/tfi";
import { MdManageHistory, MdManageSearch, MdOutlineAnnouncement, MdOutlineEventAvailable, MdOutlineManageHistory, MdOutlinePlaylistAdd, MdOutlineSms } from "react-icons/md";
import { TbLogs } from "react-icons/tb";
import { IoAdd, IoBookSharp } from "react-icons/io5";
import { CiSquareCheck } from "react-icons/ci";
import { FaQrcode, FaQuoteLeft, FaRegCheckSquare } from "react-icons/fa";
import { AiOutlineQuestion } from "react-icons/ai";
import { BsClockHistory } from "react-icons/bs";
import { SiGoogletagmanager } from "react-icons/si";
import useRole from "../hooks/useRole";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";


const DashboardRoute = () => {
   const { user, logOut } = useAuth();
   const navigate = useNavigate();
   const role = useRole(user?.email);

   const handleLogOut = () => {
      logOut().then(() => {
        console.log("Logged out successfully");
        navigate("/login");
        toast.success("Logged out successfully");
      });
    };
   return (
      <div className="py-10 px-6 flex flex-col justify-between min-h-screen">

         <div className="space-y-4 dashboard flex-grow pb-4">

            <Link to='/' className="flex items-center justify-center w-full pb-4 space-x-3">
               <img src={logo} alt="" className="w-12" />
               <h2 className="text-lg leading-5"><span className="text-primary-700">Greenfield</span><br />University</h2>
            </Link>

            <NavLink to='/dashboard/statistics' className="flex items-center space-x-2 p-2 shadow-[0_0_3px_0] shadow-gray-300">
               <GoDependabot className="text-2xl" />
               <span className="font-light">Statistics</span>
            </NavLink>
 
            {/* navigation menu for admin */}

            {
               role === 'admin' &&
               <>
                  <p className="font-light text-gray-600">Registration</p>

                  <NavLink to='/dashboard/registeredStudents' className="flex items-center space-x-2 p-2 shadow-[0_0_3px_0] shadow-gray-300">
                     <LiaUserSolid className="text-2xl" />
                     <span className="font-light">Registered Students</span>
                  </NavLink>

                  <NavLink to='/dashboard/unregisteredStudents' className="flex items-center space-x-2 p-2 shadow-[0_0_3px_0] shadow-gray-300">
                     <LiaUserSlashSolid className="text-2xl" />
                     <span className="font-light">Unregistered Students</span>
                  </NavLink>

                  <NavLink to='/dashboard/registeredInstructors' className="flex items-center space-x-2 p-2 shadow-[0_0_3px_0] shadow-gray-300">
                     <PiChalkboardTeacherThin className="text-2xl" />
                     <span className="font-light">Registered Instructors</span>
                  </NavLink>

                  <NavLink to='/dashboard/unregisteredInstructors' className="flex items-center space-x-2 p-2 shadow-[0_0_3px_0] shadow-gray-300">
                     <PiChalkboardTeacherFill className="text-2xl" />
                     <span className="font-light">Unregistered Instructors</span>
                  </NavLink>

                  <p className="font-light text-gray-600">Announcements</p>

                  <NavLink to='/dashboard/postAnnouncements' className="flex items-center space-x-2 p-2 shadow-[0_0_3px_0] shadow-gray-300">
                     <TfiAnnouncement className="text-2xl" />
                     <span className="font-light">Post Announcements</span>
                  </NavLink>

                  <NavLink to='/dashboard/manageAnnouncements' className="flex items-center space-x-2 p-2 shadow-[0_0_3px_0] shadow-gray-300">
                     <MdOutlineAnnouncement className="text-2xl" />
                     <span className="font-light">Manage Announcements</span>
                  </NavLink>

                  <p className="font-light text-gray-600">Products</p>

                  <NavLink to='/dashboard/addProduct' className="flex items-center space-x-2 p-2 shadow-[0_0_3px_0] shadow-gray-300">
                     <IoIosAddCircleOutline className="text-2xl" />
                     <span className="font-light">Add Product</span>
                  </NavLink>

                  <NavLink to='/dashboard/manageProducts' className="flex items-center space-x-2 p-2 shadow-[0_0_3px_0] shadow-gray-300">
                     <MdManageSearch className="text-2xl" />
                     <span className="font-light">Manage Products</span>
                  </NavLink>

                  <p className="font-light text-gray-600">Events</p>

                  <NavLink to='/dashboard/addEvents' className="flex items-center space-x-2 p-2 shadow-[0_0_3px_0] shadow-gray-300">
                     <MdOutlineEventAvailable className="text-2xl" />
                     <span className="font-light">Add Events</span>
                  </NavLink>

                  <NavLink to='/dashboard/manageEvents' className="flex items-center space-x-2 p-2 shadow-[0_0_3px_0] shadow-gray-300">
                     <MdManageHistory className="text-2xl" />
                     <span className="font-light">Manage Events</span>
                  </NavLink>

                  <p className="font-light text-gray-600">Blogs</p>

                  <NavLink to='/dashboard/addBlog' className="flex items-center space-x-2 p-2 shadow-[0_0_3px_0] shadow-gray-300">
                     <IoAdd className="text-2xl" />
                     <span className="font-light">Add Blog</span>
                  </NavLink>

                  <NavLink to='/dashboard/manageBlogs' className="flex items-center space-x-2 p-2 shadow-[0_0_3px_0] shadow-gray-300">
                     <TbLogs className="text-2xl" />
                     <span className="font-light">Manage Blogs</span>
                  </NavLink>

                  <NavLink to='/dashboard/approveBlogs' className="flex items-center space-x-2 p-2 shadow-[0_0_3px_0] shadow-gray-300">
                     <CiSquareCheck className="text-2xl" />
                     <span className="font-light">Approve Blogs</span>
                  </NavLink>

                  <p className="font-light text-gray-600">FAQ&apos;s</p>

                  <NavLink to='/dashboard/addFAQ' className="flex items-center space-x-2 p-2 shadow-[0_0_3px_0] shadow-gray-300">
                     <FaQuoteLeft className="text-2xl" />
                     <span className="font-light">Add FAQ</span>
                  </NavLink>

                  <NavLink to='/dashboard/manageFAQ' className="flex items-center space-x-2 p-2 shadow-[0_0_3px_0] shadow-gray-300">
                     <FaQrcode className="text-2xl" />
                     <span className="font-light">Manage FAQ</span>
                  </NavLink>

                  <p className="font-light text-gray-600">Testimonials</p>

                  <NavLink to='/dashboard/addTestimonial' className="flex items-center space-x-2 p-2 shadow-[0_0_3px_0] shadow-gray-300">
                     <MdOutlinePlaylistAdd className="text-2xl" />
                     <span className="font-light">Add Testimonial</span>
                  </NavLink>

                  <NavLink to='/dashboard/manageTestimonials' className="flex items-center space-x-2 p-2 shadow-[0_0_3px_0] shadow-gray-300">
                     <SiGoogletagmanager className="text-2xl" />
                     <span className="font-light">Manage Testimonials</span>
                  </NavLink>

                  <p className="font-light text-gray-600">Others</p>

                  <NavLink to='/dashboard/approveCourses' className="flex items-center space-x-2 p-2 shadow-[0_0_3px_0] shadow-gray-300">
                     <FaRegCheckSquare className="text-2xl" />
                     <span className="font-light">Approve Courses</span>
                  </NavLink>

                  <NavLink to='/dashboard/manageGallery' className="flex items-center space-x-2 p-2 shadow-[0_0_3px_0] shadow-gray-300">
                     <TfiGallery className="text-2xl" />
                     <span className="font-light">Manage Gallery</span>
                  </NavLink>

                  <NavLink to='/dashboard/contactRequests' className="flex items-center space-x-2 p-2 shadow-[0_0_3px_0] shadow-gray-300">
                     <MdOutlineSms className="text-2xl" />
                     <span className="font-light">Contact Requests</span>
                  </NavLink>

                  <NavLink to='/dashboard/purchasedHistory' className="flex items-center space-x-2 p-2 shadow-[0_0_3px_0] shadow-gray-300">
                     <BsClockHistory className="text-2xl" />
                     <span className="font-light">Purchased History</span>
                  </NavLink>
               </>
            }

            {/* navigation menu for instructor */}

            {
               role === 'instructor' &&
               <>
                  <p className="font-light text-gray-600">Courses</p>

                  <NavLink to='/dashboard/addCourse' className="flex items-center space-x-2 p-2 shadow-[0_0_3px_0] shadow-gray-300">
                     <IoIosAddCircleOutline className="text-2xl" />
                     <span className="font-light">Add Course</span>
                  </NavLink>

                  <NavLink to='/dashboard/manageCourse' className="flex items-center space-x-2 p-2 shadow-[0_0_3px_0] shadow-gray-300">
                     <LiaChalkboardTeacherSolid className="text-2xl" />
                     <span className="font-light">Manage Course</span>
                  </NavLink>

                  <p className="font-light text-gray-600">Blogs</p>

                  <NavLink to='/dashboard/addBlog' className="flex items-center space-x-2 p-2 shadow-[0_0_3px_0] shadow-gray-300">
                     <IoIosAddCircleOutline className="text-2xl" />
                     <span className="font-light">Add Blog</span>
                  </NavLink>

                  <NavLink to='/dashboard/manageBlogs' className="flex items-center space-x-2 p-2 shadow-[0_0_3px_0] shadow-gray-300">
                     <MdOutlineManageHistory className="text-2xl" />
                     <span className="font-light">Manage Blogs</span>
                  </NavLink>
               </>

            }

            {/* navigation menu for student */}

            {
               role === 'student' &&
               <>
                  <p className="font-light text-gray-600">Blogs</p>

                  <NavLink to='/dashboard/addBlog' className="flex items-center space-x-2 p-2 shadow-[0_0_3px_0] shadow-gray-300">
                     <IoIosAddCircleOutline className="text-2xl" />
                     <span className="font-light">Add Blog</span>
                  </NavLink>

                  <NavLink to='/dashboard/manageBlogs' className="flex items-center space-x-2 p-2 shadow-[0_0_3px_0] shadow-gray-300">
                     <MdOutlineManageHistory className="text-2xl" />
                     <span className="font-light">Manage Blogs</span>
                  </NavLink>

                  <p className="font-light text-gray-600">Query</p>

                  <NavLink to='/dashboard/manageQuery' className="flex items-center space-x-2 p-2 shadow-[0_0_3px_0] shadow-gray-300">
                     <AiOutlineQuestion className="text-2xl" />
                     <span className="font-light">Manage Query</span>
                  </NavLink>

                  <p className="font-light text-gray-600">Purchases</p>

                  <NavLink to='/dashboard/registeredCourse' className="flex items-center space-x-2 p-2 shadow-[0_0_3px_0] shadow-gray-300">
                     <PiChalkboardTeacher className="text-2xl" />
                     <span className="font-light">Registered Course</span>
                  </NavLink>

                  <NavLink to='/dashboard/purchasedBooks' className="flex items-center space-x-2 p-2 shadow-[0_0_3px_0] shadow-gray-300">
                     <IoBookSharp className="text-2xl" />
                     <span className="font-light">My Purchased Books</span>
                  </NavLink>

                  


               </>

            }
         </div>

         <div className="space-y-4">

            <NavLink to={`/dashboard/${role}/my-profile`} className="flex items-center space-x-2 p-2 shadow-[0_0_3px_0] shadow-gray-300">
               <CgProfile className="text-2xl" />
               <span className="font-light">My Profile</span>
            </NavLink>
           

            <button
            onClick={() => {
               handleLogOut();
            }}
            className="w-full flex items-center space-x-2 p-2 bg-[#f8071f] text-white cursor-pointer justify-center">
               <IoIosLogOut className="text-2xl" />
               <span className="font-light ">Log Out</span>
            </button>
         </div>




      </div>
   );
};

export default DashboardRoute;