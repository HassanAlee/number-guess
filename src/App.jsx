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
  const [clicks, setClicks] = useState(0);
  function matchNumber() {
    if(clicks<=5 && clicks>=1){
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
      setUserChoice()
    }else if(userChoice==undefined){
      Swal.fire({
        title: "Select a different box",
        icon: "info",
        customClass: {
          popup: "swal-custom-background_light",
          cancelButton: "swal-custom-cancel-button",
        },
        reverseButtons: true,
      });
    } else {
      Swal.fire({
        title: "Numbers did not match",
        icon: "error",
        customClass: {
          popup: "swal-custom-background_light",
          cancelButton: "swal-custom-cancel-button",
        },
        reverseButtons: true,
      });
      setUserChoice()
    }
    }else if(boxNo.length==0){
      Swal.fire({
        title: "Please input values first",
        icon: "info",
        customClass: {
          popup: "swal-custom-background_light",
          cancelButton: "swal-custom-cancel-button",
        },
        reverseButtons: true,
      });
    }
    else if(clicks==0){
      Swal.fire({
        title: "Please select any box",
        icon: "info",
        customClass: {
          popup: "swal-custom-background_light",
          cancelButton: "swal-custom-cancel-button",
        },
        reverseButtons: true,
      });
    }
    else{
      Swal.fire({
        title: "Replay the game",
        icon: "info",
        customClass: {
          popup: "swal-custom-background_light",
          cancelButton: "swal-custom-cancel-button",
        },
        reverseButtons: true,
      }).then((result) => {
  if (result.isConfirmed) {
    reloadApp();
  }
});
    }
  }
  function reloadApp(){
    location.reload()
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
          setClicks={setClicks}
        />
        <section className="w-full md:w-3/5 mx-auto h-auto mt-12 mb-20 grid grid-cols-2 md:grid-cols-3 gap-2">
          {boxNo.length == 0
            ? ""
            : boxNo.map((num, index) => {
                return (
                  <Box
                    num={num}
                    key={index}
                    setClicks={setClicks}
                    clicks={clicks}
                    setUserChoice={setUserChoice}
                  />
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
