import React, { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { userImages } from "../../assets/assets";
import { heroImages } from "../../assets/assets";
const { man1, girl, girl2, girl3 } = userImages;
const { hero1, hero2, hero3, hero4, hero5 } = heroImages;

const Testimonial = () => {
  const testimonials = [
    {
      name: "Liam Young",
      role: "ReviewCollector / CEO",
      img: man1,
      text: "It’s the best plugin for that purpose, even better than the most popular of this kind of plugin. I will recommend strongly to try it — probably you will adopt it forever. One of the best plugins I ever tried!",
    },
    {
      name: "Emma Jackson",
      role: "Testimonal Inc. / HR",
      img: girl,
      text: "After ages in search of a decent solution to show reviews from different sources, I found this amazing tool. The team did a brilliant job developing this easy-to-use tool. I love it!",
    },
    {
      name: "Noah King",
      role: "BigThink / CEO",
      img: girl2,
      text: "This plugin does the job perfectly! It's easy to use, install, and display reviews. Lots of layout options and a clean, high-quality design.",
    },
    {
      name: "Sophia Patel",
      role: "CreativeWorks / Founder",
      img: girl3,
      text: "A must-have for any business! The experience is smooth, and the support team is incredible. My clients love the new testimonial section on our site.",
    },
    {
      name: "Ethan Brown",
      role: "Techify / CTO",
      img: girl,
      text: "Simple, elegant, and highly effective. It improved my website’s credibility overnight with authentic testimonials beautifully displayed.",
    },
    {
      name: "Ava Johnson",
      role: "UX Studio / Lead Designer",
      img: man1,
      text: "Absolutely stunning design! I love how easily I can customize everything. It’s responsive, clean, and incredibly professional.",
    },
  ];

  const testimonialsPerSlide = 3;
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = Math.ceil(testimonials.length / testimonialsPerSlide);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  const getVisibleTestimonials = () => {
    const start = currentSlide * testimonialsPerSlide;
    return testimonials.slice(start, start + testimonialsPerSlide);
  };

  // ===== Auto-play logic =====
  const intervalRef = useRef(null);

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [currentSlide]);

  const startAutoPlay = () => {
    stopAutoPlay(); // prevent duplicates
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 6000); // 6 seconds interval
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const slideVariants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <section
      className="py-5 text-white"
      style={{
        backgroundColor: "rgb(13, 59, 52)",
        minHeight: "100vh",
        overflow: "hidden",
      }}
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
    >
      <div className="container text-center">
        <h2 className="fw-bold mb-4 display-6">
          Display your <span className="text-warning">Testimonials</span> on
          your <br />
          <span className="text-warning">WordPress</span> website fast and
          easily.
        </h2>

        {/* Controls */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <button
            className="btn btn-outline-light rounded-pill"
            onClick={prevSlide}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="btn btn-outline-light rounded-pill"
            onClick={nextSlide}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Animated Testimonials */}
        <div style={{ position: "relative" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <div className="row g-4 justify-content-center">
                {getVisibleTestimonials().map((t, idx) => (
                  <div
                    key={idx}
                    className="col-12 col-md-6 col-lg-4 d-flex align-items-stretch"
                  >
                    <div className="card border-0 shadow-lg text-dark rounded-4 w-100 position-relative ">
                      <div className="card-body text-center p-4">
                        {/* Logo outside the card */}
                        <div
                          className="position-absolute top-0 start-50 translate-middle"
                          style={{ transform: "translate(-50%, -50%)" }}
                        >
                          <img
                            src={t.img}
                            alt={t.name}
                            className="rounded-circle mb-1"
                            width="90"
                            height="90"
                            style={{
                              border: "4px solid white",
                              objectFit: "cover",
                            }}
                          />
                        </div>

                        <h6 className="fw-bold mb-0 mt-3">{t.name}</h6>
                        <small className="text-muted d-block mb-2">
                          {t.role}
                        </small>
                        <div className="text-warning mb-3">
                          {[...Array(5)].map((_, s) => (
                            <Star
                              key={s}
                              size={16}
                              fill="#ffc107"
                              stroke="none"
                            />
                          ))}
                        </div>
                        <p className="small text-muted">{t.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="mt-4 d-flex justify-content-center gap-2">
          {[...Array(totalSlides)].map((_, i) => (
            <button
              key={i}
              className={`btn p-0 rounded-circle ${
                i === currentSlide ? "bg-warning" : "bg-light"
              }`}
              style={{
                width: "10px",
                height: "10px",
                opacity: i === currentSlide ? 1 : 0.5,
              }}
              onClick={() => setCurrentSlide(i)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
