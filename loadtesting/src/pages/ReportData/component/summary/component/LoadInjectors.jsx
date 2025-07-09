
import React from "react";

const LoadInjectors = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mt-6">
      <h2 className="text-xl font-bold text-gray-900">Load Injectors</h2>
      <p className="text-sm text-green-500 mt-1 cursor-pointer">2 reports</p>

      <div className="mt-4">
        <div className="grid grid-cols-3 text-gray-400 text-sm font-medium border-b pb-2">
          <div>Zone</div>
          <div className="text-center">Status</div>
          <div className="text-center">View</div>
        </div>

        <div className="grid grid-cols-3 text-sm text-gray-700 py-4 border-b">
          <div>Central US, Minnesota</div>
          <div className="text-center font-medium">1</div>
          <div className="text-center font-medium">1</div>
        </div>

        <div className="grid grid-cols-3 text-sm text-teal-700 font-bold pt-4">
          <div>TOTAL</div>
          <div className="text-center">1</div>
          <div className="text-center">1</div>
        </div>
      </div>
    </div>
  );
};

export default LoadInjectors;
