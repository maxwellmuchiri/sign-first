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
              <img src="https://scontent-mba1-1.xx.fbcdn.net/v/t39.30808-6/376620967_624687836452328_4126194712302784690_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=y4-gB2JNUmcQ7kNvgGYMrRk&_nc_ht=scontent-mba1-1.xx&_nc_gid=AsU5-2bKSnnub2_mFNK-W7j&oh=00_AYDIGl1Oe1vWozAGThmsEeCyapXFLVLmau9UJn8WjBB_Yg&oe=66EFC36F" className="d-block w-100" alt="Signage Type 1" />
            </div>
            <div className="carousel-item">
              <img src="https://scontent-mba1-1.xx.fbcdn.net/v/t39.30808-6/376646800_624687526452359_9100086174277594774_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=GJnu7-pGGvIQ7kNvgFbG5Ci&_nc_ht=scontent-mba1-1.xx&_nc_gid=ASpf5XxtqWENN3QEVa8sax9&oh=00_AYARz8G88Bbw4A9m0t396TWJBC-ZQuQjLPTBKz8IkW6Lng&oe=66EFBC5D" className="d-block w-100" alt="Signage Type 2" />
            </div>
            <div className="carousel-item">
              <img src="https://scontent-mba1-1.xx.fbcdn.net/v/t39.30808-6/376621405_624687686452343_7779565930076370935_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=wf2gsC76qg0Q7kNvgH5z-pO&_nc_ht=scontent-mba1-1.xx&oh=00_AYDOLa7_hclfDKlEMrI-aMI1rhqJMwnzv3a7LrmJkmCp2g&oe=66EFB7BD" className="d-block w-100" alt="Signage Type 3" />
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
