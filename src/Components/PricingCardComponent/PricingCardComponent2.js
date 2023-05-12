import React from "react";
import priDotes from "../../Images/pri-dots.png";
import blackCheck from "../../Images/black-check.png";
import whtArrow from "../../Images/white-arrow.png";
import { Link } from "react-router-dom";
import "./PricingCardComponent.css";
import { FaStar } from 'react-icons/fa';

const PricingCardComponent2 = () => {
  return (
    <section
      className="troo-da-pricing-section padding-top padding-bottom"
      id="troo-da-pricing-section"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="prcing-col">
              <div className="dot-move">
                <img src={priDotes} alt="priDotes" />
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
                      <img src={blackCheck} alt="blackCheck" />
                    </div>
                    <span>Breaks repair</span>
                  </li>
                  <li>
                    <div className="checl-icon">
                      <img src={blackCheck} alt="blackCheck" />
                    </div>
                    <span>Tires Replacement</span>
                  </li>
                  <li className="disable">
                    <div className="checl-icon">
                      <img src={blackCheck} alt="blackCheck" />
                    </div>
                    <span>Transmission Service</span>
                  </li>
                  <li className="disable">
                    <div className="checl-icon">
                      <img src={blackCheck} alt="blackCheck" />
                    </div>
                    <span>Diagnostic Service</span>
                  </li>
                  <li className="disable">
                    <div className="checl-icon">
                      <img src={blackCheck} alt="blackCheck" />
                    </div>
                    <span>Batteries Replacement</span>
                  </li>
                  <li className="disable">
                    <div className="checl-icon">
                      <img src={blackCheck} alt="blackCheck" />
                    </div>
                    <span>Engine Repair</span>
                  </li>
                  <li className="disable">
                    <div className="checl-icon">
                      <img src={blackCheck} alt="blackCheck" />
                    </div>
                    <span>12 Hours Full Support</span>
                  </li>
                </ul>
              </div>
              <div className="appoinment-section">
                {" "}
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
                <img src={priDotes} alt="pridote" />
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="prcing-col standard-package">
              <div className="standard-col">
                <span>Popular</span>
              </div>
              <div className="dot-move">
                <img src={priDotes} alt="pridote" />
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
                      <img src={blackCheck} alt="blackCheck" />
                    </div>
                    <span>Breaks repair</span>
                  </li>
                  <li>
                    <div className="checl-icon">
                      <img src={blackCheck} alt="blackCheck" />
                    </div>
                    <span>Tires Replacement</span>
                  </li>
                  <li>
                    <div className="checl-icon">
                      <img src={blackCheck} alt="blackCheck" />
                    </div>
                    <span>Transmission Service</span>
                  </li>
                  <li>
                    <div className="checl-icon">
                      <img src={blackCheck} alt="blackCheck" />
                    </div>
                    <span>Diagnostic Service</span>
                  </li>
                  <li className="disable">
                    <div className="checl-icon">
                      <img src={blackCheck} alt="blackCheck" />
                    </div>
                    <span>Batteries Replacement</span>
                  </li>
                  <li className="disable">
                    <div className="checl-icon">
                      <img src={blackCheck} alt="blackCheck" />
                    </div>
                    <span>Engine Repair</span>
                  </li>
                  <li className="disable">
                    <div className="checl-icon">
                      <img src={blackCheck} alt="blackCheck" />
                    </div>
                    <span>12 Hours Full Support</span>
                  </li>
                </ul>
              </div>
              <div className="appoinment-section">
                {" "}
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
                <img src={priDotes} alt="pridote" />
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="prcing-col gold-ss">
              <div className="dot-move">
                <img src={priDotes} alt="pridote" />
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
                      <img src={blackCheck} alt="blackCheck" />
                    </div>
                    <span>Breaks repair</span>
                  </li>
                  <li>
                    <div className="checl-icon">
                      <img src={blackCheck} alt="blackCheck" />
                    </div>
                    <span>Tires Replacement</span>
                  </li>
                  <li>
                    <div className="checl-icon">
                      <img src={blackCheck} alt="blackCheck" />
                    </div>
                    <span>Transmission Service</span>
                  </li>
                  <li>
                    <div className="checl-icon">
                      <img src={blackCheck} alt="blackCheck" />
                    </div>
                    <span>Diagnostic Service</span>
                  </li>
                  <li>
                    <div className="checl-icon">
                      <img src={blackCheck} alt="blackCheck" />
                    </div>
                    <span>Batteries Replacement</span>
                  </li>
                  <li>
                    <div className="checl-icon">
                      <img src={blackCheck} alt="blackCheck" />
                    </div>
                    <span>Engine Repair</span>
                  </li>
                  <li>
                    <div className="checl-icon">
                      <img src={blackCheck} alt="blackCheck" />
                    </div>
                    <span>12 Hours Full Support</span>
                  </li>
                </ul>
              </div>
              <div className="appoinment-section">
                {" "}
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
                <img src={priDotes} alt="pridote" />
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="prcing-col standard-package">
              <div className="standard-col">
                <span>Popular</span>
              </div>
              <div className="dot-move">
                <img src={priDotes} alt="pridote" />
              </div>
              <h3>Personal Package</h3>
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
                      <img src={blackCheck} alt="blackCheck" />
                    </div>
                    <span>Breaks repair</span>
                  </li>
                  <li>
                    <div className="checl-icon">
                      <img src={blackCheck} alt="blackCheck" />
                    </div>
                    <span>Tires Replacement</span>
                  </li>
                  <li>
                    <div className="checl-icon">
                      <img src={blackCheck} alt="blackCheck" />
                    </div>
                    <span>Transmission Service</span>
                  </li>
                  <li>
                    <div className="checl-icon">
                      <img src={blackCheck} alt="blackCheck" />
                    </div>
                    <span>Diagnostic Service</span>
                  </li>
                  <li className="disable">
                    <div className="checl-icon">
                      <img src={blackCheck} alt="blackCheck" />
                    </div>
                    <span>Batteries Replacement</span>
                  </li>
                  <li className="disable">
                    <div className="checl-icon">
                      <img src={blackCheck} alt="blackCheck" />
                    </div>
                    <span>Engine Repair</span>
                  </li>
                  <li className="disable">
                    <div className="checl-icon">
                      <img src={blackCheck} alt="blackCheck" />
                    </div>
                    <span>12 Hours Full Support</span>
                  </li>
                </ul>
              </div>
              <div className="appoinment-section">
                {" "}
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
                <img src={priDotes} alt="pridote" />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="prcing-col">
              <div className="dot-move">
                <img src={priDotes} alt="pridote" />
              </div>
              <h3>Business Package</h3>
              <div className="pricing-ss">
                <span>$</span>
                <strong>99.00</strong>
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
                      <img src={blackCheck} alt="blackCheck" />
                    </div>
                    <span>Breaks repair</span>
                  </li>
                  <li>
                    <div className="checl-icon">
                      <img src={blackCheck} alt="blackCheck" />
                    </div>
                    <span>Tires Replacement</span>
                  </li>
                  <li className="disable">
                    <div className="checl-icon">
                      <img src={blackCheck} alt="blackCheck" />
                    </div>
                    <span>Transmission Service</span>
                  </li>
                  <li className="disable">
                    <div className="checl-icon">
                      <img src={blackCheck} alt="blackCheck" />
                    </div>
                    <span>Diagnostic Service</span>
                  </li>
                  <li className="disable">
                    <div className="checl-icon">
                      <img src={blackCheck} alt="blackCheck" />
                    </div>
                    <span>Batteries Replacement</span>
                  </li>
                  <li className="disable">
                    <div className="checl-icon">
                      <img src={blackCheck} alt="blackCheck" />
                    </div>
                    <span>Engine Repair</span>
                  </li>
                  <li className="disable">
                    <div className="checl-icon">
                      <img src={blackCheck} alt="blackCheck" />
                    </div>
                    <span>12 Hours Full Support</span>
                  </li>
                </ul>
              </div>
              <div className="appoinment-section">
                {" "}
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
                <img src={priDotes} alt="pridote" />
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="prcing-col gold-ss">
              <div className="dot-move">
                <img src={priDotes} alt="pridote" />
              </div>
              <h3>Corporate Package</h3>
              <div className="pricing-ss">
                <span>$</span>
                <strong>129.00</strong>
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
                      <img src={blackCheck} alt="blackCheck" />
                    </div>
                    <span>Breaks repair</span>
                  </li>
                  <li>
                    <div className="checl-icon">
                      <img src={blackCheck} alt="blackCheck" />
                    </div>
                    <span>Tires Replacement</span>
                  </li>
                  <li>
                    <div className="checl-icon">
                      <img src={blackCheck} alt="blackCheck" />
                    </div>
                    <span>Transmission Service</span>
                  </li>
                  <li>
                    <div className="checl-icon">
                      <img src={blackCheck} alt="blackCheck" />
                    </div>
                    <span>Diagnostic Service</span>
                  </li>
                  <li>
                    <div className="checl-icon">
                      <img src={blackCheck} alt="blackCheck" />
                    </div>
                    <span>Batteries Replacement</span>
                  </li>
                  <li>
                    <div className="checl-icon">
                      <img src={blackCheck} alt="blackCheck" />
                    </div>
                    <span>Engine Repair</span>
                  </li>
                  <li>
                    <div className="checl-icon">
                      <img src={blackCheck} alt="blackCheck" />
                    </div>
                    <span>12 Hours Full Support</span>
                  </li>
                </ul>
              </div>
              <div className="appoinment-section">
                {" "}
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
                <img src={priDotes} alt="pridote" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCardComponent2;
