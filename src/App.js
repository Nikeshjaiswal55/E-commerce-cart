import React from 'react';
import Home from './Page/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartDetail from './Page/cart/CartDetail';
import Header from './components/header/Header';


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;