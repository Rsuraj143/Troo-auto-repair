import React from "react";
import Header from "../../Components/Header/Header";
import BannerGlobal from "../../Components/Banner/BannerGlobal";
import MapData from "../../Components/Footer/MapData";
import FooterBox from "../../Components/Footer/FooterBox";
import Footer from "../../Components/Footer/Footer";
import TeamDetailsComponent from "../../Components/TeamComponent/TeamDetailsComponent";
import VideoSection from "../../Components/VideoSection/VideoSection";

const TeamDetails = () => {
  return (
    <div>
      <Header />
      <BannerGlobal />
      <TeamDetailsComponent />
      <VideoSection />
      <MapData />
      <FooterBox />
      <Footer />
    </div>
  );
};

export default TeamDetails;
