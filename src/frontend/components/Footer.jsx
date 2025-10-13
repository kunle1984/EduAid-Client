import React, { useEffect, useState } from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { ArrowUp } from "lucide-react";
// make sure this file exists in the same folder

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 200;
      setShowFooter(scrolledToBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer
      className={`footer-section text-white py-5 mt-auto ${
        showFooter ? "footer-visible" : "footer-hidden"
      }`}
    >
      <div className="container">
        <div className="row gy-4">
          {/* Brand Info */}
          <div className="col-md-4">
            <h5 className="fw-bold mb-3">MacularTech</h5>
            <p>
              Empowering communities through innovation, technology, and
              compassion. Building digital bridges for positive change.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-white">
                <Facebook />
              </a>
              <a href="#" className="text-white">
                <Twitter />
              </a>
              <a href="#" className="text-white">
                <Instagram />
              </a>
              <a href="#" className="text-white">
                <Linkedin />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-4">
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Our Projects
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Volunteer
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-md-4">
            <h6 className="fw-bold mb-3">Newsletter</h6>
            <p>Stay updated with our latest programs and initiatives.</p>
            <form className="d-flex">
              <input
                type="email"
                className="form-control me-2"
                placeholder="Enter email"
              />
              <button className="btn btn-dark">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="text-center mt-4 small">
          <hr className="border-secondary" />
          <p className="mb-0">
            © {new Date().getFullYear()} MacularTech. All rights reserved.
          </p>
          <a href="#" class="position-absolute bottom-0 end-0 p-5">
            <ArrowUp size={25} className="ms-2 text-warning" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
