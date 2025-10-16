import { Sidebar } from "lucide-react";
import React from "react";

import { Outlet } from "react-router-dom";
import SidebarMenu from "./SidebarMenu";
const BackendLayout = () => {
  return (
    <div className="w-100 h-100 ">
      <SidebarMenu onToggleCollapse={() => {}} />
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default BackendLayout;
