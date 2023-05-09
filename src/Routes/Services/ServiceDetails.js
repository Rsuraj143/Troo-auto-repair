import React from "react";
import Header from "../../Components/Header/Header";
import BannerGlobal from "../../Components/Banner/BannerGlobal";
import MapData from "../../Components/Footer/MapData";
import FooterBox from "../../Components/Footer/FooterBox";
import Footer from "../../Components/Footer/Footer";
import ServiceDetailsComponent from "../../Components/ServiceComponent/ServiceDetailsComponent";
import useDocumentTitle from "../../PageTitle";


const ServiceDetails = () => {
  useDocumentTitle("TRoo | Service Details")
  return (
    <div class="services-detail">
      <Header/>
      <BannerGlobal/>
      <ServiceDetailsComponent/>

      <MapData/>
      <FooterBox />
      <Footer />
    </div>
  );
};

export default ServiceDetails;
