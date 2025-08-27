import React from "react";
import Header from "../component/Header";
import NewsletterArea from "../component/NewsletterArea";
import FooterArea from "../component/FooterArea";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      {/* Header Area Start */}
      <Header />
      {/* Header Area End */}

      <main>
        {/* breadcrumb-area-start */}
        <div className="it-breadcrumb-area pt-40 z-index-1 fix">
          <img
            className="it-breadcrumb-shape-1"
            src="assets/img/shape/breadcrumb-1.png"
            alt=""
          />
          <div className="container container-1380">
            <div className="row align-items-center">
              <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-5">
                <div className="it-breadcrumb-content">
                  <div className="it-breadcrumb-title-box">
                    <h3 className="it-breadcrumb-title it-split-text it-split-in-right">
                      Contact Us
                    </h3>
                  </div>
                  <div className="it-breadcrumb-list-wrap">
                    <div className="it-breadcrumb-list">
                      <span>
                        <Link to="/">Home</Link>
                      </span>
                      <span className="dvdr">
                        <svg width="6" height="9" viewBox="0 0 6 9" fill="none">
                          <path
                            d="M0.728891 0L0 0.728893L3.76852 4.5L0 8.27111L0.728891 9L5.23148 4.5L0.728891 0Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      <span>Contact</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-7 col-xl-6 col-lg-6 col-md-7">
                <div className="it-breadcrumb-thumb text-end">
                  <img src="assets/img/breadcrumb/thumb.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* breadcrumb-area-end */}

        {/* Contact Area Start */}
        <div className="it-contact-area it-contact-inner-style z-index-1 pt-125 pb-130">
          <div className="container">
            <div className="row">
              <div className="col-xl-5 col-lg-5">
                <div className="it-contact-left">
                  <div className="it-section-title-box mb-60">
                    <span className="it-section-subtitle">Contact us</span>
                    <h4 className="it-section-title it-split-text it-split-in-right fz-45 mb-0">
                      Your Message <br />
                      Matters Contact Us
                    </h4>
                  </div>

                  <div className="it-contact-list-wrap">
                    <div
                      className="it-contact-list-box d-flex align-items-center mb-30 wow itfadeUp"
                      data-wow-duration=".9s"
                      data-wow-delay=".3s"
                    >
                      <div className="it-contact-list-icon">
                        <span></span>
                      </div>
                      <div className="it-contact-list">
                        <span>Phone Line</span>
                        <p>Make a call for your general enquiries.</p>
                        <Link className="border-line" to="tel:+000123456789">
                          (+000) 123 456 789
                        </Link>
                      </div>
                    </div>

                    <div
                      className="it-contact-list-box d-flex align-items-center mb-30 wow itfadeUp"
                      data-wow-duration=".9s"
                      data-wow-delay=".5s"
                    >
                      <div className="it-contact-list-icon">
                        <span></span>
                      </div>
                      <div className="it-contact-list">
                        <span>Email</span>
                        <p>Send your mail for general enquiries.</p>
                        <Link
                          className="border-line"
                          to="mailto:Rooft@example.com"
                        >
                          Rooft@example.com
                        </Link>
                      </div>
                    </div>

                    <div
                      className="it-contact-list-box d-flex align-items-center wow itfadeUp"
                      data-wow-duration=".9s"
                      data-wow-delay=".7s"
                    >
                      <div className="it-contact-list-icon">
                        <span></span>
                      </div>
                      <div className="it-contact-list">
                        <span>Our Location</span>
                        <p>View location for staying guests.</p>
                        <Link className="border-line" to="tel:+000123456789">
                          927 Nancy Street Gar, New York,
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-xl-7 col-lg-7 wow itfadeRight"
                data-wow-duration=".9s"
                data-wow-delay=".3s"
              >
                <div className="it-contact-2-form-box">
                  <h4 className="it-contact-form-title mb-30">
                    We’d love to hear from you
                  </h4>
                  <form action="#">
                    <div className="it-contact-input-wrap">
                      <div className="row gx-20">
                        <div className="col-sm-6 col-12 mb-20">
                          <div className="it-contact-2-input-box p-relative">
                            <input type="text" placeholder="Your Name" />
                          </div>
                        </div>
                        <div className="col-sm-6 col-12 mb-20">
                          <div className="it-contact-2-input-box p-relative">
                            <input type="email" placeholder="Email Address" />
                          </div>
                        </div>
                        <div className="col-sm-6 col-12 mb-20">
                          <div className="it-contact-2-input-box p-relative">
                            <input type="text" placeholder="Phone" />
                          </div>
                        </div>
                        <div className="col-sm-6 col-12 mb-20">
                          <div className="contact__select">
                            <select>
                              <option value="Subject">Subject</option>
                              <option value="Commercial">
                                Commercial Solar Solutions
                              </option>
                              <option value="Solar">
                                Solar Panel Maintenance
                              </option>
                              <option value="Battery">
                                Battery Storage Options
                              </option>
                              <option value="Free">
                                Free Site Assessment Request
                              </option>
                            </select>
                          </div>
                        </div>
                        <div className="col-12 mb-30">
                          <div className="it-contact-2-input-box p-relative">
                            <textarea placeholder="Write A message...."></textarea>
                          </div>
                        </div>
                        <div className="it-contact-btn">
                          <button type="submit" className="it-btn-theme">
                            <span>
                              <span className="text-1">Submit Now</span>
                              <span className="text-2">Submit Now</span>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* map-area-start */}
        <div className="it-map-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div
                  className="it-map-wrap"
                  style={{
                    position: "relative",
                    paddingBottom: "56.25%",
                    height: 0,
                    overflow: "hidden",
                  }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d456184.5056356658!2d71.34513870507091!3d26.714317398338892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1724579991300!5m2!1sen!2sbd"
                    title="Google Map"
                    style={{
                      border: 0,
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      borderRadius: "15px",
                      paddingBottom: "10px",
                    }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* map-area-end */}

        {/* Contact Area End */}

        {/* Newsletter Area Start */}
        <NewsletterArea />
        {/* Newsletter Area End */}

        {/* Footer Area Start */}
        <FooterArea />
        {/* Footer Area End */}
      </main>
    </>
  );
};

export default Contact;
