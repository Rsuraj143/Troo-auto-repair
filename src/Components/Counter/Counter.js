import React, { useState } from "react";
import "./Counter.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Counter = () => {
  const [counter, setCounter] = useState(false);
  return (
    <section className="counter-section padding-top padding-bottom">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="counter-box">
              <div className="counter-number">
                <ScrollTrigger
                  onEnter={() => setCounter(true)}
                  onExit={() => setCounter(false)}
                  className="counter"
                >
                  {counter && (
                    <CountUp start={0} end={25} duration={3} delay={0} />
                  )}
                  <strong>+</strong>
                </ScrollTrigger>
              </div>
              <div className="counter-text">
                <p>Total Year of Experience</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="counter-box">
              <div className="counter-number">
                <ScrollTrigger
                  onEnter={() => setCounter(true)}
                  onExit={() => setCounter(false)}
                  className="counter"
                >
                  {counter && (
                    <CountUp start={0} end={98} duration={3} delay={0} />
                  )}
                  <strong>%</strong>
                </ScrollTrigger>
              </div>
              <div className="counter-text">
                <p>Return to Work With Us</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="counter-box">
              <div className="counter-number">
                <ScrollTrigger
                  onEnter={() => setCounter(true)}
                  onExit={() => setCounter(false)}
                  className="counter"
                >
                  {counter && (
                    <CountUp start={0} end={15} duration={3} delay={0} />
                  )}
                  <strong>+</strong>
                </ScrollTrigger>
              </div>
              <div className="counter-text">
                <p>Type Services We Provide</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="counter-box">
              <div className="counter-number">
                <ScrollTrigger
                  onEnter={() => setCounter(true)}
                  onExit={() => setCounter(false)}
                  className="counter"
                >
                  {counter && (
                    <CountUp start={0} end={80} duration={3} delay={0} />
                  )}
                  <strong>+</strong>
                </ScrollTrigger>
              </div>
              <div className="counter-text">
                <p>We Have Expert Mechanic</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
