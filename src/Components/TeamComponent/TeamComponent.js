import React from "react";
import "./TeamComponent.css";
import team1 from "../../Images/team-1.png"
import team2 from "../../Images/team-2.png"
import team3 from "../../Images/team-3.png"
import arrow from "../../Images/white-arrow.png"
import { Link } from "react-router-dom";
import {FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram,FaShareAlt} from "react-icons/fa";


const TeamComponent = () => {
  return (
    <section
      class="troo-da-expert-section padding-top padding-bottom"
      id="troo-daexpert-section"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="title-txt">
              <span>Meet Our Expert</span>
              <h2>
                We Have an Expert and <strong> Dadicated Team Members</strong>
              </h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="expert-team">
              <div class="ex-main">
                <img src={team1} alt="team1" />
              </div>
              <div class="expert-text">
                <div class="expert-tel">
                  <h3>Jacob Reyes</h3>
                  <p>CEO and Founder</p>
                </div>
                <div class="share-ion">
                  <button class="icon">
                    <FaInstagram/>
                  </button>
                  <button class="icon">
                    <FaLinkedinIn/>
                  </button>
                  <button class="icon">
                    <FaFacebookF/>
                  </button>
                  <button class="icon">
                    <FaTwitter/>
                  </button>
                </div>
                <button class="mainbutton">
                  <div class="buttontext">
                    <FaShareAlt/>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="expert-team">
              <div class="ex-main">
              <img src={team2} alt="team2" />
              </div>
              <div class="expert-text">
                <div class="expert-tel">
                  <h3>Jacob Reyes</h3>
                  <p>CEO and Founder</p>
                </div>
                <div class="share-ion">
                  <button class="icon">
                    <FaInstagram/>
                  </button>
                  <button class="icon">
                    <FaLinkedinIn/>
                  </button>
                  <button class="icon">
                    <FaFacebookF/>
                  </button>
                  <button class="icon">
                    <FaTwitter/>
                  </button>
                </div>
                <button class="mainbutton">
                  <div class="buttontext">
                    <FaShareAlt/>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="expert-team">
              <div class="ex-main">
              <img src={team3} alt="team3" />
              </div>
              <div class="expert-text">
                <div class="expert-tel">
                  <h3>Jacob Reyes</h3>
                  <p>CEO and Founder</p>
                </div>
                <div class="share-ion">
                  <button class="icon">
                    <FaInstagram/>
                  </button>
                  <button class="icon">
                    <FaLinkedinIn/>
                  </button>
                  <button class="icon">
                    <FaFacebookF/>
                  </button>
                  <button class="icon">
                    <FaTwitter/>
                  </button>
                </div>
                <button class="mainbutton">
                  <div class="buttontext">
                    <FaShareAlt/>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="appoinment-section">
              <Link href="#">
                See All Member
                <img src={arrow} alt="arrow" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamComponent;
