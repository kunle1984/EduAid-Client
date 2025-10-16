import React from "react";
import NavbarMenu from "./NavbarMenu";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="w-100 h-100 ">
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
