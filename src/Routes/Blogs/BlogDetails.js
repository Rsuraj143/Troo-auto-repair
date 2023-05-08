import React from "react";
import Header from "../../Components/Header/Header";
import BannerGlobal from "../../Components/Banner/BannerGlobal";
import MapData from "../../Components/Footer/MapData";
import FooterBox from "../../Components/Footer/FooterBox";
import Footer from "../../Components/Footer/Footer";
import BlogDetailsComponent from "../../Components/BlogComponent/BlogDetailsComponent";
import BlogComponent3 from "../../Components/BlogComponent/BlogComponent3";
import VideoSection from "../../Components/VideoSection/VideoSection";


const BlogDetails = () => {
  return (
    <div class="blog-detail">
      <Header/>
      <BannerGlobal />
      <BlogDetailsComponent/>
      <BlogComponent3/>
      <VideoSection/>
      <MapData/>
      <FooterBox />
      <Footer />
    </div>
  );
};

export default BlogDetails;
