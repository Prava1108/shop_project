import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ItemDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/items/${id}`, { withCredentials: true })
      .then(res => setItem(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!item) return <p>Loading...</p>;

  return (
    <div>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>Price: ₹{item.price}</p>
      <button disabled>Buy</button>
    </div>
  );
};

export default ItemDetails;
