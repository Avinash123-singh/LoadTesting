import React, { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import Configuration from "../configuration/configuration";
import RecentActivity from "./component/RecentActivity";

const SummaryReport = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState("summary");

  const tabContent = {
    summary: (
      <div className="p-4">
      
        <RecentActivity />
      </div>
    ),
    configuration: <Configuration />,
  };

  return (
    <div className="bg-white shadow p-2 sm:p-4 w-full">
      <button
        onClick={onBack}
        className="flex items-center text-gray-600 hover:text-teal-600 mb-2"
      >
        <IoMdArrowRoundBack className="text-xl" />
      </button>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
        <div className="flex-1">
          <h2 className="text-base sm:text-lg font-bold text-gray-800">
            United Load Scenario Name 1Test1{" "}
            <span className="text-green-500">[Active]</span>
          </h2>
          <p className="text-gray-600 text-sm mt-1">
            Lorem ipsum lorem ipsum lorem ipsumtorem ipsum lorem,
          </p>
          <p className="text-gray-600 text-sm mt-1">
            ipsum lorem ipsumLorem ipsum lorem ipsum lore
          </p>
        </div>

        <div className="flex flex-wrap md:flex-nowrap gap-x-4 text-sm text-gray-600">
          <div>CD & Scenario ID: 191616</div>
          <div>Report ID: 191616</div>
        </div>
      </div>

      <div className="flex flex-wrap border-b border-gray-200">
        <button
          className={`px-4 py-2 font-medium transition ${
            activeTab === "summary"
              ? "text-teal-600 border-b-2 border-teal-600"
              : "text-gray-500 hover:text-teal-600"
          }`}
          onClick={() => setActiveTab("summary")}
        >
          Summary
        </button>
        <button
          className="px-4 py-2 font-medium text-gray-400 cursor-not-allowed"
          disabled
        >
          Sessions
        </button>
        <button
          className={`px-4 py-2 font-medium transition ${
            activeTab === "configuration"
              ? "text-teal-600 border-b-2 border-teal-600"
              : "text-gray-500 hover:text-teal-600"
          }`}
          onClick={() => setActiveTab("configuration")}
        >
          Configuration
        </button>
      </div>

      <div className="mt-4 min-h-[300px]">{tabContent[activeTab]}</div>
    </div>
  );
};

export default SummaryReport;
