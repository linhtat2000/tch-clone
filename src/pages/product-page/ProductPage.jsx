import React from "react";
import { Button } from "@mui/material";
import {
  AddCircle,
  RemoveCircle,
  ShoppingCart,
  Store,
} from "@mui/icons-material";
import CoffeeIcon from "@mui/icons-material/Coffee";
import { ThemeProvider } from "@mui/material";
import theme from "../../theme";

import "./productPage.scss";

const ProductPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="product-page">
        <div className="left">
          <img
            src="/image/ca-phe-peak-flavor.jpg"
            alt={`product's thumbnail`}
            className="img"
          />
        </div>
        <div className="right">
          <h2 className="heading">Cà Phê Đá Xay</h2>
          <p className="price">58.000đ</p>
          <div className="quantity-wrapper">
            <AddCircle className="icon" />
            <p className="quantity">1</p>
            <RemoveCircle className="icon" />
          </div>
          <div className="size">
            <h3>Kích thước</h3>
            <Button variant="contained" className="btn">
              <CoffeeIcon />
              <p>Vừa</p>
            </Button>
            <Button variant="contained" className="btn">
              <CoffeeIcon />
              <p>Lớn</p>
            </Button>
          </div>
          <div className="cart">
            <Button variant="contained" className="btn">
              <ShoppingCart />
              <p>Thêm vào giỏ hàng</p>
            </Button>
          </div>
          <Button variant="contained" className="btn" color="secondary">
            <Store />
            <p>Mua tại cửa hàng</p>
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default ProductPage;
