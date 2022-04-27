import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const MAXIMUM_COUNT = 10;

export const CounterEffect = () => {
  // ref for the element
  const counterElement = useRef<HTMLParagraphElement>(null);
  const [counter, setCounter] = useState(5);
  const handleClick = () => {
    setCounter((prev) => Math.min(MAXIMUM_COUNT, prev + 1));
  };

  useEffect(() => {
    if (counter < MAXIMUM_COUNT) return;
    console.log("%c Se llegó al valor máximo", "color: red");

    gsap.to(counterElement.current, { y: -10, duration: 1, ease: "ease.out" }).then(() => {
      gsap.to(counterElement.current, { y: 0, duration: 1, ease: "bounce.out" });
    });
  }, [counter]);

  return (
    <>
      <p ref={counterElement}>Counter {counter}</p>
      <button onClick={handleClick}>+1</button>
    </>
  );
};
