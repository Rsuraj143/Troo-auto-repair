import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import BannerComponent from "../Components/Banner/BannerComponent";
import MapData from "../Components/Footer/MapData";
import FooterBox from "../Components/Footer/FooterBox";
import AboutComponent from "../Components/AboutComponent/AboutComponent";
import ServiceComponent from "../Components/ServiceComponent/ServiceComponent";
import HighLights from "../Components/Highlights/HighLights";
import TeamComponent from "../Components/TeamComponent/TeamComponent";
import ReviewComponent from "../Components/ReviewComponent/ReviewComponent";
import Counter from "../Components/Counter/Counter";
import PricingCardcomponent from "../Components/PricingCardComponent/PricingCardcomponent";
import GalleryComponent from "../Components/GalleryComponent/GalleryComponent";
import VideoSection from "../Components/VideoSection/VideoSection";
import FAQComponent from "../Components/FAQComponent/FAQComponent";
import BlogComponent from "../Components/BlogComponent/BlogComponent";
import useDocumentTitle from "../PageTitle";

const Home = () => {
  useDocumentTitle("TRoo Auto & Repair")
  return (
    <div>
      <Header />
      <BannerComponent />
      <AboutComponent />
      <ServiceComponent />
      <HighLights />
      <TeamComponent />
      <ReviewComponent />
      <Counter />
      <PricingCardcomponent />
      <GalleryComponent />
      <VideoSection />
      <FAQComponent />
      <BlogComponent />
      <MapData />
      <FooterBox />
      <Footer />
    </div>
  );
};

export default Home;
