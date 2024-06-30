import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "../component/signin";
import Signup from "../component/register";
import AttendanceReport from "../component/AttendanceReport";

const Router = () => {
  
    return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />}/>
          <Route path="/register" element={<Signup />}/>
          <Route path="/dashboard" element={<AttendanceReport />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
