
import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div className="blog-page">
      
      <div className="blog-grid">

        <div className="blog-card">
          <h2>📆 Kako planirati najam vozila za putovanje</h2>
          <p>
            Donosimo ključne savjete kako rezervirati vozilo, na što paziti prilikom preuzimanja i kako optimizirati troškove putovanja...
          </p>
          <Link to="/blog/planiranje" className="blog-button">Pročitaj više</Link>
        </div>

        <div className="blog-card">
          <h2>🧼 Savjeti za čistoću i sigurnost u vozilu</h2>
          <p>
            Kako održavati vozilo čistim tijekom najma, koje su sigurnosne navike preporučene i što nudimo za vašu zaštitu...
          </p>
          <Link to="/blog/sigurnost" className="blog-button">Pročitaj više</Link>
        </div>

        <div className="blog-card">
          <h2>💡 Što je uključeno u cijenu najma kod nas?</h2>
          <p>
            Što sve dobivate u cijeni najma kod DAVI Rent a Car – osiguranje, poreze i dodatne pogodnosti...
          </p>
          <Link to="/blog/ukljuceno" className="blog-button">Pročitaj više</Link>
        </div>

      </div>
    </div>
  );
};

export default Blog;
