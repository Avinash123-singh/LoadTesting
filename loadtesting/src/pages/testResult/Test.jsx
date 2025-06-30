import React from "react";
import NewSidebar from "../../component/SideBar/sidebar";
import TestScenarioTable from "./component/TestScenario";

const Test = () => {
  return (
    <div className="flex h-screen">
      <NewSidebar />
      <div className="flex-1 overflow-auto scrollbar-hidden">
        <TestScenarioTable />
      </div>
    </div>
  );
};

export default Test;
