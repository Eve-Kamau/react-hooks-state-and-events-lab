import React, { useState} from "react";

function Item({ name, category }) {
   const [count, setCount] = useState(0);
   const inCart = count ? "in-cart" : "";

   function handleItem() {
    setCount(count + 1);
   }

  return (
    <li className={inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleItem}>Add to Cart</button>
    </li>
  );
}

export default Item;

