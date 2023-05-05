import React from "react";
import Header from "../../Components/Header/Header";
import BannerGlobal from "../../Components/Banner/BannerGlobal";
import MapData from "../../Components/Footer/MapData";
import FooterBox from "../../Components/Footer/FooterBox";
import Footer from "../../Components/Footer/Footer";
import ServiceComponent2 from "../../Components/ServiceComponent/ServiceComponent2";

const Services = () => {
  return (
    <div class="services">
      <Header />
      <BannerGlobal />
      <ServiceComponent2 />
      <MapData />
      <FooterBox />
      <Footer />
    </div>
  );
};

export default Services;
