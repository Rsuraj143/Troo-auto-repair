import React from "react";
import "./BlogComponent.css";
import { BlogData } from "./BlogData";
import { Link, createSearchParams } from "react-router-dom";

const BlogComponent2 = () => {
  return (
    <section
      class="troo-da-blog-section padding-top padding-bottom"
      id="troo-da-blog-section"
    >
      <div class="container">
        <div class="row">
          {BlogData.slice(0, 3).map((e, i) => (
            <div class="col-md-4">
              <Link to={`/Home/Blogs/Blog_Details?${createSearchParams({id : e.id})}`}>
                <div class="auto-reapire">
                  <img src={e.img} alt="blog" />
                  <div class="auto-contetn">
                    <span>{e.title}</span>
                    <h3>{e.name} </h3>
                    <div class="blog-dat">
                      <span>{e.date} </span>
                      <div class="bl-img">
                        <img src={e.arrow} alt="whtArrow" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div class="row">
          {BlogData.slice(3, 6).map((e, i) => (
            <div class="col-md-4">
              <Link to={`/Home/Blogs/Blog_Details?${createSearchParams({id : e.id})}`}>
                <div class="auto-reapire">
                  <img src={e.img} alt="blog" />
                  <div class="auto-contetn">
                    <span>{e.title}</span>
                    <h3>{e.name} </h3>
                    <div class="blog-dat">
                      <span>{e.date} </span>
                      <div class="bl-img">
                        <img src={e.arrow} alt="whtArrow" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div class="row">
          {BlogData.slice(6, 9).map((e, i) => (
            <div class="col-md-4">
              <Link to={`/Home/Blogs/Blog_Details?${createSearchParams({id : e.id})}`}>
                <div class="auto-reapire">
                  <img src={e.img} alt="blog" />
                  <div class="auto-contetn">
                    <span>{e.title}</span>
                    <h3>{e.name} </h3>
                    <div class="blog-dat">
                      <span>{e.date} </span>
                      <div class="bl-img">
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
