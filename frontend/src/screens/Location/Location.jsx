import React, { useCallback, useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import ApiInstance from "../../apis/config";
import { ApiEndpoints } from "../../apis/endpoints";
import Locations from "../../components/Location/Locations";
import "./Location.css";

const Location = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = useCallback(async () => {
    try {
      const { data } = await ApiInstance.get(ApiEndpoints.getLocations());
      console.log(data);
      setLocations(data);
    } catch (error) {
      console.error("Error fetching locations:", error);
    }
  }, []);

  return (
    <div className="location-page">
      <div className="location-header">
        <h1 className="location-title">
          <FaMapMarkerAlt className="title-icon" />
          Discover Amazing Places
        </h1>
      </div>

      <div className="locations-grid">
        {!locations.length ? (
          <div className="no-results">
            <FaMapMarkerAlt className="no-results-icon" />
            <h3>No locations found</h3>
            <p>Try adjusting your search criteria</p>
          </div>
        ) : (
          locations.map((location) => (
            <div className="location-item" key={location._id}>
              <Locations locations={location} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Location;
