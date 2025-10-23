import React, { useCallback, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { homeImages } from "../../data/HomeImage.data";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./HomeImg.css";

const HomeImg = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = useCallback((selectedIndex) => {
    setIndex(selectedIndex);
  }, []);

  return (
    <section className="carousel-section">
      <div className="carousel-container">
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          interval={5000}
          fade
          prevIcon={<FaChevronLeft className="carousel-control-icon" />}
          nextIcon={<FaChevronRight className="carousel-control-icon" />}
          indicators={true}
          className="custom-carousel"
        >
          {homeImages.map((image, idx) => (
            <Carousel.Item key={idx} className="carousel-item">
              <div className="image-overlay"></div>
              <img
                src={image.src}
                alt={image.alt}
                className="carousel-image"
                loading="lazy"
              />
              <Carousel.Caption className="carousel-caption">
                <h2 className="caption-title">{image.alt}</h2>
                <p className="caption-content">{image.caption}</p>
                <div className="caption-indicator">
                  {`${idx + 1}/${homeImages.length}`}
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default HomeImg;
