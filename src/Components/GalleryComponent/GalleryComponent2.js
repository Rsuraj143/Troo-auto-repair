import React from "react";
import search from "../../Images/search-icon.png";
import "./GalleryComponent.css"
import gallery7 from "../../Images/gallery-7.png"
import gallery8 from "../../Images/gallery-8.png"
import gallery9 from "../../Images/gallery-9.png"
import gallery10 from "../../Images/gallery-10.png"
import gallery11 from "../../Images/gallery-11.png"
import gallery12 from "../../Images/gallery-12.png"
import gallery13 from "../../Images/gallery-13.png"
import gallery14 from "../../Images/gallery-14.png"
import gallery15 from "../../Images/gallery-15.png"


const GalleryComponent2 = () => {
  return (
    <section
      class="troo-da-photo-gallery-section padding-top padding-bottom"
      id="troo-da-photo-gallery-section"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="gallery-content">
              <div class="magnific-img">
                <a class="image-popup-vertical-fit" href="images/gallery-7.png">
                  <img src={gallery7} alt="9.jpg" />
                  <div class="search-con">
                    <img src={search} alt="search" />
                  </div>
                </a>
              </div>
              <div class="gallery-tile ">
                <span>Care Care</span> <h3>Car Belt Replacement</h3>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="gallery-content">
              <div class="magnific-img">
                <a class="image-popup-vertical-fit" href="images/gallery-8.png">
                  <img src={gallery8} alt="9.jpg" />
                  <div class="search-con">
                    <img src={search} alt="search" />
                  </div>
                </a>
              </div>
              <div class="gallery-tile ">
                <span>Care Care</span> <h3>Car Belt Replacement</h3>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="gallery-content">
              <div class="magnific-img">
                <a class="image-popup-vertical-fit" href="images/gallery-9.png">
                  <img src={gallery9} alt="9.jpg" />
                  <div class="search-con">
                    <img src={search} alt="search" />
                  </div>
                </a>
              </div>
              <div class="gallery-tile ">
                <span>Care Care</span> <h3>Car Belt Replacement</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="gallery-content">
              <div class="magnific-img">
                <a
                  class="image-popup-vertical-fit"
                  href="images/gallery-10.png"
                >
                  <img src={gallery10} alt="9.jpg" />
                  <div class="search-con">
                    <img src={search} alt="search" />
                  </div>
                </a>
              </div>
              <div class="gallery-tile ">
                <span>Care Care</span> <h3>Car Belt Replacement</h3>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="gallery-content">
              <div class="magnific-img">
                <a
                  class="image-popup-vertical-fit"
                  href="images/gallery-11.png"
                >
                  <img src={gallery11} alt="9.jpg" />
                  <div class="search-con">
                    <img src={search} alt="search" />
                  </div>
                </a>
              </div>
              <div class="gallery-tile ">
                <span>Care Care</span> <h3>Car Belt Replacement</h3>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="gallery-content">
              <div class="magnific-img">
                <a
                  class="image-popup-vertical-fit"
                  href="images/gallery-12.png"
                >
                  <img src={gallery12} alt="9.jpg" />
                  <div class="search-con">
                    <img src={search} alt="search" />
                  </div>
                </a>
              </div>
              <div class="gallery-tile ">
                <span>Care Care</span> <h3>Car Belt Replacement</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="gallery-content">
              <div class="magnific-img">
                <a
                  class="image-popup-vertical-fit"
                  href="images/gallery-13.png"
                >
                  <img src={gallery13} alt="9.jpg" />
                  <div class="search-con">
                    <img src={search} alt="search" />
                  </div>
                </a>
              </div>
              <div class="gallery-tile ">
                <span>Care Care</span> <h3>Car Belt Replacement</h3>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="gallery-content">
              <div class="magnific-img">
                <a
                  class="image-popup-vertical-fit"
                  href="images/gallery-14.png"
                >
                  <img src={gallery14} alt="9.jpg" />
                  <div class="search-con">
                    <img src={search} alt="search" />
                  </div>
                </a>
              </div>
              <div class="gallery-tile ">
                <span>Care Care</span> <h3>Car Belt Replacement</h3>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="gallery-content">
              <div class="magnific-img">
                <a
                  class="image-popup-vertical-fit"
                  href="images/gallery-15.png"
                >
                  <img src={gallery15} alt="9.jpg" />
                  <div class="search-con">
                    <img src={search} alt="search" />
                  </div>
                </a>
              </div>
              <div class="gallery-tile ">
                <span>Care Care</span> <h3>Car Belt Replacement</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryComponent2;
