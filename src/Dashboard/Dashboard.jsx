import { Outlet } from "react-router-dom";
import DashboardRoute from "./DashboardRoute";
import { MenuIcon } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";
import { RiCloseLargeFill } from "react-icons/ri";

const Dashboard = () => {
  const [sideBar, setSideBar] = useState(false);
  const sidebarRef = useRef(null);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is outside both sidebar and menu button
      if (
        sideBar && 
        sidebarRef.current && 
        !sidebarRef.current.contains(event.target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setSideBar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [sideBar]);

  const handleSidebar = () => {
    setSideBar(!sideBar);
  };

  return (
    <div className="flex lg:space-x-10 relative">
      <div
        ref={sidebarRef}
        className={`w-[350px] lg:w-[400px] duration-700 ${
          sideBar ? "ml-0" : "-ml-[400px]"
        } lg:ml-0 lg:opacity-100 ${
          !sideBar ? "opacity-0 lg:opacity-100" : "opacity-100"
        } bg-gray-50 min-h-screen h-screen border-r fixed z-20 overflow-y-auto`}
      >
        <DashboardRoute />
      </div>
      <div className="w-full px-3 lg:pr-10 lg:pl-[400px]">
        <Outlet />
      </div>

      <div
        ref={menuButtonRef}
        onClick={handleSidebar}
        className={`absolute top-4 left-3 cursor-pointer border bg-white text-primary-700 lg:hidden z-30 p-1 duration-300 hover:bg-slate-100 ${sideBar ? 'border-red-200' : 'border-green-200'}`}
      >
         <RiCloseLargeFill className={`text-3xl duration-300 ${sideBar ? 'rotate-0 text-red-500' : 'rotate-[135deg]'}`} /> 
      </div>
    </div>
  );
};

export default Dashboard;