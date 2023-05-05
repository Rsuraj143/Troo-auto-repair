import React from "react";
import Header from "../../Components/Header/Header";
import BannerGlobal from "../../Components/Banner/BannerGlobal";
import MapData from "../../Components/Footer/MapData";
import FooterBox from "../../Components/Footer/FooterBox";
import Footer from "../../Components/Footer/Footer";
import BlogListComponent from "../../Components/BlogComponent/BlogListComponent";

const BlogList = () => {
  return (
    <div class="blogs-list">
      <Header />
      <BannerGlobal />
      <BlogListComponent/>

      <MapData/>
      <FooterBox />
      <Footer/>
    </div>
  );
};

export default BlogList;
