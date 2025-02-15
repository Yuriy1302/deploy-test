import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <nav className="navbar navbar-light bg-light justify-content-start">
      <Link to="/" className="navbar-brand">Панель навигации</Link>
      <div>
        <Link to="/authpage" style={{ marginLeft: '12px' }}>Authenticate</Link>
        <Link to="/content" style={{ marginLeft: '12px' }}>Content</Link>
        <Link to="/about" style={{ marginLeft: '12px' }}>About</Link>
      </div>
    </nav>
  );
};

export default Header;
