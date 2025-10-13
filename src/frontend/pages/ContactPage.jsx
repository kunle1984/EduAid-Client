import React, { useState } from "react";
import HeroSection from "../components/PageHero";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Send,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  // ✅ Basic form validation
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  // ✅ Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Replace with your own EmailJS credentials
      emailjs
        .send(
          "YOUR_SERVICE_ID",
          "YOUR_TEMPLATE_ID",
          {
            from_name: formData.name,
            reply_to: formData.email,
            message: formData.message,
          },
          "YOUR_PUBLIC_KEY"
        )
        .then(() => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        })
        .catch(() => {
          setStatus("Something went wrong. Please try again later.");
        });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Contact Us"
        subtitle="Start Donating Poor People"
        backgroundImage="/images/contact-hero.jpg"
        overlayColor="rgba(0, 0, 0, 0.7)"
        overlayOpacity={0.7}
      />

      {/* Contact Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            {/* Contact Info */}
            <div className="col-md-6 mb-4">
              <p className="text-warning fw-semibold">Get In Touch</p>
              <h2 className="fw-bold mb-3">Contact Us</h2>
              <p className="text-muted mb-5">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque
                inventore.
              </p>

              <ul className="list-unstyled mb-4">
                <li className="mb-3 d-flex align-items-center">
                  <MapPin className="text-warning me-2" size={18} />
                  55 Main street, 2nd block, Melbourne, Australia
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <Phone className="text-warning me-2" size={18} />
                  +1 (368) 567 89 54, +236 (456) 896 22
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <Mail className="text-warning me-2" size={18} />
                  wiatechinfo@gmail.com
                </li>
              </ul>

              <div className="d-flex gap-3">
                <a href="#" className="text-dark">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-dark">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-dark">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-dark">
                  <Instagram size={20} />
                </a>
              </div>

              <div className="mt-4">
                <img
                  src="/images/contact-team.jpg"
                  alt="Team"
                  className="img-fluid rounded"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-md-6">
              <div className="p-4 bg-light rounded shadow-sm">
                <h4 className="fw-bold mb-3">Fill Up The Form</h4>
                <p className="text-muted small">
                  Your email address will not be published. Required fields are
                  marked *
                </p>
                <form onSubmit={handleSubmit} noValidate>
                  <div className="mb-3">
                    <label className="form-label">Your Name*</label>
                    <input
                      type="text"
                      name="name"
                      className={`form-control ${
                        errors.name ? "is-invalid" : ""
                      }`}
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                    />
                    {errors.name && (
                      <div className="invalid-feedback">{errors.name}</div>
                    )}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email Address*</label>
                    <input
                      type="email"
                      name="email"
                      className={`form-control ${
                        errors.email ? "is-invalid" : ""
                      }`}
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Enter Your Message</label>
                    <textarea
                      name="message"
                      className={`form-control ${
                        errors.message ? "is-invalid" : ""
                      }`}
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Type your message here"
                    ></textarea>
                    {errors.message && (
                      <div className="invalid-feedback">{errors.message}</div>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="btn btn-dark px-4 d-flex align-items-center gap-2"
                  >
                    <Send size={16} /> Get In Touch
                  </button>
                </form>

                {status && (
                  <div className="alert alert-info mt-3 py-2">{status}</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
