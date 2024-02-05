import { useEffect, useRef, useState } from "react";
import { Product } from "../interfaces";
import { ProductCardInitialValues } from "../components/ProductCard";

export interface OnChangeArgs {
  product: Product;
  count: number;
}
interface UseProductArgs {
  product: Product;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
  initialValues?: ProductCardInitialValues;
}

export const useProduct = ({
  product,
  onChange,
  value = 0,
  initialValues,
}: UseProductArgs) => {
  const [counter, setCounter] = useState(initialValues?.count || value);
  const isMounted = useRef(false);

  const increaseBy = (value: number) => {
    let newValue = Math.max(counter + value, 0);
    if (initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues.maxCount);
    }

    setCounter(newValue);
    onChange && onChange({ count: newValue, product });
  };

  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  const reset = () => initialValues?.count || 0;
  return {
    counter,
    increaseBy,
    maxCount: initialValues?.maxCount,
    isMaxCountReached:
      !!initialValues?.count && initialValues.maxCount === counter,
    reset,
  };
};
