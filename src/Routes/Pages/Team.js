import React from "react";
import Header from "../../Components/Header/Header";
import BannerGlobal from "../../Components/Banner/BannerGlobal";
import MapData from "../../Components/Footer/MapData";
import FooterBox from "../../Components/Footer/FooterBox";
import Footer from "../../Components/Footer/Footer";
import TeamComponent2 from "../../Components/TeamComponent/TeamComponent2";
import ReviewComponent from "../../Components/ReviewComponent/ReviewComponent";
import Counter from "../../Components/Counter/Counter";


const Team = () => {
  return (
    <div class="team">
      <Header />
      <BannerGlobal />
      <TeamComponent2/>
      <ReviewComponent />
      <Counter />
      <MapData/>
      <FooterBox />
      <Footer />
    </div>
  );
};

export default Team;
