import React from "react";
import StarBuckLogo from "../images/Starbucks_logo.png";
import InstagramIcon from "../images/icons8-instagram-50.png";
import FacebookIcon from "../images/icons8-facebook-50.png";
import TwitterIcon from "../images/icons8-twitter-50.png";
import PlayStoreIcon from "../images/pngwing.com.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footor-item-container">
          <img style={{ width: "30%" }} src={StarBuckLogo} alt="str" />
        </div>
        <div className="footor-item-container">
          <h3>About Us</h3>
          <p>Our Heritage</p>
          <p>Our Company</p>
          <p>Coffeehouse</p>
        </div>
        <div className="footor-item-container">
          <h3>Responsibility</h3>
          <p>Community</p>
          <p>Ethical Sourcing</p>
          <p>Environment</p>
          <p>Diversity</p>
        </div>
        <div className="footor-item-container">
          <h3>Quick Links</h3>
          <p>Careers</p>
          <p>Season's Gifting</p>
          <p>FAQs</p>
          <p>Customer Service</p>
          <p>Delivery</p>
          <p>Privacy Policy</p>
          <p>Starbucks Rewards Day Offer</p>
        </div>
        <div className="footor-item-container">
          <h3>Social Media</h3>
          <div className="flex">
            <img className="footer-icon" src={InstagramIcon} alt="instagram" />
            <img className="footer-icon" src={FacebookIcon} alt="facebook" />
            <img className="footer-icon" src={TwitterIcon} alt="twitter" />
          </div>
        </div>
        <div className="footor-item-container">
          <img className="cursor-pointer" src={PlayStoreIcon} alt="" />
        </div>
      </div>
      <div className="footer-bottom">
        <div className="flex">
            <p>Web Accessiblity</p>
            <div className="line"></div>
            <p>Privacy Statement</p>
            <div className="line"></div>
            <p>Terms of Use</p>
            <div className="line"></div>
            <p>Contact Us</p>
        </div>
        <p className="right-reserved-txt">© 2023 Starbucks Coffee Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
