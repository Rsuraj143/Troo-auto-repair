import React from "react";
import "./Footer.css";
import arrow from "../../Images/white-arrow.png"

const FooterBox = () => {
  return (
    <section class="troo-da-footer-section" id="troo-da-footer-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="fooetr-red-box">
              <span>
                We’ll Make Your Car Feel Brand
                <br />
                New Visit Our Workshop Today.
              </span>
              <div class="appoinment-section">
                <a href="make-an-appointment.html">
                  Make An Appointment
                  <img src={arrow} alt="arrow" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterBox;
