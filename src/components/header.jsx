import React, { useEffect, useState } from "react";
import "../header.css";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <a
        className="site-logo"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{ cursor: "pointer" }}
      >
        The Kings Arms
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
