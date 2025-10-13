import React, { useEffect, useRef } from "react";

import { ArrowRight } from "lucide-react";
import { heroImages } from "../../assets/assets";
const { hero1, hero2, hero3, hero4, hero5 } = heroImages;
import { useTheme } from "../../context/ThemeContext";
const CarouselCard = () => {
  const { darkMode } = useTheme();
  const carouselRef = useRef(null);

  const slides = [
    {
      id: 1,
      title: "Charity With Difference",
      subtitle: "Start Donating to the Poor",
      description:
        "Join our monthly giving program to provide consistent support to vulnerable communities and make a long-term impact.",
      features: [
        {
          title: "Child Education",
          icon: "bi-book",
          color: "warning",
          text: "Provide children access to quality education and digital tools.",
          image: hero1,
        },
        {
          title: "Healthy Food",
          icon: "bi-egg-fried",
          color: "success",
          text: "Help distribute nutritious meals to underprivileged families.",
          image: hero2,
        },
        {
          title: "Medical Care",
          icon: "bi-heart-pulse",
          color: "info",
          text: "Support healthcare access and emergency aid programs.",
          image: hero3,
        },
        {
          title: "Medical Care",
          icon: "bi-heart-pulse",
          color: "info",
          text: "Support healthcare access and emergency aid programs.",
          image: hero3,
        },
      ],
      image: hero1,
    },
    {
      id: 2,
      title: "Helping Each Other Makes The World Better",
      subtitle: "Support Education For All",
      description:
        "Your time and resources can change lives. Together, we can give every child the right to dream and learn.",
      features: [
        {
          title: "Education Access",
          icon: "bi-pencil-square",
          color: "primary",
          text: "Enable vulnerable students with scholarships and learning materials.",
          image: hero4,
        },
        {
          title: "Feeding Program",
          icon: "bi-basket2",
          color: "danger",
          text: "Join our feeding programs to fight hunger and malnutrition.",
          image: hero5,
        },
        {
          title: "Health Missions",
          icon: "bi-hospital",
          color: "warning",
          text: "Contribute to rural medical outreach and vaccination drives.",
          image: hero1,
        },
        {
          title: "Medical Care",
          icon: "bi-heart-pulse",
          color: "info",
          text: "Support healthcare access and emergency aid programs.",
          image: hero3,
        },
      ],
      image: hero3,
    },
    {
      id: 3,
      title: "Together We Can Change Lives",
      subtitle: "Be a Light to the Future",
      description:
        "Empower children and communities through education, food, and hope. Be part of lasting change today.",
      features: [
        {
          title: "Empower Youth",
          icon: "bi-people",
          color: "secondary",
          text: "Equip young people with leadership and digital skills.",
          image: hero2,
        },
        {
          title: "Nutrition Aid",
          icon: "bi-cup-hot",
          color: "dark",
          text: "Provide balanced meals to children and struggling families.",
          image: hero3,
        },
        {
          title: "Medical Relief",
          icon: "bi-heart-pulse-fill",
          color: "danger",
          text: "Deliver fast-response medical care to rural communities.",
          image: hero4,
        },
        {
          title: "Medical Care",
          icon: "bi-heart-pulse",
          color: "info",
          text: "Support healthcare access and emergency aid programs.",
          image: hero3,
        },
      ],
      image: hero2,
    },
  ];

  return (
    <div
      id="charityCarousel"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
      ref={carouselRef}
    >
      {/* Indicators */}
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#charityCarousel"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Slides */}
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <div
              className="d-flex align-items-center justify-content-center text-white min-vh-100"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
              }}
            >
              {/* Overlay */}
              <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.65)",
                  zIndex: 1,
                }}
              ></div>

              {/* Content */}
              <div className="container position-relative z-3 py-5">
                <div className="text-center mb-5">
                  <p className="text-warning small fw-semibold mb-2 slide-in-right">
                    <i className="bi bi-heart-fill me-1"></i> {slide.subtitle}
                  </p>
                  <h2 className="fw-bold display-5 mb-3 slide-in-left">
                    {slide.title}
                  </h2>
                  <p
                    className="text-light mx-auto fade-up"
                    style={{ maxWidth: "700px" }}
                  >
                    {slide.description}
                  </p>
                </div>

                <div className="row justify-content-center g-2 mb-5">
                  {slide.features.map((feature) => (
                    <div
                      className={`col-md-3 fade-up-delay `}
                      key={feature.title}
                    >
                      <div
                        className={`card  text-center  h-100 ${darkMode} ?  "text-light": "text-dark" `}
                      >
                        <img
                          className="card-img-top"
                          src={feature.image}
                          alt={feature.title}
                        />
                        <div
                          className={`card-body  ${darkMode} ?  "text-light": "text-dark"`}
                        >
                          <h5 className="fw-bold  ">{feature.title}</h5>
                          <p className="small card-text">{feature.text}</p>
                          <button className="btn btn-outline-warning rounded-pill btn-sm">
                            Know More..
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center fade-up-delay">
                  <button className="btn btn-warning text-dark rounded-pill px-4 py-2 fw-semibold">
                    Discover More <ArrowRight size={18} className="ms-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#charityCarousel"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon bg-dark rounded-circle p-3"
          aria-hidden="true"
        ></span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#charityCarousel"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon bg-dark rounded-circle p-3"
          aria-hidden="true"
        ></span>
      </button>

      {/* 🔥 Animations */}
      <style>{`
       
      `}</style>
    </div>
  );
};

export default CarouselCard;
