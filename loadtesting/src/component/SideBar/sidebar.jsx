import React from "react";
import {
  FaSearch,
  FaStar,
  FaDesktop,
  FaFileAlt,
  FaDownload,
  FaImage,
  FaMusic,
  FaVideo,
  FaHdd,
} from "react-icons/fa";

const items = [
  { label: "Favorite", icon: <FaStar /> },
  { label: "Desktop", icon: <FaDesktop /> },
  { label: "Document", icon: <FaFileAlt /> },
  { label: "Download", icon: <FaDownload /> },
  { label: "Picture", icon: <FaImage /> },
  { label: "Music", icon: <FaMusic /> },
  { label: "Video", icon: <FaVideo /> },
  { label: "Drives", icon: <FaHdd /> },
];

const NewSidebar = () => {
  return (
    <div className="w-32 sm:w-48 md:w-64 bg-gray-100 p-2 sm:p-3 md:p-4 border-r h-full flex flex-col justify-between transition-all duration-300 overflow-hidden">
      {/* Top content */}
      <div className="overflow-y-auto">
        <div className="relative mb-3 sm:mb-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-8 sm:px-10 py-1 sm:py-2 border rounded focus:outline-none text-xs sm:text-sm"
          />
          <FaSearch className="absolute left-2 sm:left-3 top-1.5 sm:top-2.5 text-gray-500 text-sm" />
        </div>
        <ul className="space-y-1 sm:space-y-2 md:space-y-3">
          {items.map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-2 sm:gap-3 text-gray-700 hover:text-blue-600 cursor-pointer text-xs sm:text-sm md:text-base"
            >
              <span className="text-sm">{item.icon}</span>
              <span className="whitespace-nowrap overflow-hidden text-ellipsis">
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom button */}
      <div className="pt-2 px-1 sm:px-0">
        <button className="w-full bg-[#006064] text-white px-2 py-1.5 rounded text-xs sm:text-sm whitespace-nowrap overflow-hidden text-ellipsis">
          Import from Monitoring
        </button>
      </div>
    </div>
  );
};

export default NewSidebar;