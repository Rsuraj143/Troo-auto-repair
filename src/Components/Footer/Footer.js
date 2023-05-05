import React from "react";
import "./Footer.css";
import {FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram,} from "react-icons/fa";
import trend from "../../Images/footer-tread.png"
import logo from "../../Images/footer-logo.png"
import { Link } from "react-router-dom";
import location from "../../Images/location.png"
import call from "../../Images/call-icon.png"
import mail from "../../Images/mail-icon.png"
import tire from "../../Images/footer-tire.png"

const Footer = () => {
  return (
    <div>
      <section
        class="troo-da-footer-deails-section"
        id="troo-da-footer-deails-section"
      >
        <div class="footer-vert-move">
          <img src={trend} alt="trend" />
        </div>
        <div class="container">
          <div class="row foter-row">
            <div class="col-md-3">
              <div class="footer-logo">
                <img src={logo} alt="logo" />
              </div>
            </div>
            <div class="col-md-7">
              <div class="footer-text">
                <p>
                  Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom
                  diska. Jinesade bel när feras redorade i belogi. FAR paratyp i
                  muvåning, och pesask vyfisat. Viktiga poddradio har un mad och
                  inde.
                </p>
              </div>
            </div>
            <div class="col-md-2">
              <div class="socail-icon">
              <ul>
                <li><Link to="#"><FaFacebookF /></Link></li>
                <li><Link to="#"><FaTwitter /></Link></li>
                <li><Link to="#"><FaInstagram /></Link></li>
                <li><Link to="#"><FaLinkedinIn /></Link></li>
              </ul>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3">
              <div class="location">
                <div class="footer-hd">Our Location</div>
                <div class="footer-con">
                  <div class="icon-im">
                    <img src={location} alt="location" />
                  </div>
                  <div class="loc-txt">
                    98 Lancaster Court Poughkeepsie, NY 12601
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-5 cont-ss">
              <div class="location Contact-col">
                <div class="footer-hd">Contact With Us</div>
                <div class="call-desils">
                  <div class="footer-con">
                    <div class="icon-im">
                      <img src={call} alt="call" />
                    </div>
                    <div class="loc-txt">
                      <span>Call Us on</span>
                      <a href="tel:+44 123 456 7890">+44 123 456 7890</a>
                    </div>
                  </div>
                  <div class="footer-con">
                    <div class="icon-im">
                      <img src={mail} alt="mail" />
                    </div>
                    <div class="loc-txt">
                      <span>Email Us on</span>
                      <a href="mailto:example@email.com">example@email.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-2">
              <div class="foot-lin left-cc">
                <div class="lin-hd">Pages</div>
                <ul>
                  <li>
                    <Link href="#">About Us</Link>
                  </li>
                  <li>
                    <Link href="#"> Our Gallery</Link>
                  </li>
                  <li>
                    <Link href="#"> Blog</Link>
                  </li>
                  <li>
                    <Link href="#"> FAQ’s</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-2">
              <div class="foot-lin">
                <div class="lin-hd">Services</div>
                <ul>
                  <li>
                    <Link href="#">Tire Services</Link>
                  </li>
                  <li>
                    <Link href="#"> Oil Changing</Link>
                  </li>
                  <li>
                    <Link href="#"> Auto Detailing</Link>
                  </li>
                  <li>
                    <Link href="#">View All Services</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row bottom-border">
            <div class="col-md-6">
              <div class="bottom-footer">
                <p>
                  Copyright © 2022. <span>TRoothemes</span>. All rights
                  reserved.
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="bootom-footer-links">
                <ul>
                  <li>
                    <Link href="#">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link href="#">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-cr">
          <img src={tire} alt="tire" />
        </div>
      </section>
    </div>
  );
};

export default Footer;
