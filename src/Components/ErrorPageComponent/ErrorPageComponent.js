import React from "react";
import tire1 from "../../Images/tire-1.png"
import search from "../../Images/search-lg.png"
import whtArrow from "../../Images/white-arrow.png"
import "./ErrorPage.css"
import { Link } from "react-router-dom";

const ErrorPageComponent = () => {
  return (
    <section className="troo-da-error-section" id="troo-da-error-section">
      <div className="container">
        <div className="row">
          <div className="error-section">
            <span>
              4<img src={tire1} alt="tire1" />4
            </span>
            <h2>Error! Page Not Found</h2>
            <p>
              The page you are looking for was moved, removed,
              <br /> renamed or never existed.
            </p>
            <div className="search-form">
              <div className="form-outline">
                <input
                  type="search"
                  id="form1"
                  className="form-control"
                  placeholder="Search"
                />
              </div>
              <button type="button">
                <img src={search} alt="search" />
              </button>
            </div>
            <div className="appoinment-section">
              {" "}
              <Link to="/">
                Take Me Home
                <img src={whtArrow} alt="whtArrow" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPageComponent;
