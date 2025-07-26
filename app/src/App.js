import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importing page components
import Homepage from './pages/homepage';
import SellerPage from './pages/SellerPage';
import VendorPage from './pages/VendorPage';
import Login from './pages/login';
import Register from './pages/register';

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing page */}
        <Route path="/" element={<Homepage />} />

        {/* Role-based pages */}
        <Route path="/seller" element={<SellerPage />} />
        <Route path="/vendor" element={<VendorPage />} />

        {/* Auth pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
