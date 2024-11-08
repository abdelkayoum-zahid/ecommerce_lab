// src/components/ProductList.js
import React, { useState } from 'react';
import Product from './Product';

function ProductList({ products, onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Electronics', 'Clothing', 'Books'];

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="container">
      <div style={{ marginBottom: '20px' }}>
        <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>
      <div className="list">
        {filteredProducts.map(product => (
          <Product key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
