import React from "react";
import "./ServiceComponent.css";
import arrow from "../../Images/Arrow.png";
import { Link, createSearchParams } from "react-router-dom";
import blackArrow from "../../Images/black-arrow.png";
import { ServiceData } from "./ServiceData";

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
          {ServiceData.slice(0, 3).map((e, i) => (
            <div class="col-md-4">
              <Link
                to={`/Home/Our_Services/Service_Details?${createSearchParams({
                  id: e.id,
                })}`}
              >
                <div class="services-section">
                  <div class="serv-main">
                    <img src={e.img} alt="service1" />
                  </div>
                  <div class="services-text">
                    <div class="ser-text">
                      <h3>{e.name}</h3>
                    </div>
                    <div class="ser-img">
                      <img src={e.arrow} alt="WhtArrow" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div class="row">
          {ServiceData.slice(3, 6).map((e, i) => (
            <div class="col-md-4">
              <Link
                to={`/Home/Our_Services/Service_Details?${createSearchParams({
                  id: e.id,
                })}`}
              >
                <div class="services-section">
                  <div class="serv-main">
                    <img src={e.img} alt="service1" />
                  </div>
                  <div class="services-text">
                    <div class="ser-text">
                      <h3>{e.name}</h3>
                    </div>
                    <div class="ser-img">
                      <img src={e.arrow} alt="WhtArrow" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div class="row">
          {ServiceData.slice(6, 9).map((e, i) => (
            <div class="col-md-4">
              <Link
                to={`/Home/Our_Services/Service_Details?${createSearchParams({
                  id: e.id,
                })}`}
              >
                <div class="services-section">
                  <div class="serv-main">
                    <img src={e.img} alt="service1" />
                  </div>
                  <div class="services-text">
                    <div class="ser-text">
                      <h3>{e.name}</h3>
                    </div>
                    <div class="ser-img">
                      <img src={e.arrow} alt="WhtArrow" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceComponent2;
