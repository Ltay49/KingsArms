import React from "react";
import "../beverageMenu.css";

function BeverageSubmenu() {
  const drinkMenu = [
    { name: "Cider", price: 3.0, alcoholPercent: 4.5 },
    { name: "Lager", price: 3.5, alcoholPercent: 5.0 },
    { name: "Whiskey", price: 4.5, alcoholPercent: 40.0 },
    { name: "Red Wine", price: 4.0, alcoholPercent: 13.5 },
    { name: "White Wine", price: 4.0, alcoholPercent: 12.5 },
    { name: "Vodka", price: 4.0, alcoholPercent: 37.5 },
    { name: "Rum", price: 4.2, alcoholPercent: 35.0 },
    { name: "Gin & Tonic", price: 4.0, alcoholPercent: 12.0 },
    { name: "Coca-Cola", price: 2.0, alcoholPercent: 0.0 },
    { name: "Lemonade", price: 2.0, alcoholPercent: 0.0 }
  ];

  const alcoholicDrinks = drinkMenu.filter(drink => drink.alcoholPercent > 0);
  const nonAlcoholicDrinks = drinkMenu.filter(drink => drink.alcoholPercent === 0);

  return (
    <>
    <div className="heading-box"></div>
    <div className="beverage-submenu">
      <h3 className="submenu-heading">Drinks Menu</h3>

      <div className="submenu-section">
        <h4 className="submenu-subheading">Alcoholic Beverages</h4>
        <ul className="submenu-list">
          {alcoholicDrinks.map((drink) => (
            <li key={drink.name} className="beverage-item">
              {drink.name} — £{drink.price.toFixed(2)} ({drink.alcoholPercent}% ABV)
            </li>
          ))}
        </ul>
      </div>

      <div className="submenu-section">
        <h4 className="submenu-subheading">Non-Alcoholic Beverages</h4>
        <ul className="submenu-list">
          {nonAlcoholicDrinks.map((drink) => (
            <li key={drink.name} className="beverage-item">
              {drink.name} — £{drink.price.toFixed(2)} (Non-alcoholic)
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
}

export default BeverageSubmenu;

