import React from "react";

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
          <a href="index.html">
            <img src="assets/img/logo/logo-white.png" alt="" />
          </a>
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
              <a href="#">
                <i className="fal fa-envelope"></i>
              </a>
            </div>
            <div className="itoffcanvas__info-address">
              <span>Email</span>
              <a href="mailto:hello@yourmail.com">hello@yourmail.com</a>
            </div>
          </div>

          <div className="it-info-wrapper mb-20 d-flex align-items-center">
            <div className="itoffcanvas__info-icon">
              <a href="#">
                <i className="fal fa-phone-alt"></i>
              </a>
            </div>
            <div className="itoffcanvas__info-address">
              <span>Phone</span>
              <a href="tel:(00)45611227890">(00) 456 1122 7890</a>
            </div>
          </div>

          <div className="it-info-wrapper mb-20 d-flex align-items-center">
            <div className="itoffcanvas__info-icon">
              <a href="#">
                <i className="fas fa-map-marker-alt"></i>
              </a>
            </div>
            <div className="itoffcanvas__info-address">
              <span>Location</span>
              <a
                href="https://googleusercontent.com/maps.google.com/0"
                target="_blank"
              >
                Riverside 255, San Francisco, USA
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="body-overlay"></div>
    </div>
  );
};

export default OffcanvasMenu;
