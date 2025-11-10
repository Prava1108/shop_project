import React from "react";

export default function CartPage({ cart }) {
  return (
    <div>
      <h1>Cart</h1>
      {cart.length === 0 ? <p>No items in cart</p> : (
        cart.map(item => (
          <div key={item.id}>
            {item.name} - ₹{item.price} <button disabled>Buy</button>
          </div>
        ))
      )}
    </div>
  );
}
