import React, { useState } from "react";
import "./Counter.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Counter = () => {
  const [counter, setCounter] = useState(false);
  return (
    <section class="counter-section padding-top padding-bottom">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <div class="counter-box">
              <div class="counter-number">
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
              <div class="counter-text">
                <p>Total Year of Experience</p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="counter-box">
              <div class="counter-number">
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
              <div class="counter-text">
                <p>Return to Work With Us</p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="counter-box">
              <div class="counter-number">
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
              <div class="counter-text">
                <p>Type Services We Provide</p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="counter-box">
              <div class="counter-number">
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
              <div class="counter-text">
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
