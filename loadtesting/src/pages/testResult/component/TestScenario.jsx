import React from "react";

const TestScenarioTable = () => {
  const testData = [
    { run: 1, status: "Active" },
    { run: 2, status: "Inactive" },
    { run: 3, status: "Inactive" },
    { run: 5, status: "Active" },
    { run: 6, status: "Active" },
    { run: 6, status: "Active" },
    { run: 1, status: "Active" },
    { run: 1, status: "Inactive" },
  ];

  return (
    <div className="flex-1 p-4 md:p-6 bg-[#f9fbfd] overflow-auto font-poppins">
      {/* Stats Section - Responsive Grid */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
  {/* Stats Container */}
  <div className="md:col-span-3 bg-white p-4 md:p-6 rounded shadow flex flex-wrap justify-between items-center gap-4 w-full">
    
    {/* Total Tests */}
    <div className="flex items-center space-x-2 sm:space-x-4 flex-1 min-w-[150px]">
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-full"></div>
      <div className="flex-1">
        <p className="text-sm sm:text-base text-gray-500 font-poppins">Total Tests</p>
        <p className="text-xl sm:text-2xl font-semibold font-poppins">5,423</p>
      </div>
    </div>

    {/* Divider */}
    <div className="hidden sm:block w-full sm:w-px h-px sm:h-12 bg-gray-300"></div>

    {/* Failed Tests */}
    <div className="flex items-center space-x-2 sm:space-x-4 flex-1 min-w-[150px]">
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-full"></div>
      <div className="flex-1">
        <p className="text-sm sm:text-base text-gray-500 font-poppins">Failed Tests</p>
        <p className="text-xl sm:text-2xl font-semibold font-poppins">1,893</p>
      </div>
    </div>

    {/* Divider */}
    <div className="hidden sm:block w-full sm:w-px h-px sm:h-12 bg-gray-300"></div>

    {/* Active Now */}
    <div className="flex items-center space-x-2 sm:space-x-4 flex-1 min-w-[150px]">
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-full"></div>
      <div className="flex-1">
        <p className="text-sm sm:text-base text-gray-500 font-poppins">Active Now</p>
        <p className="text-xl sm:text-2xl font-semibold font-poppins">189</p>
      </div>
    </div>
  </div>

  {/* Button */}
  <div className="flex items-center justify-start md:justify-end w-full">
    <button className="w-full sm:w-auto bg-teal-600 text-white px-4 py-2 sm:px-6 sm:py-2 rounded font-poppins text-sm sm:text-base">
      New Test
    </button>
  </div>
</div>


      {/* Table Section */}
      <div className="bg-white p-4 md:p-6 rounded shadow">
        {/* Heading Row with Search and Sort - Responsive Stack */}
      <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center justify-between mb-4 gap-4 w-full">
  <h2 className="text-lg sm:text-xl font-bold font-poppins">Test Scenarios</h2>

  {/* Search + Sort Controls */}
  <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 w-full sm:w-auto">
    
    {/* Search Input */}
    <input
      type="text"
      placeholder="Search"
      className="border px-3 py-2 rounded w-full sm:w-48 font-poppins text-sm"
    />
    
    {/* Sort Dropdown */}
    <div className="flex flex-col sm:flex-row sm:items-center gap-1 w-full sm:w-auto">
      <label className="text-sm font-poppins whitespace-nowrap">Sort by:</label>
      <select className="border px-3 py-2 rounded font-poppins text-sm w-full sm:w-auto">
        <option className="font-poppins">Newest</option>
        <option className="font-poppins">Oldest</option>
      </select>
    </div>

  </div>
</div>


        <p className="text-xs sm:text-sm text-green-500 mb-4 font-poppins">1 Scenario</p>

        {/* Table - Responsive with horizontal scroll on small screens */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-separate border-spacing-y-2 border-spacing-x-0 sm:border-spacing-x-3 text-xs sm:text-sm font-poppins">
            <thead>
              <tr className="text-gray-500">
                <th className="px-2 sm:px-4 py-2 font-poppins">Test Name</th>
                <th className="px-2 sm:px-4 py-2 font-poppins">Updated</th>
                <th className="px-2 sm:px-4 py-2 font-poppins">Last Run</th>
                <th className="px-2 sm:px-4 py-2 font-poppins">Website</th>
                <th className="px-2 sm:px-4 py-2 font-poppins">Run</th>
                <th className="px-2 sm:px-4 py-2 font-poppins">Status</th>
              </tr>
            </thead>
            <tbody>
              {testData.map((item, index) => (
                <tr key={index} className="bg-white shadow rounded">
                  <td className="px-2 sm:px-4 py-3 font-poppins truncate max-w-[120px] sm:max-w-none">Untitled Test 1</td>
                  <td className="px-2 sm:px-4 py-3 font-poppins">1hr ago</td>
                  <td className="px-2 sm:px-4 py-3 font-poppins">1hr ago</td>
                  <td className="px-2 sm:px-4 py-3 font-poppins truncate max-w-[100px] sm:max-w-none">www.google.com</td>
                  <td className="px-2 sm:px-4 py-3 font-poppins">{item.run}</td>
                  <td className="px-2 sm:px-4 py-3">
                    <span
                      className={`inline-block min-w-[70px] sm:min-w-[90px] text-center px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-medium font-poppins ${
                        item.status === "Active"
                          ? "bg-teal-100 text-teal-700"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination - Responsive Stack */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-4 text-xs sm:text-sm text-gray-600 font-poppins gap-3">
          <span className="text-center sm:text-left">Showing data 1 to 8 of 256K entries</span>
          <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
            <button className="px-2 py-1 border rounded font-poppins text-xs sm:text-sm">&lt;</button>
            {[1, 2, 3, 4].map((num) => (
              <button
                key={num}
                className={`px-2 py-1 border rounded font-poppins text-xs sm:text-sm ${
                  num === 1 ? "bg-blue-500 text-white" : ""
                }`}
              >
                {num}
              </button>
            ))}
            <span className="font-poppins px-1">...</span>
            <button className="px-2 py-1 border rounded font-poppins text-xs sm:text-sm">40</button>
            <button className="px-2 py-1 border rounded font-poppins text-xs sm:text-sm">&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestScenarioTable;