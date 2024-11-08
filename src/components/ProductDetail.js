// src/components/ProductDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail({ products }) {
  const { productId } = useParams();
  const product = products.find(p => p.id === parseInt(productId));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} style={{ width: '400px', height: 'auto' }} />
      <p>Price: {product.price}€</p>
      <p>Category: {product.category}</p>
      {/* Ajoutez des détails supplémentaires si nécessaire */}
    </div>
  );
}

export default ProductDetail;
