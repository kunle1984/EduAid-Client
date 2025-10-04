import React from "react";
import { assets, dummyUserData } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import MenuItems from "./MenuItems";
import { CirclePlus, LogOut } from "lucide-react";
import embozyLogo from "../assets/embozyLogo.png";
import { useAuthStore } from "../../store/authStore";
import { toast } from "react-toastify";
import useBatchTranslate from "../hooks/useBatchTranslate";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const { user, token } = useAuthStore();

  const navigate = useNavigate();

  const [logout, createPost] = useBatchTranslate([
    "Logout successfuly",
    "Create Post",
  ]);

  const { clearAuth } = useAuthStore();
  const handleLogout = () => {
    toast.success(logout, {
      autoClose: 2000,
      onClose: () => {
        clearAuth();
        navigate("/login");
      }, // redirect after toast closes
    });
  };
  return (
    <>
      {/* Offcanvas Sidebar for mobile */}
      {/* offcanvas-start */}
      <div
        className={`offcanvas  ${sidebarOpen ? "show" : ""}`}
        style={{ visibility: sidebarOpen ? "visible" : "hidden" }}
        tabIndex="-1"
      >
        <div className="offcanvas-header border-bottom">
          <h5 className="offcanvas-title">Menu</h5>
          <button
            type="button"
            className="btn-close text-reset"
            aria-label="Close"
            onClick={() => setSidebarOpen(false)}
          ></button>
        </div>

        <div className="offcanvas-body d-flex flex-column justify-content-between mb-5">
          {/* Logo */}
          <div>
            <img
              onClick={() => {
                navigate("/");
                setSidebarOpen(false);
              }}
              src={embozyLogo}
              alt="Logo"
              className="img-fluid "
              style={{ width: "80px", cursor: "pointer" }}
            />

            <hr className="text-muted mb-1" />

            {/* Menu Items */}
            <MenuItems setSidebarOpen={setSidebarOpen} />

            {/* Create Post Button */}
            <Link
              to="/create-post"
              className="btn btn-warning w-100 text-white d-flex align-items-center justify-content-center gap-2 mt-4"
              onClick={() => setSidebarOpen(false)}
            >
              <CirclePlus size={18} />
              {createPost}
            </Link>
          </div>

          {/* User Info + Logout */}
          <div className="border-top pt-3 d-flex justify-content-between align-items-center">
            <div>
              <h6 className="mb-0">{user.full_name}</h6>
              <small className="text-muted">@{user.username}</small>
            </div>

            <LogOut
              size={20}
              className="text-muted"
              style={{ cursor: "pointer" }}
              onClick={handleLogout}
            />
          </div>
        </div>
      </div>
      {/* Fixed Sidebar for desktop */}
      <div
        className="d-none d-md-flex flex-column justify-content-between border-end bg-white vh-100"
        style={{ width: "240px" }}
      >
        {/* Logo */}
        <img
          onClick={() => navigate("/")}
          src={embozyLogo}
          alt="Logo"
          className="img-fluid my-3 ms-3"
          style={{ width: "80px", cursor: "pointer" }}
        />

        <hr className="text-muted mb-4" />

        {/* Menu Items */}
        <MenuItems setSidebarOpen={setSidebarOpen} />

        {/* Create Post Button */}
        <Link
          to="/create-post"
          className="btn btn-warning text-white w-75 d-flex align-items-center justify-content-center gap-2 mx-3 mt-4"
        >
          <CirclePlus size={18} />
          {createPost}
        </Link>

        {/* Bottom Section */}
        <div className="mt-auto border-top px-3 py-3 d-flex align-items-center justify-content-between mb-3">
          <div>
            <h6 className="mb-0">{user.username}</h6>
            <small className="text-muted">@{user.username}</small>
          </div>

          <LogOut
            size={20}
            className="text-muted"
            style={{ cursor: "pointer" }}
            onClick={handleLogout}
          />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
