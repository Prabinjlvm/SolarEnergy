import React from "react";
import MagicCursor from "../component/MagicCursor";
import BackToTop from "../component/BackToTop";
import SearchPopup from "../component/SearchPopup";
import OffcanvasMenu from "../component/OffcanvasMenu";
import Header from "../component/Header";
import { Link } from "react-router-dom";
import FooterArea from "../component/FooterArea";
import NewsletterArea from "../component/NewsletterArea";

const OffSiteSolution = () => {
  return (
    <div id="body" className="it-magic-cursor">
      <MagicCursor />
      <BackToTop />
      <SearchPopup />
      <OffcanvasMenu />

      <Header />
      <main>
        {/* breadcrumb portion */}
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
                      Off-Site
                    </h3>
                  </div>
                  <div className="it-breadcrumb-list-wrap">
                    <div className="it-breadcrumb-list">
                      <span>
                        <Link to="/">Home</Link>
                      </span>
                      <span className="dvdr">
                        <svg
                          width="6"
                          height="9"
                          viewBox="0 0 6 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.728891 0L0 0.728893L3.76852 4.5L0 8.27111L0.728891 9L5.23148 4.5L0.728891 0Z"
                            fill="currentcolor"
                          />
                        </svg>
                      </span>
                      <span>
                        <Link to="/services">Our-Site</Link>
                      </span>
                      <span className="dvdr">
                        <svg
                          width="6"
                          height="9"
                          viewBox="0 0 6 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.728891 0L0 0.728893L3.76852 4.5L0 8.27111L0.728891 9L5.23148 4.5L0.728891 0Z"
                            fill="currentcolor"
                          />
                        </svg>
                      </span>
                      <span>
                        <Link to="/services-details">Off-Site</Link>
                      </span>
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
        {/* breadcrumb portion end */}
        <section className="it-sv-details-area pt-130 pb-100">
          <div className="container">
            <div className="row gx-35">
              {/* Sidebar */}
              <div className="col-xl-4 col-lg-4 order-1 order-lg-0">
                <div className="sidebar-right">
                  {/* Search */}
                  <div className="sidebar-widget mb-60">
                    <h4 className="sidebar-widget-title mb-25">Search here:</h4>
                    <div className="sidebar-search-box p-relative">
                      <div className="sidebar-search-input">
                        <input type="text" placeholder="Search keywords" />
                      </div>
                      <div className="sidebar-search-button">
                        <button type="submit">
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
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Category */}
                  <div className="sidebar-widget mb-60">
                    <h4 className="sidebar-widget-title mb-25">Category</h4>
                    {[
                      "Off-Site Solar Management",
                      "Virtual Power Purchase Agreement",
                      "Renewable Energy Solutions",
                      "Grid Connection",
                      "Energy Offset Programs",
                      "Solar Consulting",
                    ].map((item, idx) => (
                      <Link to="/" key={idx}>
                        <div
                          className={`sidebar-widget-list mb-15 ${
                            item === "Virtual Power Purchase Agreement"
                              ? "active"
                              : "" // Example active class
                          }`}
                        >
                          {item}
                          <span>
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
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Contact Widget */}
                  <div className="it-sv-details-contact-wrap black-bg text-center mb-60">
                    <img
                      src="assets/img/blog/sidebar-1-4.jpg"
                      alt="Contact Us"
                    />{" "}
                    {/* Use an appropriate image */}
                    <div className="d-flex justify-content-center">
                      <div className="it-sv-details-contact-circle">
                        <span>
                          100% <br /> SATISFACTION
                        </span>
                      </div>
                    </div>
                    <div className="it-sv-details-contact mt-30">
                      <span>Get a Free Consultation</span>
                      <a className="border-line" href="tel:+510888455369">
                        +51-(0)-888-455-369
                      </a>
                      <div className="it-sv-details-contact-btn d-block">
                        <Link to="/contact" className="it-btn-theme">
                          <span>
                            Contact us
                            <svg
                              width="12"
                              height="13"
                              viewBox="0 0 12 13"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.0035 3.90804L1.41153 12.5L0 11.0885L8.59097 2.49651H1.01922V0.5H12V11.4808H10.0035V3.90804Z"
                                fill="white"
                              />
                            </svg>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="sidebar-widget">
                    <div className="sideba-widge-title-box">
                      <h3 className="sidebar-widget-title sm-border mb-35">
                        Popular Tags
                      </h3>
                    </div>
                    <div className="sidebar-widget-content">
                      <div className="tagcloud">
                        {[
                          "Off-Site Solar",
                          "VPA",
                          "Renewable Energy",
                          "Investment",
                          "Consulting",
                          "Grid",
                          "Offsetting",
                          "Energy",
                        ].map((tag, idx) => (
                          <Link
                            to="/"
                            key={idx}
                            className={idx > 5 ? "mb-0" : ""}
                          >
                            {tag}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="col-xl-8 col-lg-8 order-0 order-lg-1">
                <div className="it-sv-details-right">
                  <div className="it-sv-details-thumb border-radius-20 mb-25">
                    <img
                      src="assets/img/service/details-4.jpg"
                      alt="Off-Site Solar"
                    />{" "}
                    {/* Use an appropriate image */}
                  </div>
                  <h4 className="it-inner-title">
                    <Link to="/">Off-Site Solar Investment</Link>
                  </h4>
                  <div className="postbox-dsc mb-45">
                    <p className="mb-5">
                      Harness the benefits of solar energy without installing
                      panels on your premises. Our off-site solutions allow you
                      to invest in renewable energy and receive credits on your
                      electricity bills, promoting sustainability and cost
                      savings.
                    </p>
                    <p>
                      Our off-site solar programs provide a flexible way to
                      support renewable energy generation. You can invest in a
                      solar farm and receive energy credits or power purchase
                      agreements (PPAs) that offset your energy consumption and
                      costs, contributing to a greener future.
                    </p>
                  </div>

                  {/* Customer Benefits */}
                  <div className="row align-items-center">
                    <div className="col-xxl-5 col-xl-6 col-lg-12">
                      <div className="it-sv-details-thumb-sm border-radius-20">
                        <img
                          src="assets/img/service/service-5-1.png"
                          alt="Off-Site Benefits"
                        />{" "}
                        {/* Use an appropriate image */}
                      </div>
                    </div>
                    <div className="col-xxl-7 col-xl-6 col-lg-12">
                      <div className="postbox-details-wrapper">
                        <div className="it-sv-details-list list-style-2">
                          <h5 className="it-inner-title mb-10">
                            Off-Site Advantages
                          </h5>
                          <p>
                            Enjoy the financial and environmental benefits of
                            solar power without the need for on-site
                            installation.
                          </p>
                          <ul className="mt-20">
                            <li>
                              <span>
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M10 0C4.48583 0 0 4.48583 0 10C0 15.5142 4.48583 20 10 20C15.5142 20 20 15.5142 20 10C20 4.48583 15.5142 0 10 0ZM9.92417 12.8492C9.60167 13.1717 9.1775 13.3325 8.75167 13.3325C8.32583 13.3325 7.8975 13.17 7.57167 12.845L5.25333 10.5983L6.41417 9.40083L8.74167 11.6567L13.5825 6.90583L14.7525 8.09333L9.92417 12.8492Z"
                                    fill="currentcolor"
                                  />
                                </svg>
                              </span>
                              Cost savings through energy credits
                            </li>
                            <li>
                              <span>...</span> No installation or maintenance
                              required
                            </li>
                            <li>
                              <span>...</span> Support for renewable energy
                              transition
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="postbox-blockquote z-index-1 text-center mt-60">
                    <p>
                      "Off-site solar allows businesses to contribute to
                      sustainability and secure long-term energy cost stability
                      without the complexities of on-site installations."
                    </p>
                    <strong>Jane Doe</strong> {/* Update name */}
                    <span>Chief Investment Officer, SolarInvest Co.</span>{" "}
                    {/* Update title */}
                    <span className="quote-icon">
                      <svg>...</svg>{" "}
                      {/* Add actual quote icon SVG if available */}
                    </span>
                  </blockquote>

                  {/* Steps */}
                  <div className="it-step-area mb-50">
                    <div className="row">
                      <div className="col-xl-6 col-lg-6">
                        <div className="it-step-wrap">
                          <h5 className="it-inner-title mb-10">
                            Off-Site Solar Process
                          </h5>
                          <p className="mb-35">
                            Understand the simple steps to benefit from off-site
                            solar solutions.
                          </p>
                          {[
                            {
                              num: "01",
                              title: "Express Interest",
                              desc: "Contact us to learn about available off-site solar projects...",
                            },
                            {
                              num: "02",
                              title: "Project Selection",
                              desc: "Choose a project that aligns with your investment goals...",
                            },
                            {
                              num: "03",
                              title: "Agreement",
                              desc: "Finalize terms for your energy purchase or investment...",
                            },
                            {
                              num: "04",
                              title: "Benefit Realization",
                              desc: "Start receiving energy credits and supporting renewables...",
                            },
                          ].map((step, idx) => (
                            <div
                              className={`it-step-item d-inline-flex mb-35 ${
                                step.num === "02" ? "active" : "" // Example active step
                              }`}
                              key={idx}
                            >
                              <div className="it-step-number">
                                <span>{step.num}</span>
                              </div>
                              <div className="it-step-content">
                                <h5 className="it-step-title">{step.title}</h5>
                                <p>{step.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <div className="it-step-thumb border-radius-20">
                          <img
                            src="assets/img/service/service-4-3.jpg"
                            alt="Off-Site Process Steps"
                          />{" "}
                          {/* Use an appropriate image */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <NewsletterArea />
      </main>
      <footer>
        <FooterArea />
      </footer>
    </div>
  );
};

export default OffSiteSolution;
