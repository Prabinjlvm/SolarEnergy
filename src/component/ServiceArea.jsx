import React from "react";
import { Link } from "react-router-dom";

const ServiceArea = () => {
  return (
    // service-area-start
    <section className="it-service-5-area p-relative pt-130 pb-110">
      <img className="shape" src="assets/img/shape/line.png" alt="" />
      <div className="container">
        {/* Section Top */}
        <div className="it-service-top-wrap mb-80">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-7">
              <div className="it-about-2-section-title-box">
                <span className="it-section-subtitle">Extra Future</span>
                <h4 className="it-section-title fz-45 it-split-text it-split-in-right">
                  Transforming Energy, Empowering Lives
                </h4>
              </div>
            </div>
            <div className="col-xl-6 col-lg-5">
              <div className="it-about-2-text d-flex justify-content-lg-end">
                <div className="text-start">
                  <p className="mb-30">
                    Empower your life with innovative, sustainable energy <br />
                    solutions that put you in control, lower costs, and <br />
                    support a cleaner, brighter future.
                  </p>
                  <Link to="/" className="it-btn-theme">
                    <span>
                      <span className="text-1">View All Services</span>
                      <span className="text-2">View All Services</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Items */}
        <div className="row gx-35">
          {/* Service Item 1 */}
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInDown"
            data-wow-duration=".9s"
            data-wow-delay=".3s"
          >
            <div className="it-service-5-item mb-30">
              <div className="it-service-5-thumb border-radius-20 mb-25">
                <img
                  className="w-100"
                  src="assets/img/service/service-5-4.png"
                  alt=""
                />
              </div>
              <div className="it-service-4-content pl-10">
                <h5 className="it-service-4-title mb-15">
                  <Link className="border-line" to="/">
                    Designed for You
                  </Link>
                </h5>
                <p>
                  From planning to setup and ongoing support, our expert team
                  ensures a smooth experience a complete solar solution for your
                  needs.
                </p>
              </div>
            </div>
          </div>

          {/* Service Item 2 */}
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow itfadeUp"
            data-wow-duration=".9s"
            data-wow-delay=".5s"
          >
            <div className="it-service-5-item mb-30">
              <div className="it-service-5-thumb border-radius-20 mb-25">
                <img
                  className="w-100"
                  src="assets/img/service/service-5-5.png"
                  alt=""
                />
              </div>
              <div className="it-service-4-content pl-10">
                <h5 className="it-service-4-title mb-15">
                  <Link className="border-line" to="/">
                    Unmatched Heritage
                  </Link>
                </h5>
                <p>
                  Backed by years of expertise, our skilled team delivers a
                  smooth journey from planning to installation, crafting a fully
                  customized solar solution.
                </p>
              </div>
            </div>
          </div>

          {/* Service Item 3 */}
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInDown"
            data-wow-duration=".9s"
            data-wow-delay=".7s"
          >
            <div className="it-service-5-item mb-30">
              <div className="it-service-5-thumb border-radius-20 mb-25">
                <img
                  className="w-100"
                  src="assets/img/service/service-5-6.png"
                  alt=""
                />
              </div>
              <div className="it-service-4-content pl-10">
                <h5 className="it-service-4-title mb-15">
                  <Link className="border-line" to="/">
                    Quality Tested & Built
                  </Link>
                </h5>
                <p>
                  Every component and installation is rigorously tested,
                  ensuring reliable performance and a fully customized solar
                  solution for your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // service-area-end
  );
};

export default ServiceArea;
