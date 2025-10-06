import React from "react";

import { ArrowRight } from "lucide-react";
import { heroImages } from "../../assets/assets";
const { hero1, hero2, hero3, hero4, hero5 } = heroImages;
const HeroCarousel = () => {
  const slides = [
    {
      id: 1,
      image: hero3,
      title: (
        <>
          Giving help <br />
          To Those <span className="text-warning handwritten">
            peoples
          </span>{" "}
          <br />
          Who Need It.
        </>
      ),
      subtitle: "Start Donating Poor People",
    },
    {
      id: 2,
      image: hero2,
      title: (
        <>
          Giving <span className="text-warning handwritten">educational</span>{" "}
          <br />
          aids to students <br /> who deserve more.
        </>
      ),
      subtitle: "Support Education for All",
    },
    {
      id: 3,
      image: hero1,
      title: (
        <>
          Helping <span className="text-warning handwritten">vulnerable</span>{" "}
          <br />
          children reach <br /> their dreams.
        </>
      ),
      subtitle: "Be a Light to the Future",
    },
  ];

  return (
    <div className="w-100 ">
      <section
        id="heroCarousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="6000"
      >
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="overlay"></div>
              <div className="container position-relative text-white z-3">
                <div className="row align-items-center min-vh-100">
                  <div className="col-lg-7 col-md-10">
                    <p className="small fw-semibold text-warning mb-2">
                      <i className="bi bi-heart-fill me-1"></i> {slide.subtitle}
                    </p>
                    <h1 className="display-5 fw-bold mb-4">{slide.title}</h1>
                    <div className="d-flex flex-wrap gap-3">
                      <button className="btn btn-dark rounded-pill px-4 py-2">
                        Discover More <ArrowRight size={18} className="ms-2" />
                      </button>
                      <button className="btn btn-warning text-dark rounded-pill px-4 py-2">
                        Get A Quote <ArrowRight size={18} className="ms-2" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Animated Heart SVG */}
              <svg
                className="heart-svg draw-heart position-absolute"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 200 120"
              >
                <path
                  d="M10,60 C40,10 100,10 140,60 C160,90 190,100 190,100"
                  fill="none"
                  stroke="#ffc107"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
                <path
                  d="M140,60 C130,50 120,40 120,35 C120,25 130,20 140,35 C150,20 160,25 160,35 C160,40 150,50 140,60 Z"
                  fill="none"
                  stroke="#ffc107"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
        </button>
      </section>
    </div>
  );
};

export default HeroCarousel;
