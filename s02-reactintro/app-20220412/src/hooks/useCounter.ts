import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const MAXIMUM_COUNT = 10;

export const useCounter = ({ maxCount = 1 }) => {
  const [counter, setCounter] = useState(0);
  const elementToAnimate = useRef<HTMLParagraphElement>(null);
  const tl = useRef(gsap.timeline());

  const handleClick = () => {
    setCounter((prev) => Math.min(MAXIMUM_COUNT, prev + 1));
  };

  useLayoutEffect(() => {
    if (!elementToAnimate.current) return;

    tl.current
      .to(elementToAnimate.current, { y: -10, duration: 0.2, ease: "ease.out" })
      .to(elementToAnimate.current, { y: 0, duration: 1, ease: "bounce.out" })
      .pause();
  }, []);

  useEffect(() => {
    // if (counter < 10) return;
    // console.log("%c Se llegó al valor máximo", "color: red");
    // gsap.to(counterElement.current, { y: -10, duration: 1, ease: "ease.out" }).then(() => {
    //   gsap.to(counterElement.current, { y: 0, duration: 1, ease: "bounce.out" });
    // });
    tl.current.play(0);
  }, [counter]);

  return { counter, elementToAnimate, handleClick };
};
