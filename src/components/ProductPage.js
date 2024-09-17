// components/ProductPage.js
import React from 'react';
import './ProductPage.css';

const ProductPage = () => {
  const products = [
    { id: 1, name: 'Signage 1', price: 100 },
    { id: 2, name: 'Signage 2', price: 150 },
    { id: 3, name: 'Signage 3', price: 200 },
  ];

  return (
    <div className="product-page">
      <h2>Our Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductPage;
