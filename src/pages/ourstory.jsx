import React from "react";
import "../styles/ourstory.css";

const AboutUs = () => {
  return (
    <section className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <h2 className="fw-bold display-5 gradient-text">Our Story</h2>
          <p className="text-muted mt-3">
            We started with a passion for innovation and excellence. Our mission
            is to create meaningful experiences through technology, design, and
            creativity. Join us on this journey!
          </p>
          <button className="btn about-btn px-4 py-2 mt-3">About Us</button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
