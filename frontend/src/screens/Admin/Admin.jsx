import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import Loader from "../../components/Loader/Loader";
import AdminRooms from "../AdminRooms/AdminRooms";
import AdminUserscreen from "../AdminUsers/AdminUsers";
import "./Admin.css";

const tabItems = [
  { key: "1", tab: "Locations", component: Location },
  { key: "2", tab: "Bookings", component: Bookings },
  { key: "3", tab: "Rooms", component: AdminRooms },
  // { key: "4", tab: "Add Rooms", component: AddingNew },
  { key: "5", tab: "Users", component: AdminUserscreen },
];

function Admin() {
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (!user?.isAdmin) {
      window.location.href = "/home";
    }
  }, []);

  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <p className="dashboard-subtitle">Manage your application</p>
      </div>

      <div className="dashboard-content">
        <Tabs defaultActiveKey="1" className="admin-tabs">
          {tabItems.map(({ key, tab, component: Component }) => (
            <Tab tab={tab} key={key}>
              <Component />
            </Tab>
          ))}
        </Tabs>
      </div>
    </div>
  );
}

function DataTable({ title, data, columns, loading }) {
  return (
    <div className="data-table-container">
      <div className="table-header">
        <h2>{title}</h2>
        <span className="record-count">{data.length} Records</span>
      </div>

      {loading ? (
        <div className="loader-container">
          <Loader />
        </div>
      ) : (
        <div className="table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                {columns.map((column) => (
                  <th key={column.key}>{column.title}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item._id}>
                  {columns.map((column) => (
                    <td key={column.key} data-label={column.title}>
                      {column.render
                        ? column.render(item[column.key], item)
                        : item[column.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBookings = useCallback(async () => {
    try {
      const { data } = await axios.get("/api/bookings/getAllBookings");
      setBookings(data);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBookings();
  }, [fetchBookings]);

  const columns = [
    { key: "_id", title: "Booking ID" },
    { key: "userid", title: "User ID" },
    { key: "places", title: "Room" },
    { key: "fromDate", title: "From" },
    { key: "toDate", title: "To" },
    {
      key: "status",
      title: "Status",
      render: (status) => (
        <span className={`status-badge status-${status.toLowerCase()}`}>
          {status}
        </span>
      ),
    },
  ];

  return (
    <DataTable
      title="Booking Management"
      data={bookings}
      columns={columns}
      loading={loading}
    />
  );
}

export default Admin;
