import React from "react";
import Header from "./Header";
import FooterArea from "./FooterArea";

const Service1 = () => {
  return (
    <>
      <Header />

      <main>
        {/* breadcrumb-area-start */}
        <div className="it-breadcrumb-area pt-40 z-index-1 fix">
          <img
            className="it-breadcrumb-shape-1"
            src="assets/img/shape/breadcrumb-1.png"
            alt=""
          />
          <div className="container container-1380">
            <div className="row align-items-center">
              <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-5">
                <div className="it-breadcrumb-content">
                  <div className="it-breadcrumb-title-box">
                    <h3 className="it-breadcrumb-title it-split-text it-split-in-right">
                      Services
                    </h3>
                  </div>
                  <div className="it-breadcrumb-list-wrap">
                    <div className="it-breadcrumb-list">
                      <span>
                        <a href="index.html">Home</a>
                      </span>
                      <span className="dvdr">
                        <svg width="6" height="9" viewBox="0 0 6 9" fill="none">
                          <path
                            d="M0.728891 0L0 0.728893L3.76852 4.5L0 8.27111L0.728891 9L5.23148 4.5L0.728891 0Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      <span>
                        <a href="index.html">Services</a>
                      </span>
                      <span className="dvdr">
                        <svg width="6" height="9" viewBox="0 0 6 9" fill="none">
                          {/* <path
                            d="M0.728891 0L0 0.728893L3.76852 4.5L0 8.27111L0.728891 9L5.23148 4.5L0.728891 0Z"
                            fill="currentColor"
                          /> */}
                        </svg>
                      </span>
                      {/* <span>
                        <a href="index.html">01</a>
                      </span> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-7 col-xl-6 col-lg-6 col-md-7">
                <div className="it-breadcrumb-thumb text-end">
                  <img src="assets/img/breadcrumb/thumb.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* breadcrumb-area-end */}

        {/* video-area-start */}
        <section className="it-video-area z-index-1 black-bg pt-120 pb-100">
          <img className="shape" src="assets/img/shape/video-1.png" alt="" />
          <div className="container">
            <div className="mb-80">
              <div className="row">
                <div className="col-xl-12">
                  <div className="it-video-content text-center">
                    <h4
                      className="it-section-title fz-45 wow itfadeUp"
                      data-wow-duration=".9s"
                      data-wow-delay=".3s"
                    >
                      Start your home energy journey today. <br /> Get a free
                      savings estimate <span>from one of our experts.</span>
                    </h4>
                    <div className="it-video-thumb border-radius-20 p-relative">
                      <img src="assets/img/video/video.jpg" alt="" />
                      <a
                        className="it-video-icon popup-video pulse-theme"
                        href="https://www.youtube.com/watch?v=2EPqn-k9Pjk"
                      >
                        <svg
                          width="20"
                          height="23"
                          viewBox="0 0 20 23"
                          fill="none"
                        >
                          <path d="M20 11.5L0 23V0L20 11.5Z" fill="white" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fun facts */}
            <div className="row gx-20">
              <div
                className="col-lg-3 col-md-6 col-sm-6 wow fadeInDown"
                data-wow-duration=".9s"
                data-wow-delay=".5s"
              >
                <div className="it-funfact-item mb-30">
                  <h5 className="it-funfact-number">
                    <i
                      className="purecounter"
                      data-purecounter-duration="1"
                      data-purecounter-end="600"
                    ></i>
                    +
                  </h5>
                  <span>Team Member</span>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 col-sm-6 wow itfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".7s"
              >
                <div className="it-funfact-item mb-30">
                  <h5 className="it-funfact-number">
                    <i
                      className="purecounter"
                      data-purecounter-duration="1"
                      data-purecounter-end="200"
                    ></i>
                    +
                  </h5>
                  <span>Our Project Complete</span>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 col-sm-6 wow fadeInDown"
                data-wow-duration=".9s"
                data-wow-delay=".9s"
              >
                <div className="it-funfact-item mb-30">
                  <h5 className="it-funfact-number">
                    <i
                      className="purecounter"
                      data-purecounter-duration="1"
                      data-purecounter-end="50"
                    ></i>
                    +
                  </h5>
                  <span>Our Century Charge</span>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
                data-wow-duration=".9s"
                data-wow-delay="1.1s"
              >
                <div className="it-funfact-item mb-30">
                  <h5 className="it-funfact-number">
                    <i
                      className="purecounter"
                      data-purecounter-duration="1"
                      data-purecounter-end="20"
                    ></i>
                    K+
                  </h5>
                  <span>Our Best Client Review</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* video-area-end */}

        {/* brand-area-start */}
        <div className="it-brand-area pt-125 pb-130">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="it-brand-content mb-55">
                  <div className="text-center">
                    <span>Trusted By 500+ Companies</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row gx-0">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <div
                  key={num}
                  className="col-xl-2 col-lg-2 col-md-4 col-6 col-sm-4"
                >
                  <div className="it-brand-item">
                    <img src={`assets/img/brand/brand-1-${num}.png`} alt="" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* brand-area-end */}

        {/* newsletter-area-start */}
        <div className="it-newsletter-2-area gray-bg3">
          <div className="container">
            <div className="it-newsletter-2-wrap z-index-2">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="it-newsletter-2-left">
                    <h4 className="it-newsletter-2-title">
                      Sign Up today to get the latest inspiration & insights
                    </h4>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="it-newsletter-2-input-box">
                    <form className="input-wrap p-relative" action="#">
                      <input
                        type="email"
                        placeholder="Enter your Email Address"
                      />
                      <button type="submit">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M15.4128 0.587602C15.1738 0.345687 14.8765 0.169506 14.5495 0.07608C14.2225 -0.0173459 13.8769 -0.0248582 13.5462 0.054269L2.8795 2.30094C2.26522 2.38518 1.68666 2.63925 1.20897 3.03454C0.731284 3.42983 0.373445 3.95064 0.175753 4.53831C-0.0219392 5.12598 -0.0516323 5.75718 0.0900176 6.36081C0.231668 6.96445 0.539034 7.51655 0.977503 7.95494L2.12284 9.0996C2.18483 9.16157 2.23399 9.23516 2.2675 9.31615C2.30102 9.39714 2.31824 9.48395 2.31817 9.5716V11.6836C2.31964 11.9806 2.388 12.2734 2.51817 12.5403L2.51284 12.5449L2.53017 12.5623C2.72551 12.955 3.04456 13.2727 3.43817 13.4663L3.4555 13.4836L3.46017 13.4783C3.72708 13.6084 4.01988 13.6768 4.31684 13.6783H6.42884C6.60554 13.6781 6.77507 13.7481 6.90017 13.8729L8.04484 15.0176C8.35185 15.328 8.71727 15.5746 9.12002 15.7431C9.52278 15.9117 9.95491 15.9988 10.3915 15.9996C10.7553 15.9991 11.1167 15.9397 11.4615 15.8236C12.0438 15.6324 12.5611 15.2823 12.955 14.8127C13.3489 14.3432 13.6038 13.7729 13.6908 13.1663L15.9408 2.47627C16.0241 2.1427 16.0192 1.79322 15.9266 1.46211C15.834 1.13101 15.657 0.829649 15.4128 0.587602Z"
                            fill="#2DC457"
                          />
                        </svg>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* newsletter-area-end */}

        {/* footer-area-start */}
        <FooterArea />
        {/* footer-area-end */}
      </main>
    </>
  );
};

export default Service1;
