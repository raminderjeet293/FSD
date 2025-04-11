// src/components/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div className="min-h-screen bg-[#f0f2f5] flex items-center justify-center px-4">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-5xl">
        {/* Left Section */}
        <div className="mb-12 lg:mb-0 lg:mr-16">
          <h1 className="text-[#1877f2] text-6xl font-bold">facebook</h1>
          <p className="text-2xl mt-4 w-[90%]">
            Facebook helps you connect and share with the people in your life.
          </p>
        </div>

        {/* Right Section (Login Box) */}
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
          <input
            type="text"
            placeholder="Email address or phone number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-3 p-3 border border-gray-300 rounded-lg focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-3 p-3 border border-gray-300 rounded-lg focus:outline-none"
          />
          <button
            onClick={handleLogin}
            className="w-full bg-[#1877f2] text-white font-bold py-3 rounded-lg text-lg hover:bg-blue-600"
          >
            Log In
          </button>
          {error && <p className="text-red-600 text-sm mt-2">{error}</p>}

          <div className="text-center mt-3">
            <a href="#" className="text-sm text-[#1877f2] hover:underline">
              Forgotten password?
            </a>
          </div>

          <hr className="my-4" />

          <button className="w-full bg-[#42b72a] text-white font-bold py-3 rounded-lg text-lg hover:bg-green-600">
            Create New Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
