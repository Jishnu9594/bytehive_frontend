import React from "react";
import { Container, Button } from "react-bootstrap";
import "../styles/home.css";
import videoSource from "../assets/logo1.mp4"; // Ensure path is correct

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Background Video */}
      <div className="video-wrapper">
        <video autoPlay loop muted className="hero-video">
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content Over Video */}
      <Container className="content-container">
        <h1 className="hero-title">
          LET'S MAKE <span className="gradient-text">IT GREAT</span>
        </h1>

        <p className="hero-paragraph">
          We help businesses grow with modern technology solutions. Let's build
          something amazing together.
        </p>
        <Button className="hero-button">Get in Touch</Button>
      </Container>
    </section>
  );
};

export default HeroSection;
