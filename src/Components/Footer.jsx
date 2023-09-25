import React from 'react';
import { Link } from 'react-router-dom';
import FooterLogo from './images/FooterLogo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={FooterLogo} alt="Footer Logo" />
        </div>
        <div className="footer-navigation">
          <h3>Navigation</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/reservation">Reservation</Link></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Contact</h3>
          <ul>
            <li>Chicago</li>
            <li>+123456789</li>
            <li>+173829475</li>
            <li>littlelemon@gmail.com</li>
          </ul>
        </div>
        <div className="footer-connect">
          <h3>Connect</h3>
          <ul>
            <li><a href="https://www.facebook.com/">Facebook</a></li>
            <li><a href="https://twitter.com/">Twitter</a></li>
            <li><a href="https://www.instagram.com/">Instagram</a></li>
            <li><a href="https://www.youtube.com">YouTube</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
