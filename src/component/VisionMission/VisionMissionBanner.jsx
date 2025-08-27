// src/components/VisionMissionBanner.jsx
import React from "react";
import { Link } from "react-router-dom";

const VisionMissionBanner = () => {
  return (
    <div
      className="container-fluid page-header py-5 mt-75"
      style={{
        backgroundImage: "url('assets/img/about/SolarHome-2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container py-5">
        <h1 className="display text-white mb-3 animated slideInDown">
          Vision &amp; Mission
        </h1>
        <nav aria-label="breadcrumb" className="animated slideInDown">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-items">
              <Link to="/" className="text-white">
                Home
              </Link>
              <span className="text-white mx-2">{">"}</span>
            </li>
            <li className="breadcrumb-items">
              <Link to="/about" className="text-white">
                About
              </Link>
              <span className="text-white mx-2">{">"}</span>
            </li>
            <li
              className="breadcrumb-items text-white active"
              aria-current="page"
            >
              Vision &amp; Mission
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default VisionMissionBanner;
