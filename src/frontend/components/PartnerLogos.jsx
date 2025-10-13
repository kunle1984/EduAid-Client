import React from "react";
import { useTheme } from "../../context/ThemeContext";

const PartnerLogos = ({ logos }) => {
  const { darkMode } = useTheme();
  return (
    <section
      className={`py-5 text-center ${
        darkMode ? "bg-secondary text-light" : "text-dark "
      }`}
    >
      <div className="container">
        <div className="row justify-content-center align-items-center text-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="col-6 col-md-2 mx-3 mb-4 d-flex flex-column align-items-center"
            >
              <img
                src={logo.image}
                alt={logo.title}
                className="img-fluid mb-2"
                style={{ maxHeight: "70px", objectFit: "contain" }}
              />
              <h6 className="fw-bold mb-0 ">{logo.title}</h6>
              {logo.subtitle && (
                <small className="text-muted">{logo.subtitle}</small>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;
