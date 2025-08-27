import React from "react";
import CopyrightArea from "./CopyrightArea";
import { Link } from "react-router-dom";

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
                  <Link to="/">
                    <img src="assets/img/logo/logo-white3.png" alt="Logo" />
                  </Link>
                </div>
                <div className="it-footer-widget-text">
                  <p>
                    <i className="fas fa-map-marker-alt"></i> Address: No 187,
                    2nd Floor, Madurai Road, Aruppukottai, Tamilnadu - 626101
                  </p>
                  <p>
                    <i className="fas fa-phone-alt"></i> +91-98407 57798
                  </p>
                  <p>
                    <i className="fas fa-envelope"></i> contact@strujagreen.com
                  </p>
                </div>
                <div className="it-footer-widget-btn">
                  <Link to="/contact" className="it-btn-theme">
                    <span>
                      <span className="text-1">Get A Quote</span>
                      <span className="text-2">Get A Quote</span>
                    </span>
                  </Link>
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
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About Us</Link>
                    </li>
                    <li>
                      <Link to="/services">Services</Link>
                    </li>
                    <li>
                      <Link to="/career">Career</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact us</Link>
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
                      <Link to="/">Solar Planning</Link>
                    </li>
                    <li>
                      <Link to="/">Solar Installation</Link>
                    </li>
                    <li>
                      <Link to="/">Electricity storage</Link>
                    </li>
                    <li>
                      <Link to="/">Solar Repairing</Link>
                    </li>
                    <li>
                      <Link to="/">Bio gas Plant</Link>
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
                        <Link to="#">
                          <img
                            src={`assets/img/video/gallery-${img}.jpg`}
                            alt={`Gallery ${img}`}
                          />
                        </Link>
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
