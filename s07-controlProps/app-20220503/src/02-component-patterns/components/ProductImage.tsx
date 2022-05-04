import React, { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImg from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";

export type Props = {
  img?: string;
  className?: string;
  style?: CSSProperties;
};

export const ProductImage = ({ img, className, style }: Props) => {
  const productContext = useContext(ProductContext);
  const { product } = productContext;
  let imgToShow: string;

  if (img) {
    imgToShow = img;
  } else if (product.img) {
    imgToShow = product.img;
  } else {
    imgToShow = noImg;
  }
  return (
    <img
      src={imgToShow}
      alt={"Product Image"}
      className={`${styles.productImg} ${className}`}
      style={style}
    />
  );
};
