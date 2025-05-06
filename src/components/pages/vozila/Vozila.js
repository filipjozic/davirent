
import React, { useState } from 'react';
import './Vozila.css';
import { Link } from 'react-router-dom';

const vozila = [
  {
    naziv: 'Škoda Octavia 1.9 TDI',
    slika: '/images/octavia.png',
    cijena: '45 €/dan',
    opis: 'Prostran karavan, idealan za obitelj i duža putovanja.',
    gorivo: 'Diesel',
    mjenjac: 'Manulani',
    detalji: [
      'Godina: 2012',
      'Gorivo: Diesel',
      'Mjenjač: Manulani',
      'Klima: Da',
      'Vrata: 5',
      'Sjedala: 5'
    ]
  },
  {
    naziv: 'Fiat Grande Punto 1.3 TJD',
    slika: '/images/punto.png',
    cijena: '30 €/dan',
    opis: 'Kompaktan gradski automobil s malom potrošnjom.',
    gorivo: 'Diesel',
    mjenjac: 'Manulani',
    detalji: [
      'Godina: 2010',
      'Gorivo: Diesel',
      'Mjenjač: Manulani',
      'Klima: Da',
      'Vrata: 5',
      'Sjedala: 5'
    ]
  },
  {
    naziv: 'Opel Astra 1.6 CDTI',
    slika: '/images/astra.png',
    cijena: '40 €/dan',
    opis: 'Pouzdano i moderno vozilo za sve uvjete vožnje.',
    gorivo: 'Diesel',
    mjenjac: 'Manulani',
    detalji: [
      'Godina: 2015',
      'Gorivo: Diesel',
      'Mjenjač: Manulani',
      'Klima: Da',
      'Vrata: 5',
      'Sjedala: 5'
    ]
  },
  {
    naziv: 'Citroën C-Elysée 1.6 HDI',
    slika: '/images/celysee.png',
    cijena: '40 €/dan',
    opis: 'Elegantna limuzina s ekonomičnim motorom.',
    gorivo: 'Diesel',
    mjenjac: 'Manulani',
    detalji: [
      'Godina: 2017',
      'Gorivo: Diesel',
      'Mjenjač: Manulani',
      'Klima: Da',
      'Vrata: 4',
      'Sjedala: 5'
    ]
  },
  {
    naziv: 'Opel Corsa Color Edition 1.4 16V',
    slika: '/images/corsa.png',
    cijena: '30 €/dan',
    opis: 'Odličan izbor za gradsku vožnju uz atraktivan dizajn.',
    gorivo: 'Benzin',
    mjenjac: 'Manulani',
    detalji: [
      'Godina: 2018',
      'Gorivo: Benzin',
      'Mjenjač: Manulani',
      'Klima: Da',
      'Vrata: 5',
      'Sjedala: 5'
    ]
  }
];

const Vozila = () => {
  const [otvoreniDetalji, setOtvoreniDetalji] = useState(null);
  const [filter, setFilter] = useState({ gorivo: '', mjenjac: '' });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter(prev => ({ ...prev, [name]: value }));
    setOtvoreniDetalji(null);
  };

  const filtriranaVozila = vozila.filter(auto => {
    return (
      (!filter.gorivo || auto.gorivo === filter.gorivo) &&
      (!filter.mjenjac || auto.mjenjac === filter.mjenjac)
    );
  });

  return (
    <div className="vozila-page">
      <h1>Naša vozila</h1>

      <div className="filter-container">
        <select name="gorivo" value={filter.gorivo} onChange={handleFilterChange}>
          <option value="">Gorivo</option>
          <option value="Diesel">Diesel</option>
          <option value="Benzin">Benzin</option>
        </select>

        <select name="mjenjac" value={filter.mjenjac} onChange={handleFilterChange}>
          <option value="">Mjenjač</option>
          <option value="Manulani">Manulani</option>
          <option value="Automatski">Automatski</option>
        </select>
  {(filter.gorivo || filter.mjenjac) && (
          <button className="reset-btn" onClick={() => setFilter({ gorivo: '', mjenjac: '' })}>
            Poništi filtere
          </button>
        )}
</div>

      <div className="vozila-grid">
        {filtriranaVozila.map((auto, index) => (
          <div key={index} className={`vozilo-card ${otvoreniDetalji === index ? 'open' : ''}`}>
            <img src={auto.slika} alt={auto.naziv} />
            <h2>{auto.naziv}</h2>
            <p>{auto.opis}</p>
            <span className="cijena">{auto.cijena}</span>
            <button className="btn-detalji" onClick={() => setOtvoreniDetalji(otvoreniDetalji === index ? null : index)}>Detalji</button>
            <div className={`detalji ${otvoreniDetalji === index ? 'open' : ''}`}>
              <ul>
                {auto.detalji.map((stavka, i) => (
                  <li key={i}>{stavka}</li>
                ))}
              </ul>
            </div>
            <Link to={`/kontakt?car=${encodeURIComponent(auto.naziv)}`} className="btn-rezerviraj">Rezerviraj</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vozila;
