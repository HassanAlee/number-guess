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
        />
        <section className="w-full md:w-3/5 mx-auto h-auto mt-12 mb-20 grid grid-cols-1 md:grid-cols-3 gap-2">
          {boxNo.length == 0
            ? ""
            : boxNo.map((num, index) => {
                return (
                  <div
                    onClick={() => console.log(num)}
                    key={index}
                    className="w-40 h-40 inline-flex items-center cursor-pointer  justify-center mx-auto bg-teal-400 rounded-md hover:bg-yellow-300"
                  >
                    Click
                  </div>
                );
              })}
        </section>
      </section>
    </>
  );
}

export default App;
