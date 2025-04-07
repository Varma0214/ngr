import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <img src="https://res.cloudinary.com/duccim6pz/image/upload/v1743790099/Yumcart_2_gqbzjy.png" alt="NRGNR Logo" className="logo" />
      <div className="marquee">
        <p>Welcome to NRGNR Tech Solutions 🚀 | Cloud • Backup • Security • Support</p>
      </div>
      <nav>
        <a href="#about">About Us</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
