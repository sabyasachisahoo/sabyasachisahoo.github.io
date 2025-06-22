import React from "react";
import "./AboutMe.css";
import profileLogo from "../../assets/profileLogo.png"; // Replace with your actual image
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaAngular,
  FaAws,
  FaDocker,
  FaJira,
  FaNode,
} from "react-icons/fa";

const AboutMe = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <img src={profileLogo} alt="Profile" className="profile-img" />
        <div className="about-text">
          <h2>About Me</h2>
          {/* <p>
            Hi! I’m a passionate frontend developer with a love for creating
            clean, modern UI using React. I enjoy crafting smooth user
            experiences and bringing creative ideas to life in the browser.
          </p> */}
          <p>
            I am a Senior Front-End Developer, specializing in languages like
            JavaScript and TypeScript, and frameworks such as React JS, Redux,
            and Angular. My expertise extends to Micro Frontend Architecture,
            where I apply cutting-edge development techniques to create modular,
            scalable solutions.
          </p>
          <h2>My Techstack</h2>
          <div className="skills">
            <FaReact title="React" />
            <FaJsSquare title="JavaScript" />
            <FaHtml5 title="HTML5" />
            <FaCss3Alt title="CSS3" />
            <FaAngular title="Angular" />
            <FaDocker title="Docker" />
            <FaAws title="AWS" />
            <FaNode title="Node" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
