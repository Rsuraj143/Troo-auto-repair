import React from "react";
import "./VideoSection.css";
import whtArrow from "../../Images/white-arrow.png";
import { Link } from "react-router-dom";
import paly from "../../Images/play-icon.png";

const VideoSection = () => {
  return (
    <section
      class="troo-da-video-section padding-top padding-bottom"
      id="troo-da-video-section"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="video-text">
              <div class="title-txt">
                <span>How Can We Help You</span>
                <h2>
                  Now Better Auto Services<strong>Anytime - Anywhere</strong>
                </h2>
              </div>
              <div class="appoinment-section">
                <Link href="#">
                  Make an Appointment <img src={whtArrow} alt="whtArrow" />
                </Link>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div
              class="video-circle"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <img src={paly} alt="paly" />
            </div>
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-body">
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                    <video controls>
                      <source src="movie.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
