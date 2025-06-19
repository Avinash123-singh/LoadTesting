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
    <div className="w-64 bg-gray-100 p-4 border-r h-full flex flex-col justify-between">
      {/* Top content */}
      <div>
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-10 py-2 border rounded focus:outline-none"
          />
          <FaSearch className="absolute left-3 top-2.5 text-gray-500" />
        </div>
        <ul className="space-y-3">
          {items.map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-3 text-gray-700 hover:text-blue-600 cursor-pointer"
            >
              {item.icon}
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom button */}
      <button className="mt-4 bg-[#006064] text-white px-4 py-2 rounded  mx-auto">
        Import from Monitoring
      </button>
    </div>
  );
};

export default NewSidebar;
