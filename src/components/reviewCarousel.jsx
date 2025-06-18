// ReviewCarousel.jsx
import React, { useEffect, useState } from 'react';
import '../ReviewCarousel.css';

const reviews = [
  `"The beer is cold. The food is great. What else can you say!"`,
  `"Just really nice staff and fabulous food."`,
  `"You must try the braised steak!"`,
  `"Sunday lunch menu is fantastic value for money."`,
  `"Great food. Fantastic service!"`
];

function ReviewCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState('in');

  useEffect(() => {
    const showTime = 5000;
    const fadeTime = 1000;

    const interval = setInterval(() => {
      setDirection('out');
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % reviews.length);
        setDirection('in');
      }, fadeTime);
    }, showTime + fadeTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="review-wrapper">
      <div className={`review ${direction === 'in' ? 'slide-in' : 'slide-out'}`}>
        {reviews[index]}
      </div>
    </div>
  );
}

export default ReviewCarousel;

