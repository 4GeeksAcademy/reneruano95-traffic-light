import React, { useState } from "react";

const TrafficLight = () => {
  const [color, setColor] = useState("");

  const handleClick = () => {
    const colors = ["red", "yellow", "green"];
    const currentIndex = colors.indexOf(color);
    console.log("currentIndex", currentIndex);

    const nextIndex = (currentIndex + 1) % colors.length;
    console.log("nextIndex", nextIndex);
    setColor(colors[nextIndex]);
  };

  return (
    <div className="container h-100 d-flex flex-column justify-content-center align-items-center ">
      <div className="trafficLight">
        <div
          className={`red ${color === "red" ? "selected" : ""}`}
          onClick={() => setColor((prev) => (prev = "red"))}
        ></div>

        <div
          className={`yellow ${color === "yellow" ? "selected" : ""}`}
          onClick={() => setColor((prev) => (prev = "yellow"))}
        ></div>

        <div
          className={`green ${color === "green" ? "selected" : ""}`}
          onClick={() => setColor((prev) => (prev = "green"))}
        ></div>
      </div>

      <button
        type="button"
        className="btn btn-dark btn-lg m-3"
        onClick={handleClick}
      >
        Click me!
      </button>
    </div>
  );
};

export default TrafficLight;
