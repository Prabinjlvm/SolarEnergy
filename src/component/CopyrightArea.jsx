import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

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
                    © 2025 <Link to="/">Solaar</Link> All rights reserved.
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
                  <Link to="/">
                    <i>
                      <FaTwitter />
                    </i>
                  </Link>
                  <Link to="/">
                    <i>
                      <FaFacebookF />
                    </i>
                  </Link>
                  <Link to="/">
                    <i>
                      <FaInstagram />
                    </i>
                  </Link>
                  <Link to="/">
                    <i>
                      <FaLinkedinIn />
                    </i>
                  </Link>
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
