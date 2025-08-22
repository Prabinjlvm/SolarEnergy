import React from "react";

const TestimonialArea = () => {
  return (
    // testimonial-area-start
    <section className="it-testimonial-2-area it-testimonial-2-style-2 z-index-1 pt-130 pb-130">
      <div className="container">
        {/* Section Title */}
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="it-testimonial-section-title-box text-center mb-70">
              <span className="it-section-subtitle">Client’s Testimonial</span>
              <h4 className="it-section-title fz-45 it-split-text it-split-in-right">
                What our clients reviews
              </h4>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="row">
          <div className="col-12">
            <div className="it-testimonial-2-wrap p-relative">
              <div className="swiper it-testimonial-2-active p-relative">
                <div className="swiper-wrapper">
                  {/* Slide 1 */}
                  <div className="swiper-slide">
                    <div className="it-testimonial-item">
                      <div className="it-testimonial-ratting mb-20">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <span key={index}>
                            <svg
                              width="21"
                              height="20"
                              viewBox="0 0 21 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12.434 7.63903L10.0677 0L7.70117 7.63903H0.0449219L6.23945 12.3599L3.87315 20L10.0677 15.277L16.2622 20L13.8957 12.3599L20.0902 7.63903H12.434Z"
                                fill="#2DC457"
                              />
                            </svg>
                          </span>
                        ))}
                      </div>
                      <div className="it-testimonial-text d-flex mb-20">
                        <p>
                          “This dashboard design exceeded our expectations. The
                          live oil price integration, clean layout, and
                          organized three-column structure perfectly represent
                          our brand’s”
                        </p>
                      </div>
                      <div className="it-testimonial-bottom d-flex align-items-center">
                        <div className="it-testimonial-avatar">
                          <img
                            src="assets/img/testimonial/avatar-2.jpg"
                            alt=""
                          />
                        </div>
                        <div className="it-testimonial-avatar-info">
                          <h5 className="it-testimonial-avatar-name">
                            Rashidul Karim
                          </h5>
                          <span>Director EnergyCore Ltd.</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Slide 2 */}
                  <div className="swiper-slide">
                    <div className="it-testimonial-item">
                      <div className="it-testimonial-ratting mb-20">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <span key={index}>
                            <svg
                              width="21"
                              height="20"
                              viewBox="0 0 21 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12.434 7.63903L10.0677 0L7.70117 7.63903H0.0449219L6.23945 12.3599L3.87315 20L10.0677 15.277L16.2622 20L13.8957 12.3599L20.0902 7.63903H12.434Z"
                                fill="#2DC457"
                              />
                            </svg>
                          </span>
                        ))}
                      </div>
                      <div className="it-testimonial-text d-flex mb-20">
                        <p>
                          “This dashboard design exceeded our expectations. The
                          live oil price integration, clean layout, and
                          organized three-column structure perfectly represent
                          our brand’s”
                        </p>
                      </div>
                      <div className="it-testimonial-bottom d-flex align-items-center">
                        <div className="it-testimonial-avatar">
                          <img
                            src="assets/img/testimonial/avatar-3.jpg"
                            alt=""
                          />
                        </div>
                        <div className="it-testimonial-avatar-info">
                          <h5 className="it-testimonial-avatar-name">
                            Andro Boris
                          </h5>
                          <span>Director EnergyCore Ltd.</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Add more slides as needed, you can replicate Slide 1 and Slide 2 */}
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="it-testimonial-arrow-wrap">
                <button className="arrow-prev">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.292892 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM16 7H0.999999V9H16V7Z"
                      fill="currentcolor"
                    />
                  </svg>
                </button>
                <button className="arrow-next">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.7071 8.70711C16.0976 8.31658 16.0976 7.68342 15.7071 7.29289L9.34315 0.928932C8.95262 0.538408 8.31946 0.538408 7.92893 0.928932C7.53841 1.31946 7.53841 1.95262 7.92893 2.34315L13.5858 8L7.92893 13.6569C7.53841 14.0474 7.53841 14.6805 7.92893 15.0711C8.31946 15.4616 8.95262 15.4616 9.34315 15.0711L15.7071 8.70711ZM0 9H15V7H0V9Z"
                      fill="currentcolor"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="it-testimonial-2-dots mt-70 text-center"></div>
          </div>
        </div>
      </div>
    </section>
    // testimonial-area-end
  );
};

export default TestimonialArea;
