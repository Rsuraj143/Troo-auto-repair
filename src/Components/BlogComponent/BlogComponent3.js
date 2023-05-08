import React from "react";
import "./BlogComponent.css";
import { BlogData } from "./BlogData";
import { Link, createSearchParams } from "react-router-dom";

const BlogComponent3 = () => {
  return (
    <section
      class="troo-da-recent-blogs-section"
      id="troo-da-recent-blogs-section"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="recent-tile">Read Recent Blogs</div>
          </div>
        </div>
        <div class="row">
          {BlogData.slice(0, 3).map((e, i) => (
            <div class="col-md-4">
              <Link
                to={`/Home/Blogs/Blog_Details?${createSearchParams({
                  id: e.id,
                })}`}
              >
                <div class="auto-reapire">
                  <img src={e.img} alt="blog1" />
                  <div class="auto-contetn">
                    <span>{e.title} </span>
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

export default BlogComponent3;
