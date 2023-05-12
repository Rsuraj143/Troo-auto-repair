import React from "react";
import "./TeamComponent.css";
import arrow from "../../Images/white-arrow.png";
import { Link, createSearchParams } from "react-router-dom";
import { TeamData } from "./TeamData";

const TeamComponent = () => {
  return (
    <section
      className="troo-da-expert-section padding-top padding-bottom"
      id="troo-daexpert-section"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title-txt">
              <span>Meet Our Expert</span>
              <h2>
                We Have an Expert and <strong> Dadicated Team Members</strong>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {TeamData.slice(0, 3).map((e, i) => (
            <div className="col-md-4" key={i}>
              <Link to={`/Home/Our_Team/Team_Details?${createSearchParams({id : e.id})}`}>
              <div className="expert-team">
                <div className="ex-main">
                  <img src={e.img} alt="team1" />
                </div>
                <div className="expert-text">
                  <div className="expert-tel">
                    <h3>{e.name} </h3>
                    <p>{e.title} </p>
                  </div>
                  <div className="share-ion">
                    {e.social.map((ele, ind) => (
                      <button className="icon" key={ind}>
                        {ele.icon}
                      </button>
                    ))}
                  </div>
                  <button className="mainbutton">
                    <div className="buttontext">{e.shareIcon}</div>
                  </button>
                </div>
              </div>
              </Link>
              
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="appoinment-section">
              <Link to="/Home/Our_Team">
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
