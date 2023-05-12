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
                      <img src={phone} alt="phone" />
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
                    <select id="inputState" className="form-select">
                      <option selected>Subject</option>
                      <option>...</option>
                    </select>
                    <div className="form-icon">
                      <img src={chevronDown} alt="chevronDown" />
                    </div>
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

export default ContactForm;
