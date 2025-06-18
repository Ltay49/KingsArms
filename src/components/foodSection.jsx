import React from 'react';
import '../foodSection.css';

import dish1 from '/guninessPint.png';
import dish2 from '/IceCream.png';
import dish3 from '/salmonDish.png';
import dish4 from '/stickyRibs.png';

function FoodSection() {
    return (
      <section className="food-section">
        <h2 className="food-heading">Our Food</h2>
        <div className="food-grid">
          <img src={dish1} alt="Braised Steak" className="food-img img-large-vertical" />
          <img src={dish2} alt="Sunday Roast" className="food-img img-square" />
          <img src={dish3} alt="Dessert" className="food-img img-rectangle" />
          <img src={dish4} alt="Starter" className="food-img img-tall" />
        </div>
      </section>
    );
  }
  
  export default FoodSection;