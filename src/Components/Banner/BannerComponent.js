import React from "react";
import "./BannerComponent.css";
import setting from "../../Images/setting.png";
import arrow from "../../Images/white-arrow.png";
import blackArrow from "../../Images/black-arrow.png"
import { Link } from "react-router-dom";
import dot from "../../Images/read-dots.png"

const BannerComponent = () => {
  return (
    <section className="troo-da-hero-section" id="troo-da-hero-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="hero-text">
              <figure className="swing">
                <img src={setting} alt="setting" />
              </figure>
              <div className="title-txt">
                <span>Welcome to TRoo Themes</span>
                <h1>
                  Honest,Quality Work <span>At Affordable Prices</span>
                </h1>
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a
                galley.
              </p>
              <div className="btn-section">
                <div className="appoinment-section">
                  <Link to="/Home/Contact_Us">
                    Contact Us
                    <img src={arrow} alt="arrow" />
                  </Link>
                </div>
                <div className="black-btn appoinment-section">
                  <Link to="/Home/Our_Services">
                    View All Services
                    <img src={blackArrow} alt="blackArrow" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="hero-image-section"></div>
          </div>
        </div>
      </div>
      <div className="red-dot">
        <img src={dot} alt="dot" />
      </div>
    </section>
  );
};

export default BannerComponent;
