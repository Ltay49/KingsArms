import React from "react";
import "../starterMenu.css";

function StartersSubmenu() {
  const startersMenu = [
    { name: "Garlic Bread", price: 3.5, vegetarian: true, kcal:200 },
    { name: "Bruschetta", price: 4.0, vegetarian: true, kcal:200},
    { name: "Chicken Wings", price: 5.5, vegetarian: false, kcal:500 },
    { name: "Calamari", price: 5.0, vegetarian: false, kcal:300 },
    { name: "Stuffed Mushrooms", price: 4.5, vegetarian: true, kcal:600 },
    { name: "Mini Spring Rolls", price: 4.0, vegetarian: true, kcal:350 },
    { name: "Meatballs in Marinara", price: 5.5, vegetarian: false, kcal:450 },
    { name: "Mozzarella Sticks", price: 4.5, vegetarian: true, kcal:320 }
  ];

  const vegStarters = startersMenu.filter(item => item.vegetarian);
  const nonVegStarters = startersMenu.filter(item => !item.vegetarian);

  return (
    <div className="starters-submenu">
      <h3 className="submenu-heading">Starters Menu</h3>
      <p className="pageCount">1 - 1</p>
      <div className="submenu-section">
        <h4 className="submenu-subheading">Vegetarian</h4>
        <ul className="submenu-list">
          {vegStarters.map((item) => (
            <li key={item.name} className="starter-item">
              {item.name} — £{item.price.toFixed(2)}
              <span className="main-kcal"> · {item.kcal} kcal</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="submenu-section">
        <h4 className="submenu-subheading">Non-Vegetarian</h4>
        <ul className="submenu-list">
          {nonVegStarters.map((item) => (
            <li key={item.name} className="starter-item">
              {item.name} — £{item.price.toFixed(2)}
              <span className="main-kcal"> · {item.kcal} kcal</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default StartersSubmenu;
