import React, { useEffect, useState, useRef } from "react";
import "../header.css";

function Header() {
  const [visible, setVisible] = useState(false);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // Show header immediately on scroll
      setVisible(true);

      // Clear previous timeout if scrolling continues
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      // Hide header after 1.5 seconds of no scroll
      scrollTimeout.current = setTimeout(() => {
        setVisible(false);
      }, 1500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  return (
    <header className={`site-header ${visible ? "visible" : ""}`}>
      <a
        className="site-logo"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{ cursor: "pointer" }}
      >
        <span>The</span>
        <br />
        <span>Kings</span>
        <br />
        <span>Arms</span>
      </a>
      <nav className="nav-links">
        <a href="#location">Location</a>
        <a href="#book">Book</a>
        <a href="#menu">Menu</a>
        <a href="#about">About Us</a>
      </nav>
    </header>
  );
}

export default Header;
