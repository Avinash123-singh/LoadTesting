import React from "react";
import { UploadCloud } from "lucide-react";

const TargetUploadBox = () => {
  return (
    <div className="w-full lg:w-2/3 max-w-4xl bg-white rounded-2xl shadow-md border border-gray-200 p-6 mr-auto my-6 ml-2">
      {/* Upload Box */}
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <UploadCloud size={36} className="text-gray-400" />
          <div>
            <p className="text-base font-medium text-gray-800">Select a file or drag and drop here</p>
            <p className="text-sm text-gray-400">lorem ipsum</p>
          </div>
        </div>
        <button className="border border-blue-500 text-blue-500 px-4 py-1 rounded hover:bg-blue-50 transition whitespace-nowrap">
          SELECT TARGET
        </button>
      </div>

      {/* Target Added Section */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold text-black mb-3">Target Added</h2>
        <div className="flex flex-col sm:flex-row justify-between text-sm text-gray-800 gap-2">
          <span className="font-medium">HTTP/S</span>
          <p className="text-gray-600 sm:text-right max-w-xs">
            Concurrent users generating HTTP(S) requests to a web server.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TargetUploadBox;
