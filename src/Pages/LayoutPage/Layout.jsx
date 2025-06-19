import React from "react";
import Navbar from "./../../Components/Navbar/Navbar";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div>
      <Navbar />
        <Outlet />
      {/* <div className="h-screen flex items-center justify-center">
      </div> */}
    </div>
  );
}
