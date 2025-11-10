import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ItemsPage = () => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/items", { withCredentials: true })
     .then(res => setItems(res.data))
      .catch(err => console.error(err));
  }, []);

  const addToCart = (item) => {
    if (!cart.find(i => i.id === item.id)) {
      setCart([...cart, item]);
    }
  };

  return (
    <div>
      <h1>Items</h1>
      <h2>Cart ({cart.length})</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <Link to={`/item/${item.id}`}>{item.name}</Link> - ₹{item.price} 
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemsPage;
