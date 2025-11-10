import { useEffect, useState } from "react";
import axios from "axios";

export default function Cart() {
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/cart/view")
      .then(res => setCart(res.data || []))
      .catch(err => console.error(err));
  }, []);

  const buyNow = () => {
    axios.post("http://localhost:8080/api/cart/buy")
      .then(() => {
        alert("Purchase successful");
        setCart([]);
      })
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 && <div>Cart is empty</div>}
      {cart.map(i => <div key={i.id}>{i.name} - ${i.price}</div>)}
      <button onClick={buyNow} disabled={cart.length === 0}>Buy Now</button>
    </div>
  );
}