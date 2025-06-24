import React, { useState, useEffect } from "react";
import "../mainCourseMenu.css";

function MainCourseSubmenu() {
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  // ✅ Adjust pagination based on screen/device type
  useEffect(() => {
    const updateItemsPerPage = () => {
      const isTouchDevice =
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0;

      const isPhoneOrTablet = window.innerWidth < 650;

      if (isTouchDevice && isPhoneOrTablet) {
        setItemsPerPage(12);
      } else {
        setItemsPerPage(12);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const mainCourses = [
    { name: "Fish & Chips", price: 10.5, kcal: 950, vegetarian: false, category: "Fish" },
    { name: "Scampi & Chips", price: 9.5, kcal: 820, vegetarian: false, category: "Fish" },
    { name: "Steak & Ale Pie with Mash", price: 12.0, kcal: 1100, vegetarian: false, category: "Grill" },
    { name: "Cumberland Sausage & Mash", price: 9.5, kcal: 890, vegetarian: false, category: "Grill" },
    { name: "Gammon Steak with Egg & Chips", price: 10.5, kcal: 980, vegetarian: false, category: "Grill" },
    { name: "Classic Cheeseburger with Fries", price: 9.5, kcal: 920, vegetarian: false, category: "Burgers" },
    { name: "Bacon Double Cheeseburger", price: 11.0, kcal: 1050, vegetarian: false, category: "Burgers" },
    { name: "Spicy Chicken Burger with Slaw", price: 10.0, kcal: 880, vegetarian: false, spicy: true, category: "Burgers" },
    { name: "Plant-Based Burger with Avocado", price: 9.0, kcal: 790, vegetarian: true, category: "Burgers" },
    { name: "Halloumi & Sweet Chilli Burger", price: 9.5, kcal: 820, vegetarian: true, spicy: true, category: "Burgers" },
    { name: "Chicken Tikka Masala with Rice", price: 11.0, kcal: 930, vegetarian: false, category: "Curry" },
    { name: "Paneer Jalfrezi with Rice", price: 10.0, kcal: 870, vegetarian: true, spicy: true, category: "Curry" },
    { name: "Spicy Three-Bean Chilli", price: 9.0, kcal: 760, vegetarian: true, spicy: true, category: "Vegetarian" },
    { name: "Mushroom & Spinach Wellington", price: 9.5, kcal: 810, vegetarian: true, category: "Vegetarian" },
    { name: "Vegetarian Nut Roast", price: 8.5, kcal: 700, vegetarian: true, category: "Vegetarian" },
    { name: "Mac & Cheese with Jalapeños", price: 8.5, kcal: 740, vegetarian: true, spicy: true, category: "Vegetarian" },
    { name: "Beef Lasagne with Garlic Bread", price: 10.0, kcal: 870, vegetarian: false, category: "Pasta" }
  ];

  const categoryIcons = {
    Fish: "🐟",
    Grill: "🔥",
    Burgers: "🍔",
    Curry: "🍛",
    Vegetarian: "🥦",
    Pasta: "🍝"
  };

  const totalPages = Math.ceil(mainCourses.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedItems = mainCourses.slice(startIndex, startIndex + itemsPerPage);

  // ✅ Group paginated items by category
  const groupedByCategory = paginatedItems.reduce((acc, item) => {
    const cat = item.category;
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(item);
    return acc;
  }, {});

  return (
    <div className="maincourse-submenu">
      <h3 className="submenu-heading">Main Courses</h3>
      <p className="pageCount">Page {currentPage} of {totalPages}</p>

      {Object.entries(groupedByCategory).map(([category, items]) => (
        <div key={category} className="submenu-section">
          <h4 className="submenu-subheading">
            {category}
          </h4>
          <ul className="submenu-list">
            {items.map(item => (
              <li key={item.name} className="maincourse-item">
                <span className="main-name">{item.name}</span> — 
                <span className="main-price"> £{item.price.toFixed(2)}</span>
                <span className="main-kcal"> · {item.kcal} kcal</span>
                {item.vegetarian && <span className="veg-icon"> 🥦</span>}
                {item.spicy && <span className="spicy-icon"> 🌶️</span>}
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="pagination-buttons">
        <button onClick={() => setCurrentPage(p => Math.max(p - 1, 1))} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}

export default MainCourseSubmenu;

