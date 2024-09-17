// components/HomePage.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css'; 

const HomePage = () => {
  return (
    <div className="container my-5">
      <section className="text-center py-5">
        <h2 className="text-primary">Welcome to Sign First</h2>
        <p className="lead">We provide high-quality signages for various needs. Our products range from outdoor signs to digital signage.</p>
      </section>

      <section className="carousel-section py-5">
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/path-to-signage1.jpg" className="d-block w-100" alt="Signage Type 1" />
            </div>
            <div className="carousel-item">
              <img src="/path-to-signage2.jpg" className="d-block w-100" alt="Signage Type 2" />
            </div>
            <div className="carousel-item">
              <img src="/path-to-signage3.jpg" className="d-block w-100" alt="Signage Type 3" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      <section className="text-center py-5">
        <h3 className="text-primary">Need Customized Signages?</h3>
        <p>Contact us for a free quote!</p>
        <button className="btn btn-primary">Get a Quote</button>
      </section>
    </div>
  );
};

export default HomePage;
