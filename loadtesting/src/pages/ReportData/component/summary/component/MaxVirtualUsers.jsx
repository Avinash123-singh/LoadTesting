import React from "react";
import Chart from "react-apexcharts";

const MaxVirtualUsers = () => {
  const chartOptions = {
    chart: {
      height: 250,
      type: "area",
      toolbar: { show: false },
    },
    dataLabels: { enabled: false },
    stroke: { curve: "smooth", width: 2 },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      labels: {
        style: { colors: "#888", fontSize: "12px" },
      },
    },
    yaxis: {
      min: 0,
      max: 30000,
      tickAmount: 3,
      labels: {
        formatter: (val) => `${Math.round(val / 1000)}K`,
        style: { colors: "#888", fontSize: "12px" },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.3,
        opacityTo: 0.1,
      },
    },
    colors: ["#00bfa6", "#b2dfdb"],
    legend: { show: false },
    grid: { show: false },
  };

  const chartSeries = [
    {
      name: "Actual",
      data: [12000, 10000, 15000, 25000, 27000, 22000, 24000],
    },
    {
      name: "Expected",
      data: [5000, 15000, 20000, 10000, 15000, 25000, 30000],
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-start gap-4">
      {/* Left: Info Boxes - no main wrapper, match chart height */}
      <div className="flex flex-col gap-4 w-full lg:w-[200px] h-full justify-between">
        <div className="bg-blue-50 p-4 rounded-lg text-center shadow-sm h-[80px] flex flex-col justify-center">
          <p className="text-gray-500 text-sm">Duration</p>
          <p className="text-2xl font-bold">32 min</p>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg text-center shadow-sm h-[80px] flex flex-col justify-center">
          <p className="text-gray-500 text-sm">Started On</p>
          <p className="text-2xl font-bold">3:10:04 PM</p>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg text-center shadow-sm h-[80px] flex flex-col justify-center">
          <p className="text-gray-500 text-sm">Session ( rate, per min )</p>
          <p className="text-2xl font-bold">XXX</p>
        </div>
      </div>

      {/* Right: Chart Box */}
      <div className="flex-1 w-full bg-white p-4 rounded-lg shadow h-[270px] flex flex-col justify-between">
        <h2 className="text-md font-semibold mb-2">Max Virtual Users</h2>
        <Chart
          options={chartOptions}
          series={chartSeries}
          type="area"
          height={250}
        />
      </div>
    </div>
  );
};

export default MaxVirtualUsers;
