import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export const ProductTitle = ({ title }: { title?: string }) => {
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

  return <span className={styles.productDescriptgion}>{titleToShow}</span>;
};
