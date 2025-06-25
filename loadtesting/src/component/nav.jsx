import React from "react";
import { NavLink } from "react-router-dom";
import {
  FilePlus,
  FlaskConical,
  BarChart2,
  Settings,
  ClipboardList,
  Wrench,
  User,
} from "lucide-react";

const Nav = () => {
  const baseClass = "text-white flex items-center justify-start gap-2 px-2";
  const activeClass = "font-bold underline";

  return (
    <nav className="fixed left-0 top-0 h-screen w-24 sm:w-32 md:w-48 bg-[#006064] p-2 sm:p-4 transition-all duration-300">
      <ul className="flex flex-col items-start space-y-2 sm:space-y-4 md:space-y-6">
        <li className="w-full">
          <NavLink
            to="/new"
            className={({ isActive }) =>
              `${baseClass} ${isActive ? activeClass : ""} text-xs sm:text-sm md:text-base py-1 sm:py-2 w-full`
            }
          >
            <FilePlus size={16} />
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
            <FlaskConical size={16} />
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
            <BarChart2 size={16} />
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
            <Settings size={16} />
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
            <ClipboardList size={16} />
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
            <Wrench size={16} />
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
            <User size={16} />
            Account
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
