import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-header">
        <div className="elements"></div>
        <div className="footer-container">
          <div className="footer-section">
            <h2>CarRent</h2>
            <p>
            The CarRent service provider offers an outstanding model and a
              wide variety of vehicle options at the most competitive rates.
            </p>
          <h3 style={{paddingTop: "30px"}}>Contact Number : 987654321</h3>
          </div>
          <div className="footer-bottom">
            <h3>Info</h3>
            <Link to="/about">
              <h4>About</h4>
            </Link>
            <Link to="/renter">
              <h4>Become a renter</h4>
            </Link>
            <Link to="/contact">
              <h4>Contact us</h4>
            </Link>
          </div>
          <div className="footer-bottom">
            <h3>Follow us</h3>
           <h4>Instagram</h4>
           <h4>Facebook</h4>
           <h4>Whatsapp</h4>
           <h4>Twitter</h4>
          </div>
        </div>
        <div className="bottom-section">
          <div className="copyright">
            <p>Copyright ©️ 2024 All right reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
