import React from "react";
import "./GalleryComponent.css";
import arrow from "../../Images/Arrow.png";
import { Link, createSearchParams } from "react-router-dom";
import blackArrow from "../../Images/black-arrow.png"
import logo1 from "../../Images/logo1.png"
import logo2 from "../../Images/logo2.png"
import logo3 from "../../Images/logo3.png"
import logo4 from "../../Images/logo4.png"
import logo5 from "../../Images/logo5.png"
import logo6 from "../../Images/logo6.png"
import logo7 from "../../Images/logo7.png"
import logo8 from "../../Images/logo8.png"
import logo9 from "../../Images/logo9.png"
import logo10 from "../../Images/logo10.png"
import logo11 from "../../Images/logo11.png"
import { GalleryData } from "./GalleryData";


const GalleryComponent = () => {
  return (
    <section
      class="troo-da-photo-gallery-section padding-top padding-bottom"
      id="troo-da-photo-gallery-section"
    >
      <div class="circles-wrapper">
        <div class="circle circle-lg"></div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="title-txt">
              <span>Our Photo Gallery</span>
              <h2>
                Our Amazing Work<strong>You Can See It</strong>
              </h2>
            </div>
          </div>
          <div class="col-md-2">
            <div class="arr-img">
              <img src={arrow} alt="arrow" />
            </div>
          </div>
          <div class="col-md-6">
            <div class="what-text">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard. Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <Link to="/Home/Gallery">
                View All Gallery
                <img src={blackArrow} alt="blackArrow" />
              </Link>
            </div>
          </div>
        </div>
        <div class="row">
          {
            GalleryData.slice(0,3).map((e,i)=>
            <div class="col-md-4">
            <div class={e.class}>
              <div class="magnific-img">
                <Link to={`/Home/Gallery/Gallery_Details?${createSearchParams({id : e.id})}`} class="image-popup-vertical-fit" >
                  <img src={e.img} alt="9.jpg" />
                  <div class="search-con">
                    <img src={e.icon} alt="search" />
                  </div>
                </Link>
              </div>
              <div class="gallery-tile">
                <span>{e.title} </span>
                <h3>{e.name} </h3>
              </div>
            </div>
          </div>
            )
          }
          
        </div>
        <div class="row">
        {
            GalleryData.slice(3,6).map((e,i)=>
            <div class="col-md-4">
            <div class={e.class}>
              <div class="magnific-img">
                <Link to={`/Home/Gallery/Gallery_Details?${createSearchParams({id : e.id})}`} class="image-popup-vertical-fit">
                  <img src={e.img} alt="9.jpg" />
                  <div class="search-con">
                    <img src={e.icon} alt="search" />
                  </div>
                </Link>
              </div>
              <div class="gallery-tile">
                <span>{e.title} </span>
                <h3>{e.name} </h3>
              </div>
            </div>
          </div>
            )
          }
         
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="brand-logo">
              <h5>
                We are Blessed to work With Leading
                <span>Brands and Company</span>
              </h5>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-2">
            <div class="logo-img">
              <img src={logo1} alt="logo1" />
            </div>
          </div>
          <div class="col-md-2">
            <div class="logo-img">
            <img src={logo2} alt="logo2" />
            </div>
          </div>
          <div class="col-md-2">
            <div class="logo-img">
            <img src={logo3} alt="logo3" />
            </div>
          </div>
          <div class="col-md-2">
            <div class="logo-img">
            <img src={logo4} alt="logo4" />
            </div>
          </div>
          <div class="col-md-2">
            <div class="logo-img">
            <img src={logo5} alt="logo5" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-2">
            <div class="logo-img">
            <img src={logo6} alt="logo6" />
            </div>
          </div>
          <div class="col-md-2">
            <div class="logo-img">
            <img src={logo7} alt="logo7" />
            </div>
          </div>
          <div class="col-md-2">
            <div class="logo-img">
            <img src={logo8} alt="logo8" />
            </div>
          </div>
          <div class="col-md-2">
            <div class="logo-img">
            <img src={logo9} alt="logo9" />
            </div>
          </div>
          <div class="col-md-2">
            <div class="logo-img">
            <img src={logo10} alt="logo10" />
            </div>
          </div>
          <div class="col-md-2">
            <div class="logo-img">
            <img src={logo11} alt="logo11" />
            </div>
          </div>
        </div>
      </div>
      <div class="gallery-cricle"></div>
      <div id="kmacb">
        <div class="kmacb-circle"></div>
        <div class="kmacb-circle-fill"></div>
      </div>
    </section>
  );
};

export default GalleryComponent;
