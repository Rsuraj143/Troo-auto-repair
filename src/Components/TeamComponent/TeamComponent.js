import React from "react";
import "./TeamComponent.css";
import arrow from "../../Images/white-arrow.png";
import { Link, createSearchParams } from "react-router-dom";
import { TeamData } from "./TeamData";

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
          {TeamData.slice(0, 3).map((e, i) => (
            <div class="col-md-4" key={i}>
              <Link to={`/Home/Our_Team/Team_Details?${createSearchParams({id : e.id})}`}>
              <div class="expert-team">
                <div class="ex-main">
                  <img src={e.img} alt="team1" />
                </div>
                <div class="expert-text">
                  <div class="expert-tel">
                    <h3>{e.name} </h3>
                    <p>{e.title} </p>
                  </div>
                  <div class="share-ion">
                    {e.social.map((ele, ind) => (
                      <button class="icon" key={ind}>
                        {ele.icon}
                      </button>
                    ))}
                  </div>
                  <button class="mainbutton">
                    <div class="buttontext">{e.shareIcon}</div>
                  </button>
                </div>
              </div>
              </Link>
              
            </div>
          ))}
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
