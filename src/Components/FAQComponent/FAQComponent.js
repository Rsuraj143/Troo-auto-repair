import React from "react";
import "./FAQComponent.css";
import faq from "../../Images/faq-img.png";
import Accordion from "react-bootstrap/Accordion";

const FAQComponent = () => {
  return (
    <section
      class="troo-da-faq-section padding-top padding-bottom"
      id="troo-da-faq-section"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="title-txt">
              <span>FAQ’s</span>
              <h2>
                Have You Any Questions?
                <strong>Usually Asked Question From Client</strong>
              </h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-7">
            <div class="accordion-section">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Do You Give Any Offer for Premium Customer?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the printing and typesetting
                    industry
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Why is My Check Engine Light On?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the printing and typesetting
                    industry
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    How Do I Check My Engine Oil Level?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the printing and typesetting
                    industry
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>How Do I Change a Tire?</Accordion.Header>
                  <Accordion.Body>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the printing and typesetting
                    industry
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    How Do I Sync Bluetooth With iPhone?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the printing and typesetting
                    industry
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>
                    How Do I Change Windshield Wipers?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the printing and typesetting
                    industry
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header>
                    How Do I Change My Car Battery?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the printing and typesetting
                    industry
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                  <Accordion.Header>
                    Does Your Car Need High Octane Fuel?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the printing and typesetting
                    industry
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
          <div class="col-md-5">
            <div class="red-faq-col">
              <h3>Didn’t Find Answer?</h3>
              <p>
                Check Our <strong>All FAQ’s</strong>
              </p>
              <span>OR</span>
              <div class="fqa-linkss">
                <span>Contact Us On: </span>
                <a href="tel:+44 123 456 7890">+44 123 456 7890</a>
              </div>
            </div>
            <div class="faq-img-ss">
              <img src={faq} alt="faq" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQComponent;
