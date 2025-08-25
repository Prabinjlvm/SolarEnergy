import React from "react";
import { Link } from "react-router-dom";

const ProjectArea = () => {
  return (
    // project-area-start
    <section className="it-project-2-area it-project-2-style-2 pt-130 pb-120">
      <div className="container">
        {/* Section Title */}
        <div className="row">
          <div className="col-xl-12">
            <div className="it-project-2-section-title-box text-center mb-65">
              <span className="it-section-subtitle">Showcasing Success</span>
              <h4 className="it-section-title fz-45 it-split-text it-split-in-right">
                Portfolio Of Solar Success
              </h4>
            </div>
          </div>
        </div>

        {/* Project Items */}
        <div className="row gx-35">
          {/* Left Large Project */}
          <div
            className="col-xl-6 col-lg-6 col-md-6 wow img-anim-top"
            data-wow-duration="1.5s"
            data-wow-delay="0.1s"
          >
            <div className="it-project-2-item border-radius-20 z-index-1 mb-35">
              <img src="assets/img/project/project-5-1.jpg" alt="" />
              <div className="it-project-2-content d-flex align-items-center justify-content-between">
                <div>
                  <h4 className="it-project-2-title">
                    <Link className="border-line" to="/project-details">
                      Smart wind Installations
                    </Link>
                  </h4>
                  <span>Solar Energy</span>
                </div>
                <Link to="/project-details" className="it-project-2-arrow">
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

          {/* Right Column with Two Projects */}
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="row">
              {/* Project 2 */}
              <div
                className="col-12 wow img-anim-top"
                data-wow-duration="1.5s"
                data-wow-delay="0.1s"
              >
                <div className="it-project-2-item border-radius-20 z-index-1 mb-35">
                  <img src="assets/img/project/project-5-2.jpg" alt="" />
                  <div className="it-project-2-content d-flex align-items-center justify-content-between">
                    <div>
                      <h4 className="it-project-2-title">
                        <Link className="border-line" to="/project-details">
                          Large-Scale Wind Energy
                        </Link>
                      </h4>
                      <span>Solar Energy</span>
                    </div>
                    <Link to="/project-details" className="it-project-2-arrow">
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

              {/* Project 3 */}
              <div
                className="col-12 wow img-anim-top"
                data-wow-duration="1.5s"
                data-wow-delay="0.1s"
              >
                <div className="it-project-2-item border-radius-20 z-index-1 mb-35">
                  <img src="assets/img/project/project-5-3.jpg" alt="" />
                  <div className="it-project-2-content d-flex align-items-center justify-content-between">
                    <div>
                      <h4 className="it-project-2-title">
                        <Link className="border-line" to="/project-details">
                          SMountain Wind Energy
                        </Link>
                      </h4>
                      <span>Solar Energy</span>
                    </div>
                    <Link to="/project-details" className="it-project-2-arrow">
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
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="row">
          <div className="col-12">
            <div className="it-project-2-btn text-center mt-35">
              <Link to="/project" className="it-btn-theme">
                <span>
                  <span className="text-1">View All Protfolio</span>
                  <span className="text-2">View All Protfolio</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    // project-area-end
  );
};

export default ProjectArea;
