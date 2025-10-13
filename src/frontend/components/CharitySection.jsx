import React from "react";
import { motion } from "framer-motion";
import { Heart, Utensils, Stethoscope, ArrowRight } from "lucide-react";
import { heroImages } from "../../assets/assets";
import { useTheme } from "../../context/ThemeContext";
const { hero1, hero2, hero3, hero4, hero5 } = heroImages;
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
  }),
};

const CharitySection = () => {
  const { darkMode } = useTheme();
  return (
    <div className="container my-5 py-5">
      {/* Section Header */}
      <motion.div
        className="text-center mb-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <p className="text-warning fw-semibold small">
          <i className="bi bi-heart-fill me-1"></i> Start Donating Poor People
        </p>
        <h2 className="fw-bold display-6">Charity With Difference</h2>
        <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
          Join our monthly giving program to provide consistent support to our
          initiatives. Regular contributions, no matter the size, help us plan
          and sustain long-term projects.
        </p>
      </motion.div>

      {/* Feature Cards */}
      <div className={`row justify-content-center mb-5 text-center `}>
        {[
          { Icon: Heart, color: "warning", title: "Child Education" },
          { Icon: Utensils, color: "dark", title: "Healthy Food" },
          { Icon: Stethoscope, color: "danger", title: "Medical Care" },
        ].map(({ Icon, color, title }, i) => (
          <motion.div
            key={title}
            className={`col-md-4 mb-4 ${darkMode} ?  "text-light bg-dark": "text-dark" `}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div
              className={`p-4 card rounded-4 border border-2   shadow h-100  ${darkMode} ?  "bg-dark text-light":  "bg-light"`}
            >
              <Icon size={40} className={`text-${color} mb-3`} />
              <h5 className="fw-bold">{title}</h5>
              <p className={`small`}>
                Set up a secure and user-friendly online donation platform that
                accepts multiple options.
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Help Each Other Section */}
      <div className="row align-items-center g-5">
        {/* Left Side - Images */}
        <motion.div
          className="col-lg-6 position-relative"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="position-relative rounded-4 overflow-hidden charity-section shadow-lg">
            <img
              src={hero1}
              alt="Helping hands"
              className="img-fluid rounded-4"
            />
          </div>

          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="position-absolute start-10 translate-middle-y bg-warning text-dark fw-bold py-2 px-3 rounded shadow-sm"
          >
            We Give <span className="text-uppercase">Donations</span> Poor
            People
          </motion.div>
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="position-absolute start-10 top-0 translate-middle-y bg-secondary text-white fw-bold py-2 px-3 rounded shadow-sm"
          >
            Be the reason they achieve their{" "}
            <span className="text-uppercase">Dreams</span>
          </motion.div>
        </motion.div>

        {/* Right Side - Text */}
        <motion.div
          className="col-lg-6"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-warning fw-semibold small mb-2">
            <i className="bi bi-heart-fill me-1"></i> Start Donating Poor People
          </p>
          <h2 className="fw-bold mb-3">
            Helping each other can make{" "}
            <span className="text-warning">world</span> better
          </h2>
          <p className="text-muted mb-4">
            Volunteering offers opportunities to develop new skills and gain
            valuable experience. This can include leadership, communication, and
            project management.
          </p>

          <ul className="list-unstyled mb-4">
            <li className="mb-2">
              ✅ Helped Fund 3,266 Projects for the Less Privileged
            </li>
            <li className="mb-2">✅ We give children the gift of education</li>
            <li className="mb-2">
              ✅ We help companies develop powerful CSR programs
            </li>
          </ul>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-warning text-dark rounded-pill px-4 py-2"
          >
            More About Us <ArrowRight size={18} className="ms-2" />
          </motion.button>

          <p className="mt-4 text-muted">
            <strong>Phone:</strong> +236 (456) 896 22
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default CharitySection;
