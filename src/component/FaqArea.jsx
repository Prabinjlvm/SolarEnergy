import React from "react";
import { Link } from "react-router-dom";

const FaqArea = () => {
  return (
    <section
      className="it-faq-2-area z-index-1 it-faq-area pb-130 black-bg"
      style={{ marginTop: "100px" }}
    >
      <img
        className="it-faq-2-shape"
        src="assets/img/shape/faq-5-1.png"
        alt=""
      />
      <div className="p-relative">
        <div className="container">
          <div className="row">
            <div className="offset-xl-5 offset-lg-5 col-xl-7 col-lg-7">
              <div className="it-faq-right">
                <div className="it-faq-section-title-box mb-55">
                  <span className="it-section-subtitle">why Choose us</span>
                  <h4 className="it-section-title fz-45 text-white it-split-text it-split-in-right">
                    Why So You Have to Have <br />
                    use Solar Panels?
                  </h4>
                </div>
                <div className="it-custom-accordion">
                  <div className="accordion" id="accordionExample2">
                    {/* Accordion Item 1 */}
                    <div className="accordion-items mb-30">
                      <h4 className="accordion-header" id="headingOne2">
                        <button
                          className="accordion-buttons"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne2"
                          aria-expanded="true"
                          aria-controls="collapseOne2"
                        >
                          01 Certified Technicians
                        </button>
                      </h4>
                      <div
                        id="collapseOne2"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne2"
                        data-bs-parent="#accordionExample2"
                      >
                        <div className="accordion-body">
                          <p className="mb-0">
                            Transform your lifestyle with renewable solar
                            solutions that deliver savings, energy control, and
                            long-term sustainability—crafted for your unique
                            home and needs.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Accordion Item 2 */}
                    <div className="accordion-items mb-30">
                      <h4 className="accordion-header" id="headingTwo3">
                        <button
                          className="accordion-buttons collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo3"
                          aria-expanded="false"
                          aria-controls="collapseTwo3"
                        >
                          02 Environmentally Friendly
                        </button>
                      </h4>
                      <div
                        id="collapseTwo3"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo3"
                        data-bs-parent="#accordionExample2"
                      >
                        <div className="accordion-body">
                          <p className="mb-0">
                            Choose eco-friendly solar power that reduces carbon
                            footprints, safeguards ecosystems, and delivers
                            reliable energy—supporting a cleaner and greener
                            tomorrow.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Accordion Item 3 */}
                    <div className="accordion-items mb-30">
                      <h4 className="accordion-header" id="headingFour4">
                        <button
                          className="accordion-buttons collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour4"
                          aria-expanded="false"
                          aria-controls="collapseFour4"
                        >
                          03 Save 60-80% On Billis
                        </button>
                      </h4>
                      <div
                        id="collapseFour4"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFour4"
                        data-bs-parent="#accordionExample2"
                      >
                        <div className="accordion-body">
                          <p className="mb-0">
                            Cut your energy expenses dramatically with advanced
                            solar solutions that let you save up to 80% on
                            electricity costs while enjoying reliable,
                            sustainable power every day.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Accordion Item 4 */}
                    <div className="accordion-items">
                      <h4 className="accordion-header" id="headingFour5">
                        <button
                          className="accordion-buttons collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour5"
                          aria-expanded="false"
                          aria-controls="collapseFour5"
                        >
                          04 Customer Support 24/7
                        </button>
                      </h4>
                      <div
                        id="collapseFour5"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFour5"
                        data-bs-parent="#accordionExample2"
                      >
                        <div className="accordion-body">
                          <p className="mb-0">
                            Get reliable 24/7 support from our team, ensuring
                            your solar solutions perform at their best with help
                            whenever you need it, day or night.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Image & Video */}
        <div
          className="it-faq-2-thumb wow img-anim-top"
          data-wow-duration="1.5s"
          data-wow-delay="0.1s"
        >
          <img src="assets/img/faq/faq-5.jpg" alt="" />
          <Link
            className="pulse-theme it-faq-2-video popup-video"
            to="https://www.youtube.com/watch?v=2EPqn-k9Pjk"
          >
            <span>
              <svg
                width="20"
                height="23"
                viewBox="0 0 20 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 11.5L0 23V0L20 11.5Z" fill="#0C121D" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
    // faq-area-end
  );
};

export default FaqArea;
