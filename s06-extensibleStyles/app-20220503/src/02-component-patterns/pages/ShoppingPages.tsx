import React from "react";
import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import "../styles/customStyles.css";

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
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title title="otro" className=" text-bold" />
          <ProductCard.Buttons className="custom-buttons" />
          {/* <ProductCard.Buttons
            increaseBy={(0) => {
              console.log("");
            }}
          /> */}
        </ProductCard>
        <ProductCard product={product} className="bg-dark text-white">
          <ProductImage className="custom-image" />
          <ProductTitle title="otro" className=" text-bold" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>
        <ProductCard product={product} style={{ backgroundColor: "#70D1F8" }}>
          <ProductImage
            style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
          />
          <ProductTitle style={{ fontWeight: "bold" }} />
          <ProductButtons
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          />
        </ProductCard>

        {/* <ProductCard product={product} /> */}
      </div>
    </div>
  );
};

export default ShoppingPages;
