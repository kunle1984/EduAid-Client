import React from "react";
import { menuItemData } from "../assets/assets";
import { NavLink } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import useBatchTranslate from "../hooks/useBatchTranslate";

const MenuItems = ({ setSidebarOpen }) => {
  const [feed, connection, messages, profile, discover, interest, reel] =
    useBatchTranslate([
      "Feed",
      "Connections",
      "Messages",
      "Profile",
      "Discover",
      "Interest",
      "Reel",
    ]);
  const lang = [feed, connection, messages, profile, discover, interest, reel];
  const { user } = useAuthStore();
  return (
    <div className="px-3 text-secondary fw-medium">
      {user ? (
        menuItemData.map(({ to, label, Icon }) => {
          return (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `d-flex align-items-center gap-2 px-3 py-2 rounded ${
                  isActive
                    ? "bg-light text-warning fw-bold"
                    : "text-secondary text-decoration-none hover-bg-light"
                }`
              }
            >
              <Icon size={18} />
              <span>{label}</span>
            </NavLink>
          );
        })
      ) : (
        <NavLink
          to="/login"
          onClick={() => setSidebarOpen(false)}
          className={({ isActive }) =>
            `d-flex align-items-center gap-2 px-3 py-2 rounded ${
              isActive
                ? "bg-light text-warning fw-bold"
                : "text-secondary text-decoration-none hover-bg-light"
            }`
          }
        >
          Login
        </NavLink>
      )}
    </div>
  );
};

export default MenuItems;
