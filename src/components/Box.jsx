import React, { useState } from "react";
import "./flipBox.css";
const Box = ({ setUserChoice, num }) => {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      onClick={() => {
        setUserChoice(num);
        setFlipped(!flipped);
      }}
      className={`w-40 h-40 inline-flex items-center cursor-pointer  justify-center text-center mx-auto bg-teal-400 rounded-md hover:bg-yellow-300 ${
        flipped ? "flipped" : ""
      }`}
    >
      {flipped ? `${num}` : "Click to enter your choice"}
    </div>
  );
};

export default Box;
