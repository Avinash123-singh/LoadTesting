import React, { useState } from "react";
import { FiGrid, FiShare2, FiCode } from "react-icons/fi";
import { TbNetwork } from "react-icons/tb";
import FormModal from "./FormModal";

const sections = {
  "Protocol Based": [
    "HTTP/S",
    "SOAP Web API",
    "REST Web API",
    "Web Socket",
    "Streaming Media",
  ],
  Websites: ["Real Browser"],
  "3rd Party Integration": ["Postman Collection", "Jmeters", "Selenium"],
};

const Overlay = ({ onBack }) => {
  const [selectedSection, setSelectedSection] = useState("All");
  const [showModal, setShowModal] = useState(false);

  const sectionKeys = Object.keys(sections);

  const handleSidebarClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <div className="w-full h-screen flex flex-col bg-[#f5f5f5]">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b bg-white shadow-md">
        <button
          className="text-[#006064] hover:text-[#004d4d] font-semibold"
          onClick={onBack}
        >
          ← Back
        </button>
        <button className="bg-[#006064] text-white px-4 sm:px-6 py-2 rounded hover:bg-[#004d4d] text-sm sm:text-base">
          Continue
        </button>
      </div>

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-[25%] min-w-[180px] max-w-[300px] bg-white p-3 sm:p-4 border-r overflow-y-auto">
          <ul className="space-y-4 pt-4 sm:pt-8">
            <li
              onClick={() => handleSidebarClick("All")}
              className={`flex items-center gap-2 sm:gap-3 px-3 py-2 sm:px-4 sm:py-2 rounded-md cursor-pointer text-sm sm:text-base ${
                selectedSection === "All"
                  ? "bg-[#e6f2f2] text-[#006064] font-semibold"
                  : "text-black hover:bg-gray-100"
              }`}
            >
              <FiGrid className="text-lg sm:text-xl" />
              <span>All Type</span>
            </li>

            <li
              onClick={() => handleSidebarClick("Protocol Based")}
              className={`flex items-center gap-2 sm:gap-3 px-3 py-2 rounded-md cursor-pointer text-sm sm:text-base ${
                selectedSection === "Protocol Based"
                  ? "bg-[#e6f2f2] text-[#006064] font-semibold"
                  : "text-black hover:bg-gray-100"
              }`}
            >
              <TbNetwork className="text-lg sm:text-xl" />
              <span>Protocol Based</span>
            </li>

            <li
              onClick={() => handleSidebarClick("3rd Party Integration")}
              className={`flex items-center gap-2 sm:gap-3 px-3 py-2 rounded-md cursor-pointer text-sm sm:text-base ${
                selectedSection === "3rd Party Integration"
                  ? "bg-[#e6f2f2] text-[#006064] font-semibold"
                  : "text-black hover:bg-gray-100"
              }`}
            >
              <FiShare2 className="text-lg sm:text-xl" />
              <span>3rd Party Integration</span>
            </li>

            <li
              onClick={() => handleSidebarClick("Websites")}
              className={`flex items-center gap-2 sm:gap-3 px-3 py-2 rounded-md cursor-pointer text-sm sm:text-base ${
                selectedSection === "Websites"
                  ? "bg-[#e6f2f2] text-[#006064] font-semibold"
                  : "text-black hover:bg-gray-100"
              }`}
            >
              <FiCode className="text-lg sm:text-xl" />
              <span>Websites</span>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 sm:p-6 md:p-8 overflow-y-auto">
          {(selectedSection === "All"
            ? sectionKeys
            : [selectedSection]
          ).map((category) => (
            <div key={category} className="mb-6">
              <h3 className="text-base sm:text-lg font-semibold text-gray-700 mb-3">
                {category}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
               {sections[category].map((item) => (
  <div
    key={item}
    className="bg-[#006064] text-white px-3 py-3 rounded flex items-center justify-between shadow text-sm sm:text-base cursor-pointer"
    onClick={() => setShowModal(true)}
  >
    <span>{item}</span>
    <span className="font-bold text-lg sm:text-xl">+</span>
  </div>
))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {showModal && <FormModal onClose={() => setShowModal(false)} />}
    </div>
    
  );
  
};

export default Overlay;
