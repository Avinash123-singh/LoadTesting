import { Card, Typography, Box } from "@mui/material";
import React from "react";
import PieChart from "react-apexcharts";
import MaxVirtualUsers from "./MaxVirtualUsers"; // Make sure the path is correct

const RecentActivity = () => {
  const series = [65, 35];

  const options = {
    chart: { type: "donut" },
    labels: ["65%", "35%"],
    colors: ["#006064", "#FFB400"],
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: { size: "60%" },
        dataLabels: { offset: 40 },
      },
    },
    legend: { show: false },
    dataLabels: {
      enabled: true,
      formatter: (val, opts) => `${opts.w.globals.labels[opts.seriesIndex]}`,
      style: {
        fontSize: "14px",
        colors: ["#004D40", "#FFB300"],
        fontFamily: "Poppins",
        fontWeight: "600",
      },
      offsetX: 0,
      offsetY: -40,
      dropShadow: { enabled: false },
    },
    tooltip: { enabled: false },
  };

  return (
    <div className="flex flex-col lg:flex-row w-full gap-4">
      {/* Left Card (Sessions + Pie Chart) */}
      <Card className="w-full lg:w-[30%] xl:w-[25%] rounded-[20px] border-2 border-[#006064] p-5">
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: "600",
            fontSize: "16px",
            textAlign: "center",
            marginBottom: "10px",
            color: "#006064",
          }}
        >
          Sessions
        </Typography>

        {/* Pie Chart */}
        <div className="flex justify-center items-center">
          <PieChart options={options} series={series} type="donut" height={160} />
        </div>

        {/* Legend */}
        <div className="flex justify-around mt-4">
          <Box display="flex" alignItems="center" gap={1}>
            <Box sx={{ width: 12, height: 12, backgroundColor: "#006064", borderRadius: "3px" }} />
            <Typography sx={{ fontFamily: "Poppins", fontWeight: "500", fontSize: "14px", color: "#006064" }}>
              Succeeded
            </Typography>
          </Box>

          <Box display="flex" alignItems="center" gap={1}>
            <Box sx={{ width: 12, height: 12, backgroundColor: "#FFB400", borderRadius: "3px" }} />
            <Typography sx={{ fontFamily: "Poppins", fontWeight: "500", fontSize: "14px", color: "#FFB400" }}>
              Failed
            </Typography>
          </Box>
        </div>
      </Card>

      {/* Right Component: MaxVirtualUsers */}
      <div className="flex-1">
        <MaxVirtualUsers />
      </div>
    </div>
  );
};

export default RecentActivity;
