import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-home">
      <img src="img/homebanner.jpg" alt="Banner" />
      <div className="banner-content">
        <h1 style={{ color: "white" }}>Timeless elegance</h1>
        <p>
          Culminating on the wrist or suspended from the neck, jewelry watches
          offer time a precious setting
        </p>
        <a href="#" className="click-link upt">
          Contemplate the passing of time
        </a>
      </div>
    </div>
  );
};

export default Banner;
