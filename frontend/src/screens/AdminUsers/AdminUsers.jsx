import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import "./AdminUsers.css";

function AdminUsers() {
  const [users, setUsers] = useState([]);

  const fetchUsers = useCallback(async () => {
    try {
      const { data } = await axios.get("/api/users/getAllUsers");
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div className="users-dashboard">
      <div className="dashboard-header">
        <div className="header-content">
          <h1 className="dashboard-title">User Management</h1>
          <span className="user-count">Total Users: {users.length}</span>
        </div>
      </div>

      <div className="users-table-container">
        <div className="table-responsive">
          <table className="users-table">
            <thead>
              <tr>
                <th>User ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id} className="user-row">
                  <td data-label="User ID">
                    <span className="user-id">{user._id}</span>
                  </td>
                  <td data-label="Name">
                    <div className="user-name">
                      <span className="avatar">
                        {user.name.charAt(0).toUpperCase()}
                      </span>
                      {user.name}
                    </div>
                  </td>
                  <td data-label="Email">
                    <span className="user-email">{user.email}</span>
                  </td>
                  <td data-label="Role">
                    <span
                      className={`role-badge ${
                        user.isAdmin ? "admin" : "user"
                      }`}
                    >
                      {user.isAdmin ? "Admin" : "User"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminUsers;
