import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  

// Importing components
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ProductPage from './components/ProductPage';  // Import ProductPage
import Footer from './components/Footer';

// Importing CSS
import './App.css'; 


function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <Navbar />

        {/* Main content area */}
        <main>
          <Routes>  
            {/* Home Page Route */}
            <Route path="/" element={<HomePage />} />
            {/* Product Page Route */}
            <Route path="/products" element={<ProductPage />} />  {/* Add ProductPage route */}
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;

