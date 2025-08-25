import React from "react";
import Header from "../component/Header";
import { Link } from "react-router-dom";
import FooterArea from "../component/FooterArea";
import CopyrightArea from "../component/CopyrightArea";
import NewsletterArea from "../component/NewsletterArea";
import MagicCursor from "../component/MagicCursor";
import BackToTop from "../component/BackToTop";
import SearchPopup from "../component/SearchPopup";
import OffcanvasMenu from "../component/OffcanvasMenu";

const Project = () => {
  return (
    <div>
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
                          <Link to="/project">Project</Link>
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
          {/* project-area-start */}
          <section className="it-project-2-area it-project-2-style-2 pt-130 pb-130">
            <div className="container">
              <div className="row gx-35">
                {/* Project Item 1 */}
                <div
                  className="col-xl-6 col-lg-6 col-md-6 wow itfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".3s"
                >
                  <div className="it-project-2-item border-radius-20 z-index-1 mb-35">
                    <img src="assets/img/project/inner-1-1.jpg" alt="" />
                    <div className="it-project-2-content d-flex align-items-center justify-content-between">
                      <div>
                        <h4 className="it-project-2-title">
                          <Link className="border-line" to="/project-details">
                            Smart wind Installations
                          </Link>
                        </h4>
                        <span>Solar Energy</span>
                      </div>
                      <Link
                        to="/project-details"
                        className="it-project-2-arrow"
                      >
                        <svg
                          width="19"
                          height="17"
                          viewBox="0 0 19 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18.9912 3.13216C19.0642 2.58472 18.6796 2.08176 18.1322 2.00877L9.21111 0.819299C8.66367 0.746306 8.16071 1.13092 8.08772 1.67836C8.01473 2.2258 8.39935 2.72876 8.94678 2.80175L16.8766 3.85906L15.8193 11.7889C15.7463 12.3363 16.1309 12.8393 16.6784 12.9123C17.2258 12.9853 17.7288 12.6007 17.8018 12.0532L18.9912 3.13216ZM1 16L1.60745 16.7944L18.6074 3.79436L18 3L17.3925 2.20564L0.39255 15.2056L1 16Z"
                            fill="currentcolor"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Project Item 2 */}
                <div
                  className="col-xl-6 col-lg-6 col-md-6 wow itfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".5s"
                >
                  <div className="it-project-2-item border-radius-20 z-index-1 mb-35">
                    <img src="assets/img/project/inner-1-2.jpg" alt="" />
                    <div className="it-project-2-content d-flex align-items-center justify-content-between">
                      <div>
                        <h4 className="it-project-2-title">
                          <Link className="border-line" to="/project-details">
                            Solar-Powered Water Purifier
                          </Link>
                        </h4>
                        <span>Solar Energy</span>
                      </div>
                      <Link
                        to="/project-details"
                        className="it-project-2-arrow"
                      >
                        <svg
                          width="19"
                          height="17"
                          viewBox="0 0 19 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18.9912 3.13216C19.0642 2.58472 18.6796 2.08176 18.1322 2.00877L9.21111 0.819299C8.66367 0.746306 8.16071 1.13092 8.08772 1.67836C8.01473 2.2258 8.39935 2.72876 8.94678 2.80175L16.8766 3.85906L15.8193 11.7889C15.7463 12.3363 16.1309 12.8393 16.6784 12.9123C17.2258 12.9853 17.7288 12.6007 17.8018 12.0532L18.9912 3.13216ZM1 16L1.60745 16.7944L18.6074 3.79436L18 3L17.3925 2.20564L0.39255 15.2056L1 16Z"
                            fill="currentcolor"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Add the rest of the project items the same way... */}
              </div>

              {/* Pagination */}
              <div className="row">
                <div
                  className="col-12 wow itfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".5s"
                >
                  <div className="it-pagination text-center mt-50">
                    <nav>
                      <ul>
                        <li>
                          <Link to="/project">
                            <i className="fa-regular fa-arrow-left"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="/project">1</Link>
                        </li>
                        <li className="current">
                          <Link to="/project">2</Link>
                        </li>
                        <li>
                          <Link to="/project">3</Link>
                        </li>
                        <li>
                          <Link to="/project">4</Link>
                        </li>
                        <li>
                          <Link to="/project">
                            <i className="fa-regular fa-arrow-right"></i>
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* project-area-end */}
          {/* newsletter-area-start */}
          <NewsletterArea />
          {/* newsletter-area-end */}
        </main>
        <footer>
          <FooterArea />
        </footer>
      </>
    </div>
  );
};

export default Project;
