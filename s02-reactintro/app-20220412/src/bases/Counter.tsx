import React, { useState } from "react";

interface Props {
  value?: number;
}

export const Counter = ({ value = 0 }: Props) => {
  const [counter, setCounter] = useState(value);
  const handleClick = () => {
    setCounter((prev) => prev + 1);
  };
  console.log(counter, value);
  return (
    <>
      <p>Counter {counter}</p>
      <button onClick={handleClick}>+1</button>
    </>
  );
};
