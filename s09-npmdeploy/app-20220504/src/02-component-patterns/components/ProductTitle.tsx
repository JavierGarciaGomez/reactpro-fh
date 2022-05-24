import { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export type Props = {
  title?: string;
  className?: string;
  style?: CSSProperties;
};
export const ProductTitle = ({ title, className, style }: Props) => {
  const productContext = useContext(ProductContext);
  const { product } = productContext;
  let titleToShow: string;
  if (title) {
    titleToShow = title;
  } else if (product.title) {
    titleToShow = product.title;
  } else {
    titleToShow = "Random title";
  }

  return (
    <span className={`${styles.productDescription} ${className}`} style={style}>
      {titleToShow}
    </span>
  );
};
