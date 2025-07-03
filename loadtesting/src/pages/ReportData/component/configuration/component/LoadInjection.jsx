import React, { useState } from "react";

const LoadInjectorSection = () => {
  const [isLimited, setIsLimited] = useState(false);

  return (
    <div className="flex flex-col gap-4 mt-6 w-full font-poppins overflow-hidden">
      {/* Top Section - Two Boxes */}
      <div className="flex flex-col md:flex-row gap-4 w-full">
        {/* Left Box */}
        <div className="w-full md:w-1/2 bg-white rounded-2xl shadow-md border border-gray-200 p-3 sm:p-4">
          <h2 className="text-base sm:text-lg font-semibold text-black mb-3 sm:mb-4">
            Load Injection Payload
          </h2>
          <div className="flex flex-col xs:flex-row gap-2 sm:gap-3 md:gap-4">
            <div className="flex-1 bg-gray-100 p-2 sm:p-3 rounded-lg shadow-sm text-sm sm:text-base truncate">
              500 users/load injection
            </div>
            <div className="flex-1 bg-gray-100 p-2 sm:p-3 rounded-lg shadow-sm text-sm sm:text-base truncate">
              Calibrated
            </div>
          </div>
        </div>

        {/* Right Box */}
        <div className="w-full md:w-1/2 bg-white rounded-2xl shadow-md border border-gray-200 p-3 sm:p-4">
          <h2 className="text-base sm:text-lg font-semibold text-black mb-3 sm:mb-4">
            Load Injector Global Distribution
          </h2>
          <div className="flex flex-col xs:flex-row gap-2 sm:gap-3 md:gap-4">
            <div className="flex-1 bg-gray-100 p-2 sm:p-3 rounded-lg shadow-sm text-sm sm:text-base truncate">
              Geo Zones Auto Distribution
            </div>
            <div className="flex-1 bg-gray-100 p-2 sm:p-3 rounded-lg shadow-sm text-sm sm:text-base truncate">
              Network Proxy
            </div>
          </div>
        </div>
      </div>

      {/* Optional Section */}
      <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-3 sm:p-4 w-full">
        <h3 className="text-sm sm:text-md font-semibold mb-2 sm:mb-3">Optional</h3>
        
        {/* Limit Sessions Row */}
        <div className="bg-gray-100 rounded-xl flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3">
          <div className="flex items-center gap-2 sm:gap-3">
            <label className="inline-flex relative items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={isLimited}
                onChange={() => setIsLimited(!isLimited)}
              />
              <div className="w-9 h-5 sm:w-11 sm:h-6 bg-gray-300 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-[#006064] peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 sm:after:h-5 sm:after:w-5 after:transition-all peer-checked:bg-[#006064]"></div>
            </label>
            <span className="text-xs sm:text-sm font-medium text-black">
              Limit Sessions
            </span>
          </div>
          <span className="text-xs sm:text-sm font-medium text-black">
            {isLimited ? "Limited" : "No Limit"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoadInjectorSection;