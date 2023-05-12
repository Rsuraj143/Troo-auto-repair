import React from "react";
import "./ContactComponent.css";
import user from "../../Images/user.png"
import call from "../../Images/phone-call.png"
import mail from "../../Images/mail-04.png";
import chevronDown from "../../Images/chevron-down.png";
import chat from "../../Images/message-chat-square.png";
import whtArrow from "../../Images/white-arrow.png";
import circle from "../../Images/check-circle.png"

const ContactForm2 = () => {
  return (
    <section
      className="troo-da-contact-form-section padding-top padding-bottom"
      id="troo-da-contact-form-section"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="form-section">
              <div className="fome-tile">Drop us a Message</div>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the
                <br /> majority have suffered alteration in some form.
              </p>
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <label for="inputYourName4" className="form-label">
                      Your Name
                    </label>
                    <input
                      type="YourName"
                      className="form-control"
                      id="inputYourName"
                      placeholder="Your Name"
                    />
                    <div className="form-icon">
                      <img src={user} alt="user" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label for="inputYourPhone" className="form-label">
                      Your Phone
                    </label>
                    <input
                      type="YourPhone"
                      className="form-control"
                      id="inputYourPhone"
                      placeholder="Your Phone"
                    />
                    <div className="form-icon">
                      <img src={call} alt="call" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label for="inputYourEmail4" className="form-label">
                      Your Email
                    </label>
                    <input
                      type="YourEmail"
                      className="form-control"
                      id="inputYourEmail"
                      placeholder="Your Email"
                    />
                    <div className="form-icon">
                      <img src={mail} alt="mail" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label for="inputYourSubject" className="form-label">
                      Your Subject
                    </label>
                    <select id="inputSubject" className="form-select">
                      <option selected>Subject</option>
                      <option>...</option>
                    </select>
                    <div className="form-icon">
                      <img src={chevronDown} alt="chevronDown" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label for="inputYourdrive" className="form-label">
                      What do you drive?
                    </label>
                    <select id="inputdrive" className="form-select">
                      <option selected>Car</option>
                      <option>...</option>
                    </select>
                    <div className="form-icon">
                    <img src={chevronDown} alt="chevronDown" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label for="inputModelName" className="form-label">
                      Model Name
                    </label>
                    <input
                      type="YourModelName"
                      className="form-control"
                      id="inputModelName"
                      placeholder="Model Name"
                    />
                    <div className="form-icon">
                      <img src={circle} alt="circle" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label for="inputDate" className="form-label">
                      Date
                    </label>
                    <input
                      type="Date"
                      className="form-control"
                      id="inputDate"
                      placeholder="22/12/2022"
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="inputTime" className="form-label">
                      Time
                    </label>
                    <input
                      type="Time"
                      className="form-control"
                      id="inputTime"
                      placeholder="10:00 AM"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <label for="inputYourMessage" className="form-label">
                      Your Message
                    </label>
                    <textarea
                      className="form-control"
                      id="inputYourMessage"
                      placeholder="Your Message"
                    ></textarea>
                    <div className="form-icon mes-ss">
                      <img src={chat} alt="chat" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <p>
                      Please note that the date and time you requested may not
                      be available.
                    </p>
                    <button type="submit" className="sub-btm">
                      Send a Message <img src={whtArrow} alt="whtArrow" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm2;
