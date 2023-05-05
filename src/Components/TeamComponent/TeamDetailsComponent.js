import React from 'react'
import teamDetails from "../../Images/team-deails.png"
import {FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram,} from "react-icons/fa";
import { Link } from 'react-router-dom';
import call from "../../Images/call-icon.png"
import mail from "../../Images/mail-icon.png"

const TeamDetailsComponent = () => {
  return (
    <section class="troo-da-team-detail-section padding-top padding-bottom" id="troo-da-team-detail-section">
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <div class="team-detail">
            <img src={teamDetails} alt='teamDetails' />
          </div>
        </div>
        <div class="col-md-7">
          <div class="team-contetn">
           <div class="team-text">
            <h3>Williams Patrick</h3>
            <span>PRESIDENT & CEO</span>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
               by injected humour, or randomised words which don't look even slightly believable.
               If you are going to use a passage of Lorem Ipsum, you need.If you are going to use a passage of Lorem Ipsum, you need.</p>
               <div class="socail-icon">
                <span>Social Media</span>
                <ul>
                <li><Link to="#"><FaFacebookF /></Link></li>
                <li><Link to="#"><FaTwitter /></Link></li>
                <li><Link to="#"><FaInstagram /></Link></li>
                <li><Link to="#"><FaLinkedinIn /></Link></li>
              </ul>
            </div>
           </div>
           <div class="team-contact">
            <p>Contact Info</p>
            <div class="call-ss">
              <div class="call-img"><img src={call} alt='call' /></div>
              <div class="call-text">
                <strong><a href="tel:+44 123 456 7890">+44 123 456 7890</a></strong>
              </div>
            </div>
            <div class="call-ss">
              <div class="call-img"><img src={mail} alt='mail' /></div>
              <div class="call-text">
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