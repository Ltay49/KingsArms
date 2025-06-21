import React, { useState } from "react";
import "../foodSection.css";
import PubFront from "/PubFront.png";

function FoodSection() {
  const categories = ["Beverages", "Starters", "Mains", "Desserts"];
  const [hovered, setHovered] = useState(null);

  return (
    <section
      className={`food-section ${hovered ? `bg-${hovered.toLowerCase()}` : ""}`}
    > 
      <img
        src={PubFront}
        alt="Pub Front"
        className={`full-image ${hovered ? "hidden-image" : ""}`}
      />

      <ul className="food-list">
        {categories.map((category) => (
          <li
            key={category}
            className="food-item"
            onMouseEnter={() => setHovered(category)}
            onMouseLeave={() => setHovered(null)}
          >
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default FoodSection;
