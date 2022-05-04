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
import "../styles/customStyles.css";

const product = products[0];

const ShoppingPages = () => {
  return (
    <div>
      <h1>ShoppingPages</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <ProductCard
          product={product}
          className="bg-dark text-white"
          key={product.id}
          // onChange={onProductCountChange}
          // value={shoppingCart[product.id]?.count || 0}
          initialValues={{ count: 4, maxCount: 10 }}
        >
          {({ reset, count, isMaxCountReached, maxCount, increaseBy }) => (
            <>
              <ProductImage
                className="custom-image"
                style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
              />
              <ProductTitle className=" text-bold" />
              <ProductButtons className="custom-buttons" />
              {/* <h2>{msg}</h2> */}
              {/* <button onClick={reset}>Reset</button> */}
              <button onClick={reset}>Reset</button>
              <button onClick={() => increaseBy(-2)}> -2 </button>
              {!isMaxCountReached && (
                <button onClick={() => increaseBy(+2)}> +2 </button>
              )}

              <span>
                {count} - {maxCount}
              </span>
              {/* {JSON.stringify(args, null, 3)} */}
            </>
          )}
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPages;
