import React from "react";
import { Button, Container } from "@mui/material";
import {
  AddCircle,
  RemoveCircle,
  ShoppingCart,
  Store,
} from "@mui/icons-material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import CoffeeIcon from "@mui/icons-material/Coffee";
import { ThemeProvider } from "@mui/material";
import theme from "../../theme";

import "./productPage.scss";

const ProductPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" className="container">
        <Breadcrumbs aria-label="breadcrumb" className="breadcrumb">
          <Link color="inherit" href="/menu" className="breadcrumb-link">
            Menu
          </Link>
          <Link color="inherit" href="/menu/coffee" className="breadcrumb-link">
            Cà phê Việt Nam
          </Link>
          <p className="breadcrumb-current">Product</p>
        </Breadcrumbs>
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
            <div className="quantity-container">
              <h3>Số lượng:</h3>
              <div className="quantity-wrapper">
                <AddCircle className="icon" />
                <p className="quantity">1</p>
                <RemoveCircle className="icon" />
              </div>
            </div>
            <div className="size">
              <h3>Kích thước:</h3>
              <Button variant="contained" className="size-btn">
                <CoffeeIcon className="icon md" />
                <p>Vừa</p>
              </Button>
              <Button variant="contained" className="size-btn">
                <CoffeeIcon className="icon lg" />
                <p>Lớn</p>
              </Button>
            </div>
            <div className="cart">
              <Button variant="contained" className="cart-btn">
                <ShoppingCart className="icon" />
                <p>Thêm vào giỏ hàng</p>
              </Button>
              <Button
                variant="contained"
                className="cart-btn"
                color="secondary"
              >
                <Store className="icon" />
                <p>Mua tại cửa hàng</p>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default ProductPage;
