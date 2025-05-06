import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import CarSlider from '.src/components/car-slider/Car-slider.js';

function Home() {
    return (
        <div className="home-page">

            {/* HERO sekcija sa slikom iz public foldera */}
            <section
                className="hero"
                style={{ backgroundImage: "url('/images/hero-bg.png')" }}
            >
                <h1>Dobrodošli u DAVI Rent a Car</h1>
                <p>Najpouzdaniji najam vozila u Zagrebu</p>
                <Link to="/vozila" className="btn-primary">Pogledaj vozila</Link>
            </section>

            {/* BENEFITI */}
            <section className="benefits">
                <h2>Zašto izabrati nas?</h2>
                <div className="benefit-list">
                    <div className="benefit-item">🚗 Nova i pouzdana vozila</div>
                    <div className="benefit-item">📍 Besplatna dostava u Zagrebu</div>
                    <div className="benefit-item">💶 Povoljne cijene i popusti</div>
                    <div className="benefit-item">📞 Podrška 0-24</div>
                </div>
            </section>

            <CarSlider />

            {/* CTA */}
            <section className="cta">
                <h2>Spreman za vožnju?</h2>
                <p>Rezerviraj vozilo već danas i osiguraj najbolju cijenu!</p>
                <Link to="/kontakt" className="btn-secondary">Kontaktiraj nas</Link>
            </section>

        </div>
    );
}

export default Home;