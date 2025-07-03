// src/components/MaxVirtualUsers.jsx
import React from "react";
import ReactApexChart from "react-apexcharts";
import { Card, Typography } from "@mui/material";

const MaxVirtualUsers = () => {
  const series = [
    {
      name: "Current Year",
      data: [11000, 10000, 13000, 17000, 25000, 21000, 23000], // Main solid line
    },
    {
      name: "Previous Year",
      data: [5000, 12000, 21000, 8000, 15000, 20000, 27000], // Dashed line
    },
  ];

  const options = {
    chart: {
      type: "area",
      height: 300,
      toolbar: { show: false },
    },
    colors: ["#00BFA6", "#90CAF9"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: [3, 2],
      dashArray: [0, 5],
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.1,
        stops: [0, 100],
      },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      labels: {
        style: {
          fontFamily: "Poppins",
          fontSize: "13px",
        },
      },
    },
    yaxis: {
      labels: {
        formatter: (val) => `${Math.round(val / 1000)}K`,
        style: {
          fontFamily: "Poppins",
          fontSize: "13px",
        },
      },
    },
    legend: {
      show: false,
    },
    tooltip: {
      enabled: true,
    },
  };

  return (
    <Card
      className="w-full mt-4 p-5 rounded-[20px]"
      sx={{ boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}
    >
      <Typography
        sx={{
          fontFamily: "Poppins",
          fontWeight: 600,
          fontSize: "16px",
          marginBottom: "10px",
        }}
      >
        Max Virtual Users
      </Typography>
      <ReactApexChart options={options} series={series} type="area" height={250} />
    </Card>
  );
};

export default MaxVirtualUsers;
