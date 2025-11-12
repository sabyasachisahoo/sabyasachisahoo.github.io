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
            Proactive Senior Frontend Engineer with expertise in React, Redux & JavaScript, I currently serve as a Team Lead UI @ MBRDI(Client), specializing in creating complex dashboards using modern frameworks such as React (v16–v18), Redux, and Angular. My technical expertise extends to designing and implementing Micro Frontend Architectures with performance and stability as the major impact area of improvement in any web application.
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
