import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="quote">
        "Code is the quietest way I’ve ever shouted who I am."
      </p>
      <p className="copyright">
        © {new Date().getFullYear()} Sabyasachi Sahoo. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
