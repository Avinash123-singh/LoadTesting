import React, { useRef } from "react";
import { UploadCloud } from "lucide-react";

const TargetUploadBox = () => {
  const fileInputRef = useRef(null);

  const handleSelectClick = () => {
    fileInputRef.current?.click(); // Open the file manager
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("Selected file:", file.name); // You can handle file processing here
    }
  };

  return (
    <div className="w-full lg:w-2/3 max-w-4xl bg-white rounded-2xl shadow-md border border-gray-200 p-4 my-6 mr-auto">
      {/* Upload Box */}
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 overflow-hidden">
        <div className="flex items-start gap-3 flex-1 min-w-0">
          <UploadCloud size={36} className="text-gray-400 flex-shrink-0" />
          <div className="min-w-0">
            <p className="text-base font-medium text-gray-800 truncate">
              Select a file or drag and drop here
            </p>
            <p className="text-sm text-gray-400 truncate">lorem ipsum</p>
          </div>
        </div>

        {/* Hidden file input */}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: "none" }}
        />

        <button
          onClick={handleSelectClick}
          className="border border-[#006064] text-blue-500 px-4 py-1 rounded hover:bg-blue-50 transition whitespace-nowrap flex-shrink-0 w-full sm:w-auto"
        >
          SELECT TARGET
        </button>
      </div>

      {/* Target Added Section */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold text-black mb-3">Target Added</h2>
        <div className="flex flex-col sm:flex-row justify-between text-sm text-gray-800 gap-2">
          <span className="font-medium whitespace-nowrap">HTTP/S</span>
          <p className="text-gray-600 sm:text-right break-words max-w-full">
            Concurrent users generating HTTP(S) requests to a web server.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TargetUploadBox;
