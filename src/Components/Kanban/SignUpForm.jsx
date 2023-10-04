import React, { useState } from "react";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [selectedRole, setSelectedRole] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRoleSelection = (role) => {
    setSelectedRole(role);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here, e.g., sending data to an API.
    console.log("Selected Role:", selectedRole);
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full border rounded-lg px-3 py-2"
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full border rounded-lg px-3 py-2"
              required
            />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="w-full border rounded-lg px-3 py-2"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-4">
          <p className="text-gray-600 text-center">Or sign up as:</p>
          <div className="flex justify-center mt-2 space-x-2">
            <button
              onClick={() => handleRoleSelection("Organiser")}
              className={`px-4 py-2 ${
                selectedRole === "Organiser"
                  ? "bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg"
                  : "bg-gray-300 hover:bg-gray-400 text-gray-600 font-semibold rounded-lg"
              }`}
            >
              Organiser
            </button>
            <button
              onClick={() => handleRoleSelection("Client")}
              className={`px-4 py-2 ${
                selectedRole === "Client"
                  ? "bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg"
                  : "bg-gray-300 hover:bg-gray-400 text-gray-600 font-semibold rounded-lg"
              }`}
            >
              Client
            </button>
            <button
              onClick={() => handleRoleSelection("Participant")}
              className={`px-4 py-2 ${
                selectedRole === "Participant"
                  ? "bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-lg"
                  : "bg-gray-300 hover:bg-gray-400 text-gray-600 font-semibold rounded-lg"
              }`}
            >
              Participant
            </button>
            <button
              onClick={() => handleRoleSelection("Vendor")}
              className={`px-4 py-2 ${
                selectedRole === "Vendor"
                  ? "bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg"
                  : "bg-gray-300 hover:bg-gray-400 text-gray-600 font-semibold rounded-lg"
              }`}
            >
              Vendor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
