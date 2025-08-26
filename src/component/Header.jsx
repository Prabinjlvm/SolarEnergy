import React, { useState } from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <div
      id="header-sticky"
      className="it-header-area it-header-ptb it-header-style it-header-style-3 it-header-transparent"
    >
      <div className="container container-1650">
        <div className="p-relative">
          <div className="row align-items-center">
            {/* Logo */}
            <div className="col-xxl-2 col-xl-2 col-lg-6 col-md-6 col-6">
              <div className="it-header-logo">
                <Link to="/">
                  <img src="assets/img/logo/logo-white3.png" alt="logo" />
                </Link>
              </div>
              <div className="it-header-logo-3 d-none">
                <Link to="/">
                  <img src="assets/img/logo/logo-black.png" alt="logo" />
                </Link>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="col-xxl-7 col-xl-8 d-none d-xl-block">
              <div className="it-header-menu it-header-dropdown">
                <nav className="it-menu-content">
                  <ul>
                    <li className="p-static">
                      <Link to="/">Home</Link>
                    </li>

                    <li className="has-dropdown">
                      <Link to="/about-us">About</Link>
                      <ul className="it-submenu submenu">
                        <li>
                          <Link to="/">About Us</Link>
                        </li>
                        <li>
                          <Link to="/">Vision & Mission</Link>
                        </li>
                        <li>
                          <Link to="/">Our Team</Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <Link to="/">Leadership</Link>
                    </li>

                    <li className="has-dropdown">
                      <Link to="/">Our Site</Link>
                      <ul className="it-submenu submenu">
                        <li>
                          <Link to="/">On-Site</Link>
                        </li>
                        <li>
                          <Link to="/">Off-Site</Link>
                        </li>
                      </ul>
                    </li>

                    <li className="has-dropdown">
                      <Link to="/">Project</Link>
                      <ul className="it-submenu submenu">
                        <li>
                          <Link to="/project">Project</Link>
                        </li>
                        <li>
                          <Link to="/project-details">Project Details</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/careers">Careers</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            {/* Right Side */}
            <div className="col-xxl-3 col-xl-2 col-lg-6 col-md-6 col-6">
              <div className="it-header-right-action d-flex justify-content-end align-items-center">
                {/* Search */}
                <div className="it-header-search d-none d-xxl-block">
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

                {/* CTA Button */}
                <Link to="/contact" className="it-btn-theme d-none d-md-flex">
                  <span>
                    <span className="text-1">Get a Free Call</span>
                    <span className="text-2">Get a Free Call</span>
                  </span>
                </Link>

                {/* Mobile Burger Menu */}
                <div className="it-header-bar d-xl-none">
                  <Menu
                    right
                    isOpen={menuOpen}
                    onStateChange={({ isOpen }) => setMenuOpen(isOpen)}
                    customCrossIcon={false}
                  >
                    {/* Close Button */}
                    <button className="bm-close-button" onClick={closeMenu}>
                      ×
                    </button>

                    <Link className="menu-item" to="/" onClick={closeMenu}>
                      Home
                    </Link>

                    <div className="menu-group">
                      <span className="menu-title">About ▾</span>
                      <div className="submenu">
                        <Link
                          className="menu-item"
                          to="/aboutus"
                          onClick={closeMenu}
                        >
                          About Us
                        </Link>
                        <Link
                          className="menu-item"
                          to="/visionandmission"
                          onClick={closeMenu}
                        >
                          Vision & Mission
                        </Link>
                        <Link
                          className="menu-item"
                          to="/team"
                          onClick={closeMenu}
                        >
                          Our Team
                        </Link>
                      </div>
                    </div>

                    <Link
                      className="menu-item"
                      to="/leadership"
                      onClick={closeMenu}
                    >
                      Leadership
                    </Link>

                    <div className="menu-group">
                      <span className="menu-title">Our Site ▾</span>
                      <div className="submenu">
                        <Link
                          className="menu-item"
                          to="/on-site"
                          onClick={closeMenu}
                        >
                          On-site
                        </Link>
                        <Link
                          className="menu-item"
                          to="/off-site"
                          onClick={closeMenu}
                        >
                          Off-site
                        </Link>
                      </div>
                    </div>

                    <div className="menu-group">
                      <span className="menu-title">Project ▾</span>
                      <div className="submenu">
                        <Link
                          className="menu-item"
                          to="/project"
                          onClick={closeMenu}
                        >
                          Project
                        </Link>
                        <Link
                          className="menu-item"
                          to="/project-details"
                          onClick={closeMenu}
                        >
                          Project Details
                        </Link>
                      </div>
                    </div>

                    <Link
                      className="menu-item"
                      to="/careers"
                      onClick={closeMenu}
                    >
                      Careers
                    </Link>
                    <Link
                      className="menu-item"
                      to="/contact"
                      onClick={closeMenu}
                    >
                      Contact
                    </Link>
                  </Menu>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
