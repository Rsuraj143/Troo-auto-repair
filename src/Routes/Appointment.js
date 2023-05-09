import React from "react";
import Header from "../Components/Header/Header";
import BannerGlobal from "../Components/Banner/BannerGlobal";
import MapData from "../Components/Footer/MapData";
import FooterBox from "../Components/Footer/FooterBox";
import Footer from "../Components/Footer/Footer";
import ContactHelp from "../Components/ContactComponent/ContactHelp";
import ContactForm2 from "../Components/ContactComponent/ContactForm2";
import VideoSection from "../Components/VideoSection/VideoSection";
import useDocumentTitle from "../PageTitle";

const Appointment = () => {
  useDocumentTitle("TRoo | Appointment")
  return (
    <div>
      <Header />
      <BannerGlobal />
      <ContactHelp />
      <ContactForm2 />
      <VideoSection/>
      <MapData />
      <FooterBox />
      <Footer />
    </div>
  );
};

export default Appointment;
