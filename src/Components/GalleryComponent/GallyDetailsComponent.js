import React from 'react'
import "./GalleryDetails.css"
import photogal from "../../Images/photo-gallery.png"
import check from "../../Images/check.png"
import whtv from "../../Images/wht-img.png"
import galDetails1 from "../../Images/photo-gallery-deatail-1.png"
import galDetails2 from "../../Images/photo-gallery-deatail-2.png"
import galDetails3 from "../../Images/photo-gallery-deatail-3.png"


const GallyDetailsComponent = () => {
  return (
    <section class="troo-da-photo-gallery-deatail-section padding-top padding-bottom" id="troo-da-photo-gallery-deatail-section">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
           <div class="photo-gallery-img">
              <img src={photogal} alt='photogal' />
           </div>
        </div>
        <div class="col-md-4">
          <div class="team-contact">
            <p>Project Detail</p>
            <ul>
             <li><strong>Customer :</strong><span>Michale</span></li>  
             <li><strong>Category :</strong><span>Roof Renovation</span> </li>
              <li> <strong> Date :</strong> <span>25 August, 2021</span></li>
              <li><strong>Status : </strong><span>Delivered</span></li>
            </ul>
           </div>
        </div>
       </div>
       <div class="row">
         <div class="col-md-12">
           <div class="photo-gallery-deatail-text">
            <h2>Description</h2>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,
               or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
             <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,
             or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
              anything embarrassing hidden in the middle of text. There are many variations of passages of Lorem Ipsum available, but the majority have 
              suffered alteration in some form.There are many variations of passages of Lorem Ipsum available, 
              but the majority have suffered alteration in some form.</p>
              <h3>What We Do</h3>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                 There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
              </div>
         </div>
       </div>
       <div class="row">
        <div class="col-md-6">
          <div class="photo-gallery-deatail-con">
            <h3>Lorem Ipsum is simply dummy text of the printing and is typesetting industry.</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and is typesetting industry.
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.</p>
               <ul>
                <li><img src={check} alt='check' /><span>Emergency response time is one hour or less guaranteed.</span></li>
                <li><img src={check} alt='check' /><span>We want you to be completely satisfied with our services.</span></li>
                <li><img src={check} alt='check' /><span>You deserve to have your questions answered in plain English. </span></li>
                <li><img src={check} alt='check' /><span>Our service philosophy is proactive, not reactive.</span></li>
               </ul>
          </div>
        </div>
        <div class="col-md-6">
          <div class="photo-gallery-deatail-img-col">
            <img src={whtv} alt='whtv' />
          </div>
        </div>
       </div>
       <div class="row">
        <div class="col-md-12">
          <div class="final-col">
            <h2>Final Result</h2>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, 
              by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. 
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
          </div>
        </div>
       </div>
       <div class="row">
       
        <div class="col-md-4">
          <div class="final-imf">
          <img src={galDetails1} alt='gal1' />
        </div>
        </div>
        <div class="col-md-4">
          <div class="final-imf">
          <img src={galDetails2}alt='gal2' />
        </div>
        </div>
        <div class="col-md-4">
          <div class="final-imf">
          <img src={galDetails3} alt='gal3' />
        </div>
      </div>
       </div>
   </div>
</section>
  )
}

export default GallyDetailsComponent