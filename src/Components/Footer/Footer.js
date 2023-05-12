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
        className="troo-da-footer-deails-section"
        id="troo-da-footer-deails-section"
      >
        <div className="footer-vert-move">
          <img src={trend} alt="trend" />
        </div>
        <div className="container">
          <div className="row foter-row">
            <div className="col-md-3">
              <div className="footer-logo">
                <img src={logo} alt="logo" />
              </div>
            </div>
            <div className="col-md-7">
              <div className="footer-text">
                <p>
                  Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom
                  diska. Jinesade bel när feras redorade i belogi. FAR paratyp i
                  muvåning, och pesask vyfisat. Viktiga poddradio har un mad och
                  inde.
                </p>
              </div>
            </div>
            <div className="col-md-2 social">
              <div className="socail-icon">
              <ul>
                <li><Link to="#"><FaFacebookF /></Link></li>
                <li><Link to="#"><FaTwitter /></Link></li>
                <li><Link to="#"><FaInstagram /></Link></li>
                <li><Link to="#"><FaLinkedinIn /></Link></li>
              </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="location">
                <div className="footer-hd">Our Location</div>
                <div className="footer-con">
                  <div className="icon-im">
                    <img src={location} alt="location" />
                  </div>
                  <div className="loc-txt">
                    98 Lancaster Court Poughkeepsie, NY 12601
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 cont-ss">
              <div className="location Contact-col">
                <div className="footer-hd">Contact With Us</div>
                <div className="call-desils">
                  <div className="footer-con">
                    <div className="icon-im">
                      <img src={call} alt="call" />
                    </div>
                    <div className="loc-txt">
                      <span>Call Us on</span>
                      <a href="tel:+44 123 456 7890">+44 123 456 7890</a>
                    </div>
                  </div>
                  <div className="footer-con">
                    <div className="icon-im">
                      <img src={mail} alt="mail" />
                    </div>
                    <div className="loc-txt">
                      <span>Email Us on</span>
                      <a href="mailto:example@email.com">example@email.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="foot-lin left-cc">
                <div className="lin-hd">Pages</div>
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
            <div className="col-md-2">
              <div className="foot-lin">
                <div className="lin-hd">Services</div>
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
          <div className="row bottom-border">
            <div className="col-md-6">
              <div className="bottom-footer">
                <p>
                  Copyright © 2022. <span>TRoothemes</span>. All rights
                  reserved.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="bootom-footer-links">
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
        <div className="footer-cr">
          <img src={tire} alt="tire" />
        </div>
      </section>
    </div>
  );
};

export default Footer;
