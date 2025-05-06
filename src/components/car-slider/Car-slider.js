import React, { useState, useEffect } from 'react';
import './Car-slider.css';

const cars = [
  {
    model: 'Škoda Octavia 1.9 TDI',
    opis: 'Prostran karavan, idealan za obitelji i duža putovanja.',
    cijena: '45 €/dan'
  },
  {
    model: 'Fiat Grande Punto 1.3 TJD',
    opis: 'Kompaktno gradsko vozilo, ekonomično i pouzdano.',
    cijena: '30 €/dan'
  },
  {
    model: 'Opel Astra 1.6 CDTI',
    opis: 'Moderan karavan s puno prostora i udobnosti.',
    cijena: '40 €/dan'
  }
];

const CarSlider = () => {
  const [index, setIndex] = useState(0);

  const nextCar = () => {
    setIndex((prevIndex) => (prevIndex + 1) % cars.length);
  };

  const prevCar = () => {
    setIndex((prevIndex) => (prevIndex - 1 + cars.length) % cars.length);
  };

  // Autoplay efekt
  useEffect(() => {
    const interval = setInterval(() => {
      nextCar();
    }, 4000); // mijenja se svakih 4 sekunde

    // Čisti interval kad komponenta nestane
    return () => clearInterval(interval);
  }, []);

  const { model, opis, cijena } = cars[index];

  return (
    <div className="car-slider">
      <h2>Naša vozila</h2>
      <div className="slider-content">
        <button onClick={prevCar}>&lt;</button>
        <div className="car-info">
          <h3>{model}</h3>
          <p>{opis}</p>
          <p className="price">{cijena}</p>
        </div>
        <button onClick={nextCar}>&gt;</button>
      </div>
    </div>
  );
};

export default CarSlider;