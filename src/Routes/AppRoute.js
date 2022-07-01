import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../PortfolioContainer/Home/Home';

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/angelvzzportfolio" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
