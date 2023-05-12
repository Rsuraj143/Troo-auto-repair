import React from "react";
import "./ServiceComponent.css";
import Arrow from "../../Images/Arrow.png";
import { Link, createSearchParams } from "react-router-dom";
import blackArrow from "../../Images/black-arrow.png";
import { ServiceData } from "./ServiceData";

const ServiceComponent = () => {
  return (
    <section
      className="troo-da-whate-we-are-section padding-top padding-bottom"
      id="troo-da-whate-we-are-section"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="title-txt">
              <span>What We Do</span>
              <h2>
                We Provide Best<strong>Auto Repair Services</strong>
              </h2>
            </div>
          </div>
          <div className="col-md-2">
            <div className="arr-img">
              <img src={Arrow} alt="Arrow" />
            </div>
          </div>
          <div className="col-md-5">
            <div className="what-text">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard.
              </p>
              <Link to="/Home/Our_Services">
                View All Services <img src={blackArrow} alt="blackArrow" />
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          {ServiceData.slice(0, 3).map((e, i) => (
            <div className="col-md-4" key={i}>
              <Link to={`/Home/Our_Services/Service_Details?${createSearchParams({id : e.id})}`}>
              <div className="services-section">
                <div className="serv-main">
                  <img src={e.img} alt="service1" />
                </div>
                <div className="services-text">
                  <div className="ser-text">
                    <h3>{e.name}</h3>
                  </div>
                  <div className="ser-img">
                    <img src={e.arrow} alt="WhtArrow" />
                  </div>
                </div>
              </div>
              </Link>
              
            </div>
          ))}
        </div>
        <div className="row">
          {ServiceData.slice(3, 6).map((e, i) => (
            <div className="col-md-4" key={i}>
              <Link to={`/Home/Our_Services/Service_Details?${createSearchParams({id : e.id})}`}>
              <div className="services-section">
                <div className="serv-main">
                  <img src={e.img} alt="service1" />
                </div>
                <div className="services-text">
                  <div className="ser-text">
                    <h3>{e.name}</h3>
                  </div>
                  <div className="ser-img">
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

export default ServiceComponent;
