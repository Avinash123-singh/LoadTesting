import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const ScenarioTarget = () => {
  const [showTable, setShowTable] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-4 sm:p-6  my-6 w-full overflow-x-hidden">

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between md:items-center mb-4 gap-2 w-full">
        <h2 className="text-lg font-semibold text-black">Scenario Target</h2>

        {/* Center Text */}
        <div className="text-sm text-gray-600 text-center flex-1">
          Last Validated:{" "}
          <span className="text-black">OK on May 15, 2025 2:59:53 PM</span>
        </div>

        <button className="bg-teal-600 text-white px-4 py-1 rounded hover:bg-teal-700 text-sm whitespace-nowrap self-end md:self-auto">
          View Details
        </button>
      </div>

      {/* Target URL with Toggle Arrow */}
      <div
        className="bg-gray-50 px-4 py-2 rounded-xl font-medium text-gray-800 mb-4 flex items-center justify-between cursor-pointer"
        onClick={() => setShowTable((prev) => !prev)}
      >
        http://www.google.com
        <button className="text-gray-600">
          {showTable ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
      </div>

      {/* Table and Delay Section */}
      {showTable && (
        <div className="flex flex-col lg:flex-row gap-4 overflow-x-auto">
          {/* Table */}
          <div className="flex-1 min-w-[300px] rounded-xl border border-gray-100 overflow-auto">
            <table className="w-full text-sm text-gray-800">
              <tbody>
                {[
                  ["Task Type", "HTTP/S"],
                  ["Time Validation Threshold", "60 Sec"],
                  ["Request Type", "Get"],
                  ["Follow Redirects", "Yes"],
                  ["Full page download", "No"],
                  ["Check Certificate Authority", "Yes"],
                  ["Check Certificate CN", "Yes"],
                  ["Check Certificate Date", "Yes"],
                  ["Check Certificate Revocation", "Yes"],
                  ["Check Certificate Usage", "Yes"],
                ].map(([label, value], idx) => (
                  <tr key={idx} className={idx < 9 ? "border-b" : ""}>
                    <td className="p-3 font-medium">{label}</td>
                    <td className="p-3 text-right">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Delay Box */}
          <div className="bg-gray-100 rounded-xl p-5 w-full lg:w-60 min-w-[250px]">
            <h3 className="text-md font-semibold mb-4">Delay</h3>

            <div className="mb-4">
              <p className="text-sm text-gray-600">Minimum</p>
              <div className="bg-white rounded-lg px-3 py-2 shadow-sm flex justify-between items-center mt-1">
                <span>3</span>
                <span className="text-gray-400 text-sm">sec</span>
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-600">Maximum</p>
              <div className="bg-white rounded-lg px-3 py-2 shadow-sm flex justify-between items-center mt-1">
                <span>6</span>
                <span className="text-gray-400 text-sm">sec</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScenarioTarget;
