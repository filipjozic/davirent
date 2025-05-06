import React, { useState } from 'react';
import './ONama.css';

const pitanja = [
  {
    naslov: '💼 Tko smo mi?',
    tekst: 'DAVI Rent a Car je mlada i dinamična tvrtka osnovana s ciljem da poveže ljude s kvalitetnim, pouzdanim i pristupačnim prijevozom. Specijalizirani smo za iznajmljivanje vozila i taksi prijevoz na području Zagreba i okolice.'
  },
  {
    naslov: '🚕 Naša ponuda',
    tekst: 'Nudimo široku paletu vozila – od praktičnih gradskih automobila do udobnih karavana. Također pružamo personalizirane taksi usluge s profesionalnim vozačima, 24/7 dostupnima za vaše potrebe.'
  },
  {
    naslov: '🎯 Naša misija',
    tekst: 'Naša misija je pružiti svakom klijentu vrhunsku uslugu, jednostavan proces rezervacije i potpunu sigurnost na cesti. Povjerenje, transparentnost i fleksibilnost su temelj našeg poslovanja.'
  }
];

const ONama = () => {
  const [otvoreno, setOtvoreno] = useState(null);

  const toggle = (index) => {
    setOtvoreno(otvoreno === index ? null : index);
  };

  return (
    <div className="onama-page">
      <h1>O nama</h1>
      <div className="cloud-container">
        {pitanja.map((item, index) => (
          <div className="cloud-box" key={index} onClick={() => toggle(index)}>
            <h2>{item.naslov}</h2>
            {otvoreno === index && <p>{item.tekst}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ONama;