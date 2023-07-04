import React from "react";

const Alert = ({ type, text }) => {
  if (type == "red") {
    return (
      <div
        className={`bg-red-500 text-center mt-10 py-6 font-semibold text-lg text-white`}
      >
        {text}
      </div>
    );
  }
  return (
    <div
      className={`bg-green-500 text-center mt-10 py-6 font-semibold text-lg text-white`}
    >
      {text}
    </div>
  );
};

export default Alert;
