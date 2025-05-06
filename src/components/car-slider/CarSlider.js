
import React, { useState, useEffect } from 'react';
import './CarSlider.css';
import { Link } from 'react-router-dom';

const vozila = [
  {
    naziv: 'Škoda Octavia 1.9 TDI',
    slika: '/images/octavia.png',
    cijena: '45 €/dan',
    opis: 'Prostran karavan, idealan za obitelj i duža putovanja.'
  },
  {
    naziv: 'Fiat Grande Punto 1.3 TJD',
    slika: '/images/punto.png',
    cijena: '30 €/dan',
    opis: 'Kompaktan gradski automobil s malom potrošnjom.'
  },
  {
    naziv: 'Opel Astra 1.6 CDTI',
    slika: '/images/astra.png',
    cijena: '40 €/dan',
    opis: 'Pouzdano i moderno vozilo za sve uvjete vožnje.'
  },
  {
    naziv: 'Citroën C-Elysée 1.6 HDI',
    slika: '/images/celysee.png',
    cijena: '40 €/dan',
    opis: 'Elegantna limuzina s ekonomičnim motorom.'
  },
  {
    naziv: 'Opel Corsa Color Edition 1.4 16V (2018)',
    slika: '/images/corsa.png',
    cijena: '30 €/dan',
    opis: 'Odličan izbor za gradsku vožnju uz atraktivan dizajn.'
  }
];

const CarSlider = () => {
  const [index, setIndex] = useState(0);

  const nextCar = () => {
    setIndex((prevIndex) => (prevIndex + 1) % vozila.length);
  };

  const prevCar = () => {
    setIndex((prevIndex) => (prevIndex - 1 + vozila.length) % vozila.length);
  };

  useEffect(() => {
    const interval = setInterval(nextCar, 4000);
    return () => clearInterval(interval);
  }, []);

  const auto = vozila[index];

  return (
    <div className="car-slider">
      <h2>Naša vozila</h2>
      <div className="slider-content">
        <button onClick={prevCar} className="slider-btn">&lt;</button>
        <div className="vozilo-card">
          <img src={auto.slika} alt={auto.naziv} />
          <h3>{auto.naziv}</h3>
          <p>{auto.opis}</p>
          <Link to="/kontakt" className="cijena">{auto.cijena}</Link>
        </div>
        <button onClick={nextCar} className="slider-btn">&gt;</button>
      </div>
    </div>
  );
};

export default CarSlider;
