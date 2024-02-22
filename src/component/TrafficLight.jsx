import React, { useState } from "react";

const TrafficLight = () => {
  const [color, setColor] = useState("");

  return (
    <div className="container h-100 d-flex justify-content-center align-items-center ">
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
    </div>
  );
};

export default TrafficLight;
