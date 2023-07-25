import React from "react";

function Map() {
  return (
    <div className="loc">
      <iframe
        title="eczane"
        className="map map-container"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6519.957289439294!2d33.336670143929155!3d35.207000890975884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de10d6169b2ae9%3A0xc62a3cc2d518d890!2sYe%C5%9Filada%20Giyim!5e0!3m2!1str!2s!4v1689232925468!5m2!1str!2s"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <p className="not">
        Not: Yerimiz Yesilada Giyim yanı Serena butik karşısı. Google Maps'teki
        yer birkaç sokak ilerisidir. Websitesindeki yer doğrudur.{" "}
      </p>
    </div>
  );
}

export default Map;
