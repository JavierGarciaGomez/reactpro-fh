import React from "react";
import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";

const product = {
  id: "an id",
  title: "A title",
  img: "./coffee-mug.png",
};

const ShoppingPages = () => {
  return (
    <div>
      <h1>ShoppingPages</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title title="otro" />
          <ProductCard.Buttons />
          {/* <ProductCard.Buttons
            increaseBy={(0) => {
              console.log("");
            }}
          /> */}
        </ProductCard>
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle title="otro" />
          <ProductButtons />
        </ProductCard>
        {/* <ProductCard product={product} /> */}
      </div>
    </div>
  );
};

export default ShoppingPages;
