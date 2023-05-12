import React from "react";
import "./PricingCardComponent.css";
import arr from "../../Images/arr.png"
import res from "../../Images/res-icon.png"
import potDot from "../../Images/pri-dots.png"
import check from "../../Images/black-check.png"
import whtArrow from "../../Images/white-arrow.png"
import { Link } from "react-router-dom";
import red from "../../Images/red-arr.png"
import { FaStar } from 'react-icons/fa';

const PricingCardcomponent = () => {
  return (
    <section
      className="troo-da-pricing-section padding-top padding-bottom"
      id="troo-da-pricing-section"
    >
      <div className="arr-col">
        <img src={arr} alt="arr" />
      </div>
      <div className="client-cricle">
        <img src={res} alt="res" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title-txt">
              <span>Our Pricing Table</span>
              <h2>
                Pricing Plans Which <strong> Suits Your Needs</strong>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="prcing-col">
              <div className="dot-move">
                <img src={potDot} alt="potDot" />
              </div>
              <h3>Basic Package</h3>
              <div className="pricing-ss">
                <span>$</span>
                <strong>39.00</strong>
                <sub>/Per Service</sub>
              </div>
              <div className="rating-start">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
              </div>
              <div className="ocean">
                <div className="wave"></div>
              </div>
              <div className="pricing-services">
                <ul>
                  <li>
                    <div className="checl-icon">
                      <img src={check} alt="check" />
                    </div>
                    <span>Breaks repair</span>
                  </li>
                  <li>
                    <div className="checl-icon">
                      <img src={check} alt="check" />
                    </div>
                    <span>Tires Replacement</span>
                  </li>
                  <li className="disable">
                    <div className="checl-icon">
                      <img src={check} alt="check" />
                    </div>
                    <span>Transmission Service</span>
                  </li>
                  <li className="disable">
                    <div className="checl-icon">
                      <img src={check} alt="check" />
                    </div>
                    <span>Diagnostic Service</span>
                  </li>
                  <li className="disable">
                    <div className="checl-icon">
                      <img src={check} alt="check" />
                    </div>
                    <span>Batteries Replacement</span>
                  </li>
                  <li className="disable">
                    <div className="checl-icon">
                      <img src={check} alt="check" />
                    </div>
                    <span>Engine Repair</span>
                  </li>
                  <li className="disable">
                    <div className="checl-icon">
                      <img src={check} alt="check" />
                    </div>
                    <span>12 Hours Full Support</span>
                  </li>
                </ul>
              </div>
              <div className="appoinment-section">
                <Link href="#">
                  Choose This Plan
                  <img src={whtArrow} alt="whtArrow" />
                </Link>
              </div>
              <div className="small-dot"></div>
              <div className="radius">
                <span className="border-animation ba2"></span>
              </div>
              <div className="dot-move rigth-col">
                <img src={potDot} alt="potDot" />
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="prcing-col standard-package">
              <div className="standard-col">
                <span>Popular</span>
              </div>
              <div className="dot-move">
              <img src={potDot} alt="potDot" />
              </div>
              <h3>Standard Package</h3>
              <div className="pricing-ss">
                <span>$</span>
                <strong>59.00</strong>
                <sub>/Per Service</sub>
              </div>
              <div className="rating-start">
              <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
              </div>
              <div className="ocean">
                <div className="wave"></div>
              </div>
              <div className="pricing-services">
                <ul>
                  <li>
                    <div className="checl-icon">
                      <img src={check} alt="check" />
                    </div>
                    <span>Breaks repair</span>
                  </li>
                  <li>
                    <div className="checl-icon">
                      <img src={check} alt="check" />
                    </div>
                    <span>Tires Replacement</span>
                  </li>
                  <li>
                    <div className="checl-icon">
                      <img src={check} alt="check" />
                    </div>
                    <span>Transmission Service</span>
                  </li>
                  <li>
                    <div className="checl-icon">
                      <img src={check} alt="check" />
                    </div>
                    <span>Diagnostic Service</span>
                  </li>
                  <li className="disable">
                    <div className="checl-icon">
                      <img src={check} alt="check" />
                    </div>
                    <span>Batteries Replacement</span>
                  </li>
                  <li className="disable">
                    <div className="checl-icon">
                      <img src={check} alt="check" />
                    </div>
                    <span>Engine Repair</span>
                  </li>
                  <li className="disable">
                    <div className="checl-icon">
                      <img src={check} alt="check" />
                    </div>
                    <span>12 Hours Full Support</span>
                  </li>
                </ul>
              </div>
              <div className="appoinment-section">
              <Link href="#">
                  Choose This Plan
                  <img src={whtArrow} alt="whtArrow" />
                </Link>
              </div>
              <div className="small-dot"></div>
              <div className="radius">
                <span className="border-animation ba2"></span>
              </div>
              <div className="dot-move rigth-col">
              <img src={potDot} alt="potDot" />
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="prcing-col gold-ss">
              <div className="dot-move">
              <img src={potDot} alt="potDot" />
              </div>
              <h3>Golden Package</h3>
              <div className="pricing-ss">
                <span>$</span>
                <strong>89.00</strong>
                <sub>/Per Service</sub>
              </div>
              <div className="rating-start">
              <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
              </div>
              <div className="ocean">
                <div className="wave"></div>
              </div>
              <div className="pricing-services">
                <ul>
                  <li>
                    <div className="checl-icon">
                      <img src={check} alt="check" />
                    </div>
                    <span>Breaks repair</span>
                  </li>
                  <li>
                    <div className="checl-icon">
                      <img src={check} alt="check" />
                    </div>
                    <span>Tires Replacement</span>
                  </li>
                  <li>
                    <div className="checl-icon">
                      <img src={check} alt="check" />
                    </div>
                    <span>Transmission Service</span>
                  </li>
                  <li>
                    <div className="checl-icon">
                      <img src={check} alt="check" />
                    </div>
                    <span>Diagnostic Service</span>
                  </li>
                  <li>
                    <div className="checl-icon">
                      <img src={check} alt="check" />
                    </div>
                    <span>Batteries Replacement</span>
                  </li>
                  <li>
                    <div className="checl-icon">
                      <img src={check} alt="check" />
                    </div>
                    <span>Engine Repair</span>
                  </li>
                  <li>
                    <div className="checl-icon">
                      <img src={check} alt="check" />
                    </div>
                    <span>12 Hours Full Support</span>
                  </li>
                </ul>
              </div>
              <div className="appoinment-section">
              <Link href="#">
                  Choose This Plan
                  <img src={whtArrow} alt="whtArrow" />
                </Link>
              </div>
              <div className="small-dot"></div>
              <div className="radius">
                <span className="border-animation ba2"></span>
              </div>
              <div className="dot-move rigth-col">
              <img src={potDot} alt="potDot" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="all-plan-col">
              <p>
                Want See More Plan?
                <Link to="/Home/Pricing_Table">
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
