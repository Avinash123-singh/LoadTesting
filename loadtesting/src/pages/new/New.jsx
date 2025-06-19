
import React from "react";
import NewSidebar from "../../component/SideBar/sidebar";
import Header from "../../component/Header/header";
import TargetUploadBox from "./componet/uploadBox";

const New = () => {
  return (
    <div className="flex h-screen">
      <NewSidebar />

      <div className="flex-1">
        <Header />

         <TargetUploadBox />
      
      </div>
    </div>
  );
};

export default New;
