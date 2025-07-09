import React, { useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Nav from "./component/nav.jsx";
import New from "./pages/new/New.jsx";
import Test from "./pages/testResult/Test.jsx";
import Report from "./pages/ReportData/Report.jsx";
import Manage from "./pages/manage/Manage.jsx";
import ESWR from "./pages/ESWR/ESWR.jsx";
import Service from "./pages/servicesNeed/Services.jsx";
import Account from "./pages/account/Account.jsx";
import Login from "./pages/login/login.jsx";
import Signup from "./pages/SignUp/Signup.jsx";
import Unauthorized from "./pages/Unauthorized.jsx";
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const toggleCollapse = () => setIsCollapsed((prev) => !prev);


  const isAuthRoute = () => {
    return location.pathname.includes("/log-in") || 
           location.pathname.includes("/sign-up") ||
           location.pathname === "/unauthorized";
  };

  return (
    <div className="flex">

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
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          
    
          <Route path="/" element={
            <ProtectedRoute>
              <Navigate to="/new" replace />
            </ProtectedRoute>
          } />
          
          <Route path="/new" element={
            <ProtectedRoute>
              <New />
            </ProtectedRoute>
          } />
          
          <Route path="/test" element={
            <ProtectedRoute>
              <Test />
            </ProtectedRoute>
          } />
          
  
          <Route path="/manage" element={
            <ProtectedRoute roles={['admin']}>
              <Manage />
            </ProtectedRoute>
          } />
          
          
          <Route path="/report" element={<ProtectedRoute><Report /></ProtectedRoute>} />
          <Route path="/eswr" element={<ProtectedRoute><ESWR /></ProtectedRoute>} />
          <Route path="/services" element={<ProtectedRoute><Service /></ProtectedRoute>} />
          <Route path="/account" element={<ProtectedRoute><Account /></ProtectedRoute>} />
          
      
          <Route path="*" element={<Navigate to="/new" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;