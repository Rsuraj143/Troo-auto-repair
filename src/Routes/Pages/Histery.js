import React from "react";
import Header from "../../Components/Header/Header";
import BannerGlobal from "../../Components/Banner/BannerGlobal";
import MapData from "../../Components/Footer/MapData";
import FooterBox from "../../Components/Footer/FooterBox";
import Footer from "../../Components/Footer/Footer";
import CompanHistaory from "../../Components/CompanuHistory/CompanHistaory";
import CompanyJourny from "../../Components/CompanuHistory/CompanyJourny";
import TeamComponent from "../../Components/TeamComponent/TeamComponent";
import VideoSection from "../../Components/VideoSection/VideoSection";


const Histery = () => {
  return (
    <div>
      <Header/>
      <BannerGlobal />
      <CompanHistaory/>
      <CompanyJourny/>
      <TeamComponent />
      <VideoSection />
      <MapData/>
      <FooterBox />
      <Footer />
    </div>
  );
};

export default Histery;
