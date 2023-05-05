import React from 'react'
import "./BannerComponent.css"
import setting from "../../Images/setting.png"
import aboutpage from "../../Images/about-page-img.png"
import redDot from "../../Images/read-dots.png"
import { Link } from 'react-router-dom'

const BannerGlobal = () => {
  return (
    <section class="troo-da-global-section" id="troo-da-global-section">
    <div class="container">
      <div class="row">
          <div class="col-md-6">
            <div class="hero-text">
              <figure class="swing"> <img src={setting} alt='setting' /></figure>
                <div class="title-txt">
                  <div class="breadcrumb-ss">
                    <nav>
                      <ul class="breadcrumb">
                        <li class="breadcrumb-item"><Link href="#">Home</Link></li>
                         <li class="breadcrumb-item current">About</li>
                      </ul>
                    </nav>
                  </div>
                  <h1>About Us </h1>
                
                </div>
           </div>
          </div>
          <div class="col-md-6">
            <div class="global-image-section">
              <img src={aboutpage} alt='aboutpage' />
            </div>
          </div>
        </div>
        </div>
        <div class="red-dot">
          <img src={redDot} alt='redDot' />
        </div>
  </section>  
  )
}

export default BannerGlobal