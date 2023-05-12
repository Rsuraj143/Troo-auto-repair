import React from "react";
import "./BlogComponent.css";
import { Link, createSearchParams } from "react-router-dom";
import whtArrow from "../../Images/white-arrow.png";
import { BlogData } from "./BlogData";

const BlogComponent = () => {
  return (
    <section
      className="troo-da-blog-section padding-top padding-bottom"
      id="troo-da-blog-section"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="title-txt">
              <span>Read Our Articles</span>
              <h2>
                Stay Updeted with<strong>Our News and Blogs</strong>
              </h2>
            </div>
          </div>
          <div className="col-md-4">
            <div className="appoinment-section">
              <Link to="/Home/Blogs">
                Read All Blogs
                <img src={whtArrow} alt="whtArrow" />
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            {BlogData.slice(1, 3).map((e, i) => (
              <Link
                to={`/Home/Blogs/Blog_Details?${createSearchParams({
                  id: e.id,
                })}`}
                key={i}
              >
                <div className="blog-content">
                  <h3>{e.name}</h3>
                  <p>{e.title} </p>
                  <div className="blog-dat">
                    <span>{e.date} </span>
                    <div className="bl-img">
                      <img src={e.arrow} alt="whtArrow" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="col-md-4">
            {BlogData.slice(0, 1).map((e, i) => (
              <Link
                to={`/Home/Blogs/Blog_Details?${createSearchParams({
                  id: e.id,
                })}`}
                key={i}
              >
                <div className="auto-reapire">
                  <img src={e.img} alt="img" />
                  <div className="auto-contetn">
                    <span>{e.title} </span>
                    <h3>{e.name} </h3>
                    <div className="blog-dat">
                      <span>{e.date} </span>
                      <div className="bl-img">
                        <img src={e.arrow} alt="whtArrow" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="col-md-4">
            {BlogData.slice(4, 6).map((e, i) => (
              <Link
                to={`/Home/Blogs/Blog_Details?${createSearchParams({
                  id: e.id,
                })}`}
                key={i}
              >
                <div className="blog-content">
                  <h3>{e.name} </h3>
                  <p>{e.title} </p>
                  <div className="blog-dat">
                    <span>{e.date} </span>
                    <div className="bl-img">
                      <img src={e.arrow} alt="whtArrow" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogComponent;
