import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function ItemDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [item, setItem] = useState<any>(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/items/${id}`)
      .then(res => setItem(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const addToCart = () => {
    axios.post(`http://localhost:8080/api/cart/add/${id}`)
      .then(() => navigate("/cart"))
      .catch(err => console.error(err));
  };

  if (!item) return <div>Loading...</div>;

  return (
    <div>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>${item.price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}