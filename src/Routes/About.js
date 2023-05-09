import React from "react";
import Header from "../Components/Header/Header";
import BannerGlobal from "../Components/Banner/BannerGlobal";
import Footer from "../Components/Footer/Footer";
import Map from "../Components/Footer/MapData";
import FooterBox from "../Components/Footer/FooterBox";
import AboutComponent from "../Components/AboutComponent/AboutComponent";
import HighLights from "../Components/Highlights/HighLights";
import TeamComponent from "../Components/TeamComponent/TeamComponent";
import ReviewComponent from "../Components/ReviewComponent/ReviewComponent";
import Counter from "../Components/Counter/Counter";
import PricingCardcomponent from "../Components/PricingCardComponent/PricingCardcomponent";
import useDocumentTitle from "../PageTitle";

const About = () => {
  useDocumentTitle("TRoo | About")
  return (
    <div class="about">
      <Header />
      <BannerGlobal />
      <AboutComponent />
      <HighLights />
      <TeamComponent />
      <ReviewComponent />
      <Counter />
      <PricingCardcomponent/>
      <Map />
      <FooterBox />
      <Footer />
    </div>
  );
};

export default About;
