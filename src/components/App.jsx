import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Header';
import HomePage from './HomePage';
import AuthPage from './AuthPage';
import AboutPage from './AboutPage';
import ContentPage from './ContentPage';

function App() {

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/authpage" element={<AuthPage />} />
            <Route path="/content" element={<ContentPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
