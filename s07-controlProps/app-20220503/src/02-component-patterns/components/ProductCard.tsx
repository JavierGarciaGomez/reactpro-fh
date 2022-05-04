import React, { createContext, CSSProperties, ReactElement } from "react";
import styles from "../styles/styles.module.css";
import "../styles/customStyles.css";

import { useProduct } from "../hooks/useProduct";
import {
  ProductContextProps,
  Product,
  OnChangeArgs,
} from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

// export const ProductButtons = ({
//     counter,
//     increaseBy,
//   }: ProductButtonsProps) => {

export type Props = {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
};

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
}: Props) => {
  const { counter, increaseBy } = useProduct({ onChange, product, value });

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
        {/* <ProductImage img={img} />
      <ProductDescription title={title} />
      <ProductButtons counter={counter} increaseBy={increaseBy} /> */}
      </div>
    </Provider>
  );
};
