import React from 'react'

const Footer = () => {
  return (
   <>
   
   <footer>
        <div className="footer-newsletter">
            <p className="newsletter-title">
                Newsletter
            </p>
            <p className="sub-text">Subscribe to the newsletter and discover the enchanting world of the House, its
                creations,<br />its heritage and its know-how.</p>
            <div className="f-input"><input type="email" placeholder="E-MAIL ADDRESS" /></div>
            <button>SUBSCRIBE</button>
        </div>
        <hr className="vca-hr-light" />
        <div className="footer-logo"><img src="../img/footer-logo.svg" alt="footer logo" /></div>
        <div className="footer-menu1 footer-menu">
            <ul>
                <li><a href="#">Contact us</a></li>
                <li><a href="#">Advice and services</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">DANCE REFLECTIONS BY VAN CLEEF & ARPELS</a></li>
                <li><a href="#">The school of jewelry art</a></li>
            </ul>
        </div>
        <div className="footer-menu2 footer-menu">
            <ul>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">facebook</a></li>
                <li><a href="#">youtube</a></li>
                <li><a href="#">pinterest</a></li>
                <li><a href="#">linkedin</a></li>
            </ul>
        </div>

    </footer>
</>
  )
}

export default Footer