// src/components/Cart.js
import React from 'react';

function Cart({ cartItems, onAddToCart, onRemoveFromCart, onDecreaseQuantity }) {
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <p>Total Items: {totalQuantity}</p>
      <p>Total Amount: ${totalAmount.toFixed(2)}</p>
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <div>{item.name} - ${item.price} x {item.quantity}</div>
          <button onClick={() => onAddToCart(item)}>+</button>
          <button onClick={() => onDecreaseQuantity(item.id)}>-</button>
          <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default Cart;
