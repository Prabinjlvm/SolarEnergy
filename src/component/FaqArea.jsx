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
                  <span className="it-section-subtitle">
                    WHY STRUGA GREEN ENERGY
                  </span>
                  <h4 className="it-section-title fz-45 text-white it-split-text it-split-in-right">
                    Why Solar? The Benefits Speak for Themselves
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
                          Customised Financial Model
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
                            Achieve maximum savings with a customised financial
                            model designed for your needs. We create smart solar
                            solutions that optimise costs, provide energy
                            independence, and ensure long-term value for your
                            home or business.
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
                          Top 3 EPC company in India
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
                            Ranked among India’s top 3 EPC companies, we deliver
                            reliable and efficient solar solutions. Our
                            expertise ensures high-quality installations,
                            optimised performance, and a sustainable energy
                            future for every client.
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
                          Highest in Safety Standards
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
                            Our solar solutions adhere to the highest safety
                            standards, ensuring reliable and secure energy for
                            your home or business. Experience worry-free,
                            sustainable power designed for long-term
                            performance.
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
                          Integrated Resourceful Teams
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
                            Our expert teams work seamlessly to provide
                            round-the-clock support, ensuring your solar
                            solutions operate efficiently and reliably—anytime
                            you need assistance.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Accordion Item 5 */}
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
                          PAN India and International Exposure
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
                            We bring extensive experience across India and
                            international markets, delivering solar solutions
                            that meet global standards and cater to diverse
                            energy needs.
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
