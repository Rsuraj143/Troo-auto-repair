import React from "react";
import "./BlogListComponent.css";
import { Link, createSearchParams } from "react-router-dom";
import location from "../../Images/location.png"
import call from "../../Images/call-icon.png"
import mail from "../../Images/mail-icon.png"
import { BlogData } from "./BlogData";

const BlogListComponent = () => {
  return (
    <section
      className="troo-da-service-detail-section"
      id="troo-da-service-detail-section"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            {
              BlogData.slice(0,4).map((e,i)=>
              <Link to={`/Home/Blogs/Blog_Details?${createSearchParams({id : e.id})}`}>
              <div className="blog-list-ss">
              <div className="blog-img-col">
                <img src={e.img2} alt="bloglist1" />
                <div className="date-col">
                  <span>{e.date} </span>
                </div>
              </div>
              <div className="blog-list-text">
                <p>{e.title} </p>
                <h3>{e.name} </h3>
                <p>
                  {e.para}
                </p>
                <Link href="#">Read More</Link>
                <div className="blog-writer">
                  <div className="blog-wri-img">
                    <img src={e.writterImg} alt="blogAuthor1" />
                  </div>
                  <div className="blog-wri-text">
                    <span>Published by</span>
                    <strong>{e.writterName} </strong>
                  </div>
                </div>
              </div>
            </div>
              </Link>
              )
            }
      
          </div>
          <div className="col-md-4">
            <div className="sidebar">
              <div className="cat-tile">Categories</div>
              <div className="services-list">
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
              <div className="services-contact">
                <h3>Contacts</h3>
                <div className="serdes-call">
                  <div className="ser-deals-cllimg">
                    <img src={location} alt="location" />
                  </div>
                  <div className="ser-deals-clltxt">
                    <span>98 Lancaster Court Poughkeepsie, NY 12601</span>
                  </div>
                </div>
                <div className="serdes-call">
                  <div className="ser-deals-cllimg">
                    <img src={call} alt="call" />
                  </div>
                  <div className="ser-deals-clltxt">
                    <p>Call Us on</p>
                    <span>+44 123 456 7890</span>
                  </div>
                </div>
                <div className="serdes-call">
                  <div className="ser-deals-cllimg">
                    <img src={mail} alt="mail" />
                  </div>
                  <div className="ser-deals-clltxt">
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
