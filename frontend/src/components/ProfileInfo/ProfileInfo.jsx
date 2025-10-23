import React from "react";
import "./ProfileInfo.css";
import { getUser } from "../../helpers/user.helper";

const ProfileInfo = () => {
  const user = getUser();
  return (
    <div className="profile-section">
      <h3 className="profile-header">My Profile</h3>
      <div className="profile-grid">
        <div className="profile-info">
          <span className="profile-label">Name:</span>
          <span className="profile-value">{user.name}</span>
        </div>
        <div className="profile-info">
          <span className="profile-label">Email:</span>
          <span className="profile-value">{user.email}</span>
        </div>
        <div className="profile-info">
          <span className="profile-label">Admin Status:</span>
          <span className="profile-value">
            {user.isAdmin ? "Administrator" : "User"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
