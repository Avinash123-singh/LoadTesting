import React, { useState } from "react";
import NewSidebar from "../../component/SideBar/sidebar";
import ReportTable from "./component/ReportTable";
import SummaryReport from "./component/summary/SummaryReport";

const Report = () => {
  const [viewingReport, setViewingReport] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);

  const handleViewReport = (report) => {
    setSelectedReport(report);
    setViewingReport(true);
  };

  const handleBackToReports = () => {
    setViewingReport(false);
    setSelectedReport(null);
  };

  return (
    <div className="flex h-screen">
      {!viewingReport && <NewSidebar />}

      <div
        className={`${viewingReport ? "w-full" : "flex-1 p-6"} bg-gray-50 overflow-y-auto scrollbar-hidden`}
      >
        {viewingReport ? (
          <SummaryReport report={selectedReport} onBack={handleBackToReports} />
        ) : (
          <ReportTable onViewReport={handleViewReport} />
        )}
      </div>
    </div>
  );
};

export default Report;
