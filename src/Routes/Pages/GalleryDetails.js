import React from "react";
import Header from "../../Components/Header/Header";
import BannerGlobal from "../../Components/Banner/BannerGlobal";
import MapData from "../../Components/Footer/MapData";
import FooterBox from "../../Components/Footer/FooterBox";
import Footer from "../../Components/Footer/Footer";
import GallyDetailsComponent from "../../Components/GalleryComponent/GallyDetailsComponent";
import VideoSection from "../../Components/VideoSection/VideoSection";

const GalleryDetails = () => {
  return (
    <div>
      <Header />
      <BannerGlobal />
      <GallyDetailsComponent />
      <VideoSection />
      <MapData />
      <FooterBox />
      <Footer />
    </div>
  );
};

export default GalleryDetails;
