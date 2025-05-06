
import React from 'react';
import './Pogodnosti.css';

const Pogodnosti = () => {
  return (
    <div className="pogodnosti-page">
      <h1>Naše pogodnosti</h1>
      <div className="cloud-container">

        <div className="cloud-box">
          <h2>🚗 Neograničena kilometraža</h2>
          <p>
            Uživajte u slobodi vožnje bez ograničenja kilometara. Vozite bez brige kamo god vas put odvede!
          </p>
        </div>

        <div className="cloud-box">
          <h2>💶 Uključen PDV</h2>
          <p>
            Sve naše cijene uključuju PDV, bez skrivenih troškova. Transparentnost je naše pravilo.
          </p>
        </div>

        <div className="cloud-box">
          <h2>📦 Besplatna dostava</h2>
          <p>
            Za najam duži od 3 dana dostavljamo vozilo na vašu lokaciju potpuno besplatno unutar Zagreba.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Pogodnosti;
