
import React from "react";

const FormModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-xl text-gray-600 hover:text-black"
        >
          ✕
        </button>

        <h2 className="text-lg font-semibold mb-2">Record New Script</h2>
        <p className="text-sm text-gray-600 mb-4">
          To begin recording your script, enter the URL of the web page you
          wish start recording from. The scripting tool will automatically
          record your actions as you navigate through the website.
        </p>

        <label className="block text-sm text-gray-700 mb-1">
          Enter Starting URL:
        </label>
        <input
          type="text"
          placeholder="Example: www.myhomepage.com"
          className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
        />
        <p className="text-xs text-teal-700 mb-4">
          Scripting Mode: Browser Emulation (Desktop, Chrome, Auto)
        </p>

        <div className="flex justify-between mt-4">
          <button className="bg-teal-700 text-white px-4 py-2 rounded hover:bg-teal-800">
            Import
          </button>
          <button className="bg-teal-700 text-white px-4 py-2 rounded hover:bg-teal-800">
            Upload
          </button>
          <button
            onClick={onClose}
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
            Record Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormModal;
