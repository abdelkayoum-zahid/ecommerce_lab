// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import ProductDetail from './components/ProductDetail'; // Importez le composant
import image1 from './assets/images/image1.jpg';
import image2 from './assets/images/image2.jpg';

import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    { id: 1, name: 'Product 1', price: 10, image: image1, category: 'Electronics' },
    { id: 2, name: 'Product 2', price: 15, image: image2, category: 'Books' },
    // Ajoutez d'autres produits si nécessaire
  ];

// src/App.js

// Fonction pour ajouter un produit au panier
const handleAddToCart = (product) => {
  setCartItems(prevItems => {
    const existingItem = prevItems.find(item => item.id === product.id);
    if (existingItem) {
      return prevItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      return [...prevItems, { ...product, quantity: 1 }];
    }
  });
};

// Fonction pour retirer un produit du panier
const handleRemoveFromCart = (productId) => {
  setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
};

// Fonction pour réduire la quantité d'un produit dans le panier
const handleDecreaseQuantity = (productId) => {
  setCartItems(prevItems =>
    prevItems.map(item =>
      item.id === productId
        ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
        : item
    )
  );
};


  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<ProductList products={products} onAddToCart={handleAddToCart} />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              onAddToCart={handleAddToCart}
              onRemoveFromCart={handleRemoveFromCart}
              onDecreaseQuantity={handleDecreaseQuantity}
            />
          }
        />
        <Route
          path="/product/:productId"
          element={<ProductDetail products={products} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
