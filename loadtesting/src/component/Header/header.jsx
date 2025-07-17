// src/component/Header/header.jsx
import React from "react";

const Header = ({ onNewTestClick }) => {
  return (
    <div className="w-full bg-white shadow-md px-4 py-3 flex flex-col md:flex-row items-start md:items-center justify-between border-b">
      <h1 className="text-lg font-semibold text-gray-800 mb-2 md:mb-0">
        United Load Scenario Name 1 Test 1
      </h1>
      <div className="flex flex-col md:flex-row md:items-center gap-7 text-sm text-gray-700">
        <span>Scenario ID: 191616</span>
        <span>Report ID: 191616</span>
        <button
          className="bg-[#006064] text-white px-3 py-1 rounded"
          onClick={onNewTestClick}
        >
          New Test
        </button>
      </div>
    </div>
  );
};

export default Header;
