import styles from "../styles/styles.module.css";

import { useProduct } from "../hooks/useProduct";
import { ReactNode } from "react";
import { Product } from "../interfaces";
import { ProductContext } from "../contest/ProductContext";

const { Provider } = ProductContext;

export interface OnChangeArgs {
  product: Product;
  count: number;
}

export interface ProductCardInitialValues {
  count?: number;
  maxCount?: number;
}

export interface ProductCardHandlers {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: Product;

  increaseBy: (value: number) => void;
  reset: () => void;
}

export interface Props {
  product: Product;
  children: (args: ProductCardHandlers) => ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
  initialValues?: ProductCardInitialValues;
}
export const ProductCard = ({
  product,
  children,
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
      value: value,
      initialValues,
    });

  return (
    <Provider value={{ counter, increaseBy, product, maxCount }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          isMaxCountReached,
          product,
          increaseBy,
          reset,
        })}
        {/* <ProductImage imgSrc={product.img} />
        <ProductTitle title={product.title} />
        <ProductButtons counter={counter} increaseBy={increaseBy} /> */}
      </div>
    </Provider>
  );
};

// ProductCard.Title = ProductTitle;
// ProductCard.Image = ProductImage;
// ProductCard.Buttons = ProductButtons;
