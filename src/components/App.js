import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const appClass = darkMode ? "App dark" : "App light"

  function handleModeChange(){
    setDarkMode(!darkMode);
  }  

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleModeChange}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;

  // replace 'false' with a state variable that can be 
  //toggled between true and false
  // this will be used for the Dark Mode Toggle feature