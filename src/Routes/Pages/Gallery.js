import React from "react";
import Header from "../../Components/Header/Header";
import BannerGlobal from "../../Components/Banner/BannerGlobal";
import MapData from "../../Components/Footer/MapData";
import FooterBox from "../../Components/Footer/FooterBox";
import Footer from "../../Components/Footer/Footer";
import GalleryComponent2 from "../../Components/GalleryComponent/GalleryComponent2";
import VideoSection from "../../Components/VideoSection/VideoSection";
import FAQComponent from "../../Components/FAQComponent/FAQComponent";
import useDocumentTitle from "../../PageTitle";


const Gallery = () => {
  useDocumentTitle("TRoo | Gallery")
  return (
    <div class="photo-gallery">
      <Header/>
      <BannerGlobal/>
      <GalleryComponent2/>
      <VideoSection />
      <FAQComponent/>
      <MapData/>
      <FooterBox />
      <Footer/>
    </div>
  );
};

export default Gallery;
