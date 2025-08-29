import React from "react";
import { Link } from "react-router-dom";

const NewsletterArea = () => {
  return (
    // newsletter-area-start
    <div className="it-newsletter-2-area">
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
              <div className="it-newsletter-2-input-box text-lg-end text-start">
                <Link to="/services" className="it-btn-theme highlight-btn">
                  <span>
                    <span className="text-1">View All Services</span>
                    <span className="text-2">View All Services</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // newsletter-area-end
  );
};

export default NewsletterArea;
