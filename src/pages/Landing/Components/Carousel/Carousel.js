import React, { useState } from "react";
import "./Carousel.css";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      id: 1,
      image: "img/morecreations-slider-product1.png", // Replace with actual image path
      title: "Montre Sweet Alhambra",
      description: "Or jaune 750/1000, Diamant, Nacre",
      price: "26 800 €",
      variations: "+3 variations de pierres",
    },
    {
      id: 2,
      image: "img/morecreations-slider-product1.png", // Replace with actual image path
      title: "Montre Sweet Alhambra",
      description: "Or jaune 750/1000, Diamant, Nacre",
      price: "26 800 €",
      variations: "+3 variations de pierres",
    },
    {
      id: 3,
      image: "img/morecreations-slider-product1.png", // Replace with actual image path
      title: "Montre Sweet Alhambra",
      description: "Or jaune 750/1000, Diamant, Nacre",
      price: "26 800 €",
      variations: "+3 variations de pierres",
    },
    // Add more products as needed
  ];

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + products.length) % products.length
    );
  };

  return (
    <div className="container-col-wrap">
      {/* Left Column */}
      <div className="left-column">
        <div className="carousel-section">
          <div className="unique-slider-container">
            <div
              className="unique-slider"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {products.map((product, index) => (
                <div key={index} className="unique-slider-card">
                  <img src={product.image} alt={product.title} />
                  <h2>{product.title}</h2>
                  <p className="slider-body">{product.description}</p>
                  <p className="slider-price">{product.price}</p>
                  <p className="product-variations">{product.variations}</p>
                </div>
              ))}
            </div>
            {/* Pagination */}
            <div className="unique-pagination">
              <button className="unique-arrow left" onClick={prevSlide}>
                &#10094;
              </button>
              {products.map((_, index) => (
                <span
                  key={index}
                  className={`unique-dot ${
                    currentIndex === index ? "active" : ""
                  }`}
                  onClick={() => goToSlide(index)}
                ></span>
              ))}
              <button className="unique-arrow right" onClick={nextSlide}>
                &#10095;
              </button>
            </div>
          </div>
          {/* More Creations */}
          <div className="btslider">
            <a href="#" className="click-link upt">
              MORE CREATIONS
            </a>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="right-column">
        <img
          src="img/s2img.jpg" // Replace with actual image path
          alt="Image Description"
        />
      </div>
    </div>
  );
};

export default Carousel;
