import React, { useState } from 'react';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    gmail : "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    setError("");
    setSuccess("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long");
      setSuccess("");
      return;
    }

    setSuccess("SignUp successful!");
    setError("");
    
    setFormData({
      name: "",
    username: "",
    gmail : "",
    password: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-80 flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold text-center mb-4">SignUp</h2>

        <label htmlFor="name" className="font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your name"
          required
        />

        <label htmlFor="username" className="font-medium text-gray-700">
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your username"
          required
        />

        <label htmlFor="gmail" className="font-medium text-gray-700">
          Gmail
        </label>
        <input
          type="text"
          id="gmail"
          name="gmail"
          value={formData.gmail}
          onChange={handleInputChange}
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your gmail"
          required
        />

        <label htmlFor="password" className="font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your password"
          required
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}
        {success && <p className="text-green-500 text-sm">{success}</p>}

        <button
          type="submit"
          className="bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
        >
          SignUp
        </button>
      </form>
    </div>
  );
};

export default SignUp;
