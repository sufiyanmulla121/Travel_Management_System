import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FoodItem from "../../components/FoodItems/FoodItems";
import "./Food.css";

const Food = () => {
  const [places, setPlaces] = useState(null);
  const { id } = useParams();

  const fetchData = useCallback(async () => {
    try {
      const { data } = await axios.post("/api/places/getPlaceByIdFood", {
        placesid: id,
      });
      setPlaces(data);
    } catch (err) {
      console.error("Error fetching food data:", err);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [id]);

  const renderFoodSection = (title, startIndex, endIndex, foodType) => (
    <>
      <h1 className="food-header">{title}</h1>
      {Array.from({ length: endIndex - startIndex }, (_, i) => (
        <FoodItem
          key={startIndex + i}
          imageUrl={places.foodimgurls[startIndex + i]}
          time={i === 0 ? "Morning" : i === 1 ? "Afternoon" : "Night"}
          health={places.foodhealth}
          zz
          description={places.fooddescription}
          type={foodType}
        />
      ))}
    </>
  );

  if (!places) return null;

  return (
    <div className="food-screen">
      <main className="food-main">
        {renderFoodSection("FOOD PROVIDE", 0, 3, places.foodtype1)}
        <br />
        {renderFoodSection("NON VEG", 3, 6, places.foodtype2)}
      </main>
    </div>
  );
};

export default Food;
