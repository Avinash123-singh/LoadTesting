import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import Avatar from "../assets/Avatar.svg";
import {
  FilePlus,
  FlaskConical,
  BarChart2,
  Settings,
  ClipboardList,
  Wrench,
  User,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Nav = ({ isCollapsed, toggleCollapse }) => {
  // Increased padding-left and added padding-right for better spacing
  const baseClass = "text-white flex items-center gap-2 px-3 pl-4";
  const activeClass = "font-bold underline";

  const links = [
    { to: "/new", icon: <FilePlus className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />, label: "New" },
    { to: "/test", icon: <FlaskConical className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />, label: "Test" },
    { to: "/report", icon: <BarChart2 className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />, label: "Report" },
    { to: "/manage", icon: <Settings className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />, label: "Manage" },
    { to: "/eswr", icon: <ClipboardList className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />, label: "ESWR" },
    { to: "/services", icon: <Wrench className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />, label: "Services" },
    { to: "/account", icon: <User className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />, label: "Account" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 h-screen bg-[#006064] p-1 sm:p-2 md:p-3 transition-all duration-300 flex flex-col ${
        isCollapsed ? "w-14 sm:w-16 md:w-20" : "w-40 sm:w-44 md:w-52"  // Increased widths slightly
      }`}
    >
      {/* Logo and Toggle */}
      <div className="flex items-center justify-between mb-2 sm:mb-3 md:mb-4 px-1 sm:px-2">
        <img
          src={Logo}
          alt="Logo"
          className={`transition-all duration-300 ${
            isCollapsed ? "w-6 sm:w-7" : "w-22 sm:w-24 md:w-26"  // Slightly increased logo sizes
          }`}
        />
        <button onClick={toggleCollapse} className="text-white ml-auto">
          {isCollapsed ? (
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          ) : (
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          )}
        </button>
      </div>

      {/* Avatar and Admin Info */}
      <div className={`flex items-center ${isCollapsed ? "justify-center" : "justify-start"} mb-3 sm:mb-4 px-1 sm:px-2`}>
        <img
          src={Avatar}
          alt="Avatar"
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full"
        />
        {!isCollapsed && (
          <div className="ml-3 sm:ml-4 md:ml-5 flex flex-col justify-center h-16 sm:h-18 md:h-20">
            <span className="text-white text-xs sm:text-sm md:text-md font-semibold leading-tight">
              Admin
            </span>
            <span className="text-white text-xs sm:text-sm leading-tight">
              Avinash Singh
            </span>
          </div>
        )}
      </div>

      {/* Navigation Links - Added padding to shift items right */}
      <ul className="flex flex-col space-y-2 sm:space-y-3 md:space-y-4 pl-1 sm:pl-2">
        {links.map(({ to, icon, label }) => (
          <li key={to} className="w-full">
            <NavLink
              to={to}
              className={({ isActive }) =>
                `${baseClass} ${isActive ? activeClass : ""} py-1 w-full ${
                  isCollapsed ? "justify-center" : "justify-start"
                }`
              }
            >
              {icon}
              {!isCollapsed && (
                <span className="text-xs sm:text-sm md:text-base">{label}</span>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;