import React from "react";
import "./ContactComponent.css";
import helpImg from "../../Images/contact-us-img.png"

const ContactHelp = () => {
  return(
    <section className="troo-da-contact-section padding-top padding-bottom" id="troo-da-contact-section">
  <div className="container">
     <div className="row">
       <div className="col-md-6">
        <div className="title-txt">
          <span>Want Quick Help?</span>
          <h2>Good Time to<strong>Feel free to contact</strong></h2>
        </div>
        <div className="office-add">
          <span>Our Office Address</span>
          <h3>98 Lancaster Court,Poughkeepsie,<br/>NY 12601, USA</h3>
         </div>
        <div className="office-add">
          <span>Call Us on</span>
          <h3>+44 123 456 7890<br/>
            +44 987 654 3210</h3>
         </div>
        <div className="office-add">
          <span>Email Us on</span>
          <h3>info@troothemes.com<br/>
            contact@troothemes.com</h3>
         </div>

       </div>
       <div className="col-md-6">
          <div className="contact-text">
            <img src={helpImg} alt="helpImg" />
             <div className="cont-img-tx">We Are Happy to Help You.</div>
         </div>
       </div>
     </div>
  </div>
</section>
  )
};

export default ContactHelp;
