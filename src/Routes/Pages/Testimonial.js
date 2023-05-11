import React from "react";
import Header from "../../Components/Header/Header";
import BannerGlobal from "../../Components/Banner/BannerGlobal";
import MapData from "../../Components/Footer/MapData";
import FooterBox from "../../Components/Footer/FooterBox";
import Footer from "../../Components/Footer/Footer";
import ReviewComponent2 from "../../Components/ReviewComponent/ReviewComponent2";
import VideoSection from "../../Components/VideoSection/VideoSection";
import FAQComponent from "../../Components/FAQComponent/FAQComponent";
import useDocumentTitle from "../../PageTitle";

const Testimonial = () => {
  useDocumentTitle("TRoo | Testimonials")
  return (
    <div className="testimonial">
      <Header />
      <BannerGlobal />
      <ReviewComponent2/>
      <VideoSection />
      <FAQComponent />
      <MapData />
      <FooterBox />
      <Footer />
    </div>
  );
};

export default Testimonial;
