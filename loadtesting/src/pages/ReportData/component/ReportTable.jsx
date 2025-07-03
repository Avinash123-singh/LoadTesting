import React from "react";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

const data = [
  {
    id: 1,
    name: "Untitled Test 1",
    date: "15/05/1999",
    duration: "10min",
    users: 100,
    status: "Active",
  },
  {
    id: 2,
    name: "Untitled Test 1",
    date: "15/05/1999",
    duration: "10min",
    users: 100,
    status: "Inactive",
  },
  {
    id: 3,
    name: "Untitled Test 1",
    date: "1hr ago",
    duration: "10min",
    users: 100,
    status: "Active",
  },
  {
    id: 4,
    name: "Untitled Test 1",
    date: "1hr ago",
    duration: "10min",
    users: 100,
    status: "Inactive",
  },
  {
    id: 5,
    name: "Untitled Test 1",
    date: "1hr ago",
    duration: "10min",
    users: 100,
    status: "Inactive",
  },
  {
    id: 6,
    name: "Untitled Test 1",
    date: "15/05/1999",
    duration: "10min",
    users: 100,
    status: "Active",
  },
  {
    id: 7,
    name: "Untitled Test 1",
    date: "15/05/1999",
    duration: "10min",
    users: 100,
    status: "Active",
  },
  {
    id: 8,
    name: "Untitled Test 1",
    date: "15/05/1999",
    duration: "10min",
    users: 100,
    status: "Active",
  },
];

const ReportTable = ({ onViewReport }) => {
  return (
    <div className="bg-white rounded-xl shadow p-4 sm:p-6 w-full">
      <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
        {/* Title and Subtitle */}
        <div>
          <h2 className="text-base md:text-lg font-bold text-gray-800">
            Test Reports
          </h2>
          <p className="text-teal-500 text-xs md:text-sm mt-1">2 reports</p>
        </div>

        {/* Search and Sort */}
        <div className="flex flex-wrap gap-3 w-full sm:w-auto">
          {/* Search input */}
          <div className="relative flex-grow sm:flex-grow-0 w-full sm:w-auto min-w-[180px]">
            <input
              type="text"
              placeholder="Search"
              className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2 text-sm md:text-base focus:outline-none"
            />
            <FiSearch className="absolute left-3 top-2.5 text-gray-400" />
          </div>

          {/* Sort button */}
          <button className="border border-gray-300 text-gray-700 rounded-lg px-4 py-2 flex items-center gap-2 text-sm md:text-base whitespace-nowrap">
            Sort by: <span className="font-bold">Newest</span>
            <IoIosArrowDown />
          </button>
        </div>
      </div>

      <div className="w-full overflow-x-auto">
        <table className="w-full text-xs sm:text-sm text-left">
          <thead>
            <tr className="text-gray-400 border-b border-gray-200">
              <th className="py-2 sm:py-3 px-2 sm:px-4">Test Name</th>
              <th className="py-2 sm:py-3 px-2 sm:px-4">Run Date</th>
              <th className="py-2 sm:py-3 px-2 sm:px-4">Duration</th>
              <th className="py-2 sm:py-3 px-2 sm:px-4">Max Users</th>
              <th className="py-2 sm:py-3 px-2 sm:px-4">Scenario Type</th>
              <th className="py-2 sm:py-3 px-2 sm:px-4">Status</th>
              <th className="py-2 sm:py-3 px-2 sm:px-4">View</th>
            </tr>
          </thead>
          <tbody>
            {data.map((report) => (
              <tr key={report.id} className="border-b border-gray-100">
                <td className="py-2 sm:py-4 px-2 sm:px-4">{report.name}</td>
                <td className="py-2 sm:py-4 px-2 sm:px-4">{report.date}</td>
                <td className="py-2 sm:py-4 px-2 sm:px-4">{report.duration}</td>
                <td className="py-2 sm:py-4 px-2 sm:px-4">{report.users}</td>
                <td className="py-2 sm:py-4 px-2 sm:px-4">—</td>
                <td className="py-2 sm:py-4 px-2 sm:px-4">
                  <span
                    className={`font-medium ${
                      report.status === "Active"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {report.status}
                  </span>
                </td>
                <td className="py-2 sm:py-4 px-2 sm:px-4">
                  <button
                    className="bg-teal-600 text-white px-3 sm:px-4 py-1 rounded-md text-xs sm:text-sm hover:bg-teal-700"
                    onClick={() => onViewReport(report)}
                  >
                    View Report
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4 text-xs sm:text-sm text-gray-500 gap-2 sm:gap-0">
        <span>Showing data 1 to 8 of 256K entries</span>
        <div className="flex gap-1 flex-wrap">
          <button className="px-2 py-1 border rounded">&lt;</button>
          <button className="px-3 py-1 bg-blue-600 text-white rounded">
            1
          </button>
          <button className="px-3 py-1 border rounded">2</button>
          <button className="px-3 py-1 border rounded">3</button>
          <button className="px-3 py-1 border rounded">4</button>
          <span className="px-2">...</span>
          <button className="px-3 py-1 border rounded">40</button>
          <button className="px-2 py-1 border rounded">&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default ReportTable;
