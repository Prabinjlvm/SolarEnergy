import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactArea = () => {
  const form = useRef();
  const [statusMsg, setStatusMsg] = useState("");
  const [selectedService, setSelectedService] = useState("Solar Installation");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yxjpte8", // Service ID
        "template_yydjqaf", // Template ID
        form.current,
        "WpwSi3woy_DcKaGoe" // Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatusMsg(
            `Thank you! Your request for "${selectedService}" has been sent.`
          );
        },
        (error) => {
          console.log(error.text);
          setStatusMsg("Oops! Something went wrong. Please try again.");
        }
      );

    e.target.reset();
  };

  const handleServiceClick = (serviceName) => {
    setSelectedService(serviceName);
  };

  const services = [
    "Solar Installation",
    "Renewable Energy",
    "Bio Gas Plant",
    "Household Installation",
    "Bio Energy Storage",
  ];

  return (
    <section className="it-contact-2-area z-index-1 black-bg pt-130 pb-130">
      <div className="it-contact-2-bg-1">
        <img src="assets/img/contact/bg-5-1.jpg" alt="" />
      </div>
      <div className="it-contact-2-bg-2">
        <img src="assets/img/contact/bg-5-2.jpg" alt="" />
      </div>

      <div className="container">
        <div className="row">
          {/* LEFT: Buttons */}
          <div
            className="col-xl-6 col-lg-6 wow itfadeLeft"
            data-wow-duration=".9s"
            data-wow-delay=".7s"
          >
            <div className="it-contact-2-left">
              <div className="it-testimonial-section-title-box mb-35">
                <span className="it-section-subtitle">Contact Us</span>
                <h4 className="it-section-title fz-45 text-white it-split-text it-split-in-right">
                  Complete Your Project <br />
                  Within a Budget
                </h4>
              </div>

              <div className="it-contact-2-nav-box">
                <ul className="nav nav-tab" id="myTab" role="tablist">
                  {services.map((service, idx) => (
                    <li
                      className="nav-item mb-15"
                      key={service}
                      role="presentation"
                    >
                      <button
                        className={`nav-link ${
                          selectedService === service ? "active" : ""
                        }`}
                        onClick={() => handleServiceClick(service)}
                        type="button"
                        role="tab"
                        aria-selected={selectedService === service}
                      >
                        <span className="it-contact-2-nav-link">{service}</span>
                        <span className="arrow">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"
                              fill="currentcolor"
                            />
                          </svg>
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div className="col-xl-6 col-lg-6">
            <div className="it-contact-2-right">
              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active">
                  <div className="it-contact-2-form-box text-center">
                    <h4 className="it-contact-form-title text-white mb-10">
                      Request A Quote
                    </h4>
                    <p className="mb-55 text-white">
                      More people in more ways every day, so that all of us can
                      be part of the changing energy system.
                    </p>

                    <form ref={form} onSubmit={sendEmail}>
                      <div className="it-contact-input-wrap">
                        <div className="row gx-20">
                          <div className="col-12 mb-20">
                            <div className="it-contact-2-input-box p-relative">
                              <input
                                type="text"
                                name="user_name"
                                placeholder="Your Name"
                                required
                              />
                            </div>
                          </div>

                          <div className="col-12 mb-20">
                            <div className="it-contact-2-input-box p-relative">
                              <input
                                type="email"
                                name="user_email"
                                placeholder="Email Address"
                                required
                              />
                            </div>
                          </div>

                          <div className="col-12 mb-15">
                            <div className="it-contact-2-input-box p-relative">
                              <input
                                type="text"
                                name="user_phone"
                                placeholder="Phone"
                              />
                            </div>
                          </div>

                          <div classNameName="it-contact-btn">
                            <button
                              type="submit"
                              className="it-btn-theme black-bg w-100"
                            >
                              <span>
                                <span className="text-1">Submit Request</span>
                                <span className="text-2">Submit Request</span>
                              </span>
                            </button>
                          </div>
                          {statusMsg && (
                            <div className="mt-4 text-white">{statusMsg}</div>
                          )}
                        </div>
                      </div>

                      {/* Hidden input for selected service */}
                      <input
                        type="hidden"
                        name="service_type"
                        value={selectedService}
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END RIGHT */}
        </div>
      </div>
    </section>
  );
};

export default ContactArea;
