import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthMiddleware } from "../store/auth/authMiddleware";
import "../components/Navbar.css";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false); // For sliding menu
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.auth);
  console.log(currentUser);

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
      <div className="nburger-menu" onClick={toggleNavbar}>
        <span className="nbrgr"></span>
        <span className="nbrgr"></span>
        <span className="nbrgr"></span>
      </div>

      {/* Navbar Section */}
      <section className={`nnavbar-container ${isNavbarOpen ? "open" : ""}`}>
        <div className="nnavbar-content">
          <div className="nlogo">
            <img src="../img/logo-black.svg" alt="" />
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

      {/* Overlay to close navbar */}
      <div
        className={`noverlay ${isNavbarOpen ? "visible" : ""}`}
        onClick={toggleNavbar}
      ></div>
    </div>
  );
};

export default Navbar;
