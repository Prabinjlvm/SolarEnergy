import React from "react";

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
                  Leading the <br />
                  Future of Solar
                </h4>
              </div>
            </div>
            <div className="col-xl-6 col-lg-5">
              <div className="it-about-2-text d-flex justify-content-lg-end">
                <div className="text-start">
                  <p className="mb-30">
                    Empower your lifestyle with smart, sustainable energy <br />
                    solutions that give you control, reduce bills,
                  </p>
                  <a href="service-v1.html" className="it-btn-theme">
                    <span>
                      <span className="text-1">View All Services</span>
                      <span className="text-2">View All Services</span>
                    </span>
                  </a>
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
                  <a className="border-line" href="service-details.html">
                    Designed for You
                  </a>
                </h5>
                <p>
                  From consultation to installation and beyond, our dedicated
                  teams create a seamless experience and customize a complete
                  solar
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
                  <a className="border-line" href="service-details.html">
                    Unmatched Heritage
                  </a>
                </h5>
                <p>
                  From consultation to installation and beyond, our dedicated
                  teams create a seamless experience and customize a complete
                  solar
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
                  <a className="border-line" href="service-details.html">
                    Quality Tested & Built
                  </a>
                </h5>
                <p>
                  From consultation to installation and beyond, our dedicated
                  teams create a seamless experience and customize a complete
                  solar
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
