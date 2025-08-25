import React from "react";
import { Link } from "react-router-dom";

const MonitoringArea = () => {
  return (
    // monitoring-area-start
    <section className="it-monitoring-area gray-bg3 pt-130 pb-130">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div
            className="col-xl-6 col-lg-6 wow itfadeLeft"
            data-wow-duration=".9s"
            data-wow-delay=".5s"
          >
            <div className="it-monitoring-left">
              <div className="it-project-2-section-title-box mb-20">
                <span className="it-section-subtitle">Monitoring</span>
                <h4 className="it-section-title fz-45 it-split-text it-split-in-right">
                  Innovative Wind Solutions Built for Every Project
                </h4>
              </div>
              <div className="it-monitoring-text">
                <p className="mb-25">
                  Our innovative wind solutions are engineered to deliver
                  efficient, reliable power for residential, commercial, and
                  industrial projects, ensuring sustainability and performance
                  for every site.
                </p>
              </div>

              {/* Progress Bars */}
              <div className="it-progress-bar-wrap">
                {/* On time Service */}
                <div className="it-progress-bar-item mb-30">
                  <label>On time Service</label>
                  <span>80%</span>
                  <div className="it-progress-bar">
                    <div className="progress">
                      <div
                        className="progress-bar wow slideInLeft"
                        data-wow-delay=".1s"
                        data-wow-duration="2s"
                        role="progressbar"
                        data-width="80%"
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "80%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Troubleshooting */}
                <div className="it-progress-bar-item mb-30">
                  <label>Troubleshooting</label>
                  <span>60%</span>
                  <div className="it-progress-bar">
                    <div className="progress">
                      <div
                        className="progress-bar orange wow slideInLeft"
                        data-wow-delay=".1s"
                        data-wow-duration="2s"
                        role="progressbar"
                        data-width="60%"
                        aria-valuenow="60"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "60%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Financing options */}
                <div className="it-progress-bar-item mb-45">
                  <label>Financing options</label>
                  <span>92%</span>
                  <div className="it-progress-bar">
                    <div className="progress">
                      <div
                        className="progress-bar wow slideInLeft"
                        data-wow-delay=".1s"
                        data-wow-duration="2s"
                        role="progressbar"
                        data-width="92%"
                        aria-valuenow="92"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "92%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Button */}
              <div className="it-about-btn d-sm-flex align-items-center">
                <Link to="/" className="it-btn-theme mr-30">
                  <span>
                    <span className="text-1">Contact Us</span>
                    <span className="text-2">Contact Us</span>
                  </span>
                </Link>

                <div className="it-slider-2-contact d-flex align-items-center">
                  <span className="pulse-theme">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.62 8.7518C15.19 8.7518 14.85 8.40179 14.85 7.98177C14.85 7.61175 14.48 6.84171 13.86 6.17168C13.25 5.52165 12.58 5.14163 12.02 5.14163C11.59 5.14163 11.25 4.79162 11.25 4.3716C11.25 3.95158 11.6 3.60156 12.02 3.60156C13.02 3.60156 14.07 4.14159 14.99 5.11163C15.85 6.02168 16.4 7.15173 16.4 7.97177C16.4 8.40179 16.05 8.7518 15.62 8.7518Z"
                        fill="#2DC457"
                      />
                      <path
                        d="M19.2298 8.75041C18.7998 8.75041 18.4598 8.40039 18.4598 7.98037C18.4598 4.4302 15.5698 1.55007 12.0298 1.55007C11.5998 1.55007 11.2598 1.20006 11.2598 0.780036C11.2598 0.360017 11.5998 0 12.0198 0C16.4198 0 19.9998 3.58017 19.9998 7.98037C19.9998 8.40039 19.6498 8.75041 19.2298 8.75041Z"
                        fill="#2DC457"
                      />
                      <path
                        opacity="0.4"
                        d="M9.79 12.2106L6.52 15.4807C6.16 15.1607 5.81 14.8307 5.47 14.4907C4.44 13.4506 3.51 12.3606 2.68 11.2205C1.86 10.0805 1.2 8.94042 0.72 7.81036C0.24 6.67031 0 5.58026 0 4.54021C0 3.86018 0.12 3.21015 0.36 2.61012C0.6 2.00009 0.98 1.44007 1.51 0.940044C2.15 0.310014 2.85 0 3.59 0C3.87 0 4.15 0.0600029 4.4 0.180008C4.66 0.300014 4.89 0.480022 5.07 0.740034L7.39 4.01019C7.57 4.2602 7.7 4.49021 7.79 4.71022C7.88 4.92023 7.93 5.13024 7.93 5.32025C7.93 5.56026 7.86 5.80027 7.72 6.03028C7.59 6.26029 7.4 6.5003 7.16 6.74031L6.4 7.53035C6.29 7.64036 6.24 7.77036 6.24 7.93037C6.24 8.01037 6.25 8.08038 6.27 8.16038C6.3 8.24038 6.33 8.30039 6.35 8.36039C6.53 8.6904 6.84 9.12042 7.28 9.64045C7.73 10.1605 8.21 10.6905 8.73 11.2205C9.09 11.5705 9.44 11.9106 9.79 12.2106Z"
                        fill="#2DC457"
                      />
                      <path
                        d="M19.9696 16.3293C19.9696 16.6093 19.9196 16.8993 19.8196 17.1793C19.7896 17.2593 19.7596 17.3393 19.7196 17.4193C19.5496 17.7793 19.3296 18.1193 19.0396 18.4394C18.5496 18.9794 18.0096 19.3694 17.3996 19.6194C17.3896 19.6194 17.3796 19.6294 17.3696 19.6294C16.7796 19.8694 16.1396 19.9994 15.4496 19.9994C14.4296 19.9994 13.3396 19.7594 12.1896 19.2694C11.0396 18.7794 9.88961 18.1193 8.74961 17.2893C8.35961 16.9993 7.96961 16.7093 7.59961 16.3993L10.8696 13.1291C11.1496 13.3391 11.3996 13.4991 11.6096 13.6091C11.6596 13.6291 11.7196 13.6591 11.7896 13.6891C11.8696 13.7191 11.9496 13.7291 12.0396 13.7291C12.2096 13.7291 12.3396 13.6691 12.4496 13.5591L13.2096 12.8091C13.4596 12.5591 13.6996 12.3691 13.9296 12.2491C14.1596 12.1091 14.3896 12.0391 14.6396 12.0391C14.8296 12.0391 15.0296 12.0791 15.2496 12.1691C15.4696 12.2591 15.6996 12.3891 15.9496 12.5591L19.2596 14.9092C19.5196 15.0892 19.6996 15.2992 19.8096 15.5492C19.9096 15.7992 19.9696 16.0492 19.9696 16.3293Z"
                        fill="#2DC457"
                      />
                    </svg>
                  </span>
                  <Link className="border-line text-black" to="/">
                    +(415) 555‑0132
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div
            className="col-xl-6 col-lg-6 wow itfadeRight"
            data-wow-duration=".9s"
            data-wow-delay=".7s"
          >
            <div className="it-monitoring-thumb border-radius-20 text-end">
              <img src="assets/img/video/monitoring.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
    // monitoring-area-end
  );
};

export default MonitoringArea;
