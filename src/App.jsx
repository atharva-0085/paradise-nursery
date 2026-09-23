import React from "react";
import "./App.css";
import AboutUs from "./AboutUs";

function App() {
  const handleGetStarted = () => {
    window.location.href = "/products";
  };

  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>

        <p>
          Welcome to Paradise Nursery, where green meets serenity.
          Discover beautiful houseplants that bring nature, freshness,
          and life into your home.
        </p>

        <button
          className="get-started-button"
          onClick={handleGetStarted}
        >
          Get Started
        </button>

        <AboutUs />
      </div>
    </div>
  );
}

export default App;
