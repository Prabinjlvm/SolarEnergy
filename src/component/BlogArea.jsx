import React from "react";

const BlogArea = () => {
  return (
    // blog-area-start
    <section className="it-blog-area it-blog-style-2 pt-125 pb-130">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="it-blog-section-title-box text-center mb-65">
              <span className="it-section-subtitle">Our Recent post</span>
              <h4 className="it-section-title fz-45 it-split-text it-split-in-right">
                Read Our Latest News & Blog
              </h4>
            </div>
          </div>
        </div>

        <div className="row gx-35">
          {/* Blog Item 1 */}
          <div
            className="col-xl-4 col-lg-6 col-md-6 col-sm-6 wow itfadeUp"
            data-wow-duration=".9s"
            data-wow-delay=".3s"
          >
            <div className="it-blog-item mb-30">
              <div className="it-blog-thumb mb-35 border-radius-20">
                <a href="blog-details.html">
                  <img
                    className="w-100"
                    src="assets/img/blog/blog-2-1.jpg"
                    alt=""
                  />
                  <img
                    className="w-100"
                    src="assets/img/blog/blog-2-1.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="it-blog-content">
                <h4 className="it-blog-title mb-30">
                  <a className="border-line" href="blog-details.html">
                    How many solar <br /> panels do you need?
                  </a>
                </h4>
                <div className="it-blog-user d-flex align-items-center">
                  <img src="assets/img/testimonial/avatar.png" alt="" />
                  <div className="it-blog-user-info">
                    <span>Damien Cabral</span>
                    <div className="it-blog-meta">
                      <span>Aug 3, 2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Item 2 */}
          <div
            className="col-xl-4 col-lg-6 col-md-6 col-sm-6 wow itfadeUp"
            data-wow-duration=".9s"
            data-wow-delay=".5s"
          >
            <div className="it-blog-item mb-30">
              <div className="it-blog-thumb mb-35 border-radius-20">
                <a href="blog-details.html">
                  <img
                    className="w-100"
                    src="assets/img/blog/blog-2-2.jpg"
                    alt=""
                  />
                  <img
                    className="w-100"
                    src="assets/img/blog/blog-2-2.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="it-blog-content">
                <h4 className="it-blog-title mb-30">
                  <a className="border-line" href="blog-details.html">
                    Save Electricity Using Solar Power Today
                  </a>
                </h4>
                <div className="it-blog-user d-flex align-items-center">
                  <img src="assets/img/testimonial/avatar-3.jpg" alt="" />
                  <div className="it-blog-user-info">
                    <span>George Larson</span>
                    <div className="it-blog-meta">
                      <span>Aug 3, 2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Item 3 */}
          <div
            className="col-xl-4 col-lg-6 col-md-6 col-sm-6 wow itfadeUp"
            data-wow-duration=".9s"
            data-wow-delay=".7s"
          >
            <div className="it-blog-item mb-30">
              <div className="it-blog-thumb mb-35 border-radius-20">
                <a href="blog-details.html">
                  <img
                    className="w-100"
                    src="assets/img/blog/blog-2-3.jpg"
                    alt=""
                  />
                  <img
                    className="w-100"
                    src="assets/img/blog/blog-2-3.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="it-blog-content">
                <h4 className="it-blog-title mb-30">
                  <a className="border-line" href="blog-details.html">
                    How Do Solar Batteries Actually Work?
                  </a>
                </h4>
                <div className="it-blog-user d-flex align-items-center">
                  <img src="assets/img/testimonial/avatar-5.jpg" alt="" />
                  <div className="it-blog-user-info">
                    <span>Sara Garcia</span>
                    <div className="it-blog-meta">
                      <span>Aug 3, 2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div
            className="col-12 wow itfadeUp"
            data-wow-duration=".9s"
            data-wow-delay=".9s"
          >
            <div className="it-service-btn text-center mt-30">
              <a href="blog.html" className="it-btn-theme">
                <span>
                  <span className="text-1">View All News</span>
                  <span className="text-2">View All News</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    // blog-area-end
  );
};

export default BlogArea;
