import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="logo">Sabyasachi Sahoo</div>
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <a href="#about" onClick={toggleMenu}>
          About
        </a>
        {/* <a href="#projects" onClick={toggleMenu}>
          Projects
        </a> */}
        <a href="#contact" onClick={toggleMenu}>
          Contact
        </a>
        <a
          href="files/resume.pdf"
          className="resume-link"
          target="_blank"
          rel="noopener noreferrer"
          onClick={toggleMenu}
        >
          Resume
        </a>
      </nav>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </div>
    </header>
  );
};

export default Header;
