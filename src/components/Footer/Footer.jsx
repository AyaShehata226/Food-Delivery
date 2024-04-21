import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <>
      <div className="footer" id="footer">
        <div className="footer-content">
          <div className="footer-content-left">
            <img src={assets.logo} alt="logo" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Excepturi, neque delectus molestiae ipsam nesciunt molestias
              ipsum? Modi inventore nobis quisquam, perspiciatis iusto nisi
              voluptatibus ullam nihil? Perspiciatis enim quisquam eum?
            </p>
            <div className="footer-social-icon">
              <img src={assets.facebook_icon} alt="facebook" />
              <img src={assets.twitter_icon} alt="twitter" />
              <img src={assets.linkedin_icon} alt="linkedin" />
            </div>
          </div>
          <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
          </div>
          <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>010 4443 8883</li>
                <li>contact@tomato.com</li>
            </ul>
          </div>
        </div>
        <hr/>
        <p> Aya Shehata 2024 &copy; Tomato.com</p>
      </div>
    </>
  );
};

export default Footer;
