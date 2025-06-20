import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const baseClass = "text-white text-center flex items-center justify-center";
  const activeClass = "font-bold underline";

  return (
    <nav className="fixed left-0 top-0 h-screen w-24 sm:w-32 md:w-48 bg-[#006064] p-2 sm:p-4 transition-all duration-300">
      <ul className="flex flex-col items-center space-y-2 sm:space-y-4 md:space-y-6">
        <li className="w-full">
          <NavLink
            to="/new"
            className={({ isActive }) => 
              `${baseClass} ${isActive ? activeClass : ""} text-xs sm:text-sm md:text-base py-1 sm:py-2 w-full`
            }
          >
            New
          </NavLink>
        </li>
        <li className="w-full">
          <NavLink
            to="/test"
            className={({ isActive }) => 
              `${baseClass} ${isActive ? activeClass : ""} text-xs sm:text-sm md:text-base py-1 sm:py-2 w-full`
            }
          >
            Test
          </NavLink>
        </li>
        <li className="w-full">
          <NavLink
            to="/report"
            className={({ isActive }) => 
              `${baseClass} ${isActive ? activeClass : ""} text-xs sm:text-sm md:text-base py-1 sm:py-2 w-full`
            }
          >
            Report
          </NavLink>
        </li>
        <li className="w-full">
          <NavLink
            to="/manage"
            className={({ isActive }) => 
              `${baseClass} ${isActive ? activeClass : ""} text-xs sm:text-sm md:text-base py-1 sm:py-2 w-full`
            }
          >
            Manage
          </NavLink>
        </li>
        <li className="w-full">
          <NavLink
            to="/eswr"
            className={({ isActive }) => 
              `${baseClass} ${isActive ? activeClass : ""} text-xs sm:text-sm md:text-base py-1 sm:py-2 w-full`
            }
          >
            ESWR
          </NavLink>
        </li>
        <li className="w-full">
          <NavLink
            to="/services"
            className={({ isActive }) => 
              `${baseClass} ${isActive ? activeClass : ""} text-xs sm:text-sm md:text-base py-1 sm:py-2 w-full`
            }
          >
            Services
          </NavLink>
        </li>
        <li className="w-full">
          <NavLink
            to="/account"
            className={({ isActive }) => 
              `${baseClass} ${isActive ? activeClass : ""} text-xs sm:text-sm md:text-base py-1 sm:py-2 w-full`
            }
          >
            Account
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;