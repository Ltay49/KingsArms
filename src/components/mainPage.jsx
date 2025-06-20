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
        <h1 className="main-heading">
  <span className="heading-top">THE</span>
  <span className="location">Grains Bar, Oldham OL4 2JX</span><br />
  <span className="heading-bottom">KINGS <span className="arms">ARMS</span></span>
</h1>

          <ReviewCarousel />

          <div className="links-wrapper">
            <a
              className="tripadvisor-link"
              href="https://www.tripadvisor.co.uk/Restaurant_Review-g528791-d3683423-Reviews-The_Kings_Arms-Oldham_Greater_Manchester_England.html#REVIEWS"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read Our Reviews
            </a>

            <div
              className="scroll-down-btn"
              onClick={() =>
                window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
              }
            >
              <span>Scroll</span>
              <div className="chevron"></div>
            </div>
          </div>
        </div>
      </div>

      <section>
        <FoodSection />
      </section>
    </>
  );
}

export default MainPage;
