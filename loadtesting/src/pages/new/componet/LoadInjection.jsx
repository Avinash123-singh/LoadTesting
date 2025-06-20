import React, { useState } from "react";

const LoadInjectorSection = () => {
  const [isLimited, setIsLimited] = useState(false);

  return (
    <div className="flex flex-col gap-4 mt-6 w-full font-poppins">
      {/* Top Section - Two Boxes */}
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Left Box */}
        <div className="w-full lg:w-1/2 bg-white rounded-2xl shadow-md border border-gray-200 p-4">
          <h2 className="text-lg font-semibold text-black mb-4">Load Injection Payload</h2>
          <div className="flex gap-4">
            <div className="flex-1 bg-gray-100 p-3 rounded-lg shadow-sm">500 users/load injection</div>
            <div className="flex-1 bg-gray-100 p-3 rounded-lg shadow-sm">Calibrated</div>
          </div>
        </div>

        {/* Right Box */}
        <div className="w-full lg:w-1/2 bg-white rounded-2xl shadow-md border border-gray-200 p-4">
          <h2 className="text-lg font-semibold text-black mb-4">Load Injector Global Distribution</h2>
          <div className="flex gap-4">
            <div className="flex-1 bg-gray-100 p-3 rounded-lg shadow-sm">Geo Zones Auto Distribution</div>
            <div className="flex-1 bg-gray-100 p-3 rounded-lg shadow-sm">Network Proxy</div>
          </div>
        </div>
      </div>

      {/* Optional Section */}
      <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-4">
        <h3 className="text-md font-semibold mb-3">Optional</h3>
        
        {/* Limit Sessions Row */}
        <div className="bg-gray-100 rounded-xl flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <label className="inline-flex relative items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                checked={isLimited}
                onChange={() => setIsLimited(!isLimited)}
              />
              <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-[#006064] peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#006064] relative"></div>
            </label>
            <span className="text-sm font-medium text-black">Limit Sessions</span>
          </div>
          <span className="text-sm font-medium text-black">{isLimited ? "Limited" : "No Limit"}</span>
        </div>
      </div>
    </div>
  );
};

export default LoadInjectorSection;
