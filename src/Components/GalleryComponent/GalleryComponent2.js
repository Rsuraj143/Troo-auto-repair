import React from "react";
import "./GalleryComponent.css";
import { GalleryData } from "./GalleryData";
import { Link, createSearchParams } from "react-router-dom";

const GalleryComponent2 = () => {
  return (
    <section
      class="troo-da-photo-gallery-section padding-top padding-bottom"
      id="troo-da-photo-gallery-section"
    >
      <div class="container">
        <div class="row">
          {GalleryData.slice(6, 9).map((e, i) => (
            <div class="col-md-4" key={i}>
              <div class="gallery-content">
                <div class="magnific-img">
                  <Link to={`/Home/Gallery/Gallery_Details?${createSearchParams({id : e.id})}`} class="image-popup-vertical-fit">
                    <img src={e.img} alt="9.jpg" />
                    <div class="search-con">
                      <img src={e.icon} alt="search" />
                    </div>
                  </Link>
                </div>
                <div class="gallery-tile ">
                  <span>{e.title} </span> <h3>{e.name} </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div class="row">
          {GalleryData.slice(9, 12).map((e, i) => (
            <div class="col-md-4" key={i}>
              <div class="gallery-content">
                <div class="magnific-img">
                  <Link to={`/Home/Gallery/Gallery_Details?${createSearchParams({id : e.id})}`} class="image-popup-vertical-fit">
                    <img src={e.img} alt="9.jpg" />
                    <div class="search-con">
                      <img src={e.icon} alt="search" />
                    </div>
                  </Link>
                </div>
                <div class="gallery-tile ">
                  <span>{e.title} </span> <h3>{e.name} </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div class="row">
          {GalleryData.slice(12, 15).map((e, i) => (
            <div class="col-md-4" key={i}>
              <div class="gallery-content">
                <div class="magnific-img">
                  <Link to={`/Home/Gallery/Gallery_Details?${createSearchParams({id : e.id})}`} class="image-popup-vertical-fit">
                    <img src={e.img} alt="9.jpg" />
                    <div class="search-con">
                      <img src={e.icon} alt="search" />
                    </div>
                  </Link>
                </div>
                <div class="gallery-tile ">
                  <span>{e.title} </span> <h3>{e.name} </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryComponent2;
