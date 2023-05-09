import React from "react";
import Header from "../../Components/Header/Header";
import BannerGlobal from "../../Components/Banner/BannerGlobal";
import MapData from "../../Components/Footer/MapData";
import FooterBox from "../../Components/Footer/FooterBox";
import Footer from "../../Components/Footer/Footer";
import FAQComponent2 from "../../Components/FAQComponent/FAQComponent2";
import VideoSection from "../../Components/VideoSection/VideoSection";
import useDocumentTitle from "../../PageTitle";


const FAQs = () => {
  useDocumentTitle("TRoo | FAQs")
  return (
    <div>
      <Header />
      <BannerGlobal />
      <FAQComponent2/>
      <VideoSection />
      <MapData />
      <FooterBox />
      <Footer/>
    </div>
  );
};

export default FAQs;
