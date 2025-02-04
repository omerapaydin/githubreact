import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import ThemeSelector from "../components/ThemeSelector";

function MainLayout() {
  return (
    <div>
      <Navbar />
      <ThemeSelector />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
