import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="landing-overlay"></div>z
      <div className="landing-content">
        <div className="landing-header">
          <FaMapMarkedAlt className="landing-icon" />
          <h1 className="landing-title">Welcome to our Travel Booking App</h1>
          <div className="landing-divider"></div>
          <h3 className="landing-subtitle">
            BOOK YOUR DREAM VACATION · PLAN YOUR PERFECT TRIP WITH US
          </h3>
        </div>

        <div className="landing-buttons">
          <Link to="/home" className="btn-link">
            <button className="landing-btn primary-btn">
              Get Started
              <FaArrowRight className="btn-icon" />
            </button>
          </Link>
          <Link to="/contact" className="btn-link">
            <button className="landing-btn secondary-btn">
              Contact Us
              <FaEnvelope className="btn-icon" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
