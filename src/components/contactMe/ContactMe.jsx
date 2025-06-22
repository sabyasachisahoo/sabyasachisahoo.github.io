import React from "react";
import "./ContactMe.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const ContactMe = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Let's Connect</h2>
      <p>Feel free to reach out through these platforms:</p>
      <div className="social-links">
        <a
          href="www.linkedin.com/in/sabyasachi-sahoo-8a70b5a8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin /> LinkedIn
        </a>
        <a
          href="https://github.com/sabyasachisahoo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> GitHub
        </a>
      </div>
    </section>
  );
};

export default ContactMe;
