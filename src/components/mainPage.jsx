import React from "react";
import BarImage from "/BarFront.png";
import "../mainPage.css";
import "./reviewCarousel";
import ReviewCarousel from "./reviewCarousel";
import FoodSection from "./foodSection";

function MainPage() {
  return (
    <>
  <div className="main-page">
  <img src={BarImage} alt="Bar Front" className="full-height-image" />

  <div className="main-content">
    <h1 className="main-heading">The Kings Arms</h1>
    <ReviewCarousel />
  </div>

  <a
    className="tripadvisor-link"
    href="https://www.tripadvisor.co.uk/Restaurant_Review-g528791-d3683423-Reviews-The_Kings_Arms-Oldham_Greater_Manchester_England.html#REVIEWS"
    target="_blank"
    rel="noopener noreferrer"
  >
    Read Our Reviews
  </a>

  <div className="scroll-arrow">▼</div>
</div>

      <section>
        <FoodSection />
      </section>
    </>
  );
}

export default MainPage;
