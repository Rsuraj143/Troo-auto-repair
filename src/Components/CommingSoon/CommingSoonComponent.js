import React from "react";
import "./CommingSoon.css";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import commingImg from "../../Images/coming-img.png";

const CommingSoonComponent = () => {
  return (
    <section class="troo-da-coming-section" id="troo-da-coming-section">
      <div class="coming-section">
        <div class="row">
          <div class="col-md-6">
            <div class="coming-soon-section">
              <div class="title-coning">Coming Soon</div>
              <h1>
                We Are Almost <strong>Ready For Lounch</strong>
              </h1>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority
                <br /> have suffered alteration in some form, by injected
                humour, or randomised words
                <br /> which don't look even slightly believable..
              </p>
              <div class="search-form">
                <p>Notify Me When it Launch</p>
                <div class="form-outline">
                  <input
                    type="search"
                    id="form1"
                    class="form-control"
                    placeholder="Email"
                  />
                </div>
                <button type="button">Notify Me</button>
              </div>
              <div class="socail-icon">
                <span>Follow Us on</span>
                <ul>
                  <li>
                    <Link to="#">
                      <FaFacebookF />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <FaTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <FaInstagram />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <FaLinkedinIn />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="coming-contact">
              <div class="con-title">Contact Us</div>
              <a href="tel:+44 987 654 3210">+44 987 654 3210</a>
              <a href="mailto:contact@troothems.com">contact@troothems.com</a>
            </div>
            <div class="con-img-col">
              <img src={commingImg} alt="commingImg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommingSoonComponent;
