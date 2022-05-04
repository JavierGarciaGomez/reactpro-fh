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
  product: Product;
  maxCount?: number;
  increaseBy: (value: number) => void;
};

export type ProductCardHOCProps = {
  ({ children, product }: ProductCardProps): JSX.Element;
  Title: (Props: ProductTitleProps) => JSX.Element;
  Image: (Props: ProductImageProps) => JSX.Element;
  Buttons: (Props: ProductButtonsProps) => JSX.Element;
};

export interface OnChangeArgs {
  product: Product;
  count: number;
}

export interface ProductInCart extends Product {
  count: number;
}

export interface InitialValues {
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
