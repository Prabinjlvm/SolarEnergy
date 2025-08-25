import React from "react";
import { Link } from "react-router-dom";

const OffcanvasMenu = () => {
  return (
    <div className="it-offcanvas-area">
      <div className="itoffcanvas">
        <div className="itoffcanvas__close-btn">
          <button className="close-btn">
            <i className="fal fa-times"></i>
          </button>
        </div>
        <div className="itoffcanvas__logo">
          <Link to="/">
            <img src="assets/img/logo/logo-white.png" alt="" />
          </Link>
        </div>
        <div className="itoffcanvas__text">
          <p>
            Suspendisse interdum consectetur libero id. Fermentum leo vel orci
            porta non. Euismod viverra nibh cras pulvinar suspen.
          </p>
        </div>
        <div className="it-menu-mobile d-xl-none"></div>
        <div className="itoffcanvas__info">
          <h3 className="offcanva-title">Get In Touch</h3>

          <div className="it-info-wrapper mb-20 d-flex align-items-center">
            <div className="itoffcanvas__info-icon">
              <Link to="/">
                <i className="fal fa-envelope"></i>
              </Link>
            </div>
            <div className="itoffcanvas__info-address">
              <span>Email</span>
              <Link to="mailto:hello@yourmail.com">hello@yourmail.com</Link>
            </div>
          </div>

          <div className="it-info-wrapper mb-20 d-flex align-items-center">
            <div className="itoffcanvas__info-icon">
              <Link to="/">
                <i className="fal fa-phone-alt"></i>
              </Link>
            </div>
            <div className="itoffcanvas__info-address">
              <span>Phone</span>
              <Link to="tel:(00)45611227890">(00) 456 1122 7890</Link>
            </div>
          </div>

          <div className="it-info-wrapper mb-20 d-flex align-items-center">
            <div className="itoffcanvas__info-icon">
              <Link to="/">
                <i className="fas fa-map-marker-alt"></i>
              </Link>
            </div>
            <div className="itoffcanvas__info-address">
              <span>Location</span>
              <Link
                to="https://googleusercontent.com/maps.google.com/0"
                target="_blank"
              >
                Riverside 255, San Francisco, USA
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="body-overlay"></div>
    </div>
  );
};

export default OffcanvasMenu;
