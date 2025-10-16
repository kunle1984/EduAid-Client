import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  ChevronRight,
  BarChart2,
  LayoutDashboard,
  Layers,
  Grid,
  Table,
  Menu,
  X,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const SidebarMenu = ({ onToggleCollapse }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState("");
  const [openSubmenu, setOpenSubmenu] = useState("");

  const location = useLocation();
  const activePath = location.pathname;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 992) {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false);
        setIsMobileOpen(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
   ; // notify parent
  };

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? "" : menu);
  };

  const toggleSubmenu = (submenu) => {
    setOpenSubmenu(openSubmenu === submenu ? "" : submenu);
  };

  const isActive = (path) => activePath === path;

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="btn btn-warning position-fixed top-0 start-0 m-2 d-lg-none z-3"
        onClick={() => setIsMobileOpen(true)}
      >
        <Menu size={20} />
      </button>

      {/* Sidebar */}
      <aside
        className={`bg-warning text-dark shadow-lg position-fixed top-0 start-0 vh-100 d-flex flex-column`}
        style={{
          width: isCollapsed ? "80px" : "260px",
          transition: "all 0.3s ease",
          zIndex: 1040,
          transform: isMobileOpen ? "translateX(0)" : "translateX(-100%)",
        }}
      >
        {/* Header */}
        <div className="d-flex align-items-center justify-content-between p-3 border-bottom">
          {!isCollapsed && <h5 className="fw-bold mb-0">MENU</h5>}
          <div className="d-flex gap-2">
            {!isCollapsed && (
              <X
                size={22}
                className="d-lg-none"
                style={{ cursor: "pointer" }}
                onClick={() => setIsMobileOpen(false)}
              />
            )}
            <Menu
              size={22}
              style={{ cursor: "pointer" }}
              onClick={toggleCollapse}
            />
          </div>
        </div>

        {/* Main Menu */}
        <ul className="nav nav-pills flex-column mb-auto px-2">
          {/* Dashboards */}
          <li
            className={`nav-item mt-2 rounded ${
              activePath.startsWith("/dashboard") ? "bg-dark bg-opacity-25" : ""
            }`}
          >
            <div
              className="d-flex justify-content-between align-items-center py-2 px-3 rounded hover-bg-dark"
              onClick={() => toggleMenu("dashboard")}
              style={{ cursor: "pointer" }}
            >
              <div className="d-flex align-items-center gap-2">
                <LayoutDashboard size={18} />
                {!isCollapsed && <span>Dashboards</span>}
              </div>
              {!isCollapsed &&
                (openMenu === "dashboard" ? (
                  <ChevronDown size={18} />
                ) : (
                  <ChevronRight size={18} />
                ))}
            </div>

            {!isCollapsed && openMenu === "dashboard" && (
              <ul className="list-unstyled ps-4 mt-2">
                {[
                  { name: "Analytics", path: "/dashboard/analytics" },
                  { name: "Commerce", path: "/dashboard/commerce" },
                  { name: "Sales", path: "/dashboard/sales" },
                  { name: "Minimal", path: "/dashboard/minimal" },
                ].map((sub) => (
                  <li key={sub.name}>
                    <Link
                      to={sub.path}
                      className={`d-block py-1 text-decoration-none ${
                        isActive(sub.path)
                          ? "fw-semibold text-dark"
                          : "text-dark"
                      }`}
                    >
                      {sub.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* CRM */}
          <li
            className={`py-2 px-3 mt-2 rounded ${
              isActive("/crm") ? "bg-dark bg-opacity-25" : ""
            }`}
          >
            <Link
              to="/crm"
              className="d-flex align-items-center gap-2 text-dark text-decoration-none"
            >
              <BarChart2 size={18} />
              {!isCollapsed && <span>CRM</span>}
            </Link>
          </li>

          {/* Pages */}
          <li
            className={`py-2 px-3 mt-2 rounded ${
              isActive("/pages") ? "bg-dark bg-opacity-25" : ""
            }`}
          >
            <Link
              to="/pages"
              className="d-flex align-items-center gap-2 text-dark text-decoration-none"
            >
              <Layers size={18} />
              {!isCollapsed && <span>Pages</span>}
            </Link>
          </li>

          {/* Applications */}
          <li
            className={`py-2 px-3 mt-2 rounded ${
              isActive("/applications") ? "bg-dark bg-opacity-25" : ""
            }`}
          >
            <Link
              to="/applications"
              className="d-flex align-items-center gap-2 text-dark text-decoration-none"
            >
              <Grid size={18} />
              {!isCollapsed && <span>Applications</span>}
            </Link>
          </li>
        </ul>
      </aside>

      {/* Overlay for Mobile */}
      {isMobileOpen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark opacity-50 z-2"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </>
  );
};

export default SidebarMenu;
