import React from "react";

import { Button, ThemeProvider } from "@mui/material";
import BlogItem from "../../components/blog-item/BlogItem";
import ProductList from "../../components/product-list/ProductList";

import hcmStore1 from "../../assets/img/hcm-store-1.jpg";
import hcmStore2 from "../../assets/img/hcm-store-2.jpg";
import tradao from "../../assets/img/tra-dao.png";
import tranhan from "../../assets/img/tra-nhan.png";
import banner from "../../assets/img/banner.png";
import theme from "../../theme";

import "./homepage.scss";

const Homepage = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="homepage">
        <img src={banner} alt="Tet Holiday banner" className="banner" />
        <div className="collections">
          <ProductList />
        </div>
        <div className="new-products">
          <div className="item">
            <div className="left">
              <h2 className="header">Trà Sen Nhãn Sum Vầy</h2>
              <p className="description">
                Thức uống mang hương vị của nhãn, của sen, của trà Oolong đầy
                thanh mát cho tất cả các thành viên trong dịp Tết này. An lành,
                thư thái và đậm đà chính là những gì The Coffee House mong muốn
                gửi trao đến bạn và gia đình.
              </p>
              <Button variant="contained" className="btn">
                Tìm hiểu thêm
              </Button>
            </div>
            <div className="right">
              <img src={tranhan} alt="Longan tea" className="product-img" />
            </div>
          </div>
          <div className="item">
            <div className="right close-to-left">
              <h2 className="header">Trà Dưa Đào Sung Túc</h2>
              <p className="description">
                Vị thơm ngọt của Dưa lưới và đào tươi chua chua, ngọt ngọt trên
                nền trà Oolong trứ danh cùng lớp foam cheese mỏng nhẹ vị mặn mặn
                tạo nên sự cân bằng cho thức uống, sẽ đem đến cho bạn, gia đình
                và bạn bè những giai điệu tươi vui cho mùa xuân mới.
              </p>
              <Button variant="contained" className="btn">
                Tìm hiểu thêm
              </Button>
            </div>
            <div className="left">
              <img src={tradao} alt="Peach tea" className="product-img" />
            </div>
          </div>
        </div>
        <div className="store">
          <div className="left">
            <h2 className="header">The Coffee House 64A Lữ Gia - Quận 11</h2>
            <p className="description">
              Cửa hàng mới vừa ra mắt ngày 17/12 tại Quận 11, Hồ Chí Minh đã sẵn
              sàng đón bạn ghé qua rồi nè!
            </p>
            <Button variant="contained" className="btn">
              Tìm hiểu thêm
            </Button>
          </div>
          <div className="right">
            <img src={hcmStore1} alt="store picture" className="store-img" />
          </div>
        </div>
        <div className="blogs">
          <h2 className="header">Chuyện Cà phê và Trà</h2>
          <div className="topic">
            <h3 className="topic-header">Coffeeholic</h3>
            <BlogItem />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Homepage;
