import { createContext } from "react";
import { Product } from "../interfaces";

interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
  maxCount?: number;
}
export const ProductContext = createContext({} as ProductContextProps);
