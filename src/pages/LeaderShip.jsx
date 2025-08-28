import React from "react";
import Header from "../component/Header";
import MagicCursor from "../component/MagicCursor";
import BackToTop from "../component/BackToTop";
import SearchPopup from "../component/SearchPopup";
import OffcanvasMenu from "../component/OffcanvasMenu";
import FooterArea from "../component/FooterArea";
import { Link } from "react-router-dom";
import NewsletterArea from "../component/NewsletterArea";

export default function Leadership() {
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
        {/* ===== Breadcrumb Area Start ===== */}
        <div
          className="it-breadcrumb-area pt-40 z-index-1 fix mt-80"
          style={{
            backgroundImage: "url('assets/img/about/SolarHome-2.jpg')",
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
                      Leadership
                    </h3>
                  </div>
                  <div className="it-breadcrumb-list-wrap">
                    <div className="it-breadcrumb-list text-white">
                      <span>
                        <Link to="/">Home</Link>
                      </span>
                      <span className="dvdr"> {">"} </span>
                      <span>
                        <Link to="/leadership">Leadership</Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===== Breadcrumb Area End ===== */}

        {/* profile area */}
        <div className="row leadership-section ">
          {/* Left - Director Image */}
          <div className="col-lg-4 mb-lg-0">
            <div className="director-photo">
              <img
                src="assets/img/team/team-1-1.jpg"
                alt="Mr. Raj Naveen D.R"
                className="director-img"
              />
              <div className="director-info">
                <h4 className="text-primary text-center">Mr. Raj Naveen D.R</h4>
                <h6 className="text-center">DIRECTOR</h6>
              </div>
            </div>
          </div>

          {/* Right - Director Details */}
          <div className="col-lg-8">
            <div className="card-body">
              <h2 className="mb-3 text-primary">Our Director Leadership</h2>
              <p>
                <span className="text-primary">Mr. Raj Naveen D.R.</span>,
                hailing from Tamil Nadu, is a distinguished professional
                renowned for his exceptional leadership and academic
                achievements. He holds a Bachelor's degree in Business
                Management, complemented by a postgraduate degree in Marketing
                and Human Resource Management. In addition, he possesses
                diplomas in International Travel & Tourism Management and Retail
                Management.
              </p>

              <p>
                During his academic tenure, Mr. Raj Naveen D.R. demonstrated
                remarkable leadership as the chairman of the Business Management
                department. He organized a significant event that garnered
                participation from approximately 50 colleges and educational
                institutions. Notably, the surplus funds from this event were
                directed towards charitable causes, reflecting his commitment to
                social responsibility and community welfare.
              </p>

              <p>
                In 2008, Mr. Raj Naveen D.R. embarked on his professional
                journey with{" "}
                <span className="text-primary">
                  Dharmarathina Textile Private Limited
                </span>{" "}
                as a Project Management Associate. His dedication and strategic
                acumen were instrumental in the company's growth from its
                nascent stages. By 2011, his exemplary performance earned him
                the position of Chief Executive Officer. Under his visionary
                leadership, the company witnessed substantial expansion,
                including a doubling of its capacity in 2014 and successful
                forays into export markets.
              </p>

              <p>
                Mr. Raj Naveen D.R.'s foresight and dedication to sustainability
                are evident in his seamless integration of green energy
                solutions into business operations. With over 16 years of
                experience in the energy sector, he has amassed extensive
                expertise in conceptualizing and developing innovative projects.
                His strategic planning and project formulation skills have been
                pivotal in establishing a global footprint for his ventures.
              </p>

              <p>
                As a dynamic leader, his administrative prowess, decisiveness,
                and organizational capabilities have facilitated the smooth
                execution of projects across various sectors. His contributions
                extend to{" "}
                <span className="text-primary">
                  Struja Green Energy Private Limited
                </span>
                , where his leadership continues to drive growth and innovation
                in renewable energy solutions.
              </p>
            </div>
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
