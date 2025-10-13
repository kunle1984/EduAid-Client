import React, { useState, useRef, useEffect } from "react";
import { heroImages } from "../../assets/assets";
const { logo } = heroImages;
import {
  Menu,
  X,
  Search,
  Headphones,
  ArrowUpRight,
  Sun,
  Moon,
} from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const NavbarMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [isSticky, setIsSticky] = useState(false); // 👈 new state
  const searchRef = useRef(null);
  const { darkMode, toggleTheme } = useTheme();

  // Detect scroll for sticky activation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close search if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Auto-close menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) setShowMenu(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={`navbar-wrapper ${isSticky ? "sticky-active" : ""}`}
      style={{
        position: isSticky ? "fixed" : "relative",
        top: isSticky ? "0" : "auto",
        width: "100%",
        zIndex: 1050,
        transition: "all 0.4s ease-in-out",
        boxShadow: isSticky ? "0 2px 10px rgba(0,0,0,0.15)" : "none",
      }}
    >
      {/* Top Info Bar */}
      <div
        className={`py-2 ${
          darkMode ? "bg-dark text-light" : "bg-dark text-white"
        }`}
      >
        <div className="container d-flex justify-content-between align-items-center flex-wrap gap-2 small">
          <div className="d-flex flex-wrap gap-3">
            <span>
              <i className="bi bi-envelope me-1"></i> support@example.com
            </span>
            <span>
              <i className="bi bi-telephone me-1"></i> +123-456-7890
            </span>
            <span className="text-warning">
              <i className="bi bi-heart-fill me-1"></i> Ready to help? Become a
              volunteer!
            </span>
          </div>
          <div className="d-flex gap-3 align-items-center small">
            <span>USD ▾</span>
            <span>English ▾</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`navbar py-2 position-relative shadow-sm ${
          darkMode ? "bg-dark text-light" : "bg-warning"
        }`}
      >
        <a
          className={`navbar-brand fw-bold ${
            darkMode ? "text-light" : "text-dark"
          }`}
          href="#"
        >
          <img
            src={logo}
            alt="EduAid Logo"
            className="rounded-circle nav-brand ms-5"
            style={{
              width: "90px",
              height: "60px",
              objectFit: "cover",
            }}
          />
        </a>
        <div className="container d-flex justify-content-between align-items-center">
          {/* Logo */}

          {/* Menu Toggle */}
          <button
            className="border-0 bg-transparent d-lg-none"
            onClick={() => setShowMenu((prev) => !prev)}
          >
            {showMenu ? (
              <X size={32} color={darkMode ? "white" : "black"} />
            ) : (
              <Menu size={32} color={darkMode ? "white" : "black"} />
            )}
          </button>

          {/* Menu Drawer */}
          <div
            className={`menu-drawer ${
              showMenu ? "show" : ""
            } d-lg-flex justify-content-lg-between align-items-lg-center w-100`}
          >
            {/* Nav Links */}
            <ul className="navbar-nav mx-lg-auto fw-semibold d-flex flex-column flex-lg-row gap-lg-4 ps-3 ps-lg-0">
              {[
                "Home",
                "About Us",
                "Donations",
                "Pages",
                "Blog",
                "Contact Us",
              ].map((item) => (
                <li className="nav-item" key={item}>
                  <a
                    className={`nav-link ${
                      darkMode ? "text-light" : "text-dark"
                    }`}
                    href="#"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            {/* Right Section */}
            <div className="d-flex align-items-center gap-3 justify-content-start justify-content-lg-center flex-wrap mt-3 mt-lg-0 ps-3 ps-lg-0">
              {/* Search */}
              <div className="position-relative" ref={searchRef}>
                <Search
                  size={20}
                  style={{ cursor: "pointer" }}
                  color={darkMode ? "white" : "black"}
                  onClick={() => setShowSearch(!showSearch)}
                />
                <div
                  className={`position-absolute end-0 top-100 mt-2 shadow p-2 bg-white rounded ${
                    showSearch ? "fade-in" : "fade-out"
                  }`}
                  style={{
                    width: showSearch ? "220px" : "0px",
                    overflow: "hidden",
                    opacity: showSearch ? 1 : 0,
                    transition:
                      "all 0.4s ease, opacity 0.3s ease, width 0.3s ease",
                  }}
                >
                  <input
                    type="text"
                    className="form-control border-0"
                    placeholder="Search..."
                    autoFocus
                  />
                </div>
              </div>

              {/* Theme Toggle */}
              <button
                className="btn btn-sm border-0 bg-transparent"
                onClick={toggleTheme}
              >
                {darkMode ? (
                  <Sun size={22} color="white" />
                ) : (
                  <Moon size={22} color="black" />
                )}
              </button>

              {/* Contact Info */}
              <div
                className={`d-none d-lg-flex align-items-center fw-semibold ${
                  darkMode ? "text-light" : "text-dark"
                }`}
              >
                <Headphones className="me-2" />
                <span>
                  Call: <br /> +163-3654-7896
                </span>
              </div>

              {/* Donate Button */}
              <button
                className={`btn rounded-pill ${
                  darkMode ? "btn-light text-dark" : "btn-dark text-light"
                }`}
              >
                Donate Now <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavbarMenu;
