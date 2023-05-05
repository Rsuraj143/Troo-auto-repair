import React from "react";
import "./BlogListComponent.css";
import bloglist1 from "../../Images/blog-list-1.png"
import bloglist2 from "../../Images/blog-list-2.png"
import bloglist3 from "../../Images/blog-list-3.png"
import bloglist4 from "../../Images/blog-list-4.png"
import bloglist5 from "../../Images/blog-list-5.png"
import blogAuthor1 from "../../Images/blog-writer-1.png"
import blogAuthor2 from "../../Images/blog-writer-2.png"
import blogAuthor3 from "../../Images/blog-writer-3.png"
import blogAuthor4 from "../../Images/blog-writer-4.png"
import { Link } from "react-router-dom";
import location from "../../Images/location.png"
import call from "../../Images/call-icon.png"
import mail from "../../Images/mail-icon.png"

const BlogListComponent = () => {
  return (
    <section
      class="troo-da-service-detail-section"
      id="troo-da-service-detail-section"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <div class="blog-list-ss">
              <div class="blog-img-col">
                <img src={bloglist1} alt="bloglist1" />
                <div class="date-col">
                  <span>
                    22, Dec,
                    <br />
                    2022
                  </span>
                </div>
              </div>
              <div class="blog-list-text">
                <p>Auto Repair</p>
                <h3>Why Does My Car Heater Blow Cold Air? </h3>
                <p>
                  Lorem ipsum doller sit amet aute irure velits an reprehender
                  voluptate velit fugiat nulla pariatur exce doloe amet.
                </p>
                <Link href="#">Read More</Link>
                <div class="blog-writer">
                  <div class="blog-wri-img">
                    <img src={blogAuthor1} alt="blogAuthor1" />
                  </div>
                  <div class="blog-wri-text">
                    <span>Published by</span>
                    <strong>Ronda Racol</strong>
                  </div>
                </div>
              </div>
            </div>
            <div class="blog-list-ss">
              <div class="blog-img-col">
                <img src={bloglist2} alt="bloglist2" />
                <div class="date-col">
                  <span>
                    22, Dec,
                    <br />
                    2022
                  </span>
                </div>
              </div>
              <div class="blog-list-text">
                <p>Auto Repair</p>
                <h3>Why Does My Car Heater Blow Cold Air? </h3>
                <p>
                  Lorem ipsum doller sit amet aute irure velits an reprehender
                  voluptate velit fugiat nulla pariatur exce doloe amet.
                </p>
                <Link href="#">Read More</Link>
                <div class="blog-writer">
                  <div class="blog-wri-img">
                  <img src={blogAuthor2} alt="blogAuthor2" />
                  </div>
                  <div class="blog-wri-text">
                    <span>Published by</span>
                    <strong>Naomi Josh</strong>
                  </div>
                </div>
              </div>
            </div>
            <div class="blog-list-ss">
              <div class="blog-img-col">
                <img src={bloglist3} alt="bloglist3" />
                <div class="date-col">
                  <span>
                    22, Dec,
                    <br />
                    2022
                  </span>
                </div>
              </div>
              <div class="blog-list-text">
                <p>Auto Repair</p>
                <h3>Why Does My Car Heater Blow Cold Air? </h3>
                <p>
                  Lorem ipsum doller sit amet aute irure velits an reprehender
                  voluptate velit fugiat nulla pariatur exce doloe amet.
                </p>
                <Link href="#">Read More</Link>
                <div class="blog-writer">
                  <div class="blog-wri-img">
                  <img src={blogAuthor3} alt="blogAuthor3" />
                  </div>
                  <div class="blog-wri-text">
                    <span>Published by</span>
                    <strong>REmily Anderson</strong>
                  </div>
                </div>
              </div>
            </div>
            <div class="blog-list-ss">
              <div class="blog-img-col">
                <img src={bloglist4} alt="bloglist4" />
                <div class="date-col">
                  <span>
                    22, Dec,
                    <br />
                    2022
                  </span>
                </div>
              </div>
              <div class="blog-list-text">
                <p>Auto Repair</p>
                <h3>Why Does My Car Heater Blow Cold Air? </h3>
                <p>
                  Lorem ipsum doller sit amet aute irure velits an reprehender
                  voluptate velit fugiat nulla pariatur exce doloe amet.
                </p>
                <Link href="#">Read More</Link>
                <div class="blog-writer">
                  <div class="blog-wri-img">
                  <img src={blogAuthor4} alt="blogAuthor4" />
                  </div>
                  <div class="blog-wri-text">
                    <span>Published by</span>
                    <strong>Jecky Rozzer</strong>
                  </div>
                </div>
              </div>
            </div>
            <div class="blog-list-ss">
              <div class="blog-img-col">
                <img src={bloglist5} alt="bloglist4" />
                <div class="date-col">
                  <span>
                    22, Dec,
                    <br />
                    2022
                  </span>
                </div>
              </div>
              <div class="blog-list-text">
                <p>Auto Repair</p>
                <h3>Why Does My Car Heater Blow Cold Air? </h3>
                <p>
                  Lorem ipsum doller sit amet aute irure velits an reprehender
                  voluptate velit fugiat nulla pariatur exce doloe amet.
                </p>
                <Link href="#">Read More</Link>
                <div class="blog-writer">
                  <div class="blog-wri-img">
                  <img src={blogAuthor4} alt="blogAuthor4" />
                  </div>
                  <div class="blog-wri-text">
                    <span>Published by</span>
                    <strong>Jecky Rozzer</strong>
                  </div>
                </div>
              </div>
            </div>
      
          </div>
          <div class="col-md-4">
            <div class="sidebar">
              <div class="cat-tile">Categories</div>
              <div class="services-list">
                <ul>
                  <li>
                    <Link href="#"> Fluid </Link>
                    <span>15</span>
                  </li>
                  <li>
                    <Link href="#"> Filters </Link>
                    <span>09</span>
                  </li>
                  <li>
                    <Link href="#"> Electical </Link>
                    <span>12</span>
                  </li>
                  <li>
                    <Link href="#"> Brake work</Link>
                    <span>07</span>
                  </li>
                  <li>
                    <Link href="#"> Tire repairs and changes</Link>
                    <span>03</span>
                  </li>
                  <li>
                    <Link href="#"> The Ignition System</Link>
                    <span>08</span>
                  </li>
                  <li>
                    <Link href="#">The Electrical System</Link>
                    <span>11</span>
                  </li>
                  <li>
                    <Link href="#"> Aftermarket Alarm removal</Link>
                    <span>10</span>
                  </li>
                </ul>
              </div>
              <div class="services-contact">
                <h3>Contacts</h3>
                <div class="serdes-call">
                  <div class="ser-deals-cllimg">
                    <img src={location} alt="location" />
                  </div>
                  <div class="ser-deals-clltxt">
                    <span>98 Lancaster Court Poughkeepsie, NY 12601</span>
                  </div>
                </div>
                <div class="serdes-call">
                  <div class="ser-deals-cllimg">
                    <img src={call} alt="call" />
                  </div>
                  <div class="ser-deals-clltxt">
                    <p>Call Us on</p>
                    <span>+44 123 456 7890</span>
                  </div>
                </div>
                <div class="serdes-call">
                  <div class="ser-deals-cllimg">
                    <img src={mail} alt="mail" />
                  </div>
                  <div class="ser-deals-clltxt">
                    <p>Email Us on</p>
                    <span>example@email.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogListComponent;
