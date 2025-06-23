import React, { useState, useEffect } from "react";
import "../starterMenu.css";

function StartersSubmenu() {
    const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const updateItemsPerPage = () => {
      const isTouchDevice =
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0;
  
      const isPhoneOrTablet = window.innerWidth < 650;
  
      if (isTouchDevice && isPhoneOrTablet) {
        setItemsPerPage(15);
      } else {
        setItemsPerPage(10);
      }
    };
  
    updateItemsPerPage(); // run on mount
    window.addEventListener("resize", updateItemsPerPage); // update on resize
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const startersMenu = [
    { name: "Garlic Bread", price: 3.5, vegetarian: true, spicy: false, kcal: 200 },
    { name: "Bruschetta", price: 4.0, vegetarian: true, spicy: false, kcal: 200 },
    { name: "Chicken Wings", price: 5.5, vegetarian: false, spicy: true, kcal: 500 },
    { name: "Calamari", price: 5.0, vegetarian: false, spicy: false, kcal: 300 },
    { name: "Stuffed Mushrooms", price: 4.5, vegetarian: true, spicy: false, kcal: 600 },
    { name: "Mini Spring Rolls", price: 4.0, vegetarian: true, spicy: true, kcal: 350 },
    { name: "Meatballs in Marinara", price: 5.5, vegetarian: false, spicy: true, kcal: 450 },
    { name: "Mozzarella Sticks", price: 4.5, vegetarian: true, spicy: false, kcal: 320 }
  ];

  const vegStarters = startersMenu.filter(item => item.vegetarian);
  const nonVegStarters = startersMenu.filter(item => !item.vegetarian);

  const totalPages = Math.ceil(startersMenu.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedItems = startersMenu.slice(startIndex, startIndex + itemsPerPage);

  const paginatedVeg = paginatedItems.filter(item => item.vegetarian);
  const paginatedNonVeg = paginatedItems.filter(item => !item.vegetarian);

  return (
    <div className="starters-submenu">
      <h3 className="submenu-heading">Starters Menu</h3>
      <p className="pageCount">Page {currentPage} of {totalPages}</p>

      {paginatedVeg.length > 0 && (
        <div className="submenu-section">
          <h4 className="submenu-subheading"></h4>
          <ul className="submenu-list">
            {paginatedVeg.map((item) => (
              <li key={item.name} className="starter-item">
                {item.name} — £{item.price.toFixed(2)}
                <span className="main-kcal"> · {item.kcal} kcal</span>
                {item.vegetarian && <span className="veg-icon"> 🥦</span>}
                {item.spicy && <span className="spicy-icon"> 🌶️</span>}
              </li>
            ))}
          </ul>
        </div>
      )}

      {paginatedNonVeg.length > 0 && (
        <div className="submenu-section">
          <h4 className="submenu-subheading"></h4>
          <ul className="submenu-list">
            {paginatedNonVeg.map((item) => (
              <li key={item.name} className="starter-item">
                {item.name} — £{item.price.toFixed(2)}
                <span className="main-kcal"> · {item.kcal} kcal</span>
                {item.vegetarian && <span className="veg-icon"> 🥦</span>}
                {item.spicy && <span className="spicy-icon"> 🌶️</span>}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="pagination-buttons">
        <button
          onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default StartersSubmenu;
