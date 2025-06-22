import React from "react";
import "../dessertMenu.css";

function DessertsSubmenu() {
  const desserts = [
    { name: "Sticky Toffee Pudding", price: 5.5, kcal: 620, vegetarian: true },
    { name: "Apple Crumble with Custard", price: 5.0, kcal: 580, vegetarian: true },
    { name: "Chocolate Fudge Cake", price: 5.0, kcal: 650, vegetarian: true },
    { name: "Ice Cream Sundae", price: 4.5, kcal: 400, vegetarian: true },
    { name: "Treacle Tart", price: 5.0, kcal: 600, vegetarian: true },
    { name: "Lemon Meringue Pie", price: 4.8, kcal: 550, vegetarian: true },
    { name: "Cheeseboard with Crackers", price: 6.5, kcal: 700, vegetarian: false } // contains animal rennet
  ];

  const vegDesserts = desserts.filter(d => d.vegetarian);
  const nonVegDesserts = desserts.filter(d => !d.vegetarian);

  return (
    <div className="dessert-submenu">
      <h3 className="submenu-headingDes">Desserts Menu</h3>
      <p className="pageCountDes">1 - 1</p>
      <div className="submenu-section">
        <h4 className="submenu-subheading">Vegetarian</h4>
        <ul className="submenu-list">
          {vegDesserts.map(item => (
            <li key={item.name} className="dessert-item">
              <span className="dessert-name">{item.name}</span> — 
              <span className="dessert-price"> £{item.price.toFixed(2)}</span>
              <span className="dessert-kcal"> · {item.kcal} kcal</span>
            </li>
          ))}
        </ul>
      </div>

      {nonVegDesserts.length > 0 && (
        <div className="submenu-section">
          <h4 className="submenu-subheading">Non-Vegetarian</h4>
          <ul className="submenu-list">
            {nonVegDesserts.map(item => (
              <li key={item.name} className="dessert-item">
                <span className="dessert-name">{item.name}</span> — 
                <span className="dessert-price"> £{item.price.toFixed(2)}</span>
                <span className="dessert-kcal"> · {item.kcal} kcal</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default DessertsSubmenu;
