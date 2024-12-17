import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-newsletter">
        <p className="newsletter-title">Newsletter</p>
        <p className="sub-text">
          Subscribe to the newsletter and discover the enchanting world of the
          House, its creations, its heritage, and its know-how.
        </p>
        <div className="f-input">
          <input type="email" placeholder="E-MAIL ADDRESS" />
        </div>
        <button>SUBSCRIBE</button>
      </div>
      <hr className="vca-hr-light" />
      <div className="footer-logo">
        <img src="img/footer-logo.svg" alt="Footer Logo" />
      </div>
    </footer>
  );
};

export default Footer;
