import React, { useState } from "react";

interface Props {
  initialValue?: number;
}

interface CounterState {
  counter: number;
  clicks: number;
}

export const CounterBy = ({ initialValue = 0 }: Props) => {
  const [counterState, setCounterState] = useState<CounterState>({
    counter: initialValue,
    clicks: 0,
  });
  const { clicks, counter } = counterState;

  const handleClick = (incrementBy = 1) => {
    setCounterState(({ counter, clicks }) => ({
      counter: counter + incrementBy,
      clicks: clicks + 1,
    }));
  };

  return (
    <>
      <p>
        Counter {counter}. With{clicks}
      </p>
      <p>Counter {counter}</p>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          handleClick(5);
        }}
      >
        +5
      </button>
    </>
  );
};
