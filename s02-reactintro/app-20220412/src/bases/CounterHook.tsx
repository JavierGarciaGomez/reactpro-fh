import { useCounter } from "../hooks/useCounter";

export const CounterHook = () => {
  const { counter, elementToAnimate, handleClick } = useCounter({ maxCount: 10 });
  return (
    <>
      <p ref={elementToAnimate}>Counter {counter}</p>
      <button onClick={handleClick}>+1</button>
    </>
  );
};
