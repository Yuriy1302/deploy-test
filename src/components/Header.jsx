import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <nav className="navbar navbar-light bg-light justify-content-start">
      <Link to="/" className="navbar-brand">Панель навигации</Link>
      <div>
        <Link to="/authpage" style={{ marginLeft: '12px' }}>Auth Page</Link>
        <Link to="/about" style={{ marginLeft: '12px' }}>About Page</Link>
      </div>
    </nav>
  );
};

export default Header;
