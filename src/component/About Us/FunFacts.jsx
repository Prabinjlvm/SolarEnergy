import React from "react";
import CountUp from "react-countup";

const FunFacts = () => {
  const funFacts = [
    { label: "Years Of Experience", end: 600, suffix: "+" },
    { label: "Homes Powered", end: 58456, suffix: "+" },
    { label: "Solar Energy", end: 50, suffix: "MW+" },
    { label: "Co2 Emissions Reduced", end: 1, suffix: "M+ Tons" },
  ];

  return (
    <div
      className="it-funfact-3-area"
      style={{ backgroundImage: "url('/assets/img/shape/funfact-3-bg.jpg')" }}
    >
      <div className="container">
        <div className="row gx-20">
          {funFacts.map((fact, index) => (
            <div
              key={index}
              className={`col-lg-3 col-md-6 col-sm-6 wow fadeInUp`}
              style={{ animationDelay: `${0.5 + index * 0.2}s` }}
            >
              <div className="it-funfact-3-item">
                <span>{fact.label}</span>
                <h5 className="it-funfact-3-number">
                  <CountUp
                    start={0}
                    end={fact.end}
                    duration={1}
                    separator=","
                  />
                  {fact.suffix}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FunFacts;
