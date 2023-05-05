import React from "react";
import Header from "../../Components/Header/Header";
import BannerGlobal from "../../Components/Banner/BannerGlobal";
import MapData from "../../Components/Footer/MapData";
import FooterBox from "../../Components/Footer/FooterBox";
import Footer from "../../Components/Footer/Footer";
import PricingCardComponent2 from "../../Components/PricingCardComponent/PricingCardComponent2";
import VideoSection from "../../Components/VideoSection/VideoSection";


const PricingCard = () => {
  return (
    <div class="pricing">
      <Header/>
      <BannerGlobal />
      <PricingCardComponent2/>
      <VideoSection/>
      <MapData/>
      <FooterBox />
      <Footer />
    </div>
  );
};

export default PricingCard;
