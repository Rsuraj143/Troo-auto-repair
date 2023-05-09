import React, { useEffect, useState } from "react";
import "./Header.css";
import dot from "../../Images/dot.png"
import {FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram,} from "react-icons/fa";
import Navbar from "react-bootstrap/Navbar";
import call from "../../Images/call.svg"
import mail from "../../Images/mail.svg"
import logo from "../../Images/logo.png"
import arrow from "../../Images/white-arrow.png"
import { Link } from "react-router-dom";
import { HeaderData } from "./HeaderData";
import Navmenu from "./Navmenu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
    useEffect(()=>{
        window.scrollTo(0,0)
      },[])
  return (
    <header >
      <section class="troo-da-header-section" id="troo-da-header-section">
        <div class="vert-move">
          <img src={dot} alt="dot" />
        </div>
        <div class="container ">
          <div class="row addressNav" >
            <div class="col-md-3">
              <div class="socail-icon">
              <ul>
                <li><Link to="#"><FaFacebookF /></Link></li>
                <li><Link to="#"><FaTwitter /></Link></li>
                <li><Link to="#"><FaInstagram /></Link></li>
                <li><Link to="#"><FaLinkedinIn /></Link></li>
              </ul>
              </div>
            </div>
            <div class="col-md-9">
              <div class="call-section">
                <div class="call-ss">
                  <div class="call-img">
                    <img src={call} alt="call" />
                  </div>
                  <div class="call-text">
                    <span>Call Us on</span>
                    <strong>
                      <a href="tel:+44 123 456 7890">+44 123 456 7890</a>
                    </strong>
                  </div>
                </div>
                <div class="call-ss">
                  <div class="call-img">
                    <img src={mail} alt="mail" />
                  </div>
                  <div class="call-text">
                    <span>Email Us on</span>
                    <strong>
                      <a href="mailto:trooautorepair@email.com">
                        trooautorepair@gmail.com
                      </a>
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Navbar expand="lg" bg="light" className={`${isScrolled ? "stickynav" : ""}`}>
          <Navbar.Brand>
            <Link to="/">
            <img src={logo} alt="logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <ul className="navbar-nav ">
              {HeaderData.slice(0, 6).map((item, i) => {
                return <Navmenu key={i} item={item} />;
              })}
            </ul>

            <div class="appoinment-section">
              {HeaderData.slice(-1).map((e, i) => {
                return (
                  <Link key={i} to={e.path}>
                   {e.title}<img src={arrow} alt="arrow" />
                  </Link>
                );
              })}
            </div>
          </Navbar.Collapse>
        </Navbar>
        </div>
      </section>
    </header>
  );
};

export default Header;
