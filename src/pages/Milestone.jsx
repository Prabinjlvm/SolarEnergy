import React from "react";
import Header from "../component/Header";
import MagicCursor from "../component/MagicCursor";
import BackToTop from "../component/BackToTop";
import SearchPopup from "../component/SearchPopup";
import OffcanvasMenu from "../component/OffcanvasMenu";
import FooterArea from "../component/FooterArea";
import { Link } from "react-router-dom";
import NewsletterArea from "../component/NewsletterArea";

export default function Milestone() {
  const milestones = [
    {
      year: "2023",
      text: "Incorporated 1 MW rooftop",
      details: "Rooftop solar commissioned in Chennai",
      color: "#41516C",
    },
    {
      year: "2024",
      text: "Thiruvarur District 15 MW",
      details: "Large-scale solar farm for 20,000 homes",
      color: "#FBCA3E",
    },
    {
      year: "2025",
      text: "Pudhukottai District 15 MW",
      details: "Eco-friendly tracking panel setup",
      color: "#E24A68",
    },
    {
      year: "2025",
      text: "Thiruvallur District 50 MW",
      details: "Major renewable energy hub",
      color: "#1B5F8C",
    },
    {
      year: "2026",
      text: "Proposed 200 MW",
      details: "Future expansion for carbon neutrality",
      color: "#4CADAD",
    },
  ];

  return (
    <>
      <div id="body" className="it-magic-cursor">
        {/* Magic Cursor */}
        <MagicCursor />

        {/* Back To Top */}
        <BackToTop />

        {/* Search Popup */}
        <SearchPopup />

        {/* Off-Canvas Menu */}
        <OffcanvasMenu />

        {/* Header */}
        <header className="it-header-height">
          <Header />
        </header>
      </div>

      {/*Main*/}
      <main className="main-content-start">
        {/*Breadcrumb */}
        <div
          className="it-breadcrumb-area pt-40 z-index-1 fix mt-80"
          style={{
            backgroundImage: "url('assets/img/about/SolarHome-3.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "300px", // 🔹 set the height you want
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className="container container-1380">
            <div className="row align-items-center">
              <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-5">
                <div className="it-breadcrumb-content">
                  <div className="it-breadcrumb-title-box">
                    <h3 className="it-breadcrumb-title it-split-text it-split-in-right text-white">
                      Milestone
                    </h3>
                  </div>
                  <div className="it-breadcrumb-list-wrap">
                    <div className="it-breadcrumb-list text-white">
                      <span>
                        <Link to="/">Home</Link>
                      </span>
                      <span className="dvdr"> {">"} </span>
                      <span>
                        <Link to="/about-us">About Us</Link>
                      </span>
                      <span className="dvdr"> {">"} </span>
                      <span>
                        <Link to="/milestone">Milestone</Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="timeline-container">
          {/* Left Column - Details */}
          <div className="timeline-left">
            {milestones.map((item, index) => (
              <div
                key={index}
                className="detail-card mb-5 mt-4"
                style={{
                  "--accent-color": item.color,
                  backgroundColor: item.color,
                }}
              >
                <h3>{item.year}</h3>
                <p>{item.details}</p>
              </div>
            ))}
          </div>

          {/* Right Column - Timeline */}
          <div className="timeline">
            <div className="timeline-line"></div>
            {milestones.map((item, index) => (
              <div
                key={index}
                className={`timeline-item ${
                  index % 2 === 0 ? "left" : "right"
                }`}
                style={{ "--accent-color": item.color }}
              >
                <div className="timeline-card">
                  <div className="timeline-year">{item.year}</div>
                  <div className="timeline-title">{item.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <NewsletterArea />
      </main>

      {/* Footer */}
      <footer>
        <FooterArea />
      </footer>
    </>
  );
}
