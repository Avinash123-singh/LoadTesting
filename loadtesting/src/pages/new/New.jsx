import React, { useState } from "react";
import NewSidebar from "../../component/SideBar/sidebar";
import Header from "../../component/Header/header";
import TargetUploadBox from "./componet/uploadBox";
import ScenarioTarget from "./componet/ScenarioTarget";
import LoadtestChart from "./componet/LoadtestChart";
import LoadInjectorSection from "./componet/LoadInjection"; 
import Overlay from "../../component/Overlay/Overlay";

const New = () => {
   const [showProtocolView, setShowProtocolView] = useState(false);
   const handleNewTestClick = () => {
    setShowProtocolView(true);
  };

  if (showProtocolView) {
  return <Overlay onBack={() => setShowProtocolView(false)} />;
}
  return (
    <div className="flex h-screen">
      <NewSidebar />
      <div className="flex-1 overflow-y-auto scrollbar-hidden">
        <Header onNewTestClick={handleNewTestClick} />
        <div className="p-2 sm:p-3 md:p-4">
          <TargetUploadBox />
          <div className="mt-2 sm:mt-3 md:mt-4">
            <ScenarioTarget />
          </div>
          <div className="mt-4">
            <LoadtestChart />
          </div>
          <LoadInjectorSection /> {/* ✅ new section below chart */}
        </div>
      </div>
    </div>
  );
};

export default New;
