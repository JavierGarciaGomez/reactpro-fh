import React, { useReducer, useState } from "react";

type CounterState = {
  counter: number;
  previous: number;
  changes: number;
};

const INITIAL_STATE = {
  counter: 0,
  previous: 0,
  changes: 0,
};
type ActionType =
  | {
      type: "increaseBy";
      payload: { value: number };
    }
  | {
      type: "reset";
    };

const counterReducer = (state: CounterState, action: ActionType): CounterState => {
  console.log(state);
  switch (action.type) {
    case "increaseBy":
      return {
        changes: state.changes + 1,
        counter: state.counter + action.payload.value,
        previous: state.counter,
      };

    case "reset":
      return { counter: 0, previous: 0, changes: 0 };

    default:
      return state;
  }
};

export const CounterReducerComponent = () => {
  const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE);
  const { counter: counterRed, changes, previous } = state;

  const handleIncrease = (value: number = 1) => {
    dispatch({ type: "increaseBy", payload: { value: value } });
  };
  const handleReset = () => {
    dispatch({ type: "reset" });
  };
  return (
    <>
      <pre>{JSON.stringify(state)}</pre>
      <p> Counter {counterRed}</p>
      <p> Previous: {previous}</p>
      <p> Changes: {changes}</p>
      <button onClick={() => handleIncrease()}>+1</button>
      <button onClick={() => handleIncrease(5)}>+5</button>
      <button onClick={() => handleIncrease(5)}>+10</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};
