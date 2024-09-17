import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Import 'Routes' instead of 'Switch'

// Importing components
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Footer from './components/Footer';

// Importing CSS
import './App.css'; // Optional: Add global styles if needed

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <Navbar />

        {/* Main content area */}
        <main>
          <Routes>  {/* Use 'Routes' instead of 'Switch' */}
            {/* Home Page Route */}
            <Route path="/" element={<HomePage />} /> {/* Use 'element' prop in Route */}
            {/* Additional Routes can be added here as your project expands */}
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;

