import { useState } from "react";

export const FunctionalTrafficLight = () => {
  let [currentColor, changeColor] = useState("red");

  const applyColorChange = () => {
    if (currentColor === "red") {
      changeColor("green");
    } else if (currentColor === "yellow") {
      changeColor("red");
    } else {
      changeColor("yellow");
    }
  };

  const lights = [{ color: "red" }, { color: "yellow" }, { color: "green" }];

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        {/* Background color can be black | yellow | red | green */}
        {lights.map((light) => (
          <div
            key={light.color}
            className={
              currentColor === light.color
                ? `circle ${currentColor}`
                : "circle black"
            }
          ></div>
        ))}
      </div>
      <button onClick={applyColorChange} className="next-state-button">
        NEXT STATE
      </button>
    </div>
  );
};