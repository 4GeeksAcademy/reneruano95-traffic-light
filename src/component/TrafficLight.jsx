import React, { useState } from "react";

const TrafficLight = () => {
  const [selected, setSelected] = useState("");

  const handleFn = () => {
    setSelected((prev) => (prev = "selected"));
  };

  return (
    <div className="container h-100 d-flex justify-content-center align-items-center ">
      <div className="trafficLight">
        <div className={`red ${selected}`} onClick={handleFn}></div>
        <div className={`yellow ${selected}`} onClick={handleFn}></div>
        <div className={`green ${selected}`} onClick={handleFn}></div>
      </div>
    </div>
  );
};

export default TrafficLight;
