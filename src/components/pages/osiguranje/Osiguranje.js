import React from 'react';
import './Osiguranje.css';

const Osiguranje = () => {
  return (
    <div className="osiguranje-page">
      <h1>Osiguranje vozila i putnika</h1>
      <div className="osiguranje-grid">

        <div className="osiguranje-card">
          <h2>🛡️ KASKO osiguranje</h2>
          <p>
            Sva naša vozila su pokrivena punim KASKO osiguranjem koje uključuje pokriće u slučaju prometne nesreće, krađe, oštećenja od tuče i drugih nepredviđenih situacija. 
            Franšiza je niska, a osiguranje vrijedi u cijeloj EU.
          </p>
        </div>

        <div className="osiguranje-card">
          <h2>👥 Osiguranje putnika</h2>
          <p>
            Putnici u našim vozilima automatski su osigurani od nezgoda tijekom vožnje. Osiguranje pokriva ozljede, medicinsku pomoć i transport u hitnim slučajevima.
          </p>
        </div>

        <div className="osiguranje-card">
          <h2>🧳 Osiguranje osobnih stvari</h2>
          <p>
            U slučaju krađe ili oštećenja vaših osobnih stvari u vozilu, pokrivamo štetu do određenog iznosa. Ponesite svoje stvari bez brige – sigurnost vam je zagarantirana.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Osiguranje;