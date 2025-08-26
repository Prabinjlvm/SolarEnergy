import React from "react";

const brands = [
  "assets/img/brand/brand-1-1.png",
  "assets/img/brand/brand-1-2.png",
  "assets/img/brand/brand-1-3.png",
  "assets/img/brand/brand-1-4.png",
  "assets/img/brand/brand-1-5.png",
  "assets/img/brand/brand-1-6.png",
];

const BrandSection = () => {
  return (
    <div className="it-brand-area pt-125 pb-130">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="it-brand-content mb-55">
              <div className="text-center">
                <span>Trusted By 500+ Companies</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row gx-0">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="col-xl-2 col-lg-2 col-md-4 col-6 col-sm-4"
            >
              <div className="it-brand-item">
                <img src={brand} alt={`Brand ${index + 1}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandSection;
