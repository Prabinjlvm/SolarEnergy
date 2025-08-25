import React from "react";
import CopyrightArea from "./CopyrightArea";

const FooterArea = () => {
  return (
    <footer className="it-footer-wrap it-footer-style-4 it-footer-style-2 z-index-1 black-bg pt-110 fix">
      <img
        className="footer-bg"
        src="assets/img/shape/footer-5.jpg"
        alt="footer background"
      />

      {/* Footer Main Area */}
      <div className="it-footer-area it-footer-border p-relative pt-100 pb-50">
        <div className="container">
          <div className="row">
            {/* Footer Logo + About */}
            <div
              className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-50 wow itfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".3s"
            >
              <div className="it-footer-widget it-footer-col-4-1">
                <div className="it-footer-widget-logo mb-20">
                  <a href="/">
                    <img src="assets/img/logo/logo-white3.png" alt="Logo" />
                  </a>
                </div>
                <div className="it-footer-widget-text">
                  <p>
                    Harness the power of the sun with our advanced <br />
                    solar solutions. Sustainable, efficient, and <br />
                    cost-effective energy for your home or business.
                  </p>
                </div>
                <div className="it-footer-widget-btn">
                  <a href="/contact" className="it-btn-theme">
                    <span>
                      <span className="text-1">Get A Quote</span>
                      <span className="text-2">Get A Quote</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Footer Menu - Company */}
            <div
              className="col-xl-3 col-lg-2 col-md-6 col-sm-6 mb-50 wow itfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <div className="it-footer-widget it-footer-col-4-2">
                <h4 className="it-footer-widget-title">Company</h4>
                <div className="it-footer-widget-menu">
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/about">About Us</a>
                    </li>
                    <li>
                      <a href="/services">Services</a>
                    </li>
                    <li>
                      <a href="/career">Career</a>
                    </li>
                    <li>
                      <a href="/contact">Contact us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Footer Menu - Services */}
            <div
              className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-50 wow itfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".7s"
            >
              <div className="it-footer-widget it-footer-col-4-3">
                <h4 className="it-footer-widget-title">Services</h4>
                <div className="it-footer-widget-menu">
                  <ul>
                    <li>
                      <a href="#">Solar Planning</a>
                    </li>
                    <li>
                      <a href="#">Solar Installation</a>
                    </li>
                    <li>
                      <a href="#">Electricity storage</a>
                    </li>
                    <li>
                      <a href="#">Solar Repairing</a>
                    </li>
                    <li>
                      <a href="#">Bio gas Plant</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Footer Gallery */}
            <div
              className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-50 wow itfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".9s"
            >
              <div className="it-footer-widget it-footer-col-4-4 d-flex justify-content-xl-end">
                <div>
                  <h4 className="it-footer-widget-title">Gallery</h4>
                  <div className="it-footer-widget-gallery-wrap">
                    {[1, 2, 3, 4, 5, 6].map((img, i) => (
                      <div key={i} className="it-footer-widget-gallery-item">
                        <a href="#">
                          <img
                            src={`assets/img/video/gallery-${img}.jpg`}
                            alt={`Gallery ${img}`}
                          />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CopyrightArea />
    </footer>
  );
};

export default FooterArea;
