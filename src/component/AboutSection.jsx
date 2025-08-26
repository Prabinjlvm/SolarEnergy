import React from "react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="it-about-4-area pt-120 pb-130">
      <div className="container">
        <div className="it-about-4-top-wrap mb-80">
          <div className="row align-items-end">
            <div className="col-xl-6 col-lg-7">
              <div className="it-about-section-title-box">
                <span className="it-section-subtitle">Who We Are</span>
                <h4 className="it-section-title fz-45 it-split-text it-split-in-right">
                  Leading the Way in Solar Power Innovation
                </h4>
              </div>
            </div>
            <div className="col-xl-6 col-lg-5">
              <div className="it-about-4-thumb-wrap d-flex justify-content-end">
                <div className="row gx-20">
                  <div className="col-md-6 col-sm-6">
                    <div
                      className="it-about-4-thumb wow img-anim-left"
                      data-wow-duration="1.5s"
                      data-wow-delay="0.1s"
                    >
                      <img src="assets/img/about/aboutslide1.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div
                      className="it-about-4-thumb wow img-anim-right"
                      data-wow-duration="1.5s"
                      data-wow-delay="0.1s"
                    >
                      <img src="assets/img/about/aboutslide2.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="it-about-thumb border-radius-30">
              <img src="assets/img/about/thumb-5-3.jpg" alt="" />
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-6 wow itfadeRight"
            data-wow-duration=".9s"
            data-wow-delay=".7s"
          >
            <div className="it-about-4-right">
              <p>
                We are a clean energy company specializing in advanced wind
                power systems. With a focus on sustainability a help reduce
                dependency on <br /> fossil fuels through high-efficiency wind
                turbine solutions.
              </p>
              <div className="row">
                <div className="col-lg-6 col-md-5 col-sm-6">
                  <div className="it-about-mission">
                    <span>Our Vision</span>
                    <p>
                      Our vision is to be a global leader in the renewable
                      energy sector, recognized for our excellence in solar
                      procurement and installation. We aspire to drive the
                      widespread adoption of solar energy, fostering a
                      sustainable future for generations to come through
                      continuous innovation, exceptional service, and unwavering
                      commitment to environmental stewardship.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-5 col-sm-6">
                  <div className="it-about-mission">
                    <span>Our Mission</span>
                    <p>
                      Our mission is to deliver exceptional solar energy systems
                      by combining advanced engineering, precise procurement,
                      and expert construction practices. We are committed to
                      providing our clients with reliable, efficient, and
                      cost-effective solar solutions that drive environmental
                      sustainability and energy independence. Through continuous
                      innovation, superior customer service, and a dedicated
                      team, we strive to make solar energy accessible and
                      beneficial for all.
                    </p>
                  </div>
                </div>
              </div>
              <div className="it-about-btn d-sm-flex align-items-center">
                <Link to="/" className="it-btn-theme mr-30">
                  <span>
                    <span className="text-1">Explore More</span>
                    <span className="text-2">Explore More</span>
                  </span>
                </Link>
                <div className="it-about-author d-flex align-items-center">
                  <div className="it-about-author-avater">
                    <img src="assets/img/about/avater.png" alt="" />
                  </div>
                  <div className="it-about-author-designation">
                    <i>Trusteed By</i>
                    <span>World Leading Customer</span>
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

export default AboutSection;
