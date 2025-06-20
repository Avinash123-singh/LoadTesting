import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Nav from './component/nav.jsx';
import New from './pages/new/New.jsx';
import Test from './pages/testResult/Test.jsx';
import Report from './pages/ReportData/Report.jsx';
import Manage from './pages/manage/Manage.jsx';
import ESWR from './pages/ESWR/ESWR.jsx';
import Service from './pages/servicesNeed/Services.jsx';
import Account from './pages/account/Account.jsx';

function App() {
  return (
    <div className="pl-24 sm:pl-32 md:pl-48 transition-all duration-300">
      <Nav />
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
  );
}

export default App;