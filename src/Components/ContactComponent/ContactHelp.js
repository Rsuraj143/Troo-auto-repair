import React from "react";
import "./ContactComponent.css";
import helpImg from "../../Images/contact-us-img.png"

const ContactHelp = () => {
  return(
    <section class="troo-da-contact-section padding-top padding-bottom" id="troo-da-contact-section">
  <div class="container">
     <div class="row">
       <div class="col-md-6">
        <div class="title-txt">
          <span>Want Quick Help?</span>
          <h2>Good Time to<strong>Feel free to contact</strong></h2>
        </div>
        <div class="office-add">
          <span>Our Office Address</span>
          <h3>98 Lancaster Court,Poughkeepsie,<br/>NY 12601, USA</h3>
         </div>
        <div class="office-add">
          <span>Call Us on</span>
          <h3>+44 123 456 7890<br/>
            +44 987 654 3210</h3>
         </div>
        <div class="office-add">
          <span>Email Us on</span>
          <h3>info@troothemes.com<br/>
            contact@troothemes.com</h3>
         </div>

       </div>
       <div class="col-md-6">
          <div class="contact-text">
            <img src={helpImg} alt="helpImg" />
             <div class="cont-img-tx">We Are Happy to Help You.</div>
         </div>
       </div>
     </div>
  </div>
</section>
  )
};

export default ContactHelp;
