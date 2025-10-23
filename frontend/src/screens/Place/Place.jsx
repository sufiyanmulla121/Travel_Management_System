import { DatePicker } from "antd";
import moment from "moment";
import React, { useCallback, useEffect, useState } from "react";
import ApiInstance from "../../apis/config";
import { ApiEndpoints } from "../../apis/endpoints";
import Places from "../../components/Places/Places";
import "./Place.css";

const { RangePicker } = DatePicker;

const Place = () => {
  const [places, setPlaces] = useState([]);
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [duplicateRooms, setDuplicateRooms] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [type, setType] = useState("all");

  const fetchData = useCallback(async () => {
    try {
      const { data } = await ApiInstance.get(ApiEndpoints.getPlaces());
      console.log(data);
      setDuplicateRooms(data);
      setPlaces(data);
    } catch (error) {
      console.error("Error fetching places:", error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const filterByDate = (dates) => {
    if (!dates?.length) return;

    const from = moment(dates[0].$d).format("DD-MM-YYYY");
    const to = moment(dates[1].$d).format("DD-MM-YYYY");
    setFromDate(from);
    setToDate(to);

    const tempRooms = duplicateRooms.filter((place) => {
      if (place.currentbookings.length === 0) return true;

      return place.currentbookings.every((booking) => {
        const isDateBetween =
          !moment(from).isBetween(booking.fromDate, booking.toDate) &&
          !moment(to).isBetween(booking.fromDate, booking.toDate);

        const isDatesEqual =
          from !== booking.fromDate &&
          from !== booking.toDate &&
          to !== booking.fromDate &&
          to !== booking.toDate;

        return isDateBetween && isDatesEqual;
      });
    });

    setPlaces(tempRooms);
  };

  const filterBySearch = () => {
    if (!searchKey) {
      setPlaces(duplicateRooms);
      return;
    }

    const filteredRooms = duplicateRooms.filter((room) =>
      room.name.toLowerCase().includes(searchKey.toLowerCase()),
    );
    setPlaces(filteredRooms);
  };

  const filterByType = (selectedType) => {
    setType(selectedType);

    if (selectedType === "all") {
      setPlaces(duplicateRooms);
      return;
    }

    const filteredRooms = duplicateRooms.filter(
      (room) => room.type.toLowerCase() === selectedType.toLowerCase(),
    );
    setPlaces(filteredRooms);
  };

  return (
    <div className="places-container">
      <div className="search-section">
        <div className="search-container">
          <div className="search-group">
            <input
              type="text"
              className="search-input"
              placeholder="Search places..."
              value={searchKey}
              onChange={(e) => setSearchKey(e.target.value)}
              onKeyUp={filterBySearch}
            />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>

          <div className="search-group">
            <RangePicker
              format="DD-MM-YYYY"
              onChange={filterByDate}
              className="date-picker"
            />
          </div>

          <div className="search-group">
            <select value={type} onChange={(e) => filterByType(e.target.value)}>
              <option value="all">All Places</option>
              <option value="delux">Delux</option>
              <option value="non-delux">Non-delux</option>
            </select>
          </div>
        </div>
      </div>

      <div className="places-grid">
        {places.map((place) => (
          <Places
            key={place._id}
            places={place}
            fromDate={fromDate}
            toDate={toDate}
          />
        ))}
      </div>
    </div>
  );
};

export default Place;
