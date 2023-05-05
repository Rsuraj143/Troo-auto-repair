import React from 'react'
import "./Counter.css"

const Counter = () => {
  return (
    <section class="counter-section padding-top padding-bottom">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <div class="counter-box">
              <div class="counter-number">
                <span class="counter">25</span><strong>+</strong>
              </div>
              <div class="counter-text">
                <p>Total Year of Experience</p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="counter-box">
              <div class="counter-number">
                <span class="counter">98</span><strong>%</strong>
              </div>
              <div class="counter-text"><p>Return to Work With Us</p></div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="counter-box">
              <div class="counter-number">
                <span class="counter">15</span><strong>+</strong>
              </div>
              <div class="counter-text"><p>Type Services We Provide</p></div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="counter-box">
              <div class="counter-number">
                <span class="counter">80</span><strong>+</strong>
              </div>
              <div class="counter-text"><p>We Have Expert Mechanic</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Counter