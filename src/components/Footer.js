// components/Footer.js
import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer>
      <div className="footer-info">
        <p>Location: 1234 Sign St., SignCity</p>
        <p>Phone: +123456789</p>
        <p>Email: signfirst@example.com</p>
      </div>
      <div className="social-media">
        <a href="https://facebook.com/signfirst">Facebook</a>
        <a href="https://twitter.com/signfirst">Twitter</a>
        <a href="https://instagram.com/signfirst">Instagram</a>
      </div>
    </footer>
  );
}

export default Footer;
