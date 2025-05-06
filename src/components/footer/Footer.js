import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} DAVI Rent a Car. Sva prava pridržana.</p>
      <p>
        <a href="https://wa.me/385956328607" target="_blank" rel="noopener noreferrer">WhatsApp</a> | 
        <a href="mailto:info@davirent.hr"> E-mail</a> | 
        <a href="/kontakt"> Kontakt</a>
      </p>
      <p>
  Posjetite nas i na:
  <a href="https://www.njuskalo.hr/trgovina/zezazg?categoryId=12111" target="_blank" rel="noopener noreferrer">
    Njuškalu
  </a>
</p>

<button className="scroll-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
  ↑ Povratak na vrh
</button>

    </footer>    
  );
};

export default Footer;