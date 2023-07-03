import React from "react";
import "./dist/output.css";
import Form from "./components/Form";
import { useState } from "react";
function App() {
  const [userInput, setUserInput] = useState();
  const [error, setError] = useState(false);
  const randomArray = [];
  const [boxNo, setBoxNo] = useState([]);
  return (
    <>
      <section className="w-screen h-auto pt-12 ">
        <Form
          setUserInput={setUserInput}
          userInput={userInput}
          error={error}
          setError={setError}
          random={randomArray}
          setBoxNo={setBoxNo}
        />
        {boxNo.length == 0
          ? ""
          : boxNo.map((num, index) => {
              return <h1 key={index}>{num}</h1>;
            })}
      </section>
    </>
  );
}

export default App;
