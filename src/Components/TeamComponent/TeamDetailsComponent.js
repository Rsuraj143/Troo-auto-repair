import React from 'react'
import teamDetails from "../../Images/team-deails.png"
import {FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram,} from "react-icons/fa";
import { Link } from 'react-router-dom';
import call from "../../Images/call-icon.png"
import mail from "../../Images/mail-icon.png"

const TeamDetailsComponent = () => {
  return (
    <section className="troo-da-team-detail-section padding-top padding-bottom" id="troo-da-team-detail-section">
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <div className="team-detail">
            <img src={teamDetails} alt='teamDetails' />
          </div>
        </div>
        <div className="col-md-7">
          <div className="team-contetn">
           <div className="team-text">
            <h3>Williams Patrick</h3>
            <span>PRESIDENT & CEO</span>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
               by injected humour, or randomised words which don't look even slightly believable.
               If you are going to use a passage of Lorem Ipsum, you need.If you are going to use a passage of Lorem Ipsum, you need.</p>
               <div className="socail-icon">
                <span>Social Media</span>
                <ul>
                <li><Link to="#"><FaFacebookF /></Link></li>
                <li><Link to="#"><FaTwitter /></Link></li>
                <li><Link to="#"><FaInstagram /></Link></li>
                <li><Link to="#"><FaLinkedinIn /></Link></li>
              </ul>
            </div>
           </div>
           <div className="team-contact">
            <p>Contact Info</p>
            <div className="call-ss">
              <div className="call-img"><img src={call} alt='call' /></div>
              <div className="call-text">
                <strong><a href="tel:+44 123 456 7890">+44 123 456 7890</a></strong>
              </div>
            </div>
            <div className="call-ss">
              <div className="call-img"><img src={mail} alt='mail' /></div>
              <div className="call-text">
                <strong><a href="mailto:example@email.com">example@email.com</a></strong>
              </div>
            </div>
           </div>
           </div>
        </div>
    </div>
  </div>
  </section>
  )
}

export default TeamDetailsComponent