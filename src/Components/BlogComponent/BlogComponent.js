import React from "react";
import "./BlogComponent.css";
import { Link } from "react-router-dom";
import whtArrow from "../../Images/white-arrow.png"
import img from "../../Images/blog.png"

const BlogComponent = () => {
  return (
    <section
      class="troo-da-blog-section padding-top padding-bottom"
      id="troo-da-blog-section"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <div class="title-txt">
              <span>Read Our Articles</span>
              <h2>
                Stay Updeted with<strong>Our News and Blogs</strong>
              </h2>
            </div>
          </div>
          <div class="col-md-4">
            <div class="appoinment-section">
              <Link href="#">
                Read All Blogs
                <img src={whtArrow} alt="whtArrow" />
              </Link>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="blog-content">
              <h3>Why Does My Car Heater Blow Cold Air?</h3>
              <p>Car Tunning</p>
              <div class="blog-dat">
                <span>25, December, 2022</span>
                <div class="bl-img">
                  <img src={whtArrow} alt="whtArrow" />
                </div>
              </div>
            </div>
            <div class="blog-content">
              <h3>When Is It Time to Replace Your Tires?</h3>
              <p>Auto Care</p>
              <div class="blog-dat">
                <span>25, December, 2022</span>
                <div class="bl-img">
                  <img src={whtArrow} alt="whtArrow" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="auto-reapire">
              <img src={img} alt="img" />
              <div class="auto-contetn">
                <span>Auto Repair</span>
                <h3>Why Does My Car Heater Blow Cold Air?</h3>
                <div class="blog-dat">
                  <span>25, December, 2022</span>
                  <div class="bl-img">
                    <img src={whtArrow} alt="whtArrow" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="blog-content">
              <h3>Why Does My Car Heater Blow Cold Air?</h3>
              <p>Car Tunning</p>
              <div class="blog-dat">
                <span>25, December, 2022</span>
                <div class="bl-img">
                  <img src={whtArrow} alt="whtArrow" />
                </div>
              </div>
            </div>
            <div class="blog-content">
              <h3>When Is It Time to Replace Your Tires?</h3>
              <p>Auto Care</p>
              <div class="blog-dat">
                <span>25, December, 2022</span>
                <div class="bl-img">
                  <img src={whtArrow} alt="whtArrow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogComponent;
