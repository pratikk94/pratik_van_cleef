import React from "react";
import "./checkout.css";
const Checkout = () => {
    return (<>
    
    <div class="banner-home">
        <img src="../img/homebanner.jpg" alt="Banner"/> 
        {/* <!-- Replace with your image path --> */}
        <div class="banner-content">
            <h1>Timeless elegance</h1>
            <p>Culminating on the wrist or suspended from the neck, jewelry watches offer time a precious setting</p>
            <a href="https://google.com" class="click-link upt">Contemplate the passing of time</a>
        </div>
    </div>



    <div class="container-col-wrap">
        <div class="left-column">
            <div>
                <div class="carousel-section">

                    <div class="unique-slider-container">
                        <div class="unique-slider">
                            <div class="unique-slider-card">
                                <img src="../img/morecreations-slider-product1.png" alt="Product 1"/>
                                <h2>Montre Sweet Alhambra</h2>
                                <p class="slider-body">Or jaune 750/1000, Diamant, Nacre</p>
                                <p class="slider-price">26&nbsp;800&nbsp;€</p>
                                <p class="product-variations">+3 variations de pierres</p>
                            </div>
                            <div class="unique-slider-card">
                                <img src="../img/morecreations-slider-product1.png" alt="Product 1"/>
                                <h2>Montre Sweet Alhambra</h2>
                                <p class="slider-body">Or jaune 750/1000, Diamant, Nacre</p>
                                <p class="slider-price">26&nbsp;800&nbsp;€</p>
                                <p class="product-variations">+3 variations de pierres</p>
                            </div>
                            <div class="unique-slider-card">
                                <img src="../img/morecreations-slider-product1.png" alt="Product 1"/>
                                <h2>Montre Sweet Alhambra</h2>
                                <p class="slider-body">Or jaune 750/1000, Diamant, Nacre</p>
                                <p class="slider-price">26&nbsp;800&nbsp;€</p>
                                <p class="product-variations">+3 variations de pierres</p>
                            </div>
                            <div class="unique-slider-card">
                                <img src="../img/morecreations-slider-product1.png" alt="Product 1"/>
                                <h2>Montre Sweet Alhambra</h2>
                                <p class="slider-body">Or jaune 750/1000, Diamant, Nacre</p>
                                <p class="slider-price">26&nbsp;800&nbsp;€</p>
                                <p class="product-variations">+3 variations de pierres</p>
                            </div>
                            <div class="unique-slider-card">
                                <img src="../img/morecreations-slider-product1.png" alt="Product 1"/>
                                <h2>Montre Sweet Alhambra</h2>
                                <p class="slider-body">Or jaune 750/1000, Diamant, Nacre</p>
                                <p class="slider-price">26&nbsp;800&nbsp;€</p>
                                <p class="product-variations">+3 variations de pierres</p>
                            </div>
                            <div class="unique-slider-card">
                                <img src="../img/morecreations-slider-product1.png" alt="Product 1"/>
                                <h2>Montre Sweet Alhambra</h2>
                                <p class="slider-body">Or jaune 750/1000, Diamant, Nacre</p>
                                <p class="slider-price">26&nbsp;800&nbsp;€</p>
                                <p class="product-variations">+3 variations de pierres</p>
                            </div>
                            {/* <!-- Add more cards as needed --> */}
                        </div>
                        <div class="unique-pagination">
                            <span class="unique-dot" onclick="goToUniqueSlide(0)"></span>
                            <span class="unique-dot" onclick="goToUniqueSlide(1)"></span>
                            <span class="unique-dot" onclick="goToUniqueSlide(2)"></span>
                            <span class="unique-dot" onclick="goToUniqueSlide(3)"></span>
                            <span class="unique-dot" onclick="goToUniqueSlide(4)"></span>
                            <span class="unique-dot" onclick="goToUniqueSlide(5)"></span>
                            {/* <!-- Add more dots as needed, matching the number of slides --> */}
                        </div>
                    </div>



                </div>
                <div class="btslider">
                    <a href="https://google.com" class="click-link upt">more creations</a>
                </div>
            </div>
        </div>
        <div class="right-column">
            <img src="../img/s2img.jpg" alt="Description"/>
        </div>
    </div>




    <div class="wrapper ourcreations-sec">
        <div class="ourcreations-title">
            <h1>
                Our creations
            </h1>
            <p>Discover our wide selection of parts</p>
        </div>
        <div class="slider-container">
            <div class="slider">
                <div class="slide">
                    <img src="../img/p1.png" alt="Product 1"/>
                    <p>Product 1</p>
                </div>
                <div class="slide">
                    <img src="../img/p1.png" alt="Product 2"/>
                    <p>Product 2</p>
                </div>
                <div class="slide">
                    <img src="../img/p1.png" alt="Product 3"/>
                    <p>Product 3</p>
                </div>
                <div class="slide">
                    <img src="../img/p1.png" alt="Product 4"/>
                    <p>Product 4</p>
                </div>
                <div class="slide">
                    <img src="../img/p1.png" alt="Product 5"/>
                    <p>Product 5</p>
                </div>
            </div>
            <button class="arrow left-arrow hidden" id="leftArrow">&larr;</button>
            <button class="arrow right-arrow" id="rightArrow">&rarr;</button>
        </div>

    </div>











    <div class="video-container">
        <video autoplay muted loop>
            <source src="../videos/_4000x2000.mp4" type="video/mp4"/>
        </video>
        <div class="overlay">
            <h1 class="title">Joyful bounces with the<br/> Perlée collection</h1>
            <a href="https://google.com" class="click-link upt">Up to you ! </a>
        </div>
    </div>

    <div class="bimg video-container">
        <img src="../img/bluedesktop-FR.jpg" alt="bing"/>
        <div class="overlay">
            <a href="https://google.com" class="click-link upt blacktxt">meet our artisan jewelers</a>
        </div>
    </div>

    <div class="video-container">
        <img src="../img/van-cleef-arpels-vendome-desktop.jpg" alt="video"/>
        <div class="overlay">
            <h1 class="title  blacktxt">Paris, Tokyo, New York, ...</h1>
            <a href="https://google.com" class="click-link upt blacktxt">After you </a>
        </div>
    </div>

    <div class="wrapper engifts-sec">
        <div class="bordr">
            <h1>Enchanting gifts</h1>
            <img src="../img/desktop-3480-1740.jpg" alt="wrapper"/>

        </div>
        <div class="downbn">
            <p>Thanks to its know-how, creativity and excellence, Van Cleef & Arpels accompanies you to celebrate the
                moments of life.</p>
            <a href="https://google.com" class="click-link">
                Enter a timeless universe
            </a>
        </div>
    </div>




    <div class="news-sec">
        <div class="news-title">NEWS</div>
        <div class="wrapper-2col container">
            <div class="sec1">
                <a href="https://google.com">
                    <div class="column">
                        <img src="../img/newpost1-img.jpg" alt="col 1" class="image"/>
                        <p class="date">October 29, 2024</p>
                        <h1 class="title">Seasons 5 and 6 of the School of Jewelry Arts podcast, "The Voice of Jewels"
                        </h1>
                    </div>
                </a>
            </div>
            <div class="sec2">
                <a href="https://google.com">
                    <div class="column">
                        <img src="../img/newpost1-img.jpg" alt="col 1" class="image"/>
                        <p class="date">October 29, 2024</p>
                        <h1 class="title">Seasons 5 and 6 of the School of Jewelry Arts podcast, "The Voice of Jewels"
                        </h1>
                    </div>
                </a>
            </div>
        </div>
    </div>

    <div class="multifield-wrapper">
        <ul class="component">
            <a href="https://google.com">
                <li>
                    <h2>Free shipping and returns</h2>
                    <p>Free for all orders</p>
                    <span class="caption">more information</span>
                </li>
            </a>
            <a href="https://google.com">
                <li>
                    <h2>Free shipping and returns</h2>
                    <p>Free for all orders</p>
                    <span class="caption">more information</span>
                </li>
            </a>
            <a href="https://google.com">
                <li>
                    <h2>Free shipping and returns</h2>
                    <p>Free for all orders</p>
                    <span class="caption">more information</span>
                </li>
            </a>
        </ul>
    </div>


  </>);
};

export default Checkout;