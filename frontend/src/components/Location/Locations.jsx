import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Locations.css";
import { getDescription } from "../../helpers/utils";
import { defaultImage } from "../../constants/img-placeholder";

const Locations = React.memo(({ locations }) => {
  const navigate = useNavigate();

  const handleNavigate = useCallback(() => {
    navigate("/rooms");
  }, [navigate]);

  return (
    <div className="location-card">
      <div className="image-wrapper">
        <img
          src={locations.limageurls?.[0] ?? defaultImage}
          alt={locations.lname}
          className="location-image"
          loading="lazy"
        />
      </div>

      <div className="location-content">
        <h2 className="location-title">{locations.lname}</h2>
        <p className="location-reviews">
          <strong>Reviews:</strong> {locations.lreviews}
        </p>
        <p className="location-phone">
          <strong>Phone Number:</strong> {locations.lphonenumber}
        </p>
        <p className="location-rent">
          <strong>Rent per Day:</strong> {locations.lrentperday}
        </p>
        <p className="location-type">
          <strong>Type:</strong> {locations.ltype}
        </p>

        <p className="location-description">
          {getDescription(locations.ldescription)}
        </p>

        <button className="booking-button" onClick={handleNavigate}>
          Book Now
        </button>
      </div>
    </div>
  );
});

export default Locations;
