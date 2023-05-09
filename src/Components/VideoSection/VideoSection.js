import React, { useState } from "react";
import "./VideoSection.css";
import whtArrow from "../../Images/white-arrow.png";
import { Link } from "react-router-dom";
import paly from "../../Images/play-icon.png";
import { IoCloseOutline } from "react-icons/io5";

const VideoSection = () => {
  const [modal, setModal] = useState(false);
  const openModal = () => {
    if (!modal) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    setModal(!modal);
  };
  return (
    <section
      class="troo-da-video-section padding-top padding-bottom"
      id="troo-da-video-section"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-6 left">
            <div class="video-text">
              <div class="title-txt">
                <span>How Can We Help You</span>
                <h2>
                  Now Better Auto Services<strong>Anytime - Anywhere</strong>
                </h2>
              </div>
              <div class="appoinment-section">
                <Link to="/Home/Make_An_Appointment">
                  Make an Appointment <img src={whtArrow} alt="whtArrow" />
                </Link>
              </div>
            </div>
          </div>
          <div class="col-md-6 right">
            <button
              class="video-circle"
              onClick={openModal}
            >
              <img src={paly} alt="paly" />
              {modal ? (
                  <section className="modal__bg">
                    <div className="modal__align">
                      <div className="modal__content" modal={modal}>
                        <IoCloseOutline
                          className="modal__close"
                          arial-label="Close modal"
                          onClick={setModal}
                        />
                        <div className="modal__video-align">
                          <iframe
                            width="800"
                            height="500"
                            src="https://www.youtube.com/embed/DUfXdcpEfMs"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </section>
                ) : null}
            </button>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
