import React from "react";
import "./dist/output.css";
import Form from "./components/Form";
import { useState } from "react";
import Box from "./components/Box";
import Swal from "sweetalert2";
function App() {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [error, setError] = useState(false);
  const randomArray = [];
  const [boxNo, setBoxNo] = useState([]);
  const [userChoice, setUserChoice] = useState();
  const [randomNum, setRandomNum] = useState();
  function matchNumber() {
    console.log(`I am random num:${randomNum}`);
    console.log(`I am user choice:${userChoice}`);
    if (randomNum == userChoice) {
      Swal.fire({
        title: "Numbers matched",
        icon: "success",
        customClass: {
          popup: "swal-custom-background_light",
          cancelButton: "swal-custom-cancel-button",
        },
        reverseButtons: true,
      });
    } else {
      Swal.fire({
        title: "Numbers did not matched",
        icon: "error",
        customClass: {
          popup: "swal-custom-background_light",
          cancelButton: "swal-custom-cancel-button",
        },
        reverseButtons: true,
      });
    }
  }
  return (
    <>
      <section className="w-full h-auto pt-12 overflow-hidden  ">
        <Form
          start={start}
          setStart={setStart}
          end={end}
          setEnd={setEnd}
          error={error}
          setError={setError}
          random={randomArray}
          setBoxNo={setBoxNo}
          setRandomNum={setRandomNum}
        />
        {/* {alert.show ? <Alert type={alert.type} text={alert.text} /> : ""} */}
        <section className="w-full md:w-3/5 mx-auto h-auto mt-12 mb-20 grid grid-cols-2 md:grid-cols-3 gap-2">
          {boxNo.length == 0
            ? ""
            : boxNo.map((num, index) => {
                return (
                  <Box num={num} key={index} setUserChoice={setUserChoice} />
                );
              })}
        </section>
        <button
          className="bg-yellow-500 mx-auto block rounded-md font-bold py-2 px-4 mb-16 hover:bg-yellow-300"
          onClick={() => matchNumber()}
        >
          Match number
        </button>
      </section>
    </>
  );
}

export default App;
