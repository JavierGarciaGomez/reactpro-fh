import { useCounter } from "../hooks/useCounter";

const MAXIMUM_COUNT = 10;

export const CounterHook = () => {
  const { counter, elementToAnimate, handleClick } = useCounter({ maxCount: 10 });
  return (
    <>
      <p ref={elementToAnimate}>Counter {counter}</p>
      <button onClick={handleClick}>+1</button>
    </>
  );
};
