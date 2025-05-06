
import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className="navbar" ref={navRef}>
      <NavLink to="/" className="logo" onClick={() => setMenuOpen(false)}>
        <img src="/images/logo.png" alt="DAVI Rent a Car" className="logo-img" />
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
