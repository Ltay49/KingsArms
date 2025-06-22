import React, { useState, useEffect, useRef } from "react";
import "../foodSection.css";
import BeverageSubmenu from "./beverageMenu";
import StartersSubmenu from "./StartersSubmenu";
import MainCourseSubmenu from "./MainCourseSubmenu";
import BarImage from "/BarFront.png";
import DessertsSubmenu from "./DessertsSubmenu";

function FoodSection() {
  const categories = ["Beverages", "Starters", "Mains", "Desserts"];
  const [hovered, setHovered] = useState("Beverages");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 650);
  const scrollRef = useRef(null);

  // Update on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 650);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll handler: update hovered based on scroll position
  useEffect(() => {
    if (!isMobile || !scrollRef.current) return;

    const handleScroll = () => {
      const index = Math.round(scrollRef.current.scrollLeft / window.innerWidth);
      setHovered(categories[index]);
    };

    const container = scrollRef.current;
    container.addEventListener("scroll", handleScroll, { passive: true });

    return () => container.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  return (
    <section
      className={`food-section ${hovered ? `bg-${hovered.toLowerCase()}` : ""}`}
    >
      <img src={BarImage} alt="Bar Front" className="full-image" />

      {!isMobile && (
        <ul className="food-list">
          {categories.map((category) => (
            <li
              key={category}
              className={`food-item ${hovered === category ? "active" : ""}`}
              onMouseEnter={() => setHovered(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      )}

      {isMobile ? (
        <div className="menu-scroll-container" ref={scrollRef}>
          <div className="menu-wrapper">
            <section className="menu"><BeverageSubmenu /></section>
          </div>
          <div className="menu-wrapper">
            <section className="menu"><StartersSubmenu /></section>
          </div>
          <div className="menu-wrapper">
            <section className="menu"><MainCourseSubmenu /></section>
          </div>
          <div className="menu-wrapper">
            <section className="menu"><DessertsSubmenu /></section>
          </div>
        </div>
      ) : (
        <div className="menu-wrapper">
          <section className="menu">
            {hovered === "Beverages" && <BeverageSubmenu />}
            {hovered === "Starters" && <StartersSubmenu />}
            {hovered === "Mains" && <MainCourseSubmenu />}
            {hovered === "Desserts" && <DessertsSubmenu />}
          </section>
        </div>
      )}
    </section>
  );
}

export default FoodSection;
