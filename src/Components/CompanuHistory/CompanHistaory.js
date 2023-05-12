import React from "react";
import "./CompanyHistory.css";
import check from "../../Images/check.png";

const CompanHistaory = () => {
  return (
    <section
      className="troo-da-who-we-are-section  padding-top padding-bottom"
      id="troo-da-who-we-are-section"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="who-we-text">
              <div className="title-txt">
                <span>Our History</span>
                <h2>
                  Williams and Janny Founded The
                  <strong>Troo Auto Repair Company </strong>In New Your In 1985
                </h2>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod
                <br /> tempor incididunt ut labore et dolore and magna aliqua.
                Ut enim ad minim
                <br /> veniam, quis nostrud exe
              </p>
            </div>
          </div>
          <div className="col-md-5">
            <div className="company-histry-text">
              <h3>
                Lorem Ipsum is simply dummy text of the printing and is
                typesetting industry.
              </h3>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanHistaory;
