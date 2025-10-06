import React, { useState, useRef, useEffect } from "react";

import { Menu, X, Search, Headphones, ArrowUpRight } from "lucide-react";

const NavbarMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef(null);

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
    <header className="sticky-top">
      {/* Top Info Bar */}
      <div className="bg-dark text-white py-2">
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
      <nav className="navbar bg-warning py-2 position-relative shadow-sm">
        <div className="container d-flex justify-content-between align-items-center">
          {/* Logo */}
          <a
            className="navbar-brand fw-bold d-flex align-items-center"
            href="#"
          >
            <img
              src="https://via.placeholder.com/40x40.png"
              alt="logo"
              className="me-2 rounded-circle"
            />
            MacularTech
          </a>

          {/* Lucide Menu Toggle */}
          <button
            className="border-0 bg-transparent d-lg-none"
            onClick={() => setShowMenu((prev) => !prev)}
          >
            {showMenu ? <X size={32} /> : <Menu size={32} />}
          </button>

          {/* Menu Drawer */}
          <div
            className={`menu-drawer ${
              showMenu ? "show" : ""
            } d-lg-flex justify-content-lg-between align-items-lg-center w-100`}
          >
            {/* Nav Links */}
            <ul className="navbar-nav mx-lg-auto fw-semibold d-flex flex-column flex-lg-row gap-lg-4 ps-3 ps-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Donations
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pages
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>
            </ul>

            {/* Right Section */}
            <div className="d-flex align-items-center gap-3 justify-content-start justify-content-lg-center flex-wrap mt-3 mt-lg-0 ps-3 ps-lg-0">
              {/* Search */}
              <div className="position-relative" ref={searchRef}>
                <Search
                  size={20}
                  style={{ cursor: "pointer" }}
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

              {/* Contact Info */}
              <div className="d-none d-lg-flex align-items-center fw-semibold">
                <Headphones className="me-2" />
                <span>
                  Call: <br /> +163-3654-7896
                </span>
              </div>

              {/* Donate Button */}
              <button className="btn btn-dark rounded-pill">
                Donate Now <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Custom Styles */}
      <style>{`
        /* Mobile drawer base */
        .menu-drawer {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background-color: rgba(255, 193, 7, 0.92);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transform: translateY(-10px);
          transition: all 0.5s ease;
          display: flex;
          flex-direction: column;
          z-index: 1000;
        }

        /* Show state: slide + fade in */
        .menu-drawer.show {
          max-height: 500px;
          opacity: 1;
          transform: translateY(0);
          padding: 15px 0;
          box-shadow: 0 5px 10px rgba(0,0,0,0.2);
        }

        /* Desktop layout */
        @media (min-width: 992px) {
          .menu-drawer {
            position: static;
            background: transparent;
            max-height: none;
            opacity: 1;
            overflow: visible;
            flex-direction: row;
            align-items: center;
            padding: 0;
            box-shadow: none;
            transform: none;
            backdrop-filter: none;
          }
        }

        .nav-link {
          color: #000;
          padding: 8px 0;
          transition: color 0.3s ease;
        }

        .nav-link:hover,
        .nav-link.active {
          color: #212529;
          text-decoration: underline;
        }

        /* Fade-in and fade-out search box */
        .fade-in {
          animation: fadeIn 0.3s ease forwards;
        }
        .fade-out {
          animation: fadeOut 0.3s ease forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeOut {
          from { opacity: 1; transform: translateY(0); }
          to { opacity: 0; transform: translateY(-5px); }
        }
      `}</style>
    </header>
  );
};

export default NavbarMenu;
