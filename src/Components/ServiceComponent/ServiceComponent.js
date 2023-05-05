import React from "react";
import "./ServiceComponent.css";
import Arrow from "../../Images/Arrow.png"
import { Link } from "react-router-dom";
import blackArrow from "../../Images/black-arrow.png"
import service1 from "../../Images/ser-1.png"
import service2 from "../../Images/ser-2.png"
import service3 from "../../Images/ser-3.png"
import service4 from "../../Images/ser-4.png"
import service5 from "../../Images/ser-5.png"
import service6 from "../../Images/ser-6.png"
import WhtArrow from "../../Images/white-arrow.png"

const ServiceComponent = () => {
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
              <img src={Arrow} alt="Arrow" />
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
                <img src={service1} alt="service1" />
              </div>
              <div class="services-text">
                <div class="ser-text">
                  <h3>
                    Anti Lock Brake
                    Servicing
                  </h3>
                </div>
                <div class="ser-img">
                  <img src={WhtArrow} alt="WhtArrow" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="services-section">
              <div class="serv-main">
                <img src={service2} alt="service2" />
              </div>
              <div class="services-text">
                <div class="ser-text">
                  <h3>
                    Entire Full Engine Servicing
                  </h3>
                </div>
                <div class="ser-img">
                  <img src={WhtArrow} alt="WhtArrow" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="services-section">
              <div class="serv-main">
              <img src={service3} alt="service3" />
              </div>
              <div class="services-text">
                <div class="ser-text">
                  <h3>
                    Transmission Service & Repair
                  </h3>
                </div>
                <div class="ser-img">
                  <img src={WhtArrow} alt="WhtArrow" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="services-section">
              <div class="serv-main">
              <img src={service4} alt="service4" />
              </div>
              <div class="services-text">
                <div class="ser-text">
                  <h3>
                    Battery Replacement
                  </h3>
                </div>
                <div class="ser-img">
                  <img src={WhtArrow} alt="WhtArrow" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="services-section">
              <div class="serv-main">
              <img src={service5} alt="service5" />
              </div>
              <div class="services-text">
                <div class="ser-text">
                  <h3>
                    Car Wash and Cleaning Service
                  </h3>
                </div>
                <div class="ser-img">
                  <img src={WhtArrow} alt="WhtArrow" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="services-section">
              <div class="serv-main">
              <img src={service6} alt="service6" />
              </div>
              <div class="services-text">
                <div class="ser-text">
                  <h3>
                    Change Engine Oil and Filter
                  </h3>
                </div>
                <div class="ser-img">
                  <img src={WhtArrow} alt="WhtArrow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceComponent;
