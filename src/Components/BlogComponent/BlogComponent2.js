import React from "react";
import "./BlogComponent.css";
import { BlogData } from "./BlogData";
import { Link, createSearchParams } from "react-router-dom";

const BlogComponent2 = () => {
  return (
    <section
      className="troo-da-blog-section padding-top padding-bottom"
      id="troo-da-blog-section"
    >
      <div className="container">
        <div className="row">
          {BlogData.slice(0, 3).map((e, i) => (
            <div className="col-md-4">
              <Link to={`/Home/Blogs/Blog_Details?${createSearchParams({id : e.id})}`}>
                <div className="auto-reapire">
                  <img src={e.img} alt="blog" />
                  <div className="auto-contetn">
                    <span>{e.title}</span>
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
            </div>
          ))}
        </div>
        <div className="row">
          {BlogData.slice(3, 6).map((e, i) => (
            <div className="col-md-4">
              <Link to={`/Home/Blogs/Blog_Details?${createSearchParams({id : e.id})}`}>
                <div className="auto-reapire">
                  <img src={e.img} alt="blog" />
                  <div className="auto-contetn">
                    <span>{e.title}</span>
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
            </div>
          ))}
        </div>
        <div className="row">
          {BlogData.slice(6, 9).map((e, i) => (
            <div className="col-md-4">
              <Link to={`/Home/Blogs/Blog_Details?${createSearchParams({id : e.id})}`}>
                <div className="auto-reapire">
                  <img src={e.img} alt="blog" />
                  <div className="auto-contetn">
                    <span>{e.title}</span>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogComponent2;
