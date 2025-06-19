import React from "react";
import NewSidebar from "../../component/SideBar/sidebar";
import Header from "../../component/Header/header";
import TargetUploadBox from "./componet/uploadBox";
import ScenarioTarget from "./componet/ScenarioTarget";

const New = () => {
  return (
    <div className="flex h-screen">
      <NewSidebar />
      <div className="flex-1 overflow-y-auto scrollbar-hidden">
        <Header />
        <TargetUploadBox />
        <div>
          <ScenarioTarget />
        </div>
      </div>
    </div>
  );
};

export default New;
