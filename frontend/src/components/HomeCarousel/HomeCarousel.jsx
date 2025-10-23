import React, { useState, useCallback, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import "./HomeCarousel.css";

const CarouselIndicator = React.memo(({ current, total }) => (
  <div className="carousel-progress">
    <div className="carousel-fraction">{`${current + 1}/${total}`}</div>
    <div className="progress-bar-container">
      <div
        className="progress-bar"
        style={{ width: `${((current + 1) / total) * 100}%` }}
      />
    </div>
  </div>
));

const CarouselCaption = React.memo(({ title, content, isActive }) => (
  <AnimatePresence>
    {isActive && (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="carousel-caption-wrapper"
      >
        <h2 className="caption-title">{title}</h2>
        <p className="caption-content">{content}</p>
      </motion.div>
    )}
  </AnimatePresence>
));

const HomeCarousel = React.memo(({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);

  const handleSelect = useCallback((selectedIndex) => {
    setActiveIndex(selectedIndex);
  }, []);

  const togglePlayPause = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  const handleTouchStart = useCallback((e) => {
    setTouchStart(e.touches[0].clientX);
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (!touchStart) return;

    const currentTouch = e.touches[0].clientX;
    const diff = touchStart - currentTouch;

    if (Math.abs(diff) > 50) {
      if (diff > 0 && activeIndex < images.length - 1) {
        handleSelect(activeIndex + 1);
      } else if (diff < 0 && activeIndex > 0) {
        handleSelect(activeIndex - 1);
      }
      setTouchStart(0);
    }
  }, []);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, images.length]);

  return (
    <section className="carousel-section">
      <div className="carousel-container">
        <Carousel
          activeIndex={activeIndex}
          onSelect={handleSelect}
          interval={null}
          fade
          prevIcon={<FaChevronLeft className="carousel-control-icon" />}
          nextIcon={<FaChevronRight className="carousel-control-icon" />}
          indicators={false}
          className="custom-carousel"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {images.map((image, idx) => (
            <Carousel.Item key={idx} className="carousel-item">
              <div className="image-wrapper">
                <div className="image-overlay" />
                <motion.img
                  src={image.src}
                  alt={image.alt}
                  className="carousel-image"
                  loading={idx === 0 ? "eager" : "lazy"}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 6 }}
                />
              </div>
              <CarouselCaption
                title={image.alt}
                content={image.caption}
                isActive={idx === activeIndex}
              />
            </Carousel.Item>
          ))}
        </Carousel>

        <div className="carousel-controls">
          <CarouselIndicator current={activeIndex} total={images.length} />
          <button
            className="play-pause-button"
            onClick={togglePlayPause}
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            <i className={`fas fa-${isPlaying ? "pause" : "play"}`} />
          </button>
        </div>
      </div>
    </section>
  );
});

export default HomeCarousel;
