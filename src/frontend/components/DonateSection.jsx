import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { PaystackButton } from "@makozi/paystack-react-pay";
import { heroImages } from "../../assets/assets";
const { hero1, hero2, hero3, hero4, hero5, logo } = heroImages;
import { useTheme } from "../../context/ThemeContext";
const DonateSection = () => {
  const publicKey = "pk_test_your_paystack_public_key_here"; // 🔑 Replace with your Paystack public key
  const { darkMode } = useTheme();
  const [selectedAmount, setSelectedAmount] = useState(10);
  const [isCustom, setIsCustom] = useState(false);
  const [customAmount, setCustomAmount] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  const getAmount = () => {
    const amount = isCustom ? parseFloat(customAmount) : selectedAmount;
    return amount > 0 ? amount * 100 : 0; // Paystack uses kobo
  };

  const componentProps = (data) => ({
    email: data.email,
    amount: getAmount(),
    metadata: {
      name: data.name,
      custom_fields: [
        {
          display_name: "Donor Name",
          variable_name: "donor_name",
          value: data.name,
        },
      ],
    },
    publicKey,
    text: "Donate Now",
    onSuccess: () => {
      alert(`🎉 Thank you, ${data.name}! Donation successful.`);
      reset();
      setCustomAmount("");
      setIsCustom(false);
    },
    onClose: () => alert("Transaction closed."),
  });

  return (
    <section
      className="position-relative text-white py-5"
      style={{
        backgroundImage: `url(${hero3})`, // change path if needed
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "80vh",
      }}
    >
      {/* Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundColor: "rgba(0,0,0,0.6)",
          zIndex: 1,
        }}
      ></div>

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row align-items-center">
          {/* Left Section */}
          <div
            className={`col-lg-6 mb-4 mb-lg-0 ${
              darkMode ? "text-warning" : "text-white"
            }`}
          >
            <button className="btn btn-outline-light rounded-pill mb-3 px-4 py-2">
              Donate Now
            </button>
            <h2 className="fw-bold display-6">
              Thanks For The Results <br /> Achieved With You
            </h2>
            <p className="mt-3 text-light">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet.
            </p>
          </div>

          {/* Right Section */}
          <div className="col-lg-6">
            <div
              className={` ${
                darkMode ? "bg-dark" : "bg-white"
              } rounded p-4 p-lg-5 shadow-lg text-dark`}
            >
              <form
                onSubmit={handleSubmit((data) => {
                  if (getAmount() <= 0) {
                    alert("Please enter a valid donation amount.");
                    return;
                  }

                  const paystackBtn = document.querySelector("#paystack-btn");
                  paystackBtn.click();
                })}
              >
                {/* Name */}
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className={`form-control form-control-lg ${
                      errors.name ? "is-invalid" : ""
                    }`}
                    {...register("name", {
                      required: "Name is required",
                      minLength: {
                        value: 3,
                        message: "Name must be at least 3 characters",
                      },
                    })}
                  />
                  {errors.name && (
                    <div className="invalid-feedback">
                      {errors.name.message}
                    </div>
                  )}
                </div>

                {/* Email */}
                <div className="mb-3">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className={`form-control form-control-lg ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email",
                      },
                    })}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">
                      {errors.email.message}
                    </div>
                  )}
                </div>

                {/* Amount Buttons */}
                <div className="btn-group w-100 mb-3" role="group">
                  {[10, 20, 30].map((value) => (
                    <button
                      key={value}
                      type="button"
                      className={`btn btn-lg fw-semibold ${
                        !isCustom && selectedAmount === value
                          ? "btn-warning text-white"
                          : "btn-outline-secondary"
                      }`}
                      onClick={() => {
                        setSelectedAmount(value);
                        setIsCustom(false);
                      }}
                    >
                      ${value}
                    </button>
                  ))}
                  <button
                    type="button"
                    className={`btn btn-lg fw-semibold ${
                      isCustom
                        ? "btn-warning text-white"
                        : "btn-outline-secondary"
                    }`}
                    onClick={() => setIsCustom(true)}
                  >
                    Other
                  </button>
                </div>

                {/* Custom Amount Field */}
                {isCustom && (
                  <div className="mb-3">
                    <input
                      type="number"
                      className="form-control form-control-lg"
                      placeholder="Enter custom amount"
                      value={customAmount}
                      min="1"
                      onChange={(e) => setCustomAmount(e.target.value)}
                      required
                    />
                  </div>
                )}

                {/* Donate Now Button */}
                <button
                  type="submit"
                  className="btn btn-warning w-100 py-2 fw-semibold text-white"
                >
                  Donate Now <i className="bi bi-arrow-right ms-2"></i>
                </button>

                {/* Hidden Paystack Button */}
                <PaystackButton
                  id="paystack-btn"
                  className="d-none"
                  {...componentProps({
                    name: "",
                    email: "",
                  })}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
