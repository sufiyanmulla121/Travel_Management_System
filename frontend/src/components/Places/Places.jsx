import React, { useState, useCallback } from "react";
import { Modal, Carousel } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Places.css";

const Places = React.memo(({ places, fromDate, toDate }) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleModalClose = useCallback(() => setShowModal(false), []);
  const handleModalShow = useCallback(() => setShowModal(true), []);

  const handlBooking = () => {
    navigate("/rooms/book", {
      state: { id: places._id, fromDate, toDate },
    });
  };

  return (
    <div className="place-card">
      <div className="place-image-container">
        <div className="place-image-wrapper">
          <img
            src={places.imageurls[0]}
            className="place-thumbnail"
            alt={places.name}
            loading="lazy"
          />
        </div>
      </div>

      <div className="place-details">
        <h1 className="place-title">{places.name}</h1>

        <div className="place-info">
          <p>
            Max Count: <span>{places.maxcount}</span>
          </p>
          <p>
            Phone Number: <span>{places.phonenumber}</span>
          </p>
          <p>
            Type: <span>{places.type}</span>
          </p>
        </div>

        <div className="place-actions">
          <Link to={`/foods/${places._id}`}>
            <button className="action-button">Food</button>
          </Link>

          {fromDate && toDate && (
            <button className="action-button" onClick={handlBooking}>
              Book Now
            </button>
          )}

          <button
            className="action-button view-details"
            onClick={handleModalShow}
          >
            View Details
          </button>
        </div>
      </div>

      <Modal
        show={showModal}
        onHide={handleModalClose}
        size="lg"
        className="place-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">{places.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body className="modal-body">
          <Carousel className="place-carousel">
            {places.imageurls.map((url) => (
              <Carousel.Item key={url}>
                <img
                  className="carousel-image"
                  src={url}
                  alt={places.name}
                  loading="lazy"
                />
              </Carousel.Item>
            ))}
          </Carousel>
          <p className="place-description">{places.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className="action-button" onClick={handleModalClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
});

export default Places;
