import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ title = "About Us - 01" }) => {
  return (
    <div className="it-breadcrumb-area pt-40 z-index-1 fix">
      <img
        className="it-breadcrumb-shape-1"
        src="/assets/img/shape/breadcrumb-1.png"
        alt=""
      />
      <div className="container container-1380">
        <div className="row align-items-center">
          <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-5">
            <div className="it-breadcrumb-content">
              <div className="it-breadcrumb-title-box">
                <h3 className="it-breadcrumb-title it-split-text it-split-in-right">
                  {title}
                </h3>
              </div>
              <div className="it-breadcrumb-list-wrap">
                <div className="it-breadcrumb-list">
                  <span>
                    <Link to="/">Home</Link>
                  </span>
                  <span className="dvdr">
                    <svg
                      width="6"
                      height="9"
                      viewBox="0 0 6 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.728891 0L0 0.728893L3.76852 4.5L0 8.27111L0.728891 9L5.23148 4.5L0.728891 0Z"
                        fill="currentcolor"
                      />
                    </svg>
                  </span>
                  <span>
                    <Link to="/about-us">About Us</Link>
                  </span>
                  <span className="dvdr">
                    <svg
                      width="6"
                      height="9"
                      viewBox="0 0 6 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.728891 0L0 0.728893L3.76852 4.5L0 8.27111L0.728891 9L5.23148 4.5L0.728891 0Z"
                        fill="currentcolor"
                      />
                    </svg>
                  </span>
                  <span>
                    <Link to="/about-us">01</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-7 col-xl-6 col-lg-6 col-md-7">
            <div className="it-breadcrumb-thumb text-end">
              <img src="/assets/img/breadcrumb/thumb.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
