import React from "react";
import Header from "../Components/Header/Header";
import BannerGlobal from "../Components/Banner/BannerGlobal";
import MapData from "../Components/Footer/MapData";
import FooterBox from "../Components/Footer/FooterBox";
import Footer from "../Components/Footer/Footer";
import ContactHelp from "../Components/ContactComponent/ContactHelp";
import ContactForm from "../Components/ContactComponent/ContactForm";
import VideoSection from "../Components/VideoSection/VideoSection";

const Contact = () => {
  return (
    <div class="contact">
      <Header />
      <BannerGlobal />
      <ContactHelp />
      <ContactForm />
      <VideoSection />
      <MapData />
      <FooterBox />
      <Footer />
    </div>
  );
};

export default Contact;
