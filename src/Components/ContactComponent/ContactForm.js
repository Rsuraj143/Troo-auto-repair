import React from "react";
import user from "../../Images/user.png";
import phone from "../../Images/phone-call.png";
import mail from "../../Images/mail-04.png";
import chevronDown from "../../Images/chevron-down.png";
import chat from "../../Images/message-chat-square.png";
import whtArrow from "../../Images/white-arrow.png";
import "./ContactComponent.css"

const ContactForm = () => {
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
                      <img src={phone} alt="phone" />
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
                    <select id="inputState" class="form-select">
                      <option selected>Subject</option>
                      <option>...</option>
                    </select>
                    <div class="form-icon">
                      <img src={chevronDown} alt="chevronDown" />
                    </div>
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

export default ContactForm;
