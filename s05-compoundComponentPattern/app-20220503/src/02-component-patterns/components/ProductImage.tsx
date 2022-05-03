import React, { useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImg from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";

export const ProductImage = ({ img = "" }) => {
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
    <img src={imgToShow} alt={"Product Image"} className={styles.productImg} />
  );
};
