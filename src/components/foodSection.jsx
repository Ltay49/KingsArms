import React, { useState } from "react";
import "../foodSection.css";
import BeverageSubmenu from "./beverageMenu";
import StartersSubmenu from "./StartersSubmenu";
import MainCourseSubmenu from "./MainCourseSubmenu";
import BarImage from "/BarFront.png";

function FoodSection() {
  const categories = ["Beverages", "Starters", "Mains", "Desserts"];
  const [hovered, setHovered] = useState("Beverages");

  return (
    <section
      className={`food-section ${hovered ? `bg-${hovered.toLowerCase()}` : ""}`}
      // Reset to Beverages when mouse leaves the whole section (optional)
      onMouseLeave={() => setHovered("Beverages")}
    >
      <img src={BarImage} alt="Bar Front" className="full-image" />

      <ul className="food-list">
        {categories.map((category) => (
          <li
            key={category}
            className={`food-item ${hovered === category ? "active" : ""}`}
            onMouseEnter={() => setHovered(category)} // update only on hover
            // Remove onMouseLeave here!
          >
            {category}
          </li>
        ))}
      </ul>

      <div className="menu-wrapper">
        <section className="menu">
          {hovered === "Beverages" && <BeverageSubmenu />}
          {hovered === "Starters" && <StartersSubmenu />}
          {hovered === "Mains" && <MainCourseSubmenu />}
          {/* You can add <DessertSubmenu /> here later */}
        </section>
      </div>
    </section>
  );
}

export default FoodSection;
