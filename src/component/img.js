import React from "react";
import backgroundImage from "../pages/image/2.jpg";
import Map from "./Map";
import Message from "./Message";
import "../pages/contact.css";
import Info from "./Info";

function Img() {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`
      }}
    >
      <div className="contact-container">
        <div className="map-container">
          <Map className="map" />
        </div>

        {/* Signup Container */}
        <div className="signup-container">
          <Message />
        </div>

        <div className="info-container">
          <Info />
        </div>
      </div>
    </div>
  );
}

export default Img;
