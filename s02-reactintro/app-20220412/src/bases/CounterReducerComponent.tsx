import React, { useReducer, useState } from "react";

interface ActionType {
  type: "increment";
}

const counterReducer = (state: { counter: number }, action: ActionType) => {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + 1 };
      break;

    default:
      return state;
  }
};

export const CounterReducerComponent = () => {
  const [counter, setCounter] = useState(0);

  const [state, dispatch] = useReducer(counterReducer, { counter: 0 });
  const { counter: counterRed } = state;

  const handleClick = () => {
    dispatch({ type: "increment" });
  };
  return (
    <>
      <p> Counter {counterRed}</p>
      <button onClick={handleClick}>+1</button>
    </>
  );
};
