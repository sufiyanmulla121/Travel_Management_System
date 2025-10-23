import React from "react";
import { FaMapMarkedAlt, FaPlane } from "react-icons/fa";
import HomeCarousel from "../../components/HomeCarousel/HomeCarousel";
import { homeImages } from "../../data/HomeImage.data";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <section className="content-section">
        <div className="content-wrapper">
          <div className="content-header">
            <FaPlane className="header-icon" />
            <h1 className="content-title">
              <span className="title-highlight">Traveling</span>
              <span className="title-main">Happy Journey</span>
            </h1>
          </div>

          <div className="content-body">
            <div className="content-divider">
              <FaMapMarkedAlt className="divider-icon" />
            </div>
            <HomeCarousel images={homeImages} />

            <p className="content-description">
              Traveling evokes a sense of liberation, freeing the spirit to
              wander and explore uncharted territories, leaving behind the
              familiar and embracing the unknown. The anticipation of travel
              fills the heart with excitement, as it opens the door to new
              experiences, cultures, and perspectives, igniting a sense of
              wonder and curiosity.
            </p>

            <div className="content-decoration">
              <div className="decoration-line"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
