import React from "react";

const StepArea = () => {
  return (
    <section className="it-step-area it-step-inner-style pt-130 pb-130">
      <div className="container">
        <div className="mb-80">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="it-step-section-title-box">
                <span className="it-section-subtitle">Why Choose us</span>
                <h4 className="it-section-title fz-45 it-split-text it-split-in-right">
                  Reliable solar power. <br /> Trusted for years.
                </h4>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="it-step-top-content-wrap d-flex justify-content-lg-end">
                <div className="it-step-top-content gray-bg3 d-inline-flex align-items-center">
                  <h5>4k+</h5>
                  <p>
                    Successfully Completed <br /> Business Project
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Steps Section */}
        <div className="row align-items-center">
          <div
            className="col-xl-6 col-lg-6 wow itfadeLeft"
            data-wow-duration=".9s"
            data-wow-delay=".5s"
          >
            <div className="it-step-wrap">
              {/* Step Item 1 */}
              <div className="it-step-item d-inline-flex mb-35">
                <div className="it-step-number">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 1a7 7 0 1 1-6.364 4h1.287A6 6 0 1 0 8 2z" />
                      <path d="M7 4h2v5H7zM7 10h2v2H7z" />
                    </svg>
                  </span>
                </div>
                <div className="it-step-content">
                  <h5 className="it-step-title">25 Years System Warranty</h5>
                  <p>
                    Solaar Request Your Free Solar Quote Today Fast, <br />
                    Affordable, and Eco-Friendly Energy Solutions!
                  </p>
                </div>
              </div>

              {/* Step Item 2 */}
              <div className="it-step-item active d-inline-flex mb-35">
                <div className="it-step-number">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
                      <path d="M10.97 4.97a.75.75 0 1 1 1.06 1.06L7.477 10.6a.75.75 0 0 1-1.06 0L4.47 8.653a.75.75 0 0 1 1.06-1.06l1.417 1.417z" />
                    </svg>
                  </span>
                </div>
                <div className="it-step-content">
                  <h5 className="it-step-title">Battery Storage Included</h5>
                  <p>
                    Solaar Request Your Free Solar Quote Today Fast, <br />
                    Affordable, and Eco-Friendly Energy Solutions!
                  </p>
                </div>
              </div>

              {/* Step Item 3 */}
              <div className="it-step-item d-inline-flex mb-35">
                <div className="it-step-number">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 1a7 7 0 1 1-6.364 4h1.287A6 6 0 1 0 8 2z" />
                      <path d="M7 4h2v5H7zM7 10h2v2H7z" />
                    </svg>
                  </span>
                </div>
                <div className="it-step-content">
                  <h5 className="it-step-title">Eco-Friendly Panels</h5>
                  <p>
                    Solaar Request Your Free Solar Quote Today Fast, <br />
                    Affordable, and Eco-Friendly Energy Solutions!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Area (Optional, if you want side image) */}
          <div className="col-xl-6 col-lg-6">
            <div className="it-step-img text-center">
              <img
                src="/assets/img/shop/details-1-1.jpg"
                alt="Solar panels"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepArea;
