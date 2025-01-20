import { Link, NavLink } from "react-router-dom";
import { GoDependabot } from "react-icons/go";
import { IoIosAddCircleOutline, IoIosLogOut } from "react-icons/io";
import logo from '../assets/images/logo.png'
import { CgProfile } from "react-icons/cg";

const DashboardRoute = () => {

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

            <NavLink to='/dashboard/registeredStudents' className="flex items-center space-x-2 p-2 shadow-[0_0_3px_0] shadow-gray-300">
               <IoIosAddCircleOutline className="text-2xl" />
               <span className="font-light">Registered Students</span>
            </NavLink>

            <NavLink to='/dashboard/unregisteredStudents' className="flex items-center space-x-2 p-2 shadow-[0_0_3px_0] shadow-gray-300">
               <IoIosAddCircleOutline className="text-2xl" />
               <span className="font-light">Unregistered Students</span>
            </NavLink>

            <NavLink to='/dashboard/registeredInstructors' className="flex items-center space-x-2 p-2 shadow-[0_0_3px_0] shadow-gray-300">
               <IoIosAddCircleOutline className="text-2xl" />
               <span className="font-light">Registered Instructors</span>
            </NavLink>

            <NavLink to='/dashboard/unregisteredInstructors' className="flex items-center space-x-2 p-2 shadow-[0_0_3px_0] shadow-gray-300">
               <IoIosAddCircleOutline className="text-2xl" />
               <span className="font-light">Unregistered Instructors</span>
            </NavLink>

            <NavLink to='/dashboard/postAnnouncements' className="flex items-center space-x-2 p-2 shadow-[0_0_3px_0] shadow-gray-300">
               <IoIosAddCircleOutline className="text-2xl" />
               <span className="font-light">Post Announcements</span>
            </NavLink>

            <NavLink to='/dashboard/addProducts' className="flex items-center space-x-2 p-2 shadow-[0_0_3px_0] shadow-gray-300">
               <IoIosAddCircleOutline className="text-2xl" />
               <span className="font-light">Add Products</span>
            </NavLink>

            <NavLink to='/dashboard/manageProducts' className="flex items-center space-x-2 p-2 shadow-[0_0_3px_0] shadow-gray-300">
               <IoIosAddCircleOutline className="text-2xl" />
               <span className="font-light">Manage Products</span>
            </NavLink>

            <NavLink to='/dashboard/manageEvents' className="flex items-center space-x-2 p-2 shadow-[0_0_3px_0] shadow-gray-300">
               <IoIosAddCircleOutline className="text-2xl" />
               <span className="font-light">Manage Events</span>
            </NavLink>

            <NavLink to='/dashboard/addBlogs' className="flex items-center space-x-2 p-2 shadow-[0_0_3px_0] shadow-gray-300">
               <IoIosAddCircleOutline className="text-2xl" />
               <span className="font-light">Add Blogs</span>
            </NavLink>

            <NavLink to='/dashboard/manageBlogs' className="flex items-center space-x-2 p-2 shadow-[0_0_3px_0] shadow-gray-300">
               <IoIosAddCircleOutline className="text-2xl" />
               <span className="font-light">Manage Blogs</span>
            </NavLink>

            <NavLink to='/dashboard/approveBlogs' className="flex items-center space-x-2 p-2 shadow-[0_0_3px_0] shadow-gray-300">
               <IoIosAddCircleOutline className="text-2xl" />
               <span className="font-light">Approve Blogs</span>
            </NavLink>

            <NavLink to='/dashboard/approveCourses' className="flex items-center space-x-2 p-2 shadow-[0_0_3px_0] shadow-gray-300">
               <IoIosAddCircleOutline className="text-2xl" />
               <span className="font-light">Approve Courses</span>
            </NavLink>

            <NavLink to='/dashboard/manageGallery' className="flex items-center space-x-2 p-2 shadow-[0_0_3px_0] shadow-gray-300">
               <IoIosAddCircleOutline className="text-2xl" />
               <span className="font-light">Manage Gallery</span>
            </NavLink>
         </div>

         <div className="space-y-4">

            <NavLink to='/dashboard/my-profile' className="flex items-center space-x-2 p-2 shadow-[0_0_3px_0] shadow-gray-300">
               <CgProfile className="text-2xl" />
               <span className="font-light">My Profile</span>
            </NavLink>

            <span className="flex items-center space-x-2 p-2 bg-[#f8071f] text-white cursor-pointer justify-center">
               <IoIosLogOut className="text-2xl" />
               <span className="font-light ">Log Out</span>
            </span>
         </div>




      </div>
   );
};

export default DashboardRoute;