import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="navbar">
      <NavLink to="/" className="logo" onClick={() => setMenuOpen(false)}>
        DAVI Rent a Car
      </NavLink>
      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setMenuOpen(false)}>Početna</NavLink></li>
          <li><NavLink to="/onama" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setMenuOpen(false)}>O nama</NavLink></li>
          <li><NavLink to="/vozila" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setMenuOpen(false)}>Vozila</NavLink></li>
          <li><NavLink to="/osiguranje" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setMenuOpen(false)}>Osiguranje</NavLink></li>
          <li><NavLink to="/pogodnosti" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setMenuOpen(false)}>Pogodnosti</NavLink></li>
          <li><NavLink to="/kontakt" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setMenuOpen(false)}>Kontakt</NavLink></li>
          <li><NavLink to="/blog" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setMenuOpen(false)}>Blog</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
