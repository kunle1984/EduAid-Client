import React, { useEffect, useState } from "react";
import AOS from "aos";
import CountUp from "react-countup";
import { userImages } from "../../assets/assets";
import { heroImages } from "../../assets/assets";
const { man1, girl, girl2, girl3 } = userImages;
const { hero1, hero2, hero3, hero4, hero5 } = heroImages;
import {
  Users,
  MessageSquare,
  CheckCircle,
  Trophy,
  Star,
  Sun,
  Moon,
} from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
const Faq = () => {
  const { darkMode } = useTheme();
  const themeClass = darkMode ? "bg-dark text-light" : "bg-light text-dark";

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const counters = [
    {
      icon: <Users size={36} />,
      number: 400,
      suffix: "+",
      label: "Team Member",
    },
    {
      icon: <MessageSquare size={36} />,
      number: 80,
      suffix: "k+",
      label: "Client Review",
    },
    {
      icon: <CheckCircle size={36} />,
      number: 10,
      suffix: "k+",
      label: "Complete Project",
    },
    {
      icon: <Trophy size={36} />,
      number: 40,
      suffix: "k+",
      label: "Winning Award",
    },
  ];

  const testimonials = [
    {
      name: "Michel Fokluz Huta",
      role: "Global Partner",
      img: man1,
      text: "Foundation was established with a small idea that was incubated in the minds of its promoters in the year 1994. We guide applicants for immigration processes to any country they aspire to settle down.",
    },
    {
      name: "Charlize Theron",
      role: "Admin Executive",
      img: girl,
      text: "Our NGO provides educational and healthcare support to vulnerable communities. We empower individuals through sustainable programs that make real impact.",
    },
    {
      name: "David Johnson",
      role: "Volunteer Lead",
      img: girl2,
      text: "Volunteering here has changed my perspective on giving. The projects are impactful and truly change lives through education and empowerment.",
    },
    {
      name: "Sophie Martin",
      role: "Project Manager",
      img: girl3,
      text: "Working with this NGO has been one of the best professional experiences. The projects are purposeful and result-driven.",
    },
    {
      name: "James Anderson",
      role: "Field Volunteer",
      img: girl2,
      text: "The foundation provides a real opportunity to create change. I am proud to be a part of such a wonderful initiative.",
    },
    {
      name: "Angela White",
      role: "Donor",
      img: man1,
      text: "Transparency and genuine impact are what I love most. Every donation truly reaches the people who need it.",
    },
    {
      name: "Tom Brooks",
      role: "Community Manager",
      img: girl2,
      text: "A truly inspiring team! Their focus on education and community upliftment is commendable.",
    },
    {
      name: "Hannah Kim",
      role: "CSR Director",
      img: girl3,
      text: "Their partnership programs help companies contribute meaningfully to social causes with measurable outcomes.",
    },
  ];

  // Split testimonials into groups of 4 per carousel slide
  const groupedTestimonials = [];
  for (let i = 0; i < testimonials.length; i += 4) {
    groupedTestimonials.push(testimonials.slice(i, i + 4));
  }

  return (
    <div
      className={`${themeClass} transition-all`}
      style={{ minHeight: "100vh" }}
    >
      {/* ===== COUNTERS SECTION ===== */}
      <section
        style={{
          backgroundColor: "#0d3b34",

          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className={`py-5 text-center ${
          darkMode ? "bg-secondary text-light" : "text-white"
        }`}
      >
        <div className="container">
          <div className="row gy-4" data-aos="fade-up">
            {counters.map((item, i) => (
              <div key={i} className="col-6 col-md-3">
                <div className="d-flex flex-column align-items-center">
                  <div className="mb-2 text-warning">{item.icon}</div>
                  <h2 className="fw-bold">
                    <CountUp end={item.number} duration={2} />
                    {item.suffix}
                  </h2>
                  <p className="text-uppercase mb-0">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className={`py-5 ${themeClass}`}>
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-md-6" data-aos="fade-right">
              <h6 className="text-success">Start Donating Poor People</h6>
              <h2 className="fw-bold mb-4">
                Frequently Asked <span className="text-warning">Questions</span>
              </h2>

              <div className="accordion" id="faqAccordion">
                {[
                  {
                    q: "What kind of recipes can I find on your website?",
                    a: "You can find a variety of global recipes, from traditional dishes to modern culinary creations.",
                  },
                  {
                    q: "Are the recipes suitable for beginners?",
                    a: "Absolutely! Each recipe includes clear instructions and prep times, perfect for all levels.",
                  },
                  {
                    q: "Do you offer cooking tips and techniques?",
                    a: "Yes, we regularly share cooking hacks and food preparation tutorials.",
                  },
                  {
                    q: "How frequently do you update your recipe collection?",
                    a: "We update weekly with new content based on seasonal ingredients and community feedback.",
                  },
                ].map((faq, i) => (
                  <div className="accordion-item mb-2" key={i}>
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button ${
                          darkMode ? "bg-dark text-light" : ""
                        }`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${i}`}
                      >
                        {faq.q}
                      </button>
                    </h2>
                    <div
                      id={`collapse${i}`}
                      className={`accordion-collapse collapse ${
                        i === 0 ? "show" : ""
                      }`}
                      data-bs-parent="#faqAccordion"
                    >
                      <div
                        className={`accordion-body ${
                          darkMode ? "bg-dark text-light" : ""
                        }`}
                      >
                        {faq.a}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-md-6 text-center" data-aos="fade-left">
              <div className="position-relative">
                <img
                  src={hero3}
                  alt="Family"
                  className="img-fluid rounded shadow"
                />
                <img
                  src={hero5}
                  alt="Family"
                  className="img-fluid rounded shadow position-absolute"
                  style={{
                    width: "180px",
                    right: "20px",
                    bottom: "-40px",
                    border: "5px solid white",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
