import React from "react";
import "./ReviewComponent.css";
import message from "../../Images/message-text.png"
import arrow from  "../../Images/Arrow.png"
import BlackArrow from "../../Images/black-arrow.png"
import client1 from "../../Images/client-1.png"
import client2 from "../../Images/client-2.png"
import client3 from "../../Images/client-3.png"
import client4 from "../../Images/client-4.png"
import { Link } from "react-router-dom";
import quote from "../../Images/qute.png"

const ReviewComponent = () => {
  return (
    <section
      className="troo-da-clients-reviews-section padding-top padding-bottom"
      id="troo-da-clients-reviews-section"
    >
      <div className="client-cricle"></div>
      <figure className="chat-icon">
        <img src={message} alt="message" />
      </figure>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="title-txt">
              <span>Clients Reviews</span>
              <h2>
                What Our Clients Say<strong>About Our Services</strong>
              </h2>
            </div>
          </div>
          <div className="col-md-2">
            <div className="arr-img">
              <img src={arrow} alt="arrow" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="what-text">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard. Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <Link to="/Home/Testimonial">
                View All Reviews
                <img src={BlackArrow} alt="BlackArrow" />
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="client-section">
              <h4>"Wow what great service, I love it!"</h4>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classNameical an Latin literature
                from 45 BC, making it over 2000 years old. Richard McClintock.
              </p>
              <div className="client-img">
                <div className="img-col">
                  <img src={client1} alt="client1" />
                </div>
                <div className="client-deatils">
                  <strong>Naomi Karla</strong>
                  <p>Executive Chairman</p>
                </div>
              </div>
              <div className="clint-qute">
                <span>”</span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="client-section">
              <h4>"Affirm is the real deal! It's really wonderful."</h4>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical an Latin literature
                from 45 BC, making it over 2000 years old. Richard McClintock.
              </p>
              <div className="client-img">
                <div className="img-col">
                  <img src={client2} alt="client2" />
                </div>
                <div className="client-deatils">
                  <strong>Jason Cole</strong>
                  <p>SEO Expert</p>
                </div>
              </div>
              <div className="clint-qute">
                <span>”</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="client-section">
              <h4>"I will refer everyone I know."</h4>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical an Latin literature
                from 45 BC, making it over 2000 years old. Richard McClintock.
              </p>
              <div className="client-img">
                <div className="img-col">
                <img src={client3} alt="client3" />
                </div>
                <div className="client-deatils">
                  <strong>Alexa anderson</strong>
                  <p>Executive Chairman</p>
                </div>
              </div>
              <div className="clint-qute">
                <span>”</span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="client-section">
              <h4>"It's really wonderful."</h4>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical an Latin literature
                from 45 BC, making it over 2000 years old. Richard McClintock.
              </p>
              <div className="client-img">
                <div className="img-col">
                <img src={client4} alt="client4" />
                </div>
                <div className="client-deatils">
                  <strong>Adam Cena</strong>
                  <p>SEO Expert</p>
                </div>
              </div>
              <div className="clint-qute">
                <span>”</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="qute-icon">
        <img src={quote} alt="quote" />
      </div>
    </section>
  );
};

export default ReviewComponent;
