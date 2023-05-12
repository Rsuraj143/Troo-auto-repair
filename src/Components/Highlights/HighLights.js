import React from "react";
import "./HighLights.css";
import vector from "../../Images/Vector 4.png"

const HighLights = () => {
  return (
    <section
      className="troo-da-why-choose-us-section padding-top padding-bottom"
      id="troo-da-why-choose-us-section"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="why-chose-text">
              <div className="waveWrapper waveAnimation">
                <div className="waveWrapperInner bgMiddle">
                  <div
                    className="wave waveMiddle"
                    style={{
                      background: `url(${vector})`,
                    }}
                  ></div>
                </div>
              </div>
              <div className="title-txt">
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
              <div className="why-call">
                <span>Call Us on</span>
                <a href="tel:+44 123 456 7890 ">+44 123 456 7890 </a>
                <span>or</span> <a href="contact.html">Contact Us</a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="choose-list">
              <ul>
                <li>
                  <div className="circle">01</div>
                  <div className="choose-text">
                    <strong>Problem Solver</strong>
                    <p>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="circle">02</div>
                  <div className="choose-text">
                    <strong>On Time Delivery</strong>
                    <p>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="circle">03</div>
                  <div className="choose-text">
                    <strong>Services by Expert Engineer</strong>
                    <p>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="circle">04</div>
                  <div className="choose-text">
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
