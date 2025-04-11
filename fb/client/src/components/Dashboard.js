import React from "react";

const Dashboard = ({ user }) => {
  if (!user) return <p>No user data. Please login.</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Welcome, {user.name}!</h2>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Gender:</strong> {user.gender}
      </p>
      <p>
        <strong>City:</strong> {user.city}
      </p>
    </div>
  );
};

export default Dashboard;
