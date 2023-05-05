import React from "react";
import "./ServiceComponent.css";
import arrow from "../../Images/Arrow.png";
import { Link } from "react-router-dom";
import blackArrow from "../../Images/black-arrow.png";
import whtArrow from "../../Images/white-arrow.png";
import ser1 from "../../Images/ser-1.png";
import ser2 from "../../Images/ser-2.png";
import ser3 from "../../Images/ser-3.png";
import ser4 from "../../Images/ser-4.png";
import ser5 from "../../Images/ser-5.png";
import ser6 from "../../Images/ser-6.png";
import ser7 from "../../Images/ser-7.png";
import ser8 from "../../Images/ser-8.png";
import ser9 from "../../Images/ser-9.png";

const ServiceComponent2 = () => {
  return (
    <section
      class="troo-da-whate-we-are-section padding-top padding-bottom"
      id="troo-da-whate-we-are-section"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-5">
            <div class="title-txt">
              <span>What We Do</span>
              <h2>
                We Provide Best<strong>Auto Repair Services</strong>
              </h2>
            </div>
          </div>
          <div class="col-md-2">
            <div class="arr-img">
              <img src={arrow} alt="arrow" />
            </div>
          </div>
          <div class="col-md-5">
            <div class="what-text">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard.
              </p>
              <Link href="#">
                View All Services <img src={blackArrow} alt="blackArrow" />
              </Link>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="services-section">
              <div class="serv-main">
                <img src={ser1} alt="ser1" />
              </div>
              <div class="services-text">
                <div class="ser-text">
                  {" "}
                  <h3>
                    Anti Lock Brake
                    <br /> Servicing
                  </h3>
                </div>
                <div class="ser-img">
                  <img src={whtArrow} alt="whtArrow" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="services-section">
              <div class="serv-main">
                <img src={ser2} alt="ser2" />
              </div>
              <div class="services-text">
                <div class="ser-text">
                  <h3>
                    Entire Full Engine
                    <br /> Servicing
                  </h3>
                </div>
                <div class="ser-img">
                  <img src={whtArrow} alt="whtArrow" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="services-section">
              <div class="serv-main">
                <img src={ser3} alt="ser3" />
              </div>
              <div class="services-text">
                <div class="ser-text">
                  <h3>
                    Transmission Service & <br />
                    Repair
                  </h3>
                </div>
                <div class="ser-img">
                  <img src={whtArrow} alt="whtArrow" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="services-section">
              <div class="serv-main">
                <img src={ser4} alt="ser4" />
              </div>
              <div class="services-text">
                <div class="ser-text">
                  <h3>
                    Battery
                    <br /> Replacement
                  </h3>
                </div>
                <div class="ser-img">
                  <img src={whtArrow} alt="whtArrow" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="services-section">
              <div class="serv-main">
                <img src={ser5} alt="ser5" />
              </div>
              <div class="services-text">
                <div class="ser-text">
                  <h3>
                    Car Wash and Cleaning
                    <br /> Service
                  </h3>
                </div>
                <div class="ser-img">
                  <img src={whtArrow} alt="whtArrow" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="services-section">
              <div class="serv-main">
                <img src={ser6} alt="ser6" />
              </div>
              <div class="services-text">
                <div class="ser-text">
                  <h3>
                    Change Engine Oil and
                    <br /> Filter
                  </h3>
                </div>
                <div class="ser-img">
                  <img src={whtArrow} alt="whtArrow" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="services-section">
              <div class="serv-main">
                <img src={ser7} alt="ser7" />
              </div>
              <div class="services-text">
                <div class="ser-text">
                  <h3>
                    A/C Services and
                    <br /> Replacement
                  </h3>
                </div>
                <div class="ser-img">
                  <img src={whtArrow} alt="whtArrow" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="services-section">
              <div class="serv-main">
                <img src={ser8} alt="ser8" />
              </div>
              <div class="services-text">
                <div class="ser-text">
                  <h3>
                    Back Light Repair and
                    <br /> Replacement
                  </h3>
                </div>
                <div class="ser-img">
                  <img src={whtArrow} alt="whtArrow" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="services-section">
              <div class="serv-main">
                <img src={ser9} alt="ser9" />
              </div>
              <div class="services-text">
                <div class="ser-text">
                  <h3>
                    Electrical System <br /> Repair
                  </h3>
                </div>
                <div class="ser-img">
                  <img src={whtArrow} alt="whtArrow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceComponent2;
