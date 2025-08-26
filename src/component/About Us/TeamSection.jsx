import React from "react";
import { Link } from "react-router-dom";

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
    img: "assets/img/team/team-1-1.jpg",
  },
  {
    name: "David Connor",
    role: "Solar Expert",
    img: "assets/img/team/team-1-4.jpg",
  },
  {
    name: "Julie Parsons",
    role: "Solar Expert",
    img: "assets/img/team/team-1-5.jpg",
  },
  {
    name: "Another Member",
    role: "Solar Expert",
    img: "assets/img/team/team-1-6.jpg",
  },
];

const TeamSection = () => {
  return (
    <section className="it-team-area gray-bg3 pt-130 pb-110">
      <div className="container">
        <div className="row">
          {/* Left Section */}
          <div className="col-xxl-3 col-xl-4 col-lg-4">
            <div className="it-team-left">
              <div className="it-team-section-title-box mb-20">
                <span className="it-section-subtitle">Our Experts</span>
                <h4 className="it-section-title fz-45">
                  The Creative <br />
                  Experts.
                </h4>
              </div>
              <p>
                Solaar Sustainable Energy: Harness Solar <br />
                Power for a Greener Future with Reliable,
                <br />
                Eco-Friendly Technology
              </p>
              <Link to="/team" className="it-btn-theme">
                <span>
                  <span className="text-1">View All Team Members</span>
                  <span className="text-2">View All Team Members</span>
                </span>
              </Link>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-xxl-9 col-xl-8 col-lg-8">
            <div className="it-team-wrap">
              <div className="row gx-20">
                {teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className="col-xl-4 col-lg-6 col-md-6 col-sm-6 wow img-anim-top"
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
                          <Link to="/">
                            <i className="fab fa-facebook-f"></i>
                          </Link>
                          <Link to="/">
                            <i className="fab fa-twitter"></i>
                          </Link>
                          <Link to="/">
                            <i className="fab fa-instagram"></i>
                          </Link>
                          <Link to="/">
                            <i className="fab fa-linkedin-in"></i>
                          </Link>
                        </div>
                      </div>
                      <div className="it-team-content">
                        <h4 className="it-team-title">
                          <Link className="border-line" to="/team-details">
                            {member.name}
                          </Link>
                        </h4>
                        <span>{member.role}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
