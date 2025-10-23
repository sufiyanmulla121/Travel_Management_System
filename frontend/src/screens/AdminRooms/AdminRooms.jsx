import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import "./AdminRooms.css";

function AdminRooms() {
  const [rooms, setRooms] = useState([]);

  const fetchRooms = useCallback(async () => {
    try {
      const { data } = await axios.get("/api/places/getallplaces");
      setRooms(data);
    } catch (error) {
      console.error("Error fetching rooms:", error);
    }
  }, []);

  useEffect(() => {
    fetchRooms();
  }, [fetchRooms]);

  const tableHeaders = [
    { id: "roomId", label: "Room ID" },
    { id: "name", label: "Name" },
    { id: "type", label: "Type" },
    { id: "rentPerDay", label: "Rent per day" },
    { id: "maxCount", label: "Max count" },
    { id: "phoneNumber", label: "Phone number" },
  ];

  return (
    <div className="admin-rooms">
      <div className="admin-rooms-header">
        <h1 className="admin-rooms-title">Room Management</h1>
        <p className="admin-rooms-subtitle">
          Total Rooms: <span>{rooms.length}</span>
        </p>
      </div>

      <div className="table-responsive">
        <table className="rooms-table">
          <thead>
            <tr>
              {tableHeaders.map((header) => (
                <th key={header.id}>{header.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rooms.map((room) => (
              <tr key={room._id} className="room-row">
                <td data-label="Room ID">
                  <span className="room-id">{room._id}</span>
                </td>
                <td data-label="Name">
                  <span className="room-name">{room.name}</span>
                </td>
                <td data-label="Type">
                  <span className="room-type">{room.type}</span>
                </td>
                <td data-label="Rent per day">
                  <span className="room-rent">${room.rentperday}</span>
                </td>
                <td data-label="Max count">
                  <span className="room-count">{room.maxcount}</span>
                </td>
                <td data-label="Phone number">
                  <span className="room-phone">{room.phonenumber}</span>
                </td>
                zzzz
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminRooms;
