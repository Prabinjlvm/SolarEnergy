import React from "react";
import MagicCursor from "../component/MagicCursor";
import BackToTop from "../component/BackToTop";
import SearchPopup from "../component/SearchPopup";
import OffcanvasMenu from "../component/OffcanvasMenu";
import Header from "../component/Header";
import { Link } from "react-router-dom";
import {
  FaAward,
  FaBatteryFull,
  FaBolt,
  FaChartLine,
  FaCheckCircle,
  FaCogs,
  FaFacebookF,
  FaInstagram,
  FaLeaf,
  FaLinkedinIn,
  FaMoneyCheckAlt,
  FaNetworkWired,
  FaQuoteLeft,
  FaRecycle,
  FaSolarPanel,
  FaTwitter,
} from "react-icons/fa";
import NewsletterArea from "../component/NewsletterArea";
import FooterArea from "../component/FooterArea";

const ProjectDetails = () => {
  return (
    <>
      <MagicCursor />
      <BackToTop />
      <SearchPopup />
      <OffcanvasMenu />
      <Header />
      <main>
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
                      Project
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
                        <Link to="/project-details">Project Details</Link>
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
        {/* details-area-start */}
        <div className="it-pro-details-area pt-130 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="it-pro-details-wrap">
                  <div className="it-pro-details-more-box">
                    <div className="it-pro-details-more-info">
                      <div>
                        <span>Clients</span>
                        <i>SolarTech Solution</i>
                      </div>
                    </div>
                    <div className="it-pro-details-more-info">
                      <div className="text-start">
                        <span>Categories</span>
                        <i>Renewable Energy</i>
                      </div>
                    </div>
                    <div className="it-pro-details-more-info">
                      <div className="text-start">
                        <span>Start Date</span>
                        <i>2024-05-08</i>
                      </div>
                    </div>
                    <div className="it-pro-details-more-info">
                      <div className="text-start">
                        <span>Place</span>
                        <i>New York, USA</i>
                      </div>
                    </div>
                    <div className="it-pro-details-more-info">
                      <div className="text-start">
                        <span>Project URL</span>
                        <Link to="mailto:http://www.example.com">
                          http://www.example.com
                        </Link>
                      </div>
                    </div>
                    <div className="it-pro-details-more-social it-pro-details-more-info d-flex justify-content-lg-end">
                      <div>
                        <span>Share</span>
                        <Link to="/">
                          <FaFacebookF />{" "}
                        </Link>
                        <Link to="/">
                          <FaTwitter />{" "}
                        </Link>
                        <Link to="/">
                          <FaLinkedinIn />
                        </Link>
                        <Link to="/">
                          <FaInstagram />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="it-pro-details-thumb gray-bg3 mb-25">
                    <img
                      className="w-100 border-radius-20"
                      src="assets/img/project/details-1.jpg"
                      alt=""
                    />
                  </div>

                  <div className="postbox-content-box mb-45">
                    <h4 className="it-inner-title mb-20">
                      <Link to="/">Project overview</Link>
                    </h4>
                    <div className="postbox-dsc">
                      <p>
                        This solar project involved the installation of
                        high-efficiency solar panels across commercial rooftops,
                        delivering clean energy and significant cost savings.
                        The system integrates smart inverters for optimal energy
                        conversion and real-time monitoring for performance
                        tracking.
                      </p>

                      <p>
                        Our team ensured sustainable and eco-friendly solutions
                        by reducing dependency on fossil fuels while providing
                        clients with long-term energy security. The project
                        demonstrates the potential of solar energy in modern
                        commercial infrastructure.
                      </p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 mb-25">
                      <div className="it-pro-details-thumb border-radius-20">
                        <img
                          className="w-100"
                          src="assets/img/project/details-2.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 mb-25">
                      <div className="it-pro-details-thumb border-radius-20">
                        <img
                          className="w-100"
                          src="assets/img/project/details-3.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>

                  <div className="postbox-details-wrapper postbox-style-2">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="it-sv-details-list mb-55">
                          <h5 className="it-inner-title">Project Objectives</h5>
                          <ul className="mt-20">
                            <li>
                              <span>
                                <FaCheckCircle />
                              </span>
                              Deliver a long-term, low-maintenance solar
                              solution
                            </li>
                            <li>
                              <span>
                                <FaBolt />
                              </span>
                              Reduce electricity costs for the client
                            </li>
                            <li>
                              <span>
                                <FaLeaf />
                              </span>
                              Promote environmental sustainability
                            </li>
                            <li>
                              <span>
                                <FaRecycle />
                              </span>
                              Minimize dependence on non-renewable energy
                              sources
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="it-sv-details-list mb-55">
                          <h5 className="it-inner-title">Key Features</h5>
                          <ul className="mt-20">
                            <li>
                              <span>
                                <FaSolarPanel />
                              </span>
                              High-efficiency monocrystalline solar panels
                            </li>
                            <li>
                              <span>
                                <FaChartLine />
                              </span>
                              Real-time performance monitoring
                            </li>
                            <li>
                              <span>
                                <FaCogs />
                              </span>
                              Smart inverter integration
                            </li>
                            <li>
                              <span>
                                <FaNetworkWired />
                              </span>
                              Flexible grid-tied / off-grid / hybrid setup
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <blockquote className="postbox-blockquote z-index-1 text-center">
                      <p>
                        "Our collaboration with SolarTech has revolutionized our
                        energy consumption and sustainability approach. The
                        system performance has exceeded expectations."
                      </p>
                      <strong>Ernest Hemingway</strong>
                      <span>Director of Operations, EnergyCore Ltd.</span>
                      <span className="quote-icon">
                        <FaQuoteLeft />
                      </span>
                    </blockquote>
                  </div>

                  <div className="postbox-content-box">
                    <h4 className="it-inner-title mb-20">
                      <Link to="/">Installation Process Overview </Link>
                    </h4>
                    <div className="postbox-dsc">
                      <p>
                        The installation involved detailed site assessments,
                        structural evaluation, and precise alignment of solar
                        panels to maximize energy capture. Advanced monitoring
                        systems were installed to track energy output and ensure
                        system reliability.
                      </p>
                      <p className="mb-0">
                        This project highlights the benefits of renewable energy
                        adoption in commercial setups and demonstrates the
                        potential for significant energy savings and
                        environmental impact reduction.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* details-area-end */}
        <section className="it-step-area it-step-inner-style pb-130">
          <div className="container">
            <div className="mb-80">
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-6">
                  <div className="it-step-section-title-box">
                    <span className="it-section-subtitle">Why Choose us</span>
                    <h4 className="it-section-title fz-45">
                      Reliable solar power. <br />
                      Trusted for years.
                    </h4>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="it-step-top-content-wrap d-flex justify-content-lg-end">
                    <div className="it-step-top-content gray-bg3 d-inline-flex align-items-center">
                      <h5>6k+</h5>
                      <p>
                        Successfully Completed <br /> Business Project
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row align-items-center">
              {/* Step 1 */}
              <div className="col-xl-6 col-lg-6">
                <div className="it-step-wrap">
                  <div className="it-step-item d-inline-flex mb-35">
                    <div className="it-step-number">
                      <span>
                        <FaBatteryFull />
                      </span>
                    </div>
                    <div className="it-step-content">
                      <h5 className="it-step-title">
                        25 Years System Warranty
                      </h5>
                      <p>
                        Solaar Request Your Free Solar Quote Today Fast, <br />
                        Affordable, and Eco-Friendly Energy Solutions!
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="it-step-item acive d-inline-flex mb-35">
                    <div className="it-step-number">
                      <span>
                        <FaAward />
                      </span>
                    </div>
                    <div className="it-step-content">
                      <h5 className="it-step-title">
                        Battery Storage Included
                      </h5>
                      <p>
                        Solaar Request Your Free Solar Quote Today Fast, <br />
                        Affordable, and Eco-Friendly Energy Solutions!
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="it-step-item d-inline-flex mb-35">
                    <div className="it-step-number">
                      <span>
                        <FaMoneyCheckAlt />
                      </span>
                    </div>
                    <div className="it-step-content">
                      <h5 className="it-step-title">Flexible Financing</h5>
                      <p>
                        Solaar Request Your Free Solar Quote Today Fast, <br />
                        Affordable, and Eco-Friendly Energy Solutions!
                      </p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="it-step-item d-inline-flex">
                    <div className="it-step-number">
                      <span>
                        <FaSolarPanel />
                      </span>
                    </div>
                    <div className="it-step-content">
                      <h5 className="it-step-title">Eco-Friendly Solar</h5>
                      <p>
                        Solaar Request Your Free Solar Quote Today Fast, <br />
                        Affordable, and Eco-Friendly Energy Solutions!
                      </p>
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
    </>
  );
};

export default ProjectDetails;
