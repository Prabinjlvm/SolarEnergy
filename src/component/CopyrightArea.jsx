import React from "react";

const CopyrightArea = () => {
  return (
    <>
      {/* Copyright Area */}

      <div className="it-copyright-area">
        <div className="container">
          <div className="it-copyright-wrap">
            <div className="row align-items-center">
              <div
                className="col-lg-6 col-md-7 col-sm-6 wow itfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".5s"
              >
                <div className="it-copyright-left text-center text-md-start">
                  <p className="mb-0">
                    © 2025 <a href="/">Solaar</a> All rights reserved.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-6 col-md-5 col-sm-6 wow itfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".7s"
              >
                <div className="it-copyright-social text-center text-sm-end">
                  {/* Social Icons */}
                  <a href="#">
                    <i className="fab fa-x-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CopyrightArea;
