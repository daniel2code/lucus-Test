import React from "react";

import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/login/index";
import SignUpPage from "../pages/signup/index"
import Dashboard from "../pages/dashboard/index";

const RoutesComponent = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </React.Fragment>
  );
};

export default RoutesComponent;
