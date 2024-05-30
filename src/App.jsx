import React from 'react';
import {BrowserRouter, Routes, Route, Outlet, Link} from 'react-router-dom';

import './App.css';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import WelcomePage from './WelcomePage';

function App() {

  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
  };

  const decrement = () => {
    setCount(prev => prev - 1);
  };


  return (
    <div className="App">
      <h2>Value = {count}</h2>
      <div style={{ margin: '32px' }}>
        <button onClick={increment} style={{ padding: '10px 20px', margin: '10px', fontSize: '24px' }}>INC</button>
        <button onClick={decrement} style={{ padding: '10px 20px', margin: '10px', fontSize: '24px' }}>DEC</button>
      </div>
      <div>
        <BrowserRouter>
          <nav style={{ fontSize: '32px' }}>
            <Link to="/" className='mr-3'>Home</Link>
            <Link to="/about" className='mr-3'>About</Link>
            <Link to="/welcome">Welcome</Link>
          </nav>
          <hr />
          <div>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/welcome" element={<WelcomePage />} />
            </Routes>
          </div>
          <div>
            <Outlet />
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
