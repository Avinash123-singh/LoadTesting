import React from "react";
import Chart from "react-apexcharts";

const LoadtestChart = () => {
  const options = {
    series: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "series2",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    chart: {
      type: "area",
      height: 350,
      toolbar: { show: false },
    },
    dataLabels: { enabled: false },
    stroke: { curve: "smooth" },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
    },
    tooltip: {
      x: { format: "HH:mm" },
    },
    colors: ["#00bcd4", "#b2ebf2"],
  };

  return (
    <div className="w-full flex flex-col lg:flex-row gap-4 items-stretch">
      {/* Chart */}
      <div className="bg-white rounded-xl shadow-md p-4 flex-1">
        <h2 className="text-md font-semibold text-gray-700 mb-2">Users Chart</h2>
        <Chart options={options} series={options.series} type="area" height={300} width="100%" />
      </div>

      {/* Six Info Divs, 2 in each row */}
      <div className="grid grid-cols-2 gap-3 w-full lg:w-[300px]">
        <div className="bg-blue-50 rounded-xl p-3 shadow-sm text-center text-sm text-gray-500">
          Start With
        </div>
        <div className="bg-blue-50 rounded-xl p-3 shadow-sm text-center text-2xl font-bold text-gray-800">
          5
        </div>
        <div className="bg-blue-50 rounded-xl p-3 shadow-sm text-center text-sm text-gray-500">
          Users
        </div>
        <div className="bg-blue-50 rounded-xl p-3 shadow-sm text-center text-sm text-gray-500">
          Reach 100
        </div>
        <div className="bg-blue-50 rounded-xl p-3 shadow-sm text-center text-sm text-gray-500">
          Users in 5 min
        </div>
        <div className="bg-blue-50 rounded-xl p-3 shadow-sm text-center text-sm text-gray-500">
          Hold 100 Users for 2 min
        </div>
      </div>
    </div>
  );
};

export default LoadtestChart;
