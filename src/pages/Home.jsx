import React from "react";
import WindEnergySlider from "../component/WindEnergySlider";
import AboutSection from "../component/AboutSection";
import ServiceSection from "../component/ServiceSection";
import CtaSection from "../component/CtaSection";
import FaqArea from "../component/FaqArea";
import ServiceArea from "../component/ServiceArea";
import ProjectArea from "../component/ProjectArea";
import MonitoringArea from "../component/MonitoringArea";
import FunFactArea from "../component/FunFactArea";
import TestimonialArea from "../component/TestimonialArea";
import ContactArea from "../component/ContactArea";
import LocationArea from "../component/LocationArea";
import BlogArea from "../component/BlogArea";
import NewsletterArea from "../component/NewsletterArea";
import FooterArea from "../component/FooterArea";
import Header from "../component/Header";
import CopyrightArea from "../component/CopyrightArea";
import MagicCursor from "../component/MagicCursor";
import BackToTop from "../component/BackToTop";
import SearchPopup from "../component/SearchPopup";
import OffcanvasMenu from "../component/OffcanvasMenu";

export default function Home() {
  return (
    <>
      <div id="body" className="it-magic-cursor">
        <MagicCursor />
        <BackToTop />
        <SearchPopup />
        <OffcanvasMenu />

        {/* Header */}
        <header className="it-header-height">
          {/* header-area-start */}
          <Header />
          {/* header-area-end */}
        </header>
      </div>
      <div className="it-header-spacing"></div>

      <main className="main-content-start">
        <WindEnergySlider />
        <AboutSection />
        <ServiceSection />
        <CtaSection />
        <FaqArea />
        <ServiceArea />
        <ProjectArea />
        <MonitoringArea />
        <FunFactArea />
        <TestimonialArea />
        <ContactArea />
        <LocationArea />
        <BlogArea />
        <NewsletterArea />
      </main>
      <footer>
        <FooterArea />
      </footer>
    </>
  );
}
