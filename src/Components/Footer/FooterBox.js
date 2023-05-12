import React from "react";
import "./Footer.css";
import arrow from "../../Images/white-arrow.png"
import { Link } from "react-router-dom";

const FooterBox = () => {
  return (
    <section className="troo-da-footer-section" id="troo-da-footer-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="fooetr-red-box">
              <span>
                We’ll Make Your Car Feel Brand
                <br />
                New Visit Our Workshop Today.
              </span>
              <div className="appoinment-section">
                <Link to="/Home/Make_An_Appointment">
                  Make An Appointment
                  <img src={arrow} alt="arrow" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterBox;
