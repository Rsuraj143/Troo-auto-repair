import React from "react";
import "./GalleryComponent.css";
import arrow from "../../Images/Arrow.png";
import { Link } from "react-router-dom";
import blackArrow from "../../Images/black-arrow.png"
import search from "../../Images/search-icon.png"
import gallery1 from "../../Images/gallery-1.png"
import gallery2 from "../../Images/gallery-2.png"
import gallery3 from "../../Images/gallery-3.png"
import gallery4 from "../../Images/gallery-4.png"
import gallery5 from "../../Images/gallery-5.png"
import gallery6 from "../../Images/gallery-6.png"
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
              <Link href="#">
                View All Gallery
                <img src={blackArrow} alt="blackArrow" />
              </Link>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="gallery-content">
              <div class="magnific-img">
                <a class="image-popup-vertical-fit" href="images/gallery-1.png">
                  <img src={gallery1} alt="9.jpg" />
                  <div class="search-con">
                    <img src={search} alt="search" />
                  </div>
                </a>
              </div>
              <div class="gallery-tile">
                <span>Care Care</span>
                <h3>Car Belt Replacement</h3>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="gallery-content gallery-two">
              <div class="magnific-img">
                <a class="image-popup-vertical-fit" href="images/gallery-2.png">
                  <img src={gallery2} alt="9.jpg" />
                  <div class="search-con">
                    <img src={search} alt="search" />
                  </div>
                </a>
              </div>
              <div class="gallery-tile">
                <span>Care Care</span>
                <h3>Car Belt Replacement</h3>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="gallery-content">
              <div class="magnific-img">
                <a class="image-popup-vertical-fit" href="images/gallery-3.png">
                  <img src={gallery3} alt="9.jpg" />
                  <div class="search-con">
                    <img src={search} alt="search" />
                  </div>
                </a>
              </div>
              <div class="gallery-tile">
                <span>Care Care</span>
                <h3>Car Belt Replacement</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="gallery-content gallery-four">
              <div class="magnific-img">
                <a class="image-popup-vertical-fit" href="images/gallery-4.png">
                  <img src={gallery4} alt="9.jpg" />
                  <div class="search-con">
                    <img src={search} alt="search" />
                  </div>
                </a>
              </div>
              <div class="gallery-tile">
                <span>Care Care</span>
                <h3>Car Belt Replacement</h3>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="gallery-content gallery-five">
              <div class="magnific-img">
                <a class="image-popup-vertical-fit" href="images/gallery-5.png">
                  <img src={gallery5} alt="9.jpg" />
                  <div class="search-con">
                    <img src={search} alt="search" />
                  </div>
                </a>
              </div>
              <div class="gallery-tile">
                <span>Care Care</span>
                <h3>Car Belt Replacement</h3>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="gallery-content gallery-six">
              <div class="magnific-img">
                <a class="image-popup-vertical-fit" href="images/gallery-6.png">
                  <img src={gallery6} alt="9.jpg" />
                  <div class="search-con">
                    <img src={search} alt="search" />
                  </div>
                </a>
              </div>
              <div class="gallery-tile">
                <span>Care Care</span>
                <h3>Car Belt Replacement</h3>
              </div>
            </div>
          </div>
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
