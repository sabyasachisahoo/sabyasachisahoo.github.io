// HeroSection.jsx
import React from "react";
import "./HeroSection.css"; // Optional: for custom styling
import { FaLocationArrow, FaMap, FaMapPin } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Hello, I'm <span className="highlight">Sabyasachi</span>
        </h1>
        <h2 className="tagline">Frontend Developer</h2>
        <h3>
          Based in Banaglore, India <FaMapPin />
        </h3>
        {/* <p className="tagline">
          Crafting clean code and sleek interfaces with React
        </p> */}
        {/* <a href="#projects" className="btn">
          View My Work
        </a> */}
      </div>
    </section>
  );
};

export default HeroSection;
