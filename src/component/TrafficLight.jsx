import React, { useState } from "react";

import useSound from "use-sound";
import carHorn from "../assets/mixkit-classic-car-horn-1565.mp3";

const TrafficLight = () => {
  const [color, setColor] = useState("");

  const [play] = useSound(carHorn);

  const handleClick = () => {
    const colors = ["red", "yellow", "green"];
    const currentIndex = colors.indexOf(color);
    console.log("currentIndex", currentIndex);

    const nextIndex = (currentIndex + 1) % colors.length;
    console.log("nextIndex", nextIndex);
    setColor(colors[nextIndex]);
  };

  const handleGreen = () => {
    play();
    setColor((prev) => (prev = "green"));
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
          onClick={handleGreen}
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
