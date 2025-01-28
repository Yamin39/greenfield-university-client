import { Outlet } from "react-router-dom";
import DashboardRoute from "./DashboardRoute";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const Dashboard = () => {
   const [sideBar, setSideBar] = useState(false)

   const handleSidebar = () => {
      setSideBar(!sideBar)
      console.log(sideBar);

   }
   return (
      <div className="flex space-x-10 relative">

         <div className={`w-[400px] duration-500 ${sideBar ? 'ml-0' : '-ml-[400px] lg:-ml-0'} bg-gray-50 min-h-screen border-r absolute`}>
            <DashboardRoute />
         </div>
         <div className="w-full pr-10 lg:pl-[400px]">
            <Outlet />
         </div>

         <div onClick={handleSidebar} className="absolute top-4 -left-6 cursor-pointer border bg-white text-red-500 lg:hidden">
            {
               sideBar ? <IoCloseOutline className="text-2xl" /> : <MenuIcon />
            }

         </div>

      </div>
   );
};

export default Dashboard;