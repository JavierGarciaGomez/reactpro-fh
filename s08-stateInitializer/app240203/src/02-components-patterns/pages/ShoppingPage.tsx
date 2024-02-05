import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";

import "../styles/custom-styles.css";

import { products } from "../data/products";

const product = products[0];

export const ShoppingPage = () => {
  return (
    <>
      <div>
        <h1>Shopping Store</h1>
        <hr />

        <ProductCard
          product={product}
          key={product.id}
          initialValues={{
            count: 6,
            maxCount: 10,
          }}
        >
          {() => (
            <>
              <ProductImage />
              <ProductTitle title={"Hola Mundo"} />
              <ProductButtons />
            </>
          )}
        </ProductCard>
      </div>
    </>
  );
};
