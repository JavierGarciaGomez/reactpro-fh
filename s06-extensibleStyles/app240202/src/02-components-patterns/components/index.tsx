import {
  ProductCard as ProductCardHOC,
  Props as ProductCardProps,
} from "./ProductCard";
import { ProductTitle, Props as ProductTitleProps } from "./ProductTitle";
import { ProductButtons, Props as ProductButtonsProps } from "./ProductButtons";
import { ProductImage, Props as ProductImageProps } from "./ProductImage";

export { ProductButtons } from "./ProductButtons";
export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element;
  Title: (Props: ProductTitleProps) => JSX.Element;
  Image: (Props: ProductImageProps) => JSX.Element;
  Buttons: (Props: ProductButtonsProps) => JSX.Element;
}

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons,
});

export default ProductCard;
