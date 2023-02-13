import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [categoryBy, selectedCategory] = useState("All");

  function handleLiClick(id){
    const index = Math.floor(Math.random() * items.length);
    const newItemArray = items.filter(item => {
    if (item.id === id){
      return {
        ...item[index],
      };
      } else {
        return item;
    }
  });
    selectedCategory(newItemArray);
 }

function handleFilterChange(e) {
  selectedCategory(e.target.value);
 }

  const itemsByCategory = items.filter((item) => {
    if (categoryBy === "All") {
      return true;
      } else {
        return item.category === categoryBy;
      }
    });

  const itemList = itemsByCategory.map((item) => (
    <li key={item.id} onClick={() => handleLiClick(item.id)}>
    {item.name} {item.category} 
    </li>
  ));

  return (
    <div className="ShoppingList">
      <div className="Filter">
      {itemList}
         <select name="filter" onChange={handleFilterChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>

      <ul className="Items">
        {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
