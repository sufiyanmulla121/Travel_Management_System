import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import { features, stats } from "../../data/About.data";

function About() {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>Discover Your Next Adventure</h1>
        <p>Making travel dreams come true since 2020</p>
      </div>

      <div className="about-content">
        <section className="mission-section">
          <h2>Our Mission</h2>
          <p>
            At Travel Booking App, we are passionate about connecting travelers
            with extraordinary destinations. Our mission is to simplify travel
            planning while offering carefully curated experiences that create
            lasting memories.
          </p>
        </section>

        <section className="features-section">
          <h2>What We Offer</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div className="feature-card" key={index}>
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="stats-section">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div className="stat-card" key={index}>
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="values-section">
          <h2>Our Values</h2>
          <div className="values-content">
            <div className="value-item">
              <h3>Quality</h3>
              <p>
                We maintain the highest standards in our accommodations and
                services, ensuring an exceptional travel experience.
              </p>
            </div>
            <div className="value-item">
              <h3>Authenticity</h3>
              <p>
                We believe in providing genuine local experiences and cultural
                connections.
              </p>
            </div>
            <div className="value-item">
              <h3>Reliability</h3>
              <p>
                We deliver on our promises with transparent booking processes
                and dedicated support.
              </p>
            </div>
          </div>
        </section>

        <div className="about-cta">
          <h2>Ready to Start Your Journey?</h2>
          <div className="cta-buttons">
            <Link to="/home" className="primary-button">
              Explore Destinations
            </Link>
            <Link to="/contact" className="secondary-button">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
