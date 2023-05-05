import React from "react";
import Header from "../Components/Header/Header";
import BannerGlobal from "../Components/Banner/BannerGlobal";
import MapData from "../Components/Footer/MapData";
import FooterBox from "../Components/Footer/FooterBox";
import Footer from "../Components/Footer/Footer";

const Contact = () => {
  return (
    <div>
      <Header />
      <BannerGlobal />

      <MapData/>
      <FooterBox />
      <Footer />
    </div>
  );
};

export default Contact;
