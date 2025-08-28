import React from "react";
import MagicCursor from "../component/MagicCursor";
import BackToTop from "../component/BackToTop";
import SearchPopup from "../component/SearchPopup";
import OffcanvasMenu from "../component/OffcanvasMenu";
import Header from "../component/Header";
import { Link } from "react-router-dom";
import FooterArea from "../component/FooterArea";
import NewsletterArea from "../component/NewsletterArea";

const OurOnSite = () => {
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
                      On-Site
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
                        <Link to="/services-details">On-Site</Link>
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
                      "Solar Circuit replacement",
                      "Solar Energy Distribution",
                      "Household solar panel",
                      "Solar Power System",
                      "Solar Panel Installation",
                      "Solar Maintenance",
                    ].map((item, idx) => (
                      <Link to="/" key={idx}>
                        <div
                          className={`sidebar-widget-list mb-15 ${
                            item === "Solar Energy Distribution" ? "active" : ""
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
                    <img src="assets/img/blog/sidebar-1-4.jpg" alt="" />
                    <div className="d-flex justify-content-center">
                      <div className="it-sv-details-contact-circle">
                        <span>
                          100% <br /> QUALITY
                        </span>
                      </div>
                    </div>
                    <div className="it-sv-details-contact mt-30">
                      <span>Make An Appointment</span>
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
                          "Consulting",
                          "design",
                          "Solar",
                          "brand",
                          "Damage",
                          "Construction",
                          "Cleaning",
                          "Construction",
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
                    <img src="assets/img/service/details-1.jpg" alt="" />
                  </div>
                  <h4 className="it-inner-title">
                    <Link to="/">Solar Panel Cleaning</Link>
                  </h4>
                  <div className="postbox-dsc mb-45">
                    <p className="mb-5">
                      Nutmeal is a nutritious category of food that includes
                      various types of ground nuts, such as almonds, walnuts,
                      and peanuts...
                    </p>
                    <p>
                      Nutmeal is a versatile ingredient Nutmeal is a nutritious
                      category of food that includes various types of ground
                      nuts, such as almonds, walnuts, and peanuts These ground
                      nuts can be used in a variety of recipes
                    </p>
                  </div>

                  {/* Customer Benefits */}
                  <div className="row align-items-center">
                    <div className="col-xxl-5 col-xl-6 col-lg-12">
                      <div className="it-sv-details-thumb-sm border-radius-20">
                        <img src="assets/img/service/details-2.jpg" alt="" />
                      </div>
                    </div>
                    <div className="col-xxl-7 col-xl-6 col-lg-12">
                      <div className="postbox-details-wrapper">
                        <div className="it-sv-details-list list-style-2">
                          <h5 className="it-inner-title mb-10">
                            Customer Benefits
                          </h5>
                          <p>
                            Catalysts for change before fully tested markets are
                            maintain wireless scenarios...
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
                              We use the latest diagnostic equipment
                            </li>
                            <li>
                              <span>...</span> We are a member of Professional
                              Service
                            </li>
                            <li>
                              <span>...</span> Automotive service our clients
                              receive
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="postbox-blockquote z-index-1 text-center mt-60">
                    <p>
                      Wine … offers a greater range for enjoyment and
                      appreciation than <br /> possibly any other purely sensory
                      thing which may be purchase
                    </p>
                    <strong>Ernest Hemingway</strong>
                    <span>Director of Operations, EnergyCore Ltd.</span>
                    <span className="quote-icon">
                      <svg>...</svg>
                    </span>
                  </blockquote>

                  {/* Steps */}
                  <div className="it-step-area mb-50">
                    <div className="row">
                      <div className="col-xl-6 col-lg-6">
                        <div className="it-step-wrap">
                          <h5 className="it-inner-title mb-10">
                            4 Steps to Process
                          </h5>
                          <p className="mb-35">
                            Catalysts for change before fully tested markets...
                          </p>
                          {[
                            {
                              num: "01",
                              title: "Request a Quote",
                              desc: "Solaar Request Your Free Solar Quote Today...",
                            },
                            {
                              num: "02",
                              title: "Site Evaluation",
                              desc: "Solaar Site Evaluation Expert Solar Assessment...",
                            },
                            {
                              num: "03",
                              title: "Installation",
                              desc: "Expert Solar Panel Installation by Solaar...",
                            },
                            {
                              num: "04",
                              title: "Activation",
                              desc: "Solaar System Activation Fast, Seamless...",
                            },
                          ].map((step, idx) => (
                            <div
                              className={`it-step-item d-inline-flex mb-35 ${
                                step.num === "02" ? "active" : ""
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
                          <img src="assets/img/service/details-3.jpg" alt="" />
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

export default OurOnSite;
