import React from "react";
import NewSidebar from "../../component/SideBar/sidebar";

const Report = () => {
  return (
    <div className="flex h-screen">
      <NewSidebar />

      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Report Page</h1>
        <p>
          Here you can view, generate, and manage various reports based on your
          data and system performance.
        </p>
      </div>
    </div>
  );
};

export default Report;
