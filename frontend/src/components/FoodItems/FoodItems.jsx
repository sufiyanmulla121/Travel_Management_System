import React from "react";
import "./FoodItem.css";

const FoodItem = React.memo(({ imageUrl, time, health, description, type }) => {
  return (
    <div className="food-container">
      <div className="food-left">
        <img src={imageUrl} alt={`Food served during ${time}`} loading="lazy"/>
      </div>
      <div className="food-right">
        <div className="food-details">
          <div className="head">
            <h2 className="food-name">Foods Available</h2>
            <h2 className="food-name">Time: {time}</h2>
          </div>
          <hr className="food-divider" />
          <p className="food-description">{health}</p>
          <p className="food-description">{description}</p>
          <hr className="food-divider" />
          <h2 className="food-name">Type: {type}</h2>z
        </div>
      </div>
    </div>
  );
});

export default FoodItem;
