import React, { useEffect, useRef, useState } from "react";
import { OnChangeArgs, Product, InitialValues } from "../interfaces/interfaces";

type UseProductArgs = {
  product: Product;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
};

export const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: UseProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  const isMounted = useRef(false);

  const increaseBy = (value: number) => {
    let newValue = Math.max(counter + value, 0);

    if (initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues.maxCount);
    }

    setCounter(newValue);
    onChange && onChange({ count: newValue, product });
  };

  const reset = () => {
    setCounter(initialValues?.count || value);
  };

  // evaluate is mounted
  useEffect(() => {
    isMounted.current = true;
  }, [value]);

  useEffect(() => {
    // just when the component is mounted set counter with value
    if (!isMounted.current) setCounter(value);
  }, [value]);

  console.log("USE PRODUCT", initialValues);
  return {
    counter,
    isMaxCountReached:
      !!initialValues?.count && initialValues.maxCount === counter,
    maxCount: initialValues?.maxCount,
    increaseBy,
    reset,
  };
};
