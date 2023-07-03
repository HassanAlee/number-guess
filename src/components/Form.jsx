import React from "react";

const Form = ({
  setUserInput,
  userInput,
  error,
  setError,
  random,
  setBoxNo,
}) => {
  function submitHandler(e) {
    e.preventDefault();
    if (userInput > 15 || userInput <= 0) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    } else {
      for (let i = 1; i < 10; i++) {
        let num = Math.floor(Math.random() * 15) + 1;
        random.push(num);
      }
    }
    setBoxNo(random);
    setUserInput(0);
  }
  return (
    <>
      <form
        className="w-full md:w-1/2 mx-auto shadow-2xl rounded-md p-4"
        onSubmit={submitHandler}
      >
        <input
          type="text"
          className="p-4 w-full block text-center mb-4"
          placeholder="enter a number(1-15)"
          min={1}
          max={15}
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        {error ? (
          <p className="font-medium text-red-600 text-center pb-4">
            Number should be between 1-15
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
