import React from "react";
import "./AboutComponent.css";
import trand from "../../Images/Tread.png"
import about from "../../Images/about-img.png"
import check from "../../Images/check.png"
import { Link } from "react-router-dom";
import arrow from "../../Images/white-arrow.png"
import dot from "../../Images/signle-dot.png"

const AboutComponent = () => {
  return (
    <section
      className="troo-da-who-we-are-section padding-top padding-bottom"
      id="troo-da-who-we-are-section"
    >
      <div className="treat-col">
        <img src={trand} alt="trand" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div id="ball"></div>
            <div className="who-we-img">
              <div className="radius">
                <span className="place"></span>
                <span className="border-animation ba1"></span>
                <span className="border-animation ba2"></span>
                <span className="border-animation ba3"></span>
              </div>
              <img src={about} alt="about" />
              <div className="year-col">
                A Reputation <span>25</span>Years in the <br />
                Making
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="who-we-text">
              <div className="title-txt">
                <span>Who We Are</span>
                <h2>
                  Know About TRooAuto Quality
                  <strong>Auto Repairs Company</strong>
                </h2>
              </div>
              <strong>
                Lorem Ipsum is simply dummy text of the printing and is
                typesetting industry.
              </strong>
              <p>
                Lorem Ipsum is simply dummy text of the printing and is
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took.
              </p>
              <ul>
                <li>
                  <img src={check} alt="check" />
                  <span>
                    Emergency response time is one hour or less guaranteed.
                  </span>
                </li>
                <li>
                  <img src={check} alt="check" />
                  <span>
                    We want you to be completely satisfied with our services.
                  </span>
                </li>
                <li>
                  <img src={check} alt="check" />
                  <span>
                    You deserve to have your questions answered in plain
                    English.
                  </span>
                </li>
                <li>
                  <img src={check} alt="check" />
                  <span>
                    Our service philosophy is proactive, not reactive.
                  </span>
                </li>
              </ul>
              <div className="appoinment-section">
                <Link to="/Home/About_Us">
                  Learn More
                  <img src={arrow} alt="arrow" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hri-dots">
        <img src={dot} alt="dot" />
      </div>
    </section>
  );
};

export default AboutComponent;
