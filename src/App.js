import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Home from './components/pages/home/Home';
import Onama from './components/pages/onama/ONama';
import Vozila from './components/pages/vozila/Vozila';
import Osiguranje from './components/pages/osiguranje/Osiguranje';
import Pogodnosti from './components/pages/pogodnosti/Pogodnosti';
import Kontakt from './components/pages/kontakt/Kontakt';
import Blog from './components/pages/blog/Blog';
import BlogPlaniranje from './components/pages/blog/BlogPlaniranje';
import BlogSigurnost from './components/pages/blog/BlogSigurnost';
import BlogUkljuceno from './components/pages/blog/BlogUkljuceno';

function App() {
  return (
    <div className="app-wrapper">
      <Router>
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/onama" element={<Onama />} />
            <Route path="/vozila" element={<Vozila />} />
            <Route path="/osiguranje" element={<Osiguranje />} />
            <Route path="/pogodnosti" element={<Pogodnosti />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/planiranje" element={<BlogPlaniranje />} />
            <Route path="/blog/sigurnost" element={<BlogSigurnost />} />
            <Route path="/blog/ukljuceno" element={<BlogUkljuceno />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;