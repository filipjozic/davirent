
import React, { useState, useEffect } from 'react';
import './Kontakt.css';
import { useLocation } from 'react-router-dom';

const Kontakt = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedCar = searchParams.get('car');

  const [formData, setFormData] = useState({
    ime: '',
    email: '',
    broj: '',
    datum: '',
    poruka: selectedCar ? `Zanima me rezervacija vozila: ${selectedCar}` : ''
  });

  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (selectedCar) {
      setFormData((prev) => ({
        ...prev,
        poruka: `Zanima me rezervacija vozila: ${selectedCar}`
      }));
    }
  }, [selectedCar]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSuccess(true);
    setFormData({ ime: '', email: '', broj: '', datum: '', poruka: '' });
  };

  return (
    <div className="kontakt-page">
      <h1>Kontaktirajte nas</h1>
      {success && <div className="success-message">Vaša poruka je uspješno poslana!</div>}
      <form className="kontakt-form" onSubmit={handleSubmit}>
        <label>
          Ime i prezime:
          <input type="text" name="ime" value={formData.ime} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Kontakt broj:
          <input type="tel" name="broj" value={formData.broj} onChange={handleChange} required />
        </label>
        <label>
          Željeni datum rezervacije:
          <input type="date" name="datum" value={formData.datum} onChange={handleChange} required />
        </label>
        <label>
          Poruka:
          <textarea name="poruka" value={formData.poruka} onChange={handleChange}></textarea>
        </label>
        <button type="submit">Pošalji</button>
      </form>
      <div className="whatsapp-link">
        <p>Ili nas kontaktirajte direktno putem WhatsAppa:</p>
        <a href="https://wa.me/385956328607" target="_blank" rel="noopener noreferrer">
          +385 95 632 8607 (WhatsApp)
        </a>
      </div>
    </div>
  );
};

export default Kontakt;

