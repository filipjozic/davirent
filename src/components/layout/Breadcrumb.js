import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Breadcrumb.css';

const Breadcrumb = () => {
  const location = useLocation();

  // Pretvori URL u niz segmenata, npr. "/vozila" => ["vozila"]
  const pathnames = location.pathname.split('/').filter(x => x);

  return (
    <nav className="breadcrumb">
      <Link to="/">Početna</Link>
      {pathnames.map((name, index) => {
        const routeTo = '/' + pathnames.slice(0, index + 1).join('/');
        const formatted = name.charAt(0).toUpperCase() + name.slice(1);
        return (
          <span key={index}>
            {' / '}
            <Link to={routeTo}>{formatted}</Link>
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;