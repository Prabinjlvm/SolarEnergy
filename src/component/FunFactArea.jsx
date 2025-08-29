import React from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const FunFactArea = () => {
  // Intersection observer for triggering animation
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section
      className="it-funfact-2-area z-index-1 pt-130 pb-130"
      style={{ backgroundImage: "url('assets/img/shape/funfact-bg.jpg')" }}
    >
      <div className="container">
        <div className="row">
          {/* Left Content */}
          <div className="col-xl-6 col-lg-6">
            <div className="it-funfact-2-left">
              <div className="it-funfact-2-section-title-box mb-25">
                <span className="it-section-subtitle">Imfact</span>
                <h4 className="it-section-title text-white fz-45 it-split-text it-split-in-right">
                  Solutions & Offerings <br /> Across Regions
                </h4>
              </div>
              <div className="it-funfact-2-text">
                <p className="mb-35">
                  Delivering innovative energy solutions to communities
                  everywhere, <br />
                  ensuring everyone benefits from a cleaner, smarter, and more
                  sustainable future.
                </p>
              </div>
              {/* <Link to="/" className="it-btn-theme">
                <span>
                  <span className="text-1">Get Clean Energy</span>
                  <span className="text-2">Get Clean Energy</span>
                </span>
              </Link> */}
            </div>
          </div>

          {/* Right Content */}
          <div className="col-xl-6 col-lg-6">
            <div className="it-funfact-2-right" ref={ref}>
              <div className="row gx-0">
                {/* Project Complete */}
                <div className="col-md-6 col-sm-6">
                  <div className="it-funfact-item style-1">
                    <h5 className="it-funfact-number">
                      <i className="fa fa-check text-success me-2"></i>
                      {inView && <CountUp end={500} duration={2} />}
                    </h5>
                    <span>Project Complete</span>
                  </div>
                </div>

                {/* Happy Clients */}
                <div className="col-md-6 col-sm-6">
                  <div className="it-funfact-item style-2">
                    <h5 className="it-funfact-number">
                      <i className="fa fa-users text-success me-2"></i>
                      {inView && <CountUp end={12} duration={2} />}
                    </h5>
                    <span>Happy Clients</span>
                  </div>
                </div>

                {/* Dealer Equipment */}
                <div className="col-md-6 col-sm-6">
                  <div className="it-funfact-item style-3">
                    <h5 className="it-funfact-number">
                      <i className="fa fa-award text-success me-2"></i>
                      {inView && <CountUp end={450} duration={2} />}
                    </h5>
                    <span>Dealer Equipment</span>
                  </div>
                </div>

                {/* Years Of Experience */}
                <div className="col-md-6 col-sm-6">
                  <div className="it-funfact-item style-4">
                    <h5 className="it-funfact-number">
                      <i className="fa fa-users-cog text-success me-2"></i>
                      {inView && <CountUp end={600} duration={2} />}
                    </h5>
                    <span>Years Of Experience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFactArea;
