import React from "react";
import "./PopUp.css";

const Popup = ({ popupType, onClose }) => {
  return (
    <div className={`overlay ${popupType}-overlay`}>
      <div className={`popup ${popupType}-popup`}>
        <button onClick={onClose} className={`close-btn ${popupType}-close`}>
          &times;
        </button>
        <div className="popup-content">
          <h3>A question?</h3>
          <p>
            Our advisors are available to answer your requests from Monday to
            Friday from 9 a.m. to 7 p.m. and Saturday from 9 a.m. to 5 p.m.
          </p>
          <span className="callus">CALL US: +33 1 70 70 02 63</span>
        </div>
      </div>
    </div>
  );
};

export default Popup;
