import React from "react";
import "./GalleryComponent.css";
import { GalleryData } from "./GalleryData";
import { Link, createSearchParams } from "react-router-dom";

const GalleryComponent2 = () => {
  return (
    <section
      className="troo-da-photo-gallery-section padding-top padding-bottom"
      id="troo-da-photo-gallery-section"
    >
      <div className="container">
        <div className="row">
          {GalleryData.slice(6, 9).map((e, i) => (
            <div className="col-md-4" key={i}>
              <div className="gallery-content">
                <div className="magnific-img">
                  <Link to={`/Home/Gallery/Gallery_Details?${createSearchParams({id : e.id})}`} className="image-popup-vertical-fit">
                    <img src={e.img} alt="9.jpg" />
                    <div className="search-con">
                      <img src={e.icon} alt="search" />
                    </div>
                  </Link>
                </div>
                <div className="gallery-tile ">
                  <span>{e.title} </span> <h3>{e.name} </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          {GalleryData.slice(9, 12).map((e, i) => (
            <div className="col-md-4" key={i}>
              <div className="gallery-content">
                <div className="magnific-img">
                  <Link to={`/Home/Gallery/Gallery_Details?${createSearchParams({id : e.id})}`} className="image-popup-vertical-fit">
                    <img src={e.img} alt="9.jpg" />
                    <div className="search-con">
                      <img src={e.icon} alt="search" />
                    </div>
                  </Link>
                </div>
                <div className="gallery-tile ">
                  <span>{e.title} </span> <h3>{e.name} </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          {GalleryData.slice(12, 15).map((e, i) => (
            <div className="col-md-4" key={i}>
              <div className="gallery-content">
                <div className="magnific-img">
                  <Link to={`/Home/Gallery/Gallery_Details?${createSearchParams({id : e.id})}`} className="image-popup-vertical-fit">
                    <img src={e.img} alt="9.jpg" />
                    <div className="search-con">
                      <img src={e.icon} alt="search" />
                    </div>
                  </Link>
                </div>
                <div className="gallery-tile ">
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
