import React from "react";
import "./BannerComponent.css";
import setting from "../../Images/setting.png";
import arrow from "../../Images/white-arrow.png";
import blackArrow from "../../Images/black-arrow.png"
import { Link } from "react-router-dom";
import dot from "../../Images/read-dots.png"

const BannerComponent = () => {
  return (
    <section class="troo-da-hero-section" id="troo-da-hero-section">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="hero-text">
              <figure class="swing">
                <img src={setting} alt="setting" />
              </figure>
              <div class="title-txt">
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
              <div class="btn-section">
                <div class="appoinment-section">
                  <Link href="#">
                    Contact Us
                    <img src={arrow} alt="arrow" />
                  </Link>
                </div>
                <div class="black-btn appoinment-section">
                  <Link href="#">
                    View All Services
                    <img src={blackArrow} alt="blackArrow" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="hero-image-section"></div>
          </div>
        </div>
      </div>
      <div class="red-dot">
        <img src={dot} alt="dot" />
      </div>
    </section>
  );
};

export default BannerComponent;
