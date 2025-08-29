// ../component/Header.js
import React, { useState, useEffect, forwardRef } from "react"; // Import forwardRef
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

// Use forwardRef to allow the parent to get a ref to the Header's root element
const Header = forwardRef((props, ref) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [siteDropdownOpen, setSiteDropdownOpen] = useState(false);
  const [projectDropdownOpen, setProjectDropdownOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    // Reset dropdown states when the main menu is closed
    setAboutDropdownOpen(false);
    setSiteDropdownOpen(false);
    setProjectDropdownOpen(false);
  };

  const toggleAboutDropdown = () => {
    setAboutDropdownOpen(!aboutDropdownOpen);
  };

  const toggleSiteDropdown = () => {
    setSiteDropdownOpen(!siteDropdownOpen);
  };

  const toggleProjectDropdown = () => {
    setProjectDropdownOpen(!projectDropdownOpen);
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <div
      id="header-sticky"
      className="it-header-area it-header-ptb it-header-style it-header-style-3 it-header-transparent "
      ref={ref} // Attach the ref passed from the parent
    >
      <div className="container container-1650">
        <div className="p-relative">
          <div className="row align-items-center">
            {/* Logo */}
            <div className="col-xxl-2 col-xl-2 col-lg-6 col-md-6 col-6 ">
              <div className="it-header-logo">
                <Link
                  to="/"
                  style={{
                    color: "#2ecc71", // eco-friendly green
                    fontWeight: "bold",
                    fontSize: "22px",
                    textShadow: "0px 0px 5px rgba(0,0,0,0.3)", // subtle glow
                  }}
                >
                  Struja Green Energy
                </Link>
              </div>
              <div className="it-header-logo-3 d-none">
                <Link
                  to="/"
                  style={{
                    color: "#2ecc71",
                    fontWeight: "bold",
                    fontSize: "22px",
                    textShadow: "0px 0px 5px rgba(0,0,0,0.3)",
                  }}
                >
                  Struja Green Energy
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
                      <Link to="/about" onClick={(e) => e.preventDefault()}>
                        About
                      </Link>
                      <ul className="it-submenu submenu">
                        <li>
                          <Link to="/about-us">About Us</Link>
                        </li>
                        <li>
                          <Link to="/vision-mission">Vision & Mission</Link>
                        </li>
                        <li>
                          <Link to="/our-team">Our Team</Link>
                        </li>
                        <li>
                          <Link to="/milestone">Milestone</Link>
                        </li>
                        <li>
                          <Link to="/leadership">Leadership</Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <Link to="/services">Service</Link>
                    </li>

                    <li className="has-dropdown">
                      <Link to="/" onClick={(e) => e.preventDefault()}>
                        Our Site
                      </Link>
                      <ul className="it-submenu submenu">
                        <li>
                          <Link to="/onsite">On-Site</Link>
                        </li>
                        <li>
                          <Link to="/offsite">Off-Site</Link>
                        </li>
                      </ul>
                    </li>

                    <li className="has-dropdown">
                      <Link to="/" onClick={(e) => e.preventDefault()}>
                        Project
                      </Link>
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
                      <Link to="/blog">Blog</Link>
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
                {/* Search - commented out */}
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
                    overlayClassName="bm-overlay-custom"
                  >
                    {/* Close Button */}
                    <button className="bm-close-button" onClick={closeMenu}>
                      ×
                    </button>
                    {/* Logo inside Burger Menu */}

                    <div className="bm-logo-container">
                      <Link to="/" onClick={closeMenu}>
                        Struja Green Energy
                      </Link>
                    </div>

                    <Link className="menu-item" to="/" onClick={closeMenu}>
                      Home
                    </Link>

                    <div className="menu-group">
                      <span
                        className="menu-title"
                        onClick={toggleAboutDropdown}
                        style={{ cursor: "pointer" }}
                      >
                        About {aboutDropdownOpen ? "▴" : "▾"}
                      </span>
                      <div
                        className="submenu"
                        style={{
                          display: aboutDropdownOpen ? "block" : "none",
                        }}
                      >
                        <Link
                          className="menu-item"
                          to="/about-us"
                          onClick={closeMenu}
                        >
                          About Us
                        </Link>
                        <Link
                          className="menu-item"
                          to="/vision-mission"
                          onClick={closeMenu}
                        >
                          Vision & Mission
                        </Link>
                        <Link
                          className="menu-item"
                          to="/our-team"
                          onClick={closeMenu}
                        >
                          Our Team
                        </Link>
                        <Link
                          className="menu-item"
                          to="/milestone"
                          onClick={closeMenu}
                        >
                          Milestone
                        </Link>
                        <Link
                          className="menu-item"
                          to="/leadership"
                          onClick={closeMenu}
                        >
                          Leadership
                        </Link>
                      </div>
                    </div>

                    <Link
                      className="menu-item"
                      to="/services"
                      onClick={closeMenu}
                    >
                      Service
                    </Link>

                    <div className="menu-group">
                      <span
                        className="menu-title"
                        onClick={toggleSiteDropdown}
                        style={{ cursor: "pointer" }}
                      >
                        Our Site {siteDropdownOpen ? "▴" : "▾"}
                      </span>
                      <div
                        className="submenu"
                        style={{ display: siteDropdownOpen ? "block" : "none" }}
                      >
                        <Link
                          className="menu-item"
                          to="/onsite"
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
                      <span
                        className="menu-title"
                        onClick={toggleProjectDropdown}
                        style={{ cursor: "pointer" }}
                      >
                        Project {projectDropdownOpen ? "▴" : "▾"}
                      </span>
                      <div
                        className="submenu"
                        style={{
                          display: projectDropdownOpen ? "block" : "none",
                        }}
                      >
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
                    <Link className="menu-item" to="/blog" onClick={closeMenu}>
                      Blog
                    </Link>
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
}); // End of forwardRef

export default Header;
