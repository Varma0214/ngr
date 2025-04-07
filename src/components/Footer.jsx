import React from 'react';
import './Footer.css';
import { FaTwitter, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter />
        </a>
        <a href="tel:+1234567890" aria-label="Phone">
          <FaPhoneAlt />
        </a>
        <a href="mailto:info@nrgnr.com" aria-label="Email">
          <FaEnvelope />
        </a>
      </div>
      <div className="footer-links">
        <a href="#terms">Terms & Services</a>
        <a href="#privacy">Privacy Policy</a>
      </div>
      <p className="footer-copy">© {new Date().getFullYear()} NRGNR. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
