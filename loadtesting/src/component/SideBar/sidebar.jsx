import React, { useState } from "react";
import {
  FaSearch,
  FaDesktop,
  FaFileAlt,
  FaDownload,
  FaImage,
  FaMusic,
  FaVideo,
  FaHdd,
} from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

const NewSidebar = () => {
  const [showFavoriteItems, setShowFavoriteItems] = useState(true);
  const [showDriveItems, setShowDriveItems] = useState(true);

  const [favoriteExpanded, setFavoriteExpanded] = useState({});
  const [driveExpanded, setDriveExpanded] = useState({});

  const toggleFavoriteItem = (label) => {
    setFavoriteExpanded((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const toggleDriveItem = (label) => {
    setDriveExpanded((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const favoriteItems = [
    { label: "Desktop", icon: <FaDesktop /> },
    { label: "Document", icon: <FaFileAlt /> },
    { label: "Download", icon: <FaDownload /> },
    { label: "Picture", icon: <FaImage /> },
    { label: "Music", icon: <FaMusic /> },
    { label: "Video", icon: <FaVideo /> },
  ];

  const driveItems = [
    
  ];

  return (
    <div className="w-32 sm:w-48 md:w-64 bg-gray-100 p-4 border-r h-full flex flex-col justify-between font-poppins overflow-hidden">
      {/* Search */}
      <div className="overflow-y-auto">
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-10 py-2 border rounded focus:outline-none text-sm"
          />
          <FaSearch className="absolute left-3 top-2.5 text-gray-500 text-sm" />
        </div>

        <ul className="space-y-6">
          {/* Favorite Section */}
          <li className="text-gray-700 font-semibold text-base flex justify-between items-center cursor-pointer">
            <span>Favorite</span>
            <span onClick={() => setShowFavoriteItems(!showFavoriteItems)}>
              {showFavoriteItems ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </li>

          {showFavoriteItems && (
            <ul className="pl-4 space-y-4 text-sm sm:text-base">
              {favoriteItems.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center justify-between hover:[#006064] cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                  <span onClick={() => toggleFavoriteItem(item.label)}>
                    {favoriteExpanded[item.label] ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </li>
              ))}
            </ul>
          )}

          {/* Drives Section */}
          <li className="text-gray-700 font-semibold text-base flex justify-between items-center cursor-pointer">
            <span>Drives</span>
            <span onClick={() => setShowDriveItems(!showDriveItems)}>
              {showDriveItems ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </li>

          {showDriveItems && (
            <ul className="pl-4 space-y-4 text-sm sm:text-base">
              {driveItems.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center justify-between hover:text-blue-600 cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                  <span onClick={() => toggleDriveItem(item.label)}>
                    {driveExpanded[item.label] ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </ul>
      </div>

      {/* Bottom Button */}
      <div className="pt-4">
        <button className="w-full bg-[#006064] text-white px-4 py-2 rounded text-sm">
          Import from Monitoring
        </button>
      </div>
    </div>
  );
};

export default NewSidebar;
