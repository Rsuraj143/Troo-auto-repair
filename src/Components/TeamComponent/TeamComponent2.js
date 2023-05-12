import React from "react";
import "./TeamComponent.css";
import { TeamData } from "./TeamData";
import { Link, createSearchParams } from "react-router-dom";

const TeamComponent2 = () => {
  return (
    <section
      className="troo-da-expert-section padding-top padding-bottom"
      id="troo-daexpert-section"
    >
      <div className="container">
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
          {TeamData.slice(3, 6).map((e, i) => (
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
          {TeamData.slice(6, 9).map((e, i) => (
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
      </div>
    </section>
  );
};

export default TeamComponent2;
