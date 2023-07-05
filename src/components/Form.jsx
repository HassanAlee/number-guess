import React from "react";

const Form = ({
  start,
  end,
  setStart,
  setEnd,
  error,
  setError,
  random,
  setBoxNo,
  setRandomNum,
}) => {
  function submitHandler(e) {
    e.preventDefault();
    if (start <= 0) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    } else {
      setRandomNum(Math.floor(Math.random() * (end - start + 1)) + start);
      for (let i = 1; i < 10; i++) {
        let num = Math.floor(Math.random() * (end - start + 1)) + start;
        random.push(num);
      }
    }
    setBoxNo(random);
    // setUserInput(0);
  }
  return (
    <>
      <form
        className="w-full md:w-1/2 mx-auto shadow-2xl rounded-md p-4"
        onSubmit={submitHandler}
      >
        <input
          type="number"
          className="p-4 w-full block text-center mb-4"
          placeholder="Enter minimum number"
          value={start}
          onChange={(e) => {
            if (e.target.value !== "") {
              setStart(parseInt(e.target.value));
            } else {
              setStart("");
            }
          }}
        />
        <input
          type="number"
          className="p-4 w-full block text-center mb-4"
          placeholder="Enter maximum number"
          value={end}
          onChange={(e) => {
            if (e.currentTarget.value !== "") {
              setEnd(parseInt(e.target.value));
            } else {
              setEnd("");
            }
          }}
        />
        {error ? (
          <p className="font-medium text-red-600 text-center pb-4">
            Please enter correct numbers
          </p>
        ) : (
          ""
        )}
        <button className="py-2 px-4 bg-slate-500 mx-auto block rounded-md font-bold hover:text-white">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
