import React, { useEffect, useState } from "react";
import "./BannerComponent.css";
import setting from "../../Images/setting.png";
import aboutpage from "../../Images/about-page-img.png";
import redDot from "../../Images/read-dots.png";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { ServiceData } from "../ServiceComponent/ServiceData";
import { TeamData } from "../TeamComponent/TeamData";
import { GalleryData } from "../GalleryComponent/GalleryData";
import { BlogData } from "../BlogComponent/BlogData";
import { HeaderData } from "../Header/HeaderData";

const BannerGlobal = () => {
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  const [heading, setHeading] = useState();
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();
  let pathName = location.pathname;

  useEffect(() => {
    const id = searchParams.get("id");
    if (id) {
      if (pathName.includes("Service_Details")) {
        const Sdata = ServiceData.find((d) => d.id == id);
        setHeading(Sdata.name);
      }
      
      if (pathName.includes("Team_Details")) {
        const Tdata = TeamData.find((d) => d.id == id);
        setHeading(Tdata.name);
      }
      
      if (pathName.includes("Gallery_Details")) {
      const Gdata = GalleryData.find((d) => d.id == id);
      setHeading(Gdata.name);
      }
      if (pathName.includes("Blog_Details")) {
        const Bdata = BlogData.find((d) => d.id == id);
        setHeading(Bdata.name);
        }

    } else {
      const data = HeaderData.find((data) => {
        if (data?.subNav) {
          const subTitel = data?.subNav?.find((s) => s.path === pathName);
          if (subTitel) {
            return data;
          }
        } else if (data.path === pathName) {
          return data;
        }
      });

      if (data?.subNav) {
        const obj = data?.subNav.find((s) => s.path === pathName);
        setHeading(obj.heading);
      } else {
        setHeading(data.heading);
      }
    }
  }, []);

  useEffect(() => {
    const pathnamee = location.pathname.split("/").filter((p) => !!p);
    const breadcrumbs = pathnamee.map((e, i) => ({
      title: e,
      path: `/${pathnamee.slice(0, i + 1).join("/")}`,
    }));
    setBreadcrumbs(breadcrumbs);
  }, [location]);

  return (
    <section className="troo-da-global-section" id="troo-da-global-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="hero-text">
              <figure className="swing">
                <img src={setting} alt="setting" />
              </figure>
              <div className="title-txt">
                <div className="breadcrumb-ss">
                  <nav>
                    <ul className="breadcrumb">
                      {breadcrumbs.map((breadcrumb, index) => (
                        <li
                          className={`breadcrumb-item${
                            index === breadcrumbs.length - 1 ? " current" : ""
                          }`}
                        >
                          <Link key={index} to={breadcrumb.path}>
                            {breadcrumb.title.replace(/_/g, " ")}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
                <h1>{heading} </h1>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="global-image-section">
              <img src={aboutpage} alt="aboutpage" />
            </div>
          </div>
        </div>
      </div>
      <div className="red-dot">
        <img src={redDot} alt="redDot" />
      </div>
    </section>
  );
};

export default BannerGlobal;
