import React from "react";
import "./Services.css";

const services = [
  {
    title: "Time Tagger Software",
    description: "Accurately track and manage your time with our Time Tagger tool.",
  },
  {
    title: "Project Tracking",
    description: "Monitor project progress and stay ahead of deadlines.",
  },
  {
    title: "Transformation to Cloud",
    description: "Seamless transition of your infrastructure to the cloud.",
  },
  {
    title: "Backup Services",
    description: "Reliable and secure backup solutions for your data.",
  },
  {
    title: "Cybersecurity Services",
    description: "Protect your business with advanced cybersecurity solutions.",
  },
  {
    title: "Operational Support",
    description: "24/7 support for all your IT operations and needs.",
  },
];

const Services = () => {
  return (
    <div id="services" className="services-container">
      <h1>Our Services</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
