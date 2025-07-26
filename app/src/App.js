import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import SellerPage from './pages/SellerPage';
import VendorPage from './pages/VendorPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/seller" element={<SellerPage />} />
        <Route path="/vendor" element={<VendorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
