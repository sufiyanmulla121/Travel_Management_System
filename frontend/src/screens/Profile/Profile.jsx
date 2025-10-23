import { Tabs } from "antd";
import React from "react";
import MyBookings from "../../components/MyBooking/MyBooking";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import "./Profile.css";

const { TabPane } = Tabs;

const Profile = () => {
  return (
    <div className="profile-container">
      <Tabs defaultActiveKey="1">
        <TabPane tab="Profile" key="1">
          <ProfileInfo />
        </TabPane>
        <TabPane tab="Bookings" key="2">
          <MyBookings />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Profile;
