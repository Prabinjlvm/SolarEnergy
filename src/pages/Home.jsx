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

export default function Home() {
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

        {/* Cursor */}
        <div id="magic-cursor">
          <div id="ball"></div>
        </div>

        {/* Back To Top */}
        <button className="scroll-top scroll-to-target" data-target="html">
          <i className="far fa-angle-double-up"></i>
        </button>

        {/* Search Popup */}
        <div className="search-popup">
          <button className="close-search">
            <span className="flaticon-multiply">
              <i className="fal fa-times"></i>
            </span>
          </button>
          <form method="post" action="#">
            <div className="form-group">
              <input
                type="search"
                name="search-field"
                placeholder="Search Here"
                required
              />
              <button type="submit">
                <i className="fal fa-search"></i>
              </button>
            </div>
          </form>
        </div>

        <div className="it-offcanvas-area">
          <div className="itoffcanvas">
            <div className="itoffcanvas__close-btn">
              <button className="close-btn">
                <i className="fal fa-times"></i>
              </button>
            </div>
            <div className="itoffcanvas__logo">
              <a href="index.html">
                <img src="assets/img/logo/logo-white.png" alt="" />
              </a>
            </div>
            <div className="itoffcanvas__text">
              <p>
                Suspendisse interdum consectetur libero id. Fermentum leo vel
                orci porta non. Euismod viverra nibh cras pulvinar suspen.
              </p>
            </div>
            <div className="it-menu-mobile d-xl-none"></div>
            <div className="itoffcanvas__info">
              <h3 className="offcanva-title">Get In Touch</h3>
              <div className="it-info-wrapper mb-20 d-flex align-items-center">
                <div className="itoffcanvas__info-icon">
                  <a href="#">
                    <i className="fal fa-envelope"></i>
                  </a>
                </div>
                <div className="itoffcanvas__info-address">
                  <span>Email</span>
                  <a href="mailto:hello@yourmail.com">hello@yourmail.com</a>
                </div>
              </div>
              <div className="it-info-wrapper mb-20 d-flex align-items-center">
                <div className="itoffcanvas__info-icon">
                  <a href="#">
                    <i className="fal fa-phone-alt"></i>
                  </a>
                </div>
                <div className="itoffcanvas__info-address">
                  <span>Phone</span>
                  <a href="tel:(00)45611227890">(00) 456 1122 7890</a>
                </div>
              </div>
              <div className="it-info-wrapper mb-20 d-flex align-items-center">
                <div className="itoffcanvas__info-icon">
                  <a href="#">
                    <i className="fas fa-map-marker-alt"></i>
                  </a>
                </div>
                <div className="itoffcanvas__info-address">
                  <span>Location</span>
                  <a
                    href="https://googleusercontent.com/maps.google.com/0"
                    target="_blank"
                  >
                    Riverside 255, San Francisco, USA
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="body-overlay"></div>
        </div>

        {/* Header */}
        <header className="it-header-height">
          {/* header-area-start */}
          <div
            id="header-sticky"
            className="it-header-area it-header-ptb it-header-style it-header-style-3 it-header-transparent"
          >
            <div className="container container-1650">
              <div className="p-relative">
                <div className="row align-items-center">
                  <div className="col-xxl-2 col-xl-2 col-lg-6 col-md-6 col-6">
                    <div className="it-header-logo">
                      <a href="index.html">
                        <img src="assets/img/logo/logo-white3.png" alt="" />
                      </a>
                    </div>
                    <div className="it-header-logo-3 d-none">
                      <a href="index.html">
                        <img src="assets/img/logo/logo-black.png" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-xxl-7 col-xl-8">
                    <div className="it-header-menu it-header-dropdown">
                      <nav className="it-menu-content">
                        <ul>
                          <li className="has-dropdown p-static">
                            <a href="index.html">Home</a>
                            <div className=" submenu has-home-img">
                              <div className="it-homemenu-wrapper">
                                <div className="row gx-6 row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 row-cols-xl-5">
                                  <div className="col home-img">
                                    <div className="home-img-thumb home-img-overly mb-20">
                                      <img
                                        src="assets/img/menu/home-1.jpg"
                                        alt=""
                                      />
                                      <div className="home-img-btn">
                                        <a
                                          className="it-btn-sm"
                                          href="index.html"
                                        >
                                          <span>
                                            <span className="text-1">
                                              Multi Page
                                            </span>
                                            <span className="text-2">
                                              Multi Page
                                            </span>
                                          </span>
                                        </a>
                                        <a
                                          className="it-btn-sm"
                                          href="index-one-page.html"
                                        >
                                          <span>
                                            <span className="text-1">
                                              One Page
                                            </span>
                                            <span className="text-2">
                                              One Page
                                            </span>
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                    <div className="home-img-content text-center">
                                      <h4 className="home-img-title">
                                        <a href="index.html">Oil Energy</a>
                                      </h4>
                                    </div>
                                  </div>
                                  <div className="col home-img">
                                    <div className="home-img-thumb home-img-overly mb-20">
                                      <img
                                        src="assets/img/menu/home-2.jpg"
                                        alt=""
                                      />
                                      <div className="home-img-btn">
                                        <a
                                          className="it-btn-sm"
                                          href="index-2.html"
                                        >
                                          <span>
                                            <span className="text-1">
                                              Multi Page
                                            </span>
                                            <span className="text-2">
                                              Multi Page
                                            </span>
                                          </span>
                                        </a>
                                        <a
                                          className="it-btn-sm"
                                          href="index-2-one-page.html"
                                        >
                                          <span>
                                            <span className="text-1">
                                              One Page
                                            </span>
                                            <span className="text-2">
                                              One Page
                                            </span>
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                    <div className="home-img-content text-center">
                                      <h4 className="home-img-title">
                                        <a href="index-2.html">Solar Service</a>
                                      </h4>
                                    </div>
                                  </div>
                                  <div className="col home-img">
                                    <div className="home-img-thumb home-img-overly mb-20">
                                      <img
                                        src="assets/img/menu/home-3.jpg"
                                        alt=""
                                      />
                                      <div className="home-img-btn">
                                        <a
                                          className="it-btn-sm"
                                          href="index-3.html"
                                        >
                                          <span>
                                            <span className="text-1">
                                              Multi Page
                                            </span>
                                            <span className="text-2">
                                              Multi Page
                                            </span>
                                          </span>
                                        </a>
                                        <a
                                          className="it-btn-sm"
                                          href="index-3-one-page.html"
                                        >
                                          <span>
                                            <span className="text-1">
                                              One Page
                                            </span>
                                            <span className="text-2">
                                              One Page
                                            </span>
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                    <div className="home-img-content text-center">
                                      <h4 className="home-img-title">
                                        <a href="index-3.html">
                                          Solar Instalment
                                        </a>
                                      </h4>
                                    </div>
                                  </div>
                                  <div className="col home-img">
                                    <div className="home-img-thumb home-img-overly mb-20">
                                      <img
                                        src="assets/img/menu/home-4.jpg"
                                        alt=""
                                      />
                                      <div className="home-img-btn">
                                        <a
                                          className="it-btn-sm"
                                          href="index-4.html"
                                        >
                                          <span>
                                            <span className="text-1">
                                              Multi Page
                                            </span>
                                            <span className="text-2">
                                              Multi Page
                                            </span>
                                          </span>
                                        </a>
                                        <a
                                          className="it-btn-sm"
                                          href="index-4-one-page.html"
                                        >
                                          <span>
                                            <span className="text-1">
                                              One Page
                                            </span>
                                            <span className="text-2">
                                              One Page
                                            </span>
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                    <div className="home-img-content text-center">
                                      <h4 className="home-img-title">
                                        <a href="index-4.html">Hydro Energy</a>
                                      </h4>
                                    </div>
                                  </div>
                                  <div className="col home-img">
                                    <div className="home-img-thumb home-img-overly mb-20">
                                      <img
                                        src="assets/img/menu/home-5.jpg"
                                        alt=""
                                      />
                                      <div className="home-img-btn">
                                        <a
                                          className="it-btn-sm"
                                          href="index-5.html"
                                        >
                                          <span>
                                            <span className="text-1">
                                              Multi Page
                                            </span>
                                            <span className="text-2">
                                              Multi Page
                                            </span>
                                          </span>
                                        </a>
                                        <a
                                          className="it-btn-sm"
                                          href="index-5-one-page.html"
                                        >
                                          <span>
                                            <span className="text-1">
                                              One Page
                                            </span>
                                            <span className="text-2">
                                              One Page
                                            </span>
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                    <div className="home-img-content text-center">
                                      <h4 className="home-img-title">
                                        <a href="index-5.html">Wind Energy</a>
                                      </h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="has-dropdown">
                            <a href="about-us-v1.html">About Us</a>
                            <ul className="it-submenu submenu">
                              <li>
                                <a href="about-us-v1.html">About Us V1</a>
                              </li>
                              <li>
                                <a href="about-us-v2.html">About Us V2</a>
                              </li>
                            </ul>
                          </li>
                          <li className="has-dropdown">
                            <a href="#">Pages</a>
                            <ul className="it-submenu submenu">
                              <li>
                                <a href="team.html">Team</a>
                              </li>
                              <li>
                                <a href="team-details.html">Team Details</a>
                              </li>
                              <li>
                                <a href="testimonial.html">Testimonial</a>
                              </li>
                              <li>
                                <a href="shop-sidebar.html">Shop Sidebar</a>
                              </li>
                              <li>
                                <a href="shop-details.html">Shop Details</a>
                              </li>
                              <li>
                                <a href="faq.html">Faq</a>
                              </li>
                              <li>
                                <a href="career.html">Career</a>
                              </li>
                              <li>
                                <a href="sign-in.html">Sign In</a>
                              </li>
                              <li>
                                <a href="sign-up.html">Sign Up</a>
                              </li>
                              <li>
                                <a href="cart.html">Cart</a>
                              </li>
                              <li>
                                <a href="checkout.html">Checkout</a>
                              </li>
                              <li>
                                <a href="cost-calculation.html">
                                  Cost Calculation
                                </a>
                              </li>
                              <li>
                                <a href="404.html">Error</a>
                              </li>
                            </ul>
                          </li>
                          <li className="has-dropdown">
                            <a href="service-v1.html">Services</a>
                            <ul className="it-submenu submenu">
                              <li>
                                <a href="service-v1.html">Service 01</a>
                              </li>
                              <li>
                                <a href="service-v2.html">Service 02</a>
                              </li>
                              <li>
                                <a href="service-details.html">
                                  Service details
                                </a>
                              </li>
                              <li>
                                <a href="service-details-no-sidebar.html">
                                  Service No Sidebar
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="has-dropdown">
                            <a href="project.html">Project</a>
                            <ul className="it-submenu submenu">
                              <li>
                                <a href="project.html">Project</a>
                              </li>
                              <li>
                                <a href="project-details.html">
                                  Project Details
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="has-dropdown">
                            <a href="blog.html">Blog</a>
                            <ul className="it-submenu submenu">
                              <li>
                                <a href="blog.html">Blog</a>
                              </li>
                              <li>
                                <a href="blog-sidebar.html">Blog Sidebar</a>
                              </li>
                              <li>
                                <a href="blog-details.html">Blog Details</a>
                              </li>
                              <li>
                                <a href="blog-details-no-sidebar.html">
                                  Blog No Sidebar
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="contact.html">Contact</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-xl-2 col-lg-6 col-md-6 col-6">
                    <div className="it-header-right-action d-flex justify-content-end align-items-center">
                      <div className="it-header-search">
                        <button className="search-box-outer">
                          <svg
                            width="19"
                            height="19"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17.9958 16.7533L15.5195 14.2858C16.8619 12.6274 17.5168 10.5171 17.3491 8.39003C17.1813 6.26299 16.2038 4.28141 14.6181 2.85389C13.0323 1.42637 10.9593 0.661753 8.82637 0.717712C6.69347 0.773672 4.66336 1.64594 3.15465 3.15465C1.64594 4.66336 0.773672 6.69347 0.717712 8.82637C0.661753 10.9593 1.42637 13.0323 2.85389 14.6181C4.28141 16.2038 6.26299 17.1813 8.39003 17.3491C10.5171 17.5168 12.6274 16.8619 14.2858 15.5195L16.7533 17.9958C16.8346 18.0778 16.9314 18.1429 17.038 18.1873C17.1447 18.2317 17.259 18.2546 17.3745 18.2546C17.49 18.2546 17.6044 18.2317 17.711 18.1873C17.8177 18.1429 17.9144 18.0778 17.9958 17.9958C18.0778 17.9144 18.1429 17.8177 18.1873 17.711C18.2317 17.6044 18.2546 17.49 18.2546 17.3745C18.2546 17.259 18.2317 17.1447 18.1873 17.038C18.1429 16.9314 18.0778 16.8346 17.9958 16.7533ZM2.49953 9.06203C2.49953 7.76409 2.88441 6.4953 3.60551 5.4161C4.32661 4.3369 5.35153 3.49577 6.55067 2.99907C7.74981 2.50237 9.06931 2.37241 10.3423 2.62563C11.6153 2.87884 12.7846 3.50386 13.7024 4.42164C14.6202 5.33942 15.2452 6.50875 15.4984 7.78175C15.7516 9.05475 15.6217 10.3743 15.125 11.5734C14.6283 12.7725 13.7872 13.7975 12.708 14.5186C11.6288 15.2396 10.36 15.6245 9.06203 15.6245C7.32155 15.6245 5.65235 14.9331 4.42164 13.7024C3.19093 12.4717 2.49953 10.8025 2.49953 9.06203Z"
                              fill="currentcolor"
                            />
                          </svg>
                        </button>
                      </div>
                      <a href="contact.html" className="it-btn-theme">
                        <span>
                          <span className="text-1">Get a Free Call</span>
                          <span className="text-2">Get a Free Call</span>
                        </span>
                      </a>
                      <div className="it-header-bar d-xl-none">
                        <button className="it-menu-bar">
                          <span>
                            <svg
                              width="24"
                              height="20"
                              viewBox="0 0 24 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M10 18.3333C10 17.4128 10.7462 16.6667 11.6667 16.6667H21.6667C22.5872 16.6667 23.3333 17.4128 23.3333 18.3333C23.3333 19.2538 22.5872 20 21.6667 20H11.6667C10.7462 20 10 19.2538 10 18.3333ZM0 1.66667C0 0.746183 0.746183 0 1.66667 0H21.6667C22.5872 0 23.3333 0.746183 23.3333 1.66667C23.3333 2.58713 22.5872 3.33333 21.6667 3.33333H1.66667C0.746183 3.33333 0 2.58713 0 1.66667ZM0 10C0 9.07953 0.746183 8.33333 1.66667 8.33333H21.6667C22.5872 8.33333 23.3333 9.07953 23.3333 10C23.3333 10.9205 22.5872 11.6667 21.6667 11.6667H1.66667C0.746183 11.6667 0 10.9205 0 10Z"
                                fill="currentcolor"
                              />
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
    </>
  );
}
