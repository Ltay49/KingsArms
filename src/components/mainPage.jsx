import React, { useRef } from "react";
import BarImage from "/PubFront.png";
import "../mainPage.css";
import "./reviewCarousel";
import ReviewCarousel from "./reviewCarousel";
import FoodSection from "./foodSection";
import WhoWhatWhere from "./whoWhatWhere";

function MainPage() {
  const nextSectionRef = useRef(null);

  useEffect(() => {
    const ua = navigator.userAgent || navigator.vendor || window.opera;
    if (ua.includes("Instagram")) {
      document.body.classList.add("instagram-browser");
    }
  }, []);

  React.useEffect(() => {
    function setVh() {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    setVh();
    window.addEventListener('resize', setVh);
    return () => window.removeEventListener('resize', setVh);
  }, []);
  const handleScrollDown = () => {
    nextSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="main-page" id="home">
        <img src={BarImage} alt="Bar Front" className="full-height-image" />

        <div className="main-content">
          <h1 className="main-heading">
            <span className="heading-top">THE</span>
            <span className="location">Grains Bar, Oldham OL4 2JX</span>
            <br />
            <span className="heading-bottom">
              KINGS <span className="arms">ARMS</span>
            </span>
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

            <div className="scroll-down-btn" onClick={handleScrollDown}>
              <span>Scroll</span>
              <div className="chevron"></div>
            </div>
          </div>
        </div>
      </div>

      <section ref={nextSectionRef}>
        <WhoWhatWhere />
      </section>

      <section id="Menu">
        <FoodSection />
      </section>
    </>
  );
}

export default MainPage;
