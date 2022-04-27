import React, { useReducer, useState } from "react";
import * as CounterActions from "./actions/counterActions";
import { CounterState } from "./interfaces/interfaces";
import { counterReducer } from "./state/counterReducer";

export const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

export const CounterRefactor = () => {
  const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE);
  const { counter: counterRed, changes, previous } = state;

  const handleIncrease = (value: number = 1) => {
    dispatch(CounterActions.doIncrement(value));
  };
  const handleReset = () => {
    dispatch(CounterActions.doReset());
  };
  return (
    <>
      <pre>{JSON.stringify(state)}</pre>
      <p> Counter {counterRed}</p>
      <p> Previous: {previous}</p>
      <p> Changes: {changes}</p>
      <button onClick={() => handleIncrease()}>+1</button>
      <button onClick={() => handleIncrease(5)}>+5</button>
      <button onClick={() => handleIncrease(10)}>+10</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};
