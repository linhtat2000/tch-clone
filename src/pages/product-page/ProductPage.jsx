import React, { useState } from "react";
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
import { useLocation } from "react-router-dom";
import theme from "../../theme";
import {
  all,
  coffee,
  snack,
  tea,
  iceBlended,
  atHome,
} from "../../products-data";

import "./productPage.scss";

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  const location = useLocation();
  const categories = location.pathname.split("/")[1];
  const productId = location.pathname.split("/")[2];
  let data;
  let heading;

  switch (categories) {
    case "coffee":
      heading = "Cà Phê Việt Nam";
      data = coffee;
      break;
    case "tea":
      heading = "Trà";
      data = tea;
      break;
    case "iceBlended":
      heading = "Đá Xay";
      data = iceBlended;
      break;
    case "snack":
      heading = "Bánh & Snack";
      data = snack;
      break;
    case "atHome":
      heading = "Cà Phê Tại Nhà";
      data = atHome;
      break;
    default:
      heading = "Tất Cả";
      data = all;
  }

  const handleQuantity = (type) => {
    if (type === "inc") {
      setQuantity((prev) => prev + 1);
    } else if (type === "dec" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" className="container">
        {data.map((product, index) => {
          if (product.id === Number(productId)) {
            return (
              <div key={index}>
                <Breadcrumbs aria-label="breadcrumb" className="breadcrumb">
                  <Link
                    color="inherit"
                    href="/menu/all"
                    className="breadcrumb-link"
                  >
                    Menu
                  </Link>
                  <Link
                    color="inherit"
                    href={`/menu/${product.cate}`}
                    className="breadcrumb-link"
                  >
                    {heading}
                  </Link>
                  <p className="breadcrumb-current">Product</p>
                </Breadcrumbs>

                <div className="product-info">
                  <div className="left">
                    <img
                      src={`/image/${product.img}`}
                      alt={`product's thumbnail`}
                      className="img"
                    />
                  </div>
                  <div className="right">
                    <h1 className="heading">{product.name}</h1>
                    <p className="price">{product.price}.000đ</p>
                    <div className="quantity-container">
                      <h3>Số lượng:</h3>
                      <div className="quantity-wrapper">
                        <RemoveCircle
                          className="icon"
                          onClick={() => {
                            handleQuantity("dec");
                          }}
                        />
                        <p className="quantity">{quantity}</p>
                        <AddCircle
                          className="icon"
                          onClick={() => {
                            handleQuantity("inc");
                          }}
                        />
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
                <div className="product-desc">
                  <div className="left">
                    <h2>Thông Tin</h2>
                    <p className="desc">
                      Không ngọt ngào như Bạc sỉu hay Cà phê sữa, Cà phê đen
                      mang trong mình phong vị trầm lắng, thi vị hơn. Người ta
                      thường phải ngồi rất lâu mới cảm nhận được hết hương thơm
                      ngào ngạt, phảng phất mùi cacao và cái đắng mượt mà trôi
                      tuột xuống vòm họng.
                    </p>
                  </div>
                  <div className="right">
                    <h2>Câu Chuyện</h2>
                    <h3 className="bold">
                      Cà phê đen - Phong vị trầm lắng hảo hạng
                    </h3>
                    <p className="desc">
                      Một tách cà phê thơm ngào ngạt, phảng phất mùi cacao là
                      món quà tự thưởng tuyệt vời nhất cho những ai mê đắm tinh
                      chất nguyên bản nhất của cà phê.
                    </p>
                    <p className="more">Xem thêm</p>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </Container>
    </ThemeProvider>
  );
};

export default ProductPage;
