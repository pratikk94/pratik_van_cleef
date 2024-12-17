import React, { useRef, useState } from "react";
import "../Landing/css/main.css";
// import "../Landing/css/font-awesome.css";
const LandingN = () => {
  // State management
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeView, setActiveView] = useState("login");
  const [isCallPopupOpen, setIsCallPopupOpen] = useState(false);
  const [isProfilePopupOpen, setIsProfilePopupOpen] = useState(false);

  // Refs
  const sliderRef = useRef(null);

  // Slider logic
  const slidesToShow = 3;

  const updateArrows = () => {
    const totalSlides = sliderRef.current?.children.length || 0;
    return {
      showLeftArrow: currentIndex !== 0,
      showRightArrow: currentIndex < totalSlides - slidesToShow,
    };
  };

  const slide = (direction) => {
    if (!sliderRef.current) return;

    const slideWidth = sliderRef.current.children[0]?.offsetWidth || 0;
    const totalSlides = sliderRef.current.children.length;

    setCurrentIndex((prevIndex) => {
      const newIndex = Math.max(
        0,
        Math.min(prevIndex + direction, totalSlides - slidesToShow)
      );
      sliderRef.current.style.transform = `translateX(-${slideWidth * newIndex}px)`;
      return newIndex;
    });
  };

  // Popup handlers
  const handlePopup = (popupType, isOpen) => {
    if (popupType === "call") setIsCallPopupOpen(isOpen);
    if (popupType === "profile") setIsProfilePopupOpen(isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "";
  };

  return (
    <>
      <div>
        <nav className="navbar">
          <div id="burgerMenu" className="burger-menu">
            <span className="brgr"></span>
          </div>
          <div className="search-wrap">
            <span className="nav-search"></span>
            <span className="nav-searchtxt">search</span>
          </div>

          <div className="logotop">
            <h1>Van Cleef &amp; Arpels</h1>
          </div>

          <div className="icons">
            <span className="icon map-ico"></span>
            <span
              id="open-call"
              className="icon phone-ico"
              onClick={() => handlePopup("call", true)}
            ></span>
            <span
              id="open-profile"
              className="icon user-ico"
              onClick={() => handlePopup("profile", true)}
            ></span>

            <span className="icon cart-ico">
              <div className="cart-hoverbox">
                <span className="cart-empty">
                  Your shopping cart is currently empty.
                </span>
                <hr />
                <span className="recentlyviewed">RECENTLY VIEWED</span>
                <div className="cart-product">
                  <img
                    src="/images/morecreations-slider-product1.png"
                    alt="Product 1"
                  />
                  <h2 className="title">Montre Sweet Alhambra</h2>
                  <span className="price">26 800 $</span>
                </div>
              </div>
            </span>
          </div>
        </nav>

        <div
          id="overlay-call"
          className="overlay-call"
          style={{ display: isCallPopupOpen ? "block" : "none" }}
          onClick={() => handlePopup("call", false)}
        ></div>
        <div id="popup-call" className="popup-call">
          <button
            id="closePopup-call"
            className="close-btn-call"
            onClick={() => handlePopup("call", false)}
          ></button>
          <div className="popup-content-call">
            <h3>A question?</h3>
            <p>
              Our advisors are available to answer your requests from Monday to
              Friday from 9 a.m. to 7 p.m. and Saturday from 9 a.m. to 5 p.m.
            </p>
            <span className="callus">CALL US: +33 1 70 70 02 63</span>
            <div className="inquiry-box">
              <ul>
                <li>Jewelers and watch experts at your disposal</li>
                <li>Personalized advice</li>
                <li>Discovery of the collections</li>
              </ul>
            </div>
            <div className="contact-sociallinks">
              <a href="#" className="email">
                E-MAIL
              </a>
              <a href="#" className="faq">
                FAQ
              </a>
              <a href="#" className="chat">
                CHAT
              </a>
            </div>
          </div>
        </div>

        <div id="overlay-profile" className="overlay-profile"></div>
        <div
          id="overlay-profile"
          className="overlay-profile"
          style={{ display: isProfilePopupOpen ? "block" : "none" }}
          onClick={() => handlePopup("profile", false)}
        ></div>
        <div
          id="popup-profile"
          className="popup-profile"
          style={{ display: isProfilePopupOpen ? "block" : "none" }}
        >
          <button
            id="closePopup-profile"
            className="close-btn-profile"
            onClick={() => handlePopup("profile", false)}
          ></button>
          <div className="popup-content-profile">
            <div className="heading">
              <h3 id="headingpopup">
                {activeView === "login" ? "Log in" : "Create your account"}
              </h3>
            </div>
            <div className="tabs">
              <button
                id="loginbtn"
                className={activeView === "login" ? "active" : ""}
                onClick={() => setActiveView("login")}
              >
                LOG IN
              </button>
              <button
                id="registerbtn"
                className={activeView === "register" ? "active" : ""}
                onClick={() => setActiveView("register")}
              >
                Create your account
              </button>
            </div>

            {/* Login Form */}
            <div
              id="login"
              className="tabcontent"
              style={{ display: activeView === "login" ? "block" : "none" }}
            >
              {/* ... existing login form content ... */}
            </div>

            {/* Register Form */}
            <div
              id="register"
              className="tabcontent"
              style={{ display: activeView === "register" ? "block" : "none" }}
            >
              {/* ... existing register form content ... */}
            </div>
          </div>
        </div>
        <div id="popup-profile" className="popup-profile">
          <button
            id="closePopup-profile"
            className="close-btn-profile"
          ></button>
          <div className="popup-content-profile">
            <div className="heading">
              <h3 id="headingpopup">Log in</h3>
            </div>
            <div className="tabs">
              <button id="loginbtn">LOG IN</button>
              <button id="registerbtn">Create your account</button>
            </div>

            <div id="login" className="tabcontent">
              <div className="fields">
                <div className="input-pro">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email address"
                  />
                </div>
                <div className="input-pro">
                  <label for="email">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Your password"
                  />
                </div>
                <button>login</button>
                <span className="fpass">Forgot your password?</span>
              </div>
            </div>

            <div
              id="register"
              style={{ display: "none" }}
              className="tabcontent"
            >
              <div className="fields">
                <div className="input-pro radio">
                  <label className="Civility">Civility *</label>
                  <input
                    type="radio"
                    id="html"
                    name="fav_language"
                    value="HTML"
                  />
                  &nbsp;{" "}
                  <label for="html" className="option">
                    Mr.
                  </label>
                  <input
                    type="radio"
                    id="html"
                    name="fav_language"
                    value="HTML"
                    className="sec"
                  />
                  &nbsp;{" "}
                  <label for="html" className="option">
                    mrs.
                  </label>
                </div>

                <div className="input-pro">
                  <label for="firstname">First name</label>
                  <input
                    type="text"
                    id="firstname"
                    name="first name"
                    placeholder="Your first name"
                  />
                </div>
                <div className="input-pro">
                  <label for="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                  />
                </div>
                <div className="input-pro">
                  <label for="country">Country / Place of residence</label>
                  <select id="country" name="country" className="form-control">
                    <option value="Afghanistan">Afghanistan</option>
                    <option value="Åland Islands">Åland Islands</option>
                    <option value="Albania">Albania</option>
                    <option value="Algeria">Algeria</option>
                    <option value="American Samoa">American Samoa</option>
                    <option value="Andorra">Andorra</option>
                    <option value="Angola">Angola</option>
                    <option value="Anguilla">Anguilla</option>
                    <option value="Antarctica">Antarctica</option>
                    <option value="Antigua and Barbuda">
                      Antigua and Barbuda
                    </option>
                    <option value="Argentina">Argentina</option>
                    <option value="Armenia">Armenia</option>
                    <option value="Aruba">Aruba</option>
                    <option value="Australia">Australia</option>
                    <option value="Austria">Austria</option>
                    <option value="Azerbaijan">Azerbaijan</option>
                    <option value="Bahamas">Bahamas</option>
                    <option value="Bahrain">Bahrain</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Barbados">Barbados</option>
                    <option value="Belarus">Belarus</option>
                    <option value="Belgium">Belgium</option>
                    <option value="Belize">Belize</option>
                    <option value="Benin">Benin</option>
                    <option value="Bermuda">Bermuda</option>
                    <option value="Bhutan">Bhutan</option>
                    <option value="Bolivia">Bolivia</option>
                    <option value="Bosnia and Herzegovina">
                      Bosnia and Herzegovina
                    </option>
                    <option value="Botswana">Botswana</option>
                    <option value="Bouvet Island">Bouvet Island</option>
                    <option value="Brazil">Brazil</option>
                    <option value="British Indian Ocean Territory">
                      British Indian Ocean Territory
                    </option>
                    <option value="Brunei Darussalam">Brunei Darussalam</option>
                    <option value="Bulgaria">Bulgaria</option>
                    <option value="Burkina Faso">Burkina Faso</option>
                    <option value="Burundi">Burundi</option>
                    <option value="Cambodia">Cambodia</option>
                    <option value="Cameroon">Cameroon</option>
                    <option value="Canada">Canada</option>
                    <option value="Cape Verde">Cape Verde</option>
                    <option value="Cayman Islands">Cayman Islands</option>
                    <option value="Central African Republic">
                      Central African Republic
                    </option>
                    <option value="Chad">Chad</option>
                    <option value="Chile">Chile</option>
                    <option value="China">China</option>
                    <option value="Christmas Island">Christmas Island</option>
                    <option value="Cocos (Keeling) Islands">
                      Cocos (Keeling) Islands
                    </option>
                    <option value="Colombia">Colombia</option>
                    <option value="Comoros">Comoros</option>
                    <option value="Congo">Congo</option>
                    <option value="Congo, The Democratic Republic of The">
                      Congo, The Democratic Republic of The
                    </option>
                    <option value="Cook Islands">Cook Islands</option>
                    <option value="Costa Rica">Costa Rica</option>
                    <option value="Cote D'ivoire">Cote D'ivoire</option>
                    <option value="Croatia">Croatia</option>
                    <option value="Cuba">Cuba</option>
                    <option value="Cyprus">Cyprus</option>
                    <option value="Czech Republic">Czech Republic</option>
                    <option value="Denmark">Denmark</option>
                    <option value="Djibouti">Djibouti</option>
                    <option value="Dominica">Dominica</option>
                    <option value="Dominican Republic">
                      Dominican Republic
                    </option>
                    <option value="Ecuador">Ecuador</option>
                    <option value="Egypt">Egypt</option>
                    <option value="El Salvador">El Salvador</option>
                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                    <option value="Eritrea">Eritrea</option>
                    <option value="Estonia">Estonia</option>
                    <option value="Ethiopia">Ethiopia</option>
                    <option value="Falkland Islands (Malvinas)">
                      Falkland Islands (Malvinas)
                    </option>
                    <option value="Faroe Islands">Faroe Islands</option>
                    <option value="Fiji">Fiji</option>
                    <option value="Finland">Finland</option>
                    <option value="France">France</option>
                    <option value="French Guiana">French Guiana</option>
                    <option value="French Polynesia">French Polynesia</option>
                    <option value="French Southern Territories">
                      French Southern Territories
                    </option>
                    <option value="Gabon">Gabon</option>
                    <option value="Gambia">Gambia</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Germany">Germany</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Gibraltar">Gibraltar</option>
                    <option value="Greece">Greece</option>
                    <option value="Greenland">Greenland</option>
                    <option value="Grenada">Grenada</option>
                    <option value="Guadeloupe">Guadeloupe</option>
                    <option value="Guam">Guam</option>
                    <option value="Guatemala">Guatemala</option>
                    <option value="Guernsey">Guernsey</option>
                    <option value="Guinea">Guinea</option>
                    <option value="Guinea-bissau">Guinea-bissau</option>
                    <option value="Guyana">Guyana</option>
                    <option value="Haiti">Haiti</option>
                    <option value="Heard Island and Mcdonald Islands">
                      Heard Island and Mcdonald Islands
                    </option>
                    <option value="Holy See (Vatican City State)">
                      Holy See (Vatican City State)
                    </option>
                    <option value="Honduras">Honduras</option>
                    <option value="Hong Kong">Hong Kong</option>
                    <option value="Hungary">Hungary</option>
                    <option value="Iceland">Iceland</option>
                    <option value="India">India</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Iran, Islamic Republic of">
                      Iran, Islamic Republic of
                    </option>
                    <option value="Iraq">Iraq</option>
                    <option value="Ireland">Ireland</option>
                    <option value="Isle of Man">Isle of Man</option>
                    <option value="Israel">Israel</option>
                    <option value="Italy">Italy</option>
                    <option value="Jamaica">Jamaica</option>
                    <option value="Japan">Japan</option>
                    <option value="Jersey">Jersey</option>
                    <option value="Jordan">Jordan</option>
                    <option value="Kazakhstan">Kazakhstan</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Kiribati">Kiribati</option>
                    <option value="Korea, Democratic People's Republic of">
                      Korea, Democratic People's Republic of
                    </option>
                    <option value="Korea, Republic of">
                      Korea, Republic of
                    </option>
                    <option value="Kuwait">Kuwait</option>
                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                    <option value="Lao People's Democratic Republic">
                      Lao People's Democratic Republic
                    </option>
                    <option value="Latvia">Latvia</option>
                    <option value="Lebanon">Lebanon</option>
                    <option value="Lesotho">Lesotho</option>
                    <option value="Liberia">Liberia</option>
                    <option value="Libyan Arab Jamahiriya">
                      Libyan Arab Jamahiriya
                    </option>
                    <option value="Liechtenstein">Liechtenstein</option>
                    <option value="Lithuania">Lithuania</option>
                    <option value="Luxembourg">Luxembourg</option>
                    <option value="Macao">Macao</option>
                    <option value="Macedonia, The Former Yugoslav Republic of">
                      Macedonia, The Former Yugoslav Republic of
                    </option>
                    <option value="Madagascar">Madagascar</option>
                    <option value="Malawi">Malawi</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Maldives">Maldives</option>
                    <option value="Mali">Mali</option>
                    <option value="Malta">Malta</option>
                    <option value="Marshall Islands">Marshall Islands</option>
                    <option value="Martinique">Martinique</option>
                    <option value="Mauritania">Mauritania</option>
                    <option value="Mauritius">Mauritius</option>
                    <option value="Mayotte">Mayotte</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Micronesia, Federated States of">
                      Micronesia, Federated States of
                    </option>
                    <option value="Moldova, Republic of">
                      Moldova, Republic of
                    </option>
                    <option value="Monaco">Monaco</option>
                    <option value="Mongolia">Mongolia</option>
                    <option value="Montenegro">Montenegro</option>
                    <option value="Montserrat">Montserrat</option>
                    <option value="Morocco">Morocco</option>
                    <option value="Mozambique">Mozambique</option>
                    <option value="Myanmar">Myanmar</option>
                    <option value="Namibia">Namibia</option>
                    <option value="Nauru">Nauru</option>
                    <option value="Nepal">Nepal</option>
                    <option value="Netherlands">Netherlands</option>
                    <option value="Netherlands Antilles">
                      Netherlands Antilles
                    </option>
                    <option value="New Caledonia">New Caledonia</option>
                    <option value="New Zealand">New Zealand</option>
                    <option value="Nicaragua">Nicaragua</option>
                    <option value="Niger">Niger</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="Niue">Niue</option>
                    <option value="Norfolk Island">Norfolk Island</option>
                    <option value="Northern Mariana Islands">
                      Northern Mariana Islands
                    </option>
                    <option value="Norway">Norway</option>
                    <option value="Oman">Oman</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Palau">Palau</option>
                    <option value="Palestinian Territory, Occupied">
                      Palestinian Territory, Occupied
                    </option>
                    <option value="Panama">Panama</option>
                    <option value="Papua New Guinea">Papua New Guinea</option>
                    <option value="Paraguay">Paraguay</option>
                    <option value="Peru">Peru</option>
                    <option value="Philippines">Philippines</option>
                    <option value="Pitcairn">Pitcairn</option>
                    <option value="Poland">Poland</option>
                    <option value="Portugal">Portugal</option>
                    <option value="Puerto Rico">Puerto Rico</option>
                    <option value="Qatar">Qatar</option>
                    <option value="Reunion">Reunion</option>
                    <option value="Romania">Romania</option>
                    <option value="Russian Federation">
                      Russian Federation
                    </option>
                    <option value="Rwanda">Rwanda</option>
                    <option value="Saint Helena">Saint Helena</option>
                    <option value="Saint Kitts and Nevis">
                      Saint Kitts and Nevis
                    </option>
                    <option value="Saint Lucia">Saint Lucia</option>
                    <option value="Saint Pierre and Miquelon">
                      Saint Pierre and Miquelon
                    </option>
                    <option value="Saint Vincent and The Grenadines">
                      Saint Vincent and The Grenadines
                    </option>
                    <option value="Samoa">Samoa</option>
                    <option value="San Marino">San Marino</option>
                    <option value="Sao Tome and Principe">
                      Sao Tome and Principe
                    </option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Senegal">Senegal</option>
                    <option value="Serbia">Serbia</option>
                    <option value="Seychelles">Seychelles</option>
                    <option value="Sierra Leone">Sierra Leone</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Slovakia">Slovakia</option>
                    <option value="Slovenia">Slovenia</option>
                    <option value="Solomon Islands">Solomon Islands</option>
                    <option value="Somalia">Somalia</option>
                    <option value="South Africa">South Africa</option>
                    <option value="South Georgia and The South Sandwich Islands">
                      South Georgia and The South Sandwich Islands
                    </option>
                    <option value="Spain">Spain</option>
                    <option value="Sri Lanka">Sri Lanka</option>
                    <option value="Sudan">Sudan</option>
                    <option value="Suriname">Suriname</option>
                    <option value="Svalbard and Jan Mayen">
                      Svalbard and Jan Mayen
                    </option>
                    <option value="Swaziland">Swaziland</option>
                    <option value="Sweden">Sweden</option>
                    <option value="Switzerland">Switzerland</option>
                    <option value="Syrian Arab Republic">
                      Syrian Arab Republic
                    </option>
                    <option value="Taiwan">Taiwan</option>
                    <option value="Tajikistan">Tajikistan</option>
                    <option value="Tanzania, United Republic of">
                      Tanzania, United Republic of
                    </option>
                    <option value="Thailand">Thailand</option>
                    <option value="Timor-leste">Timor-leste</option>
                    <option value="Togo">Togo</option>
                    <option value="Tokelau">Tokelau</option>
                    <option value="Tonga">Tonga</option>
                    <option value="Trinidad and Tobago">
                      Trinidad and Tobago
                    </option>
                    <option value="Tunisia">Tunisia</option>
                    <option value="Turkey">Turkey</option>
                    <option value="Turkmenistan">Turkmenistan</option>
                    <option value="Turks and Caicos Islands">
                      Turks and Caicos Islands
                    </option>
                    <option value="Tuvalu">Tuvalu</option>
                    <option value="Uganda">Uganda</option>
                    <option value="Ukraine">Ukraine</option>
                    <option value="United Arab Emirates">
                      United Arab Emirates
                    </option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States">United States</option>
                    <option value="United States Minor Outlying Islands">
                      United States Minor Outlying Islands
                    </option>
                    <option value="Uruguay">Uruguay</option>
                    <option value="Uzbekistan">Uzbekistan</option>
                    <option value="Vanuatu">Vanuatu</option>
                    <option value="Venezuela">Venezuela</option>
                    <option value="Viet Nam">Viet Nam</option>
                    <option value="Virgin Islands, British">
                      Virgin Islands, British
                    </option>
                    <option value="Virgin Islands, U.S.">
                      Virgin Islands, U.S.
                    </option>
                    <option value="Wallis and Futuna">Wallis and Futuna</option>
                    <option value="Western Sahara">Western Sahara</option>
                    <option value="Yemen">Yemen</option>
                    <option value="Zambia">Zambia</option>
                    <option value="Zimbabwe">Zimbabwe</option>
                  </select>
                </div>
                <div className="input-pro">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email address"
                  />
                </div>
                <div className="input-pro last">
                  <label for="email">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Your password"
                  />
                </div>
                <span className="password-info">
                  <p>
                    Your password must contain at least 8 characters, including
                    letters, numbers, a capital letter and at least one special
                    character.
                  </p>
                </span>
                <div className="discover">
                  <p>
                    Discover the enchanting world of Van Cleef &amp; Arpels and
                    stay informed about our latest creations, events and news.
                  </p>
                </div>
                <div className="check-formbase">
                  <input type="checkbox" id="notification" />
                  <label for="notification">
                    I would like to receive information about Van Cleef &amp;
                    Arpels creations and services. The Maison may contact you by
                    email, text message, telephone, mail or via online
                    advertising campaigns. You can request to unsubscribe at any
                    time. For more information regarding the policy on the use
                    of your personal data, we invite you to consult the{" "}
                    <a href="#">Privacy Policy.</a>
                  </label>
                </div>

                <button>Creat your account</button>
              </div>
            </div>

            <div className="question">
              <h3>A question?</h3>
              <p className="question-des">
                Our advisors are delighted to assist you
              </p>
              <a href="#" className="contact">
                contact us
              </a>
              <a href="#" className="appointment">
                make an appointment
              </a>
              <a href="#" className="contact-number">
                +33 1 70 70 02 63
              </a>
              <span className="date-time1">
                Monday to Friday: 9:00 a.m. to 7:00 p.m.
              </span>
              <span className="date-time2">
                Saturday: 9:00 a.m. to 5:00 p.m.
              </span>
            </div>
          </div>
        </div>

        <div id="sideMenu" className="side-menu">
          <div id="closeBtn" className="close-btn">
            <span>CLOSE</span>
          </div>
          <ul>
            <li>
              <a href="#">
                High Jewelry
                <i aria-hidden="true" className="fa fa-angle-right"></i>
              </a>
            </li>
            <li>
              <a href="#">
                Jewelry
                <i aria-hidden="true" className="fa fa-angle-right"></i>
              </a>
            </li>
            <li>
              <a href="#">
                Weddings and celebrations
                <i aria-hidden="true" className="fa fa-angle-right"></i>
              </a>
            </li>
            <li>
              <a href="#">
                extraordinary objects
                <i aria-hidden="true" className="fa fa-angle-right"></i>
              </a>
            </li>
            <li>
              <a href="#">
                perfumes
                <i aria-hidden="true" className="fa fa-angle-right"></i>
              </a>
            </li>
            <li>
              <a href="#">
                gift inspiration
                <i aria-hidden="true" className="fa fa-angle-right"></i>
              </a>
            </li>
            <li>
              <a href="#">
                watchmacking
                <i aria-hidden="true" className="fa fa-angle-right"></i>
              </a>
            </li>
            <div className="nav-space"></div>
            <li>
              <a href="#">The house</a>
            </li>
            <li>
              <a href="#">know-how</a>
            </li>
            <li>
              <a href="#">stone expertise</a>
            </li>
            <li>
              <a href="#">
                services
                <i aria-hidden="true" className="fa fa-angle-right"></i>
              </a>
            </li>
          </ul>
          <ul className="bottom">
            <li>
              <a href="#">
                contact us
                <i aria-hidden="true" className="fa fa-angle-right"></i>
              </a>
            </li>
            <li>
              <a href="#">Find a store</a>
            </li>
            <li>
              <a href="#">
                my account
                <i aria-hidden="true" className="fa fa-angle-right"></i>
              </a>
            </li>
            <li>
              <a href="#">
                newsletter
                <i aria-hidden="true" className="fa fa-angle-right"></i>
              </a>
            </li>
            <li>
              <a href="#">
                france (EUR $) - FR
                <i aria-hidden="true" className="fa fa-angle-right"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="banner-home">
          <img src="img/homebanner.jpg" alt="Banner Image" />
          <div className="banner-content">
            <h1>Timeless elegance</h1>
            <p>
              Culminating on the wrist or suspended from the neck, jewelry
              watches offer time a precious setting
            </p>
            <a href="#" className="click-link upt">
              Contemplate the passing of time
            </a>
          </div>
        </div>

        <div className="container-col-wrap">
          <div className="left-column">
            <div>
              <div className="carousel-section">
                <div className="unique-slider-container">
                  <div className="unique-slider">
                    <div className="unique-slider-card">
                      <img
                        src="img/morecreations-slider-product1.png"
                        alt="Product 1"
                      />
                      <h2>Montre Sweet Alhambra</h2>
                      <p className="slider-body">
                        Or jaune 750/1000, Diamant, Nacre
                      </p>
                      <p className="slider-price">26&nbsp;800&nbsp;€</p>
                      <p className="product-variations">
                        +3 variations de pierres
                      </p>
                    </div>
                    <div className="unique-slider-card">
                      <img
                        src="img/morecreations-slider-product1.png"
                        alt="Product 1"
                      />
                      <h2>Montre Sweet Alhambra</h2>
                      <p className="slider-body">
                        Or jaune 750/1000, Diamant, Nacre
                      </p>
                      <p className="slider-price">26&nbsp;800&nbsp;€</p>
                      <p className="product-variations">
                        +3 variations de pierres
                      </p>
                    </div>
                    <div className="unique-slider-card">
                      <img
                        src="img/morecreations-slider-product1.png"
                        alt="Product 1"
                      />
                      <h2>Montre Sweet Alhambra</h2>
                      <p className="slider-body">
                        Or jaune 750/1000, Diamant, Nacre
                      </p>
                      <p className="slider-price">26&nbsp;800&nbsp;€</p>
                      <p className="product-variations">
                        +3 variations de pierres
                      </p>
                    </div>
                    <div className="unique-slider-card">
                      <img
                        src="img/morecreations-slider-product1.png"
                        alt="Product 1"
                      />
                      <h2>Montre Sweet Alhambra</h2>
                      <p className="slider-body">
                        Or jaune 750/1000, Diamant, Nacre
                      </p>
                      <p className="slider-price">26&nbsp;800&nbsp;€</p>
                      <p className="product-variations">
                        +3 variations de pierres
                      </p>
                    </div>
                    <div className="unique-slider-card">
                      <img
                        src="img/morecreations-slider-product1.png"
                        alt="Product 1"
                      />
                      <h2>Montre Sweet Alhambra</h2>
                      <p className="slider-body">
                        Or jaune 750/1000, Diamant, Nacre
                      </p>
                      <p className="slider-price">26&nbsp;800&nbsp;€</p>
                      <p className="product-variations">
                        +3 variations de pierres
                      </p>
                    </div>
                    <div className="unique-slider-card">
                      <img
                        src="img/morecreations-slider-product1.png"
                        alt="Product 1"
                      />
                      <h2>Montre Sweet Alhambra</h2>
                      <p className="slider-body">
                        Or jaune 750/1000, Diamant, Nacre
                      </p>
                      <p className="slider-price">26&nbsp;800&nbsp;€</p>
                      <p className="product-variations">
                        +3 variations de pierres
                      </p>
                    </div>
                  </div>
                  <div className="unique-pagination">
                    <span
                      onclick="goToUniqueSlide(0)"
                      className="unique-dot"
                    ></span>
                    <span
                      onclick="goToUniqueSlide(1)"
                      className="unique-dot"
                    ></span>
                    <span
                      onclick="goToUniqueSlide(2)"
                      className="unique-dot"
                    ></span>
                    <span
                      onclick="goToUniqueSlide(3)"
                      className="unique-dot"
                    ></span>
                    <span
                      onclick="goToUniqueSlide(4)"
                      className="unique-dot"
                    ></span>
                    <span
                      onclick="goToUniqueSlide(5)"
                      className="unique-dot"
                    ></span>
                  </div>
                </div>
              </div>
              <div className="btslider">
                <a href="#" className="click-link upt">
                  more creations
                </a>
              </div>
            </div>
          </div>
          <div className="right-column">
            <img src="img/s2img.jpg" alt="Image Description" />
          </div>
        </div>

        <div className="wrapper ourcreations-sec">
          <div className="ourcreations-title">
            <h1>Our creations</h1>
            <p>Discover our wide selection of parts</p>
          </div>
          <div className="slider-container">
            <div className="slider" ref={sliderRef}>
              <div className="slide">
                <img src="img/p1.png" alt="Product 1" />
                <p>Product 1</p>
              </div>
              <div className="slide">
                <img src="img/p1.png" alt="Product 2" />
                <p>Product 2</p>
              </div>
              <div className="slide">
                <img src="img/p1.png" alt="Product 3" />
                <p>Product 3</p>
              </div>
              <div className="slide">
                <img src="img/p1.png" alt="Product 4" />
                <p>Product 4</p>
              </div>
              <div className="slide">
                <img src="img/p1.png" alt="Product 5" />
                <p>Product 5</p>
              </div>
            </div>
            <button
              id="leftArrow"
              className="arrow left-arrow hidden"
              onClick={() => slide(-1)}
            >
              ←
            </button>
            <button
              id="rightArrow"
              className="arrow right-arrow"
              onClick={() => slide(1)}
            >
              →
            </button>
          </div>
        </div>

        <div className="video-container">
          <video autoPlay muted loop>
            <source src="videos/_4000x2000.mp4" type="video/mp4" />
          </video>
          <div className="overlay">
            <h1 className="title">
              Joyful bounces with the
              <br /> Perlée collection
            </h1>
            <a href="#" className="click-link upt">
              Up to you !{" "}
            </a>
          </div>
        </div>

        <div className="bimg video-container">
          <img src="img/bluedesktop-FR.jpg" />
          <div className="overlay">
            <a href="#" className="click-link upt blacktxt">
              meet our artisan jewelers
            </a>
          </div>
        </div>

        <div className="video-container">
          <img src="img/van-cleef-arpels-vendome-desktop.jpg" />
          <div className="overlay">
            <h1 className="title  blacktxt">Paris, Tokyo, New York, ...</h1>
            <a href="#" className="click-link upt blacktxt">
              After you{" "}
            </a>
          </div>
        </div>

        <div className="wrapper engifts-sec">
          <div className="bordr">
            <h1>Enchanting gifts</h1>
            <img src="img/desktop-3480-1740.jpg" />
          </div>
          <div className="downbn">
            <p>
              Thanks to its know-how, creativity and excellence, Van Cleef &amp;
              Arpels accompanies you to celebrate the moments of life.
            </p>
            <a href="#" className="click-link">
              Enter a timeless universe
            </a>
          </div>
        </div>

        <div className="news-sec">
          <div className="news-title">NEWS</div>
          <div className="wrapper-2col container">
            <div className="sec1">
              <a href="#">
                <div className="column">
                  <img
                    src="img/newpost1-img.jpg"
                    alt="Image 1"
                    className="image"
                  />
                  <p className="date">October 29, 2024</p>
                  <h1 className="title">
                    Seasons 5 and 6 of the School of Jewelry Arts podcast, "The
                    Voice of Jewels"
                  </h1>
                </div>
              </a>
            </div>
            <div className="sec2">
              <a href="#">
                <div className="column">
                  <img
                    src="img/newpost1-img.jpg"
                    alt="Image 1"
                    className="image"
                  />
                  <p className="date">October 29, 2024</p>
                  <h1 className="title">
                    Seasons 5 and 6 of the School of Jewelry Arts podcast, "The
                    Voice of Jewels"
                  </h1>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="multifield-wrapper">
          <ul className="component">
            <a href="#">
              <li>
                <h2>Free shipping and returns</h2>
                <p>Free for all orders</p>
                <span className="caption">more information</span>
              </li>
            </a>
            <a href="#">
              <li>
                <h2>Free shipping and returns</h2>
                <p>Free for all orders</p>
                <span className="caption">more information</span>
              </li>
            </a>
            <a href="#">
              <li>
                <h2>Free shipping and returns</h2>
                <p>Free for all orders</p>
                <span className="caption">more information</span>
              </li>
            </a>
          </ul>
        </div>

        <footer>
          <div className="footer-newsletter">
            <p className="newsletter-title">Newsletter</p>
            <p className="sub-text">
              Subscribe to the newsletter and discover the enchanting world of
              the House, its creations,
              <br />
              its heritage and its know-how.
            </p>
            <div className="f-input">
              <input type="email" placeholder="E-MAIL ADDRESS" />
            </div>
            <button>SUBSCRIBE</button>
          </div>
          <hr className="vca-hr-light" />
          <div className="footer-logo">
            <img src="img/footer-logo.svg" />
          </div>
          <div className="footer-menu1 footer-menu">
            <ul>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Advice and services</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">DANCE REFLECTIONS BY VAN CLEEF &amp; ARPELS</a>
              </li>
              <li>
                <a href="#">The school of jewelry art</a>
              </li>
            </ul>
          </div>
          <div className="footer-menu2 footer-menu">
            <ul>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">facebook</a>
              </li>
              <li>
                <a href="#">youtube</a>
              </li>
              <li>
                <a href="#">pinterest</a>
              </li>
              <li>
                <a href="#">linkedin</a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LandingN;
