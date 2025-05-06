import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Home from './components/pages/home/Home';
import Onama from './components/pages/onama/Onama';
import Vozila from './components/pages/vozila/Vozila';
import Osiguranje from './components/pages/osiguranje/Osiguranje';
import Pogodnosti from './components/pages/pogodnosti/Pogodnosti';
import Kontakt from './components/pages/kontakt/Kontakt';
import Blog from './components/pages/blog/Blog';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/onama" element={<Onama />} />
        <Route path="/vozila" element={<Vozila />} />
        <Route path="/osiguranje" element={<Osiguranje />} />
        <Route path="/pogodnosti" element={<Pogodnosti />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
