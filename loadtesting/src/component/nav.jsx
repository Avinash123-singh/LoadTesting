import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const baseClass = "text-white text-center";
  const activeClass = "font-bold underline";

  return (
    <nav className="fixed left-0 top-0 h-screen w-48 bg-[#006064] p-6">
      <ul className="flex flex-col items-center space-y-8">
        <li>
          <NavLink
            to="/new"
            className={({ isActive }) => `${baseClass} ${isActive ? activeClass : ""}`}
          >
            New
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/test"
            className={({ isActive }) => `${baseClass} ${isActive ? activeClass : ""}`}
          >
            Test
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/report"
            className={({ isActive }) => `${baseClass} ${isActive ? activeClass : ""}`}
          >
            Report
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/manage"
            className={({ isActive }) => `${baseClass} ${isActive ? activeClass : ""}`}
          >
            Manage
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/eswr"
            className={({ isActive }) => `${baseClass} ${isActive ? activeClass : ""}`}
          >
            ESWR
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className={({ isActive }) => `${baseClass} ${isActive ? activeClass : ""}`}
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/account"
            className={({ isActive }) => `${baseClass} ${isActive ? activeClass : ""}`}
          >
            Account
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
