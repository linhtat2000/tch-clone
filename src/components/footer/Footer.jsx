import React from "react";

import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="links">
        <h2 className="header">Giới thiệu</h2>
        <div className="link">Về chúng tôi</div>
        <div className="link">Sản phẩm</div>
        <div className="link">Khuyến mãi</div>
        <div className="link">Chuyện cà phê</div>
        <div className="link">Cửa hàng</div>
        <div className="link">Tuyển dụng</div>
      </div>
      <div className="links">
        <h2 className="header">Điều khoản</h2>
        <div className="link">Điều khoản sử dụng</div>
        <div className="link">Quy tắc bảo mật</div>
      </div>
      <div className="links">
        <div className="delivery">Đặt hàng: 1800 6936</div>
        <div className="contact">
          <h2 className="header">Liên hệ</h2>
          <small>
            Tầng 3-4 Hub Building 195/10E Điện Biên Phủ, P.15 , Q.Bình Thạnh,
            TP.Hồ Chí Minh
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
