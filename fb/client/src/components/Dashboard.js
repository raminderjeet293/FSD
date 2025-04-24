import React from "react";
import "./Dashboard.css";

const Dashboard = ({ user }) => {
  if (!user) return <p className="no-user">No user data. Please login.</p>;

  return (
    <div className="dashboard-container">
      <div className="dashboard-box">
        <h2>Welcome, {user.name}!</h2>
        <div className="user-info">
          <p>
            <span>Email:</span> {user.email}
          </p>
          <p>
            <span>Gender:</span> {user.gender}
          </p>
          <p>
            <span>City:</span> {user.city}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
