import React, { useState } from "react";
const Box = ({ setUserChoice, num }) => {
  const [clicked, setClicked] = useState(false);
  return (
    <div
      onClick={() => {
        setUserChoice(num);
        setClicked(true);
      }}
      className={`w-40 h-40 inline-flex items-center cursor-pointer  justify-center text-center mx-auto bg-teal-400 rounded-md hover:bg-yellow-300 ${
        clicked ? "animate-pulse" : ""
      }`}
    >
      Click to enter your choice
    </div>
  );
};

export default Box;
