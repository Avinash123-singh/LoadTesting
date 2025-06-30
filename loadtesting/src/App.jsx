import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "./component/nav.jsx";
import New from "./pages/new/New.jsx";
import Test from "./pages/testResult/Test.jsx";
import Report from "./pages/ReportData/Report.jsx";
import Manage from "./pages/manage/Manage.jsx";
import ESWR from "./pages/ESWR/ESWR.jsx";
import Service from "./pages/servicesNeed/Services.jsx";
import Account from "./pages/account/Account.jsx";

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => setIsCollapsed((prev) => !prev);

  return (
    <div className="flex">
      <Nav isCollapsed={isCollapsed} toggleCollapse={toggleCollapse} />
      <div
        className={`transition-all duration-300 w-full ${
            isCollapsed ? "pl-14 sm:pl-16 md:pl-20" : "pl-40 sm:pl-44 md:pl-52"  
        }`}
      >
        <Routes>
          <Route path="/" element={<Navigate to="/new" replace />} />
          <Route path="/new" element={<New />} />
          <Route path="/test" element={<Test />} />
          <Route path="/report" element={<Report />} />
          <Route path="/manage" element={<Manage />} />
          <Route path="/eswr" element={<ESWR />} />
          <Route path="/services" element={<Service />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;