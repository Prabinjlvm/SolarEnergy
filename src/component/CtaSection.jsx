import React from "react";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <>
      {/* cta-area-start */}
      <section className="it-cta-2-area gray-bg3">
        <div className="container">
          <div className="it-cta-2-wrap theme-bg border-radius-20 z-index-2">
            <img
              className="it-cta-2-shape"
              src="assets/img/shape/cta-5.png"
              alt="CTA Shape"
            />
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="it-cta-2-content">
                  <h4 className="it-cta-2-title text-white mb-0">
                    Harness The Sun <br />
                    Get Solar Power Today?
                  </h4>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="it-cta-2-btn text-md-end">
                  <Link to="/contact" className="it-btn-theme white-bg">
                    <span>
                      <span className="text-1">Get Energy</span>
                      <span className="text-2">Get Energy</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* cta-area-end */}
    </>
  );
};

export default CtaSection;
