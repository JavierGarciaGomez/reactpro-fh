import styles from "../styles/styles.module.css";

import { useProduct } from "../hooks/useProduct";
import { ReactNode } from "react";
import { Product } from "../interfaces";
import { ProductContext } from "../contest/ProductContext";

const { Provider } = ProductContext;

export interface Props {
  product: Product;
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
export const ProductCard = ({ product, children, className, style }: Props) => {
  const { counter, increaseBy } = useProduct();

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
