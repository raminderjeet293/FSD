import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (response.ok) {
      onLogin(data.user);
      navigate("/dashboard");
    } else {
      setError(data.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-left">
          <h1>facebook</h1>
          <p>
            Facebook helps you connect and share with the people in your life.
          </p>
        </div>

        <div className="login-box">
          <input
            type="text"
            placeholder="Email address or phone number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin} className="login-btn">
            Log In
          </button>
          {error && <p className="error">{error}</p>}
          <a href="#" className="forgot-link">
            Forgotten password?
          </a>
          <hr />
          <button className="create-btn">Create New Account</button>
        </div>
      </div>
    </div>
  );
};
export default Login;
