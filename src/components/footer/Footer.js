import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} DAVI Rent a Car. Sva prava pridržana.</p>
        <p>
          <a href="/uvjeti">Uvjeti korištenja</a> | 
          <a href="/privatnost"> Pravila privatnosti</a> | 
          <a href="/kolačići"> Kolačići</a>
        </p>
        <p>Vladimira Varićaka 20, 10000 Zagreb | OIB: 12345678901 | Tel: 091/123-4567</p>
      </div>
    </footer>
  );
};

export default Footer;