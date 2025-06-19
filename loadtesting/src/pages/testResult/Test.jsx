import React from "react";
import NewSidebar from "../../component/SideBar/sidebar";

const Test = () => {
  return (
    <div className="flex h-screen">
      <NewSidebar />
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Test Page</h1>
        <p>
          This page is used for testing components, features, and functionality
          to ensure everything works as expected.
        </p>
      </div>
    </div>
  );
};

export default Test;
