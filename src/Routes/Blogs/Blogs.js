import React from "react";
import Header from "../../Components/Header/Header";
import BannerGlobal from "../../Components/Banner/BannerGlobal";
import MapData from "../../Components/Footer/MapData";
import FooterBox from "../../Components/Footer/FooterBox";
import Footer from "../../Components/Footer/Footer";
import BlogComponent2 from "../../Components/BlogComponent/BlogComponent2";
import VideoSection from "../../Components/VideoSection/VideoSection";

const Blogs = () => {
  return (
    <div class="blogs">
      <Header />
      <BannerGlobal />
      <BlogComponent2 />
      <VideoSection />
      <MapData />
      <FooterBox />
      <Footer />
    </div>
  );
};

export default Blogs;
