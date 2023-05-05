import React from "react";
import tire1 from "../../Images/tire-1.png"
import search from "../../Images/search-lg.png"
import whtArrow from "../../Images/white-arrow.png"
import "./ErrorPage.css"
import { Link } from "react-router-dom";

const ErrorPageComponent = () => {
  return (
    <section class="troo-da-error-section" id="troo-da-error-section">
      <div class="container">
        <div class="row">
          <div class="error-section">
            <span>
              4<img src={tire1} alt="tire1" />4
            </span>
            <h2>Error! Page Not Found</h2>
            <p>
              The page you are looking for was moved, removed,
              <br /> renamed or never existed.
            </p>
            <div class="search-form">
              <div class="form-outline">
                <input
                  type="search"
                  id="form1"
                  class="form-control"
                  placeholder="Search"
                />
              </div>
              <button type="button">
                <img src={search} alt="search" />
              </button>
            </div>
            <div class="appoinment-section">
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
