import React from "react";
import writer1 from "../../Images/blog-writer-1.png";
import check from "../../Images/check.png";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import arrow from "../../Images/black-arrow.png";
import location from "../../Images/location.png";
import call from "../../Images/call-icon.png";
import essential from "../../Images/essential-img.png";
import mail from "../../Images/mail-icon.png";
import { Link } from "react-router-dom";
import blogdetail from "../../Images/serices-details.png";
import "./BlogListComponent.css";

const BlogDetailsComponent = () => {
  return (
    <section
      class="troo-da-service-detail-section"
      id="troo-da-service-detail-section"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <div class="service-detail-content">
              <div class="service-detils-img">
                <img src={blogdetail} alt="blogdetail" />
              </div>
              <div class="row">
                <div class="col-md-4">
                  <div class="blog-writer">
                    <div class="blog-wri-img">
                      <img src={writer1} alt="writer1" />
                    </div>
                    <div class="blog-wri-text">
                      <span>Published by</span>
                      <strong>Ronda Racol</strong>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="blog-writer">
                    <div class="blog-wri-text">
                      <span>Date</span>
                      <strong>22 December, 2022</strong>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="blog-writer">
                    <div class="blog-wri-text">
                      <span>Category</span>
                      <strong>Auto Repair</strong>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="servi-text">
                    <h3>Overview</h3>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form.
                    </p>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are and going
                      to use a passage of Lorem Ipsum,
                    </p>
                    <h3>Our featured services</h3>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are and going
                      to use a passage of Lorem Ipsum,
                    </p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="feacher-section">
                    <div class="number-ss">01</div>
                    <div class="feachet-text">
                      <span>Fast Service</span>
                      <p>
                        There are many variations of passages by injected humour
                      </p>
                    </div>
                  </div>
                  <div class="feacher-section">
                    <div class="number-ss">03</div>
                    <div class="feachet-text">
                      <span>Expert Team</span>
                      <p>
                        There are many variations of passages by injected humour
                      </p>
                    </div>
                  </div>
                  <div class="feach-img">
                    <img src={essential} alt="essential" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="feacher-section">
                    <div class="number-ss">02</div>
                    <div class="feachet-text">
                      <span>Award Winning</span>
                      <p>
                        There are many variations of passages by injected humour
                      </p>
                    </div>
                  </div>
                  <div class="feacher-section">
                    <div class="number-ss">04</div>
                    <div class="feachet-text">
                      <span>Secure Payments</span>
                      <p>
                        There are many variations of passages by injected humour
                      </p>
                    </div>
                  </div>
                  <div class="ess-text">
                    <h3>Essential Service</h3>
                    <p>
                      There are many variations of the in passages by injected
                      humour
                    </p>
                    <ul>
                      <li>
                        <img src={check} alt="check" />
                        <span>
                          Emergency response time is one hour or less.
                        </span>
                      </li>
                      <li>
                        <img src={check} alt="check" />
                        <span>
                          We want you to be satisfied with our services.
                        </span>
                      </li>
                      <li>
                        <img src={check} alt="check" />
                        <span>
                          You deserve to questions answered in English.
                        </span>
                      </li>
                      <li>
                        <img src={check} alt="check" />
                        <span>Our service is proactive, not reactive.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="servi-text">
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form.
                    </p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="tag-section">
                    <div class="tags">
                      <strong>Tags: </strong>
                      <span>Auto, Fuel, Elecrical, Machanic, Vehcle, Tire</span>
                    </div>
                    <div class="socail-icon">
                      <span>Share on</span>
                      <ul>
                        <li>
                          <Link to="#">
                            <FaFacebookF />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <FaTwitter />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <FaInstagram />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <FaLinkedinIn />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="cat-tile">Categories</div>
            <div class="services-list">
              <ul>
                <li>
                  <Link href="#"> Auto Glas Repair</Link>
                  <span>
                    <img src={arrow} alt="arrow" />
                  </span>
                </li>
                <li>
                  <Link href="#"> Spark Plug replacement </Link>
                  <span>
                    <img src={arrow} alt="arrow" />
                  </span>
                </li>
                <li>
                  <Link href="#"> Fuel Cap tightening</Link>
                  <span>
                    <img src={arrow} alt="arrow" />
                  </span>
                </li>
                <li>
                  <Link href="#"> Oxygen Sensor replacement</Link>
                  <span>
                    <img src={arrow} alt="arrow" />
                  </span>
                </li>
                <li>
                  <Link href="#"> Brake work</Link>
                  <span>
                    <img src={arrow} alt="arrow" />
                  </span>
                </li>
                <li>
                  <Link href="#"> Tire repairs and changes</Link>
                  <span>
                    <img src={arrow} alt="arrow" />
                  </span>
                </li>
                <li>
                  <Link href="#"> The Ignition System</Link>
                  <span>
                    <img src={arrow} alt="arrow" />
                  </span>
                </li>
                <li>
                  <Link href="#">The Electrical System</Link>
                  <span>
                    <img src={arrow} alt="arrow" />
                  </span>
                </li>
                <li>
                  <Link href="#"> Aftermarket Alarm removal</Link>
                  <span>
                    <img src={arrow} alt="arrow" />
                  </span>
                </li>
              </ul>
            </div>
            <div class="services-contact">
              <h3>Contacts</h3>
              <div class="serdes-call">
                <div class="ser-deals-cllimg">
                  <img src={location} alt="location" />
                </div>
                <div class="ser-deals-clltxt">
                  <span>98 Lancaster Court Poughkeepsie, NY 12601</span>
                </div>
              </div>
              <div class="serdes-call">
                <div class="ser-deals-cllimg">
                  <img src={call} alt="call" />
                </div>
                <div class="ser-deals-clltxt">
                  <p>Call Us on</p>
                  <span>+44 123 456 7890</span>
                </div>
              </div>
              <div class="serdes-call">
                <div class="ser-deals-cllimg">
                  <img src={mail} alt="mail" />
                </div>
                <div class="ser-deals-clltxt">
                  <p>Email Us on</p>
                  <span>example@email.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsComponent;
