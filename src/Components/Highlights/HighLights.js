import React from "react";
import "./HighLights.css";
import vector from "../../Images/Vector 4.png"

const HighLights = () => {
  return (
    <section
      class="troo-da-why-choose-us-section padding-top padding-bottom"
      id="troo-da-why-choose-us-section"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="why-chose-text">
              <div class="waveWrapper waveAnimation">
                <div class="waveWrapperInner bgMiddle">
                  <div
                    class="wave waveMiddle"
                    style={{
                      background: `url(${vector})`,
                    }}
                  ></div>
                </div>
              </div>
              <div class="title-txt">
                <span>Why Choose Us</span>
                <h2>
                  Many Reason Our Clients
                  <strong>Work With Us Again & Again</strong>
                </h2>
              </div>
              <p>
                Lorem Ipsum is simply dummy text and of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard. Lorem Ipsum is simply dummy text and of the printing
                and typesetting.
              </p>
              <div class="why-call">
                <span>Call Us on</span>
                <a href="tel:+44 123 456 7890 ">+44 123 456 7890 </a>
                <span>or</span> <a href="contact.html">Contact Us</a>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="choose-list">
              <ul>
                <li>
                  <div class="circle">01</div>
                  <div class="choose-text">
                    <strong>Problem Solver</strong>
                    <p>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece.
                    </p>
                  </div>
                </li>
                <li>
                  <div class="circle">02</div>
                  <div class="choose-text">
                    <strong>On Time Delivery</strong>
                    <p>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece.
                    </p>
                  </div>
                </li>
                <li>
                  <div class="circle">03</div>
                  <div class="choose-text">
                    <strong>Services by Expert Engineer</strong>
                    <p>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece.
                    </p>
                  </div>
                </li>
                <li>
                  <div class="circle">04</div>
                  <div class="choose-text">
                    <strong>100% Satisfaction Guarantee</strong>
                    <p>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighLights;
