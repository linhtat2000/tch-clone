import React from "react";

import mochaNong from "../../assets/img/mocha-nong.jpg";
import "./product.scss";

const Product = () => {
  return (
    <div className="product">
      <img src={mochaNong} alt="product" className="img" />
      <div className="info">
        <p className="name">Mocha Nong</p>
        <p className="price sale">35.400 đ</p>
        <p className="actual-price">59.000 đ</p>
      </div>
    </div>
  );
};

export default Product;
