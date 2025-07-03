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
import Login from "./pages/login/login.jsx";
import Signup from "./pages/SignUp/Signup.jsx"; // Import the Signup component

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => setIsCollapsed((prev) => !prev);

  // Check if current route is auth-related (login/signup)
  const isAuthRoute = () => {
    return window.location.pathname.includes("/log-in") || 
           window.location.pathname.includes("/sign-up");
  };

  return (
    <div className="flex">
      {/* Hide nav for auth routes */}
      {!isAuthRoute() && (
        <Nav isCollapsed={isCollapsed} toggleCollapse={toggleCollapse} />
      )}
      
      <div
        className={`transition-all duration-300 w-full ${
          !isAuthRoute() && 
          (isCollapsed ? "pl-14 sm:pl-16 md:pl-20" : "pl-40 sm:pl-44 md:pl-52")
        }`}
      >
        <Routes>
          <Route path="/log-in" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} /> {/* Added Signup route */}
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