// src/components/Product.js
import React from 'react';
import { Link } from 'react-router-dom';

function Product({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <h2>{product.name}</h2>
        <img src={product.image} alt={product.name} style={{ width: '200px', height: 'auto' }} />
      </Link>
      <p>Price: {product.price}€</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default Product;
