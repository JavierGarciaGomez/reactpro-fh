import { createContext } from "react";
import { Product } from "../interfaces";

interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}
export const ProductContext = createContext({} as ProductContextProps);
