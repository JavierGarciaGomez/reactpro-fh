import React, { createContext, CSSProperties, ReactElement } from "react";
import styles from "../styles/styles.module.css";

import { useProduct } from "../hooks/useProduct";
import {
  ProductContextProps,
  Product,
  OnChangeArgs,
  InitialValues,
  ProductCardHandlers,
} from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

// export const ProductButtons = ({
//     counter,
//     increaseBy,
//   }: ProductButtonsProps) => {

export type Props = {
  product: Product;
  // children?: ReactElement | ReactElement[];
  // children: (msg: string) => JSX.Element;
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  style?: CSSProperties;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
};

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
  initialValues,
}: Props) => {
  const { counter, increaseBy, maxCount, isMaxCountReached, reset } =
    useProduct({
      onChange,
      product,
      value,
      initialValues,
    });

  return (
    <Provider value={{ counter, increaseBy, product, maxCount }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          isMaxCountReached,
          maxCount: initialValues?.maxCount,
          product,
          increaseBy,
          reset,
        })}
        {/* <ProductImage img={img} />
      <ProductDescription title={title} />
      <ProductButtons counter={counter} increaseBy={increaseBy} /> */}
      </div>
    </Provider>
  );
};
