import React from "react";
import Product from "../product-item/Product";

import "./productList.scss";

const ProductList = () => {
  return (
    <div className="product-list">
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
};

export default ProductList;
