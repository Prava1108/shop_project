import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

type Item = {
  id: number;
  name: string;
  price: number;
};

export default function ItemList() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/items")
      .then(res => setItems(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Items</h2>
      <ul>
        {items.slice(0,5).map(i => (
          <li key={i.id}>
            <Link to={`/item/${i.id}`}>{i.name}</Link> - ${i.price}
          </li>
        ))}
      </ul>
    </div>
  );
}