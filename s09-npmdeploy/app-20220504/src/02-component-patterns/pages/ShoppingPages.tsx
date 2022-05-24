import React, { useState } from "react";
import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import { products } from "../data/data";
import { useShoppingCart } from "../hooks/useShoppingCart";
import { Product, ProductInCart } from "../interfaces/interfaces";

const product = products[0];

const ShoppingPages = () => {
  return (
    <div>
      <h1>ShoppingPages</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <ProductCard
          product={product}
          key={product.id}
          // onChange={onProductCountChange}
          // value={shoppingCart[product.id]?.count || 0}
          initialValues={{ count: 4, maxCount: 10 }}
        >
          {({ reset, count, isMaxCountReached, maxCount, increaseBy }) => (
            <>
              <ProductImage />
              <ProductTitle />
              <ProductButtons />
              {/* <h2>{msg}</h2> */}
              {/* <button onClick={reset}>Reset</button> */}
              {/* {JSON.stringify(args, null, 3)} */}
            </>
          )}
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPages;
