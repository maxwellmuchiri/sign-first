// components/Navbar.js
import React from 'react';
import './Navbar.css'; // Add some custom styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo"> 
        <img src="/path-to-logo" alt="Sign First Logo" /> 
        <h1>Sign First</h1>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search signs..." />
        <button>Search</button>
      </div>
      <div className="contact-info">
        <p>Email: signfirst@example.com</p>
        <p>Phone: +123456789</p>
      </div>
      <div className="cart">
        <i className="cart-icon">🛒</i>
        <span>0 items</span>
      </div>
    </nav>
  );
}

export default Navbar;