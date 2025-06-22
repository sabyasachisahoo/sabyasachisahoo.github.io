import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero" style={{ backgroundColor: "#fff" }}>
      <div className="overlay">
        <div className="hero-content">
          <h1>
            Hello, I’m <span className="highlight">Sabyasachi</span>
          </h1>
          <h2>Frontend Developer & Consultant</h2>
          <p>
            I design interfaces that resonate and consult with clarity—turning
            ideas into impactful experiences.
          </p>
          <a href="#contact" className="cta-btn">
            Let’s Collaborate
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
