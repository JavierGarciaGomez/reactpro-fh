import { useEffect, useRef, useState } from "react";
import { Product } from "../interfaces";

export interface OnChangeArgs {
  product: Product;
  count: number;
}
interface UseProductArgs {
  product: Product;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
}

export const useProduct = ({
  product,
  onChange,
  value = 0,
}: UseProductArgs) => {
  const [counter, setCounter] = useState(value);

  const isControlled = useRef(!!onChange);

  const increaseBy = (value: number) => {
    if (isControlled.current) {
      return onChange!({ count: value, product });
    }
    setCounter((prev) => Math.max(prev + value, 0));
    onChange && onChange({ product, count: counter + value });
  };

  useEffect(() => {
    setCounter(value);
  }, [value]);

  return { counter, increaseBy };
};
