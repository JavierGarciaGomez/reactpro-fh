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
export interface Props {
  product: Product;
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
}
export const ProductCard = ({
  product,
  children,
  className,
  style,
  onChange,
  value,
}: Props) => {
  const { counter, increaseBy } = useProduct({
    onChange,
    product,
    value: value,
  });

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
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
