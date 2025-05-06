
import React from 'react';
import './Home.css';
import CarSlider from '../../car-slider/CarSlider.js';
import { Helmet } from 'react-helmet'

const Home = () => {
  return (
  <><Helmet>
      <title>DAVI Rent a Car | Najam automobila u Zagrebu</title>
      <meta name="description" content="Pouzdan rent a car u Zagrebu s besplatnom dostavom i modernim vozilima. Rezervirajte već danas online!" />
    </Helmet><div className="home-page">
        <div className="home-hero">
          <h1>Dobrodošli u DAVI Rent a Car</h1>
        </div>

        <section className="home-section">
          <h2>Zašto izabrati nas?</h2>
          <p>🚗 Nova i pouzdana vozila</p>
          <p>📦 Besplatna dostava u Zagrebu</p>
          <p>💸 Povoljne cijene i popusti</p>
          <p>📞 Podrška 0-24</p>
        </section>

        <CarSlider />

        <section className="home-section">
          <h2>Naša lokacija</h2>
          <div className="map-container">
            <iframe
              title="Google mapa Vladimira Varićaka 20"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.3397472694073!2d15.9561354!3d45.8064587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d6fe3a8949e3%3A0x492dc2e6c3c0ecf3!2sUl.%20Vladimira%20Vari%C4%87aka%2020%2C%2010000%2C%20Zagreb!5e0!3m2!1shr!2shr!4v1680194741133!5m2!1shr!2shr"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

        <section className="home-section">
          <h2>Spreman za vožnju?</h2>
          <p>Rezerviraj vozilo već danas i osiguraj najbolju cijenu!</p>
          <a href="/kontakt">Kontaktiraj nas</a>
        </section>

      </div></>

  );
};

export default Home;
