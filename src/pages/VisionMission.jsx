import React from "react";
import Header from "../component/Header";
import MagicCursor from "../component/MagicCursor";
import BackToTop from "../component/BackToTop";
import SearchPopup from "../component/SearchPopup";
import OffcanvasMenu from "../component/OffcanvasMenu";
import FooterArea from "../component/FooterArea";
import AboutSection from "../component/AboutSection";
import VisionMissionBanner from "../component/VisionMission/VisionMissionBanner";

export default function VisionMission() {
  return (
    <>
      <div id="body" className="it-magic-cursor">
        {/* Preloader */}
        {/* <div id="preloader">
          <div className="preloader">
            <span></span>
            <span></span>
          </div>
        </div> */}

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
          {/* header-area-start */}
          <Header />
          {/* header-area-end */}
        </header>
      </div>
      {/*Main*/}
      <main className="main-content-start">
        <VisionMissionBanner />
        <AboutSection />
      </main>
      {/* Footer */}
      <footer>
        <FooterArea />
      </footer>{" "}
    </>
  );
}
