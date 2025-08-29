import React from "react";
import Breadcrumb from "../component/About Us/Breadcrumb";
import FunFactArea from "../component/FunFactArea";
import StepArea from "../component/About Us/StepArea";
import TestimonialArea from "../component/TestimonialArea";
import ContactArea from "../component/ContactArea";
import BrandSection from "../component/About Us/BrandSection";
import NewsletterArea from "../component/NewsletterArea";
import FooterArea from "../component/FooterArea";
import Header from "../component/Header";
import MagicCursor from "../component/MagicCursor";
import BackToTop from "../component/BackToTop";
import SearchPopup from "../component/SearchPopup";
import OffcanvasMenu from "../component/OffcanvasMenu";
import FaqArea from "../component/FaqArea";

export default function AboutUsV1() {
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
        <Breadcrumb />
        <FaqArea />
        <FunFactArea />
        <StepArea />
        <TestimonialArea />
        <ContactArea />
        <BrandSection />
        <NewsletterArea />
      </main>
      {/* Footer */}
      <footer>
        <FooterArea />
      </footer>{" "}
    </>
  );
}
