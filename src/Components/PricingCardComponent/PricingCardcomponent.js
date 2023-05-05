import React from "react";
import "./PricingCardComponent.css";
import arr from "../../Images/arr.png"
import res from "../../Images/res-icon.png"
import potDot from "../../Images/pri-dots.png"
import check from "../../Images/black-check.png"
import whtArrow from "../../Images/white-arrow.png"
import { Link } from "react-router-dom";
import red from "../../Images/red-arr.png"

const PricingCardcomponent = () => {
  return (
    <section
      class="troo-da-pricing-section padding-top padding-bottom"
      id="troo-da-pricing-section"
    >
      <div class="arr-col">
        <img src={arr} alt="arr" />
      </div>
      <div class="client-cricle">
        <img src={res} alt="res" />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="title-txt">
              <span>Our Pricing Table</span>
              <h2>
                Pricing Plans Which <strong> Suits Your Needs</strong>
              </h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="prcing-col">
              <div class="dot-move">
                <img src={potDot} alt="potDot" />
              </div>
              <h3>Basic Package</h3>
              <div class="pricing-ss">
                <span>$</span>
                <strong>39.00</strong>
                <sub>/Per Service</sub>
              </div>
              <div class="rating-start">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
              </div>
              <div class="ocean">
                <div class="wave"></div>
              </div>
              <div class="pricing-services">
                <ul>
                  <li>
                    <div class="checl-icon">
                      <img src={check} alt="check" />
                    </div>
                    <span>Breaks repair</span>
                  </li>
                  <li>
                    <div class="checl-icon">
                      <img src={check} alt="check" />
                    </div>
                    <span>Tires Replacement</span>
                  </li>
                  <li class="disable">
                    <div class="checl-icon">
                      <img src={check} alt="check" />
                    </div>
                    <span>Transmission Service</span>
                  </li>
                  <li class="disable">
                    <div class="checl-icon">
                      <img src={check} alt="check" />
                    </div>
                    <span>Diagnostic Service</span>
                  </li>
                  <li class="disable">
                    <div class="checl-icon">
                      <img src={check} alt="check" />
                    </div>
                    <span>Batteries Replacement</span>
                  </li>
                  <li class="disable">
                    <div class="checl-icon">
                      <img src={check} alt="check" />
                    </div>
                    <span>Engine Repair</span>
                  </li>
                  <li class="disable">
                    <div class="checl-icon">
                      <img src={check} alt="check" />
                    </div>
                    <span>12 Hours Full Support</span>
                  </li>
                </ul>
              </div>
              <div class="appoinment-section">
                <Link href="#">
                  Choose This Plan
                  <img src={whtArrow} alt="whtArrow" />
                </Link>
              </div>
              <div class="small-dot"></div>
              <div class="radius">
                <span class="border-animation ba2"></span>
              </div>
              <div class="dot-move rigth-col">
                <img src={potDot} alt="potDot" />
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="prcing-col standard-package">
              <div class="standard-col">
                <span>Popular</span>
              </div>
              <div class="dot-move">
              <img src={potDot} alt="potDot" />
              </div>
              <h3>Standard Package</h3>
              <div class="pricing-ss">
                <span>$</span>
                <strong>59.00</strong>
                <sub>/Per Service</sub>
              </div>
              <div class="rating-start">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
              </div>
              <div class="ocean">
                <div class="wave"></div>
              </div>
              <div class="pricing-services">
                <ul>
                  <li>
                    <div class="checl-icon">
                      <img src={check} alt="check" />
                    </div>
                    <span>Breaks repair</span>
                  </li>
                  <li>
                    <div class="checl-icon">
                      <img src={check} alt="check" />
                    </div>
                    <span>Tires Replacement</span>
                  </li>
                  <li>
                    <div class="checl-icon">
                      <img src={check} alt="check" />
                    </div>
                    <span>Transmission Service</span>
                  </li>
                  <li>
                    <div class="checl-icon">
                      <img src={check} alt="check" />
                    </div>
                    <span>Diagnostic Service</span>
                  </li>
                  <li class="disable">
                    <div class="checl-icon">
                      <img src={check} alt="check" />
                    </div>
                    <span>Batteries Replacement</span>
                  </li>
                  <li class="disable">
                    <div class="checl-icon">
                      <img src={check} alt="check" />
                    </div>
                    <span>Engine Repair</span>
                  </li>
                  <li class="disable">
                    <div class="checl-icon">
                      <img src={check} alt="check" />
                    </div>
                    <span>12 Hours Full Support</span>
                  </li>
                </ul>
              </div>
              <div class="appoinment-section">
              <Link href="#">
                  Choose This Plan
                  <img src={whtArrow} alt="whtArrow" />
                </Link>
              </div>
              <div class="small-dot"></div>
              <div class="radius">
                <span class="border-animation ba2"></span>
              </div>
              <div class="dot-move rigth-col">
              <img src={potDot} alt="potDot" />
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="prcing-col gold-ss">
              <div class="dot-move">
              <img src={potDot} alt="potDot" />
              </div>
              <h3>Golden Package</h3>
              <div class="pricing-ss">
                <span>$</span>
                <strong>89.00</strong>
                <sub>/Per Service</sub>
              </div>
              <div class="rating-start">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
              </div>
              <div class="ocean">
                <div class="wave"></div>
              </div>
              <div class="pricing-services">
                <ul>
                  <li>
                    <div class="checl-icon">
                      <img src={check} alt="check" />
                    </div>
                    <span>Breaks repair</span>
                  </li>
                  <li>
                    <div class="checl-icon">
                      <img src={check} alt="check" />
                    </div>
                    <span>Tires Replacement</span>
                  </li>
                  <li>
                    <div class="checl-icon">
                      <img src={check} alt="check" />
                    </div>
                    <span>Transmission Service</span>
                  </li>
                  <li>
                    <div class="checl-icon">
                      <img src={check} alt="check" />
                    </div>
                    <span>Diagnostic Service</span>
                  </li>
                  <li>
                    <div class="checl-icon">
                      <img src={check} alt="check" />
                    </div>
                    <span>Batteries Replacement</span>
                  </li>
                  <li>
                    <div class="checl-icon">
                      <img src={check} alt="check" />
                    </div>
                    <span>Engine Repair</span>
                  </li>
                  <li>
                    <div class="checl-icon">
                      <img src={check} alt="check" />
                    </div>
                    <span>12 Hours Full Support</span>
                  </li>
                </ul>
              </div>
              <div class="appoinment-section">
              <Link href="#">
                  Choose This Plan
                  <img src={whtArrow} alt="whtArrow" />
                </Link>
              </div>
              <div class="small-dot"></div>
              <div class="radius">
                <span class="border-animation ba2"></span>
              </div>
              <div class="dot-move rigth-col">
              <img src={potDot} alt="potDot" />
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="all-plan-col">
              <p>
                Want See More Plan?
                <Link href="#">
                  View All Plans <img src={red} alt="red" />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCardcomponent;
