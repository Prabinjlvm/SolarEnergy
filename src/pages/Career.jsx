import React from "react";
import Header from "../component/Header";
import FooterArea from "../component/FooterArea";
import NewsletterArea from "../component/NewsletterArea";
import { Link } from "react-router-dom";

const careerRoles = [
  {
    title: "Product Designer",
    description:
      "With a passion for precision and a commitment to quality we have been empowering industries and driving progress. We specialize",
    tags: ["100% Remote", "Full Time"],
  },
  {
    title: "UI/UX Designer",
    description:
      "Design intuitive and visually appealing user interfaces for web and mobile applications.",
    tags: ["Remote", "Full Time"],
  },
  {
    title: "WordPress Developer",
    description:
      "Build and customize WordPress websites with high performance and responsiveness.",
    tags: ["Remote", "Contract"],
  },
  {
    title: "SEO Specialist",
    description:
      "Optimize websites to improve search engine rankings and organic traffic.",
    tags: ["Remote", "Full Time"],
  },
  {
    title: "Laravel Developer",
    description:
      "Develop web applications using Laravel framework with best coding practices.",
    tags: ["Remote", "Full Time"],
  },
  {
    title: "Digital Marketer",
    description:
      "Plan and execute digital marketing campaigns to boost online presence and sales.",
    tags: ["Remote", "Full Time"],
  },
];

const Career = () => {
  return (
    <>
      <Header />

      <main>
        {/* Breadcrumb Area */}
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
                      Careers
                    </h3>
                  </div>
                  <div className="it-breadcrumb-list-wrap">
                    <div className="it-breadcrumb-list">
                      <span>
                        <Link to="/">Home</Link>
                      </span>
                      <span className="dvdr">
                        <svg width="6" height="9" viewBox="0 0 6 9" fill="none">
                          <path
                            d="M0.728891 0L0 0.728893L3.76852 4.5L0 8.27111L0.728891 9L5.23148 4.5L0.728891 0Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      <span>Careers</span>
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

        {/* Career Area */}
        <div className="it-career-area pt-130 pb-95">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="it-career-section-title-box text-center mb-65">
                  <span className="it-section-subtitle">Careers</span>
                  <h4 className="it-section-title it-split-text it-split-in-right fz-45">
                    Join Our Team and <br /> Shape the Future
                  </h4>
                </div>
              </div>
            </div>

            <div className="row gx-35">
              {careerRoles.map((role, index) => (
                <div className="col-xl-6 col-lg-6" key={index}>
                  <div className="it-career-item p-relative mb-35">
                    <h4 className="it-career-title">{role.title}</h4>
                    <p className="mb-20">{role.description}</p>
                    <div className="it-career-tags">
                      {role.tags.map((tag, i) => (
                        <span key={i}>{tag}</span>
                      ))}
                    </div>
                    <Link to={`/contact`} className="arrow border-line">
                      Apply
                      <svg
                        width="13"
                        height="12"
                        viewBox="0 0 13 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.995 2.0995C13.05 1.54996 12.649 1.05992 12.0995 1.00496L3.14417 0.109429C2.59463 0.0544743 2.10458 0.455418 2.04963 1.00496C1.99467 1.55451 2.39562 2.04455 2.94516 2.0995L10.9055 2.89553L10.1094 10.8558C10.0545 11.4054 10.4554 11.8954 11.005 11.9504C11.5545 12.0053 12.0446 11.6044 12.0995 11.0548L12.995 2.0995ZM1 11L1.63324 11.774L12.6332 2.77396L12 2L11.3668 1.22604L0.366762 10.226L1 11Z"
                          fill="#2DC457"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter & Footer */}
        <NewsletterArea />
        <FooterArea />
      </main>
    </>
  );
};

export default Career;
