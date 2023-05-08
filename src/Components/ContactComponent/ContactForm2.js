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
      class="troo-da-contact-form-section padding-top padding-bottom"
      id="troo-da-contact-form-section"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="form-section">
              <div class="fome-tile">Drop us a Message</div>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the
                <br /> majority have suffered alteration in some form.
              </p>
              <form>
                <div class="row">
                  <div class="col-md-6">
                    <label for="inputYourName4" class="form-label">
                      Your Name
                    </label>
                    <input
                      type="YourName"
                      class="form-control"
                      id="inputYourName"
                      placeholder="Your Name"
                    />
                    <div class="form-icon">
                      <img src={user} alt="user" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <label for="inputYourPhone" class="form-label">
                      Your Phone
                    </label>
                    <input
                      type="YourPhone"
                      class="form-control"
                      id="inputYourPhone"
                      placeholder="Your Phone"
                    />
                    <div class="form-icon">
                      <img src={call} alt="call" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label for="inputYourEmail4" class="form-label">
                      Your Email
                    </label>
                    <input
                      type="YourEmail"
                      class="form-control"
                      id="inputYourEmail"
                      placeholder="Your Email"
                    />
                    <div class="form-icon">
                      <img src={mail} alt="mail" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <label for="inputYourSubject" class="form-label">
                      Your Subject
                    </label>
                    <select id="inputSubject" class="form-select">
                      <option selected>Subject</option>
                      <option>...</option>
                    </select>
                    <div class="form-icon">
                      <img src={chevronDown} alt="chevronDown" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label for="inputYourdrive" class="form-label">
                      What do you drive?
                    </label>
                    <select id="inputdrive" class="form-select">
                      <option selected>Car</option>
                      <option>...</option>
                    </select>
                    <div class="form-icon">
                    <img src={chevronDown} alt="chevronDown" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <label for="inputModelName" class="form-label">
                      Model Name
                    </label>
                    <input
                      type="YourModelName"
                      class="form-control"
                      id="inputModelName"
                      placeholder="Model Name"
                    />
                    <div class="form-icon">
                      <img src={circle} alt="circle" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label for="inputDate" class="form-label">
                      Date
                    </label>
                    <input
                      type="Date"
                      class="form-control"
                      id="inputDate"
                      placeholder="22/12/2022"
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="inputTime" class="form-label">
                      Time
                    </label>
                    <input
                      type="Time"
                      class="form-control"
                      id="inputTime"
                      placeholder="10:00 AM"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <label for="inputYourMessage" class="form-label">
                      Your Message
                    </label>
                    <textarea
                      class="form-control"
                      id="inputYourMessage"
                      placeholder="Your Message"
                    ></textarea>
                    <div class="form-icon mes-ss">
                      <img src={chat} alt="chat" />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <p>
                      Please note that the date and time you requested may not
                      be available.
                    </p>
                    <button type="submit" class="sub-btm">
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
