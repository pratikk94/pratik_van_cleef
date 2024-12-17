import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="burger-menu">
        <span
          className="brgr"
          style={{ color: "white", height: "100px", width: "100px" }}
        ></span>
      </div>
      <div className="search-wrap">
        <span className="nav-search"></span>
        <span className="nav-searchtxt">search</span>
      </div>
      <div className="logotop">
        <h1>Van Cleef & Arpels</h1>
      </div>
      <div className="icons">
        <span className="icon map-ico"></span>
        <span className="icon phone-ico"></span>
        <span className="icon user-ico"></span>
        <span className="icon cart-ico">
          <div className="cart-hoverbox">
            <span className="cart-empty">
              Your shopping cart is currently empty.
            </span>
            <hr />
            <span className="recentlyviewed">RECENTLY VIEWED</span>
            <div className="cart-product">
              <img
                src="img/morecreations-slider-product1.png"
                alt="Product 1"
              />
              <h2 className="title">Montre Sweet Alhambra</h2>
              <span className="price">26 800 $</span>
            </div>
          </div>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
