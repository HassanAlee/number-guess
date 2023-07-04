import React from "react";
import "./dist/output.css";
import Form from "./components/Form";
import { useState } from "react";
function App() {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [error, setError] = useState(false);
  const randomArray = [];
  const [boxNo, setBoxNo] = useState([]);
  const [userChoice, setUserChoice] = useState();
  const [randomNum, setRandomNum] = useState();
  const [showResult, setShowResult] = useState(true);
  function matchNumber() {
    if (randomNum == userChoice) {
      console.log("Wow! You guessed it right!!!");
    }
    console.log(`userChoice: ${userChoice}`);
    console.log(`randomNum: ${randomNum}`);
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
        {/* {showResult ? (
          <h1 className="font-bold bg-slate-400 mt-8 text-center py-8">
            Numbers matched
          </h1>
        ) : (
          ""
        )} */}
        <section className="w-full md:w-3/5 mx-auto h-auto mt-12 mb-20 grid grid-cols-2 md:grid-cols-3 gap-2">
          {boxNo.length == 0
            ? ""
            : boxNo.map((num, index) => {
                return (
                  <div
                    onClick={() => {
                      setUserChoice(num);
                      console.log(num);
                    }}
                    key={index}
                    className="w-40 h-40 inline-flex items-center cursor-pointer  justify-center text-center mx-auto bg-teal-400 rounded-md hover:bg-yellow-300"
                  >
                    Click to enter your choice
                  </div>
                );
              })}
        </section>
        <button
          className="bg-yellow-500 mx-auto block rounded-md font-bold py-2 px-4 mb-16 hover:bg-yellow-300"
          onClick={() => matchNumber()}
        >
          Match number
        </button>
        {/* <div className="absolute h-full w-full bg-slate-400 top-0 left-0 flex items-center justify-center">
          <h1>Numbers matched</h1>
        </div> */}
      </section>
    </>
  );
}

export default App;
