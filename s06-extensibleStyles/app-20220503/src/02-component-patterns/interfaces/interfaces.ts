import { Props as ProductTitleProps } from "./../components/ProductTitle";
import { Props as ProductImageProps } from "./../components/ProductImage";
import { Props as ProductButtonsProps } from "./../components/ProductButtons";
import { ReactElement } from "react";
import { Props as ProductCardProps } from "../components/ProductCard";

export type Product = {
  id: string;
  title: string;
  img?: string;
};

export type ProductContextProps = {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
};

export type ProductCardHOCProps = {
  ({ children, product }: ProductCardProps): JSX.Element;
  Title: (Props: ProductTitleProps) => JSX.Element;
  Image: (Props: ProductImageProps) => JSX.Element;
  Buttons: (Props: ProductButtonsProps) => JSX.Element;
};
