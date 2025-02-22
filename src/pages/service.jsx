import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/service.css";
import hexagonImage from "../assets/hive3.png"; // Replace with your hexagon image

const services = [
  {
    title: "Web Development",
    description:
      "Building modern web applications with cutting-edge technologies.",
  },
  {
    title: "UI/UX Design",
    description: "Designing stunning and user-friendly experiences.",
  },
  {
    title: "SEO Optimization",
    description: "Improving search rankings and online visibility.",
  },
  {
    title: "Mobile App Development",
    description: "Creating high-performance mobile applications.",
  },
  {
    title: "Cloud Solutions",
    description: "Providing secure and scalable cloud services.",
  },
  {
    title: "Cybersecurity",
    description: "Protecting your digital assets from threats.",
  },
];

const ServiceSection = () => {
  return (
    <section className="service-section py-5">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <div className="service-container">
          {services.map((service, index) => (
            <div key={index} className={`hexagon hex-${index % 3}`}>
              <img src={hexagonImage} alt="Hexagon" className="hexagon-img" />
              <div className="hex-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <button className="read-more-btn">Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
