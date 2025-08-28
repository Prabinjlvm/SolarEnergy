import React from "react";
import Header from "../component/Header";
import MagicCursor from "../component/MagicCursor";
import BackToTop from "../component/BackToTop";
import SearchPopup from "../component/SearchPopup";
import OffcanvasMenu from "../component/OffcanvasMenu";
import FooterArea from "../component/FooterArea";
import NewsletterArea from "../component/NewsletterArea";
import { Link } from "react-router-dom";

export default function OurTeam() {
  const teamMembers = [
    {
      name: "BENJAMIN EVALENT",
      role: "Solar Expert",
      img: "assets/img/team/team-1-1.jpg",
    },
    {
      name: "Emily Ferrara",
      role: "Solar Expert",
      img: "assets/img/team/team-1-2.jpg",
    },
    {
      name: "Jason Ybarra",
      role: "Solar Expert",
      img: "assets/img/team/team-1-10.jpg",
    },
    {
      name: "David Connor",
      role: "Solar Expert",
      img: "assets/img/team/team-1-14.jpg",
    },
    {
      name: "Julie Parsons",
      role: "Solar Expert",
      img: "assets/img/team/team-1-5.jpg",
    },
    {
      name: "Michael Brown",
      role: "Solar Expert",
      img: "assets/img/team/team-1-6.jpg",
    },
    {
      name: "Sophia Turner",
      role: "Solar Expert",
      img: "assets/img/team/team-1-13.jpg",
    },
    {
      name: "Daniel Lee",
      role: "Solar Expert",
      img: "assets/img/team/team-1-12.jpg",
    },
    {
      name: "Olivia Harris",
      role: "Solar Expert",
      img: "assets/img/team/team-1-11.jpg",
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

      {/* Main */}
      <main className="main-content-start">
        {/* ===== Breadcrumb Area ===== */}
        <div className="it-breadcrumb-area pt-40 z-index-1 fix">
          <img
            className="it-breadcrumb-shape-1"
            src="assets/img/shape/breadcrumb-1.png"
            alt=""
          />
          <div className="container container-1380">
            <div className="row align-items-center">
              <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-5">
                <div className="it-breadcrumb-content">
                  <div className="it-breadcrumb-title-box">
                    <h3 className="it-breadcrumb-title it-split-text it-split-in-right">
                      Our Team
                    </h3>
                  </div>
                  <div className="it-breadcrumb-list-wrap">
                    <div className="it-breadcrumb-list">
                      <span>
                        <Link to="/">Home</Link>
                      </span>
                      <span className="dvdr">{">"}</span>
                      <span>
                        <Link to="/about-us">About Us</Link>
                      </span>
                      <span className="dvdr">{">"}</span>
                      <span>
                        <Link to="/our-team">Our Team</Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-7 col-xl-6 col-lg-6 col-md-7">
                <div className="it-breadcrumb-thumb text-end">
                  <img src="assets/img/breadcrumb/thumb.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== Team Section (Only Photos) ===== */}
        <section className="it-team-area gray-bg3 pt-130 pb-110">
          <div className="container">
            <div className="row gx-20">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="col-xl-4 col-lg-4 col-md-6 col-sm-6 wow img-anim-top"
                  data-wow-duration="1.5s"
                  data-wow-delay={`${0.1 * index}s`}
                >
                  <div className="it-team-item fix mb-20">
                    <div className="it-team-thumb p-relative border-radius-20">
                      <img
                        src={member.img}
                        className="w-100"
                        alt={member.name}
                      />
                      <div className="it-team-social">
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </div>
                    </div>
                    <div className="it-team-content">
                      <h4 className="it-team-title">
                        <a className="border-line" href="#">
                          {member.name}
                        </a>
                      </h4>
                      <span>{member.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ===== Pagination Section ===== */}
            <div className="row">
              <div className="col-12">
                <div className="it-pagination text-center mt-25">
                  <nav>
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa-regular fa-arrow-left"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">1</a>
                      </li>
                      <li className="current">
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li>
                        <a href="#">4</a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-regular fa-arrow-right"></i>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            {/* ===== End Pagination Section ===== */}
          </div>
        </section>

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
