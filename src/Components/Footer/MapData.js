import React from "react";
import "./Footer.css";

const MapData = () => {
  return (
    <section class="troo-da-map-section" id="troo-da-map-section">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.8850363027605!2d72.49413012967058!3d23.027992973780535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b278e046fa5%3A0xd837def63555f791!2sTRooInbound%20Private%20Limited!5e0!3m2!1sen!2sin!4v1676635845863!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="gmap"
      ></iframe>
    </section>
  );
};

export default MapData;
