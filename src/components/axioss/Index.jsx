import React, { useState } from "react";
import Curd from "./Curd2";
import Flogin from "./Flogin";

const Index = () => {
  const [currentComponent, setCurrentComponent] = useState(null);

  // Function to reset to the main page
  // const goBack = () => setCurrentComponent(null);

  // If a component is selected, render it in full screen
  if (currentComponent === "register") {
    return <Curd/>;
  } else if (currentComponent === "franchise") {
    return <Flogin/>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white">
      {/* Logo and Heading */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold drop-shadow-lg">Welcome to Franchise Portal</h1>
        <p className="text-lg mt-3 opacity-90">Manage and grow your business with ease</p>
      </div>

      {/* Buttons */}
      <div className="space-y-5 w-80">
        <button
          onClick={() => setCurrentComponent("register")}
          className="w-full bg-white text-blue-600 font-semibold py-3 rounded-lg shadow-md hover:bg-gray-100 transition duration-300 ease-in-out"
        >
          🏢 Register for Franchise
        </button>

        <button
          className="w-full bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-800 transition duration-300 ease-in-out"
        >
          🔑 Admin Login
        </button>

        <button
          onClick={() => setCurrentComponent("franchise")}
          className="w-full bg-purple-700 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-purple-800 transition duration-300 ease-in-out"
        >
          🏬 Franchise Login
        </button>
      </div>
    </div>
  );
};

export default Index;
