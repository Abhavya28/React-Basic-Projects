import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Welcome!</h1>
      <div className="flex gap-4">
        <button
          className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
        <button
          className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
          onClick={() => navigate("/signUp")}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Home;
