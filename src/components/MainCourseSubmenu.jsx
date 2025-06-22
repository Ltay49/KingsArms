import React from "react";
import "../mainCourseMenu.css";

function MainCourseSubmenu() {
  const mainCourses = [
    { name: "Fish & Chips", price: 10.5, kcal: 950, vegetarian: false },
    { name: "Steak & Ale Pie with Mash", price: 12.0, kcal: 1100, vegetarian: false },
    { name: "Cumberland Sausage & Mash", price: 9.5, kcal: 890, vegetarian: false },
    { name: "Chicken Tikka Masala with Rice", price: 11.0, kcal: 930, vegetarian: false },
    { name: "Beef Lasagne with Garlic Bread", price: 10.0, kcal: 870, vegetarian: false },
    { name: "Scampi & Chips", price: 9.5, kcal: 820, vegetarian: false },
    { name: "Vegetarian Nut Roast", price: 8.5, kcal: 700, vegetarian: true },
    { name: "Gammon Steak with Egg & Chips", price: 10.5, kcal: 980, vegetarian: false },
    { name: "Spicy Three-Bean Chilli", price: 9.0, kcal: 760, vegetarian: true, spicy: true },
  { name: "Mushroom & Spinach Wellington", price: 9.5, kcal: 810, vegetarian: true, spicy: false },
  { name: "Paneer Jalfrezi with Rice", price: 10.0, kcal: 870, vegetarian: true, spicy: true },
  { name: "Mac & Cheese with Jalapeños", price: 8.5, kcal: 740, vegetarian: true, spicy: true }
  ];

  const vegetarianMains = mainCourses.filter(item => item.vegetarian);
  const nonVegetarianMains = mainCourses.filter(item => !item.vegetarian);

  return (
    <div className="maincourse-submenu">
      <h3 className="submenu-heading">Main Courses</h3>
      <div className="submenu-section">
        <h4 className="submenu-subheading">Vegetarian</h4>
        <ul className="submenu-list">
          {vegetarianMains.map((item) => (
            <li key={item.name} className="maincourse-item">
              <span className="main-name">{item.name}</span> — 
              <span className="main-price"> £{item.price.toFixed(2)}</span>
              <span className="main-kcal"> · {item.kcal} kcal</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="submenu-section">
        <h4 className="submenu-subheading">Non-Vegetarian</h4>
        <ul className="submenu-list">
          {nonVegetarianMains.map((item) => (
            <li key={item.name} className="maincourse-item">
              <span className="main-name">{item.name}</span> — 
              <span className="main-price"> £{item.price.toFixed(2)}</span>
              <span className="main-kcal"> · {item.kcal} kcal</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MainCourseSubmenu;


