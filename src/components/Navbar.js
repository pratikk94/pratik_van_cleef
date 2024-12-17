import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { AuthMiddleware } from "../store/auth/authMiddleware";
import "./Navbar.css";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false); // For sliding menu
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.auth);
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <div className="relative">
      {/* Floating Burger Menu */}
      {/* <div className="burger-menu" onClick={toggleNavbar}>
        <span className="brgr"></span>
        <span className="brgr"></span>
        <span className="brgr"></span>
      </div> */}

      {/* Navbar */}
      <nav className="navbar" style={{ backgroundColor: "transparent" }}>
        {/* Search Section */}
        <div className="search-wrap">
          <span className="nav-search"></span>
          <span className="nav-searchtxt">search</span>
        </div>

        {/* Logo */}
        <div className="logotop">
          <h1>Van Cleef & Arpels</h1>
        </div>

        {/* Right Icons */}
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
          {/* Logout Button if Token Exists */}
          {token && (
            <span className="icon user-ico" onClick={handleLogout}>
              Logout
            </span>
          )}
        </div>
      </nav>

      {/* Sliding Menu Section */}
      <section className={`nnavbar-container ${isNavbarOpen ? "open" : ""}`}>
        <div className="nnavbar-content">
          <div className="nlogo">
            <img src="../img/logo-black.svg" alt="Logo" />
            <a href="/">Brand</a>
          </div>
          <div className="nnav-links">
            <a href="/rings">Rings</a>
            <a href="/products">Products</a>
            <a href="/payment">Payment</a>
            <a href="/findstore">Find Store</a>
            <a href="/contact-us">Contact Us</a>
            <a href="/cart">Cart</a>
            {token && (
              <a href="#logout" onClick={handleLogout}>
                Logout
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Overlay */}
      <div
        className={`noverlay ${isNavbarOpen ? "visible" : ""}`}
        onClick={toggleNavbar}
      ></div>
    </div>
  );
};

export default Navbar;
