import React from "react";
import { Container } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DeleteIcon from "@mui/icons-material/Delete";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

import "./checkoutPage.scss";

const CheckoutPage = () => {
  return (
    <div className="checkout-page">
      <h1>
        <InsertDriveFileIcon className="heading-icon" />
        Xác nhận đơn hàng
      </h1>

      <Container maxWidth="lg" className="checkout-container">
        <div className="left">
          <div className="customer-info">
            <h2 className="heading">Giao hàng</h2>
            <form className="info">
              <input type="text" placeholder="Địa chỉ giao hàng" required />
              <input type="text" placeholder="Tên người nhận" required />
              <input type="text" placeholder="Số điện thoại" required />
              <input type="text" placeholder="Thêm hướng dẫn giao hàng" />
            </form>
          </div>
          <div className="payment-method">
            <h2 className="heading">Phương thức thanh toán</h2>
            <div className="cod">
              <input type="radio" id="cod" name="payment" value="cod" />
              <AttachMoneyIcon className="payment-icon" />
              <label htmlFor="cod">Tiền mặt</label>
            </div>
            <div className="card">
              <input type="radio" id="card" name="payment" value="card" />
              <CreditCardIcon className="payment-icon" />
              <label htmlFor="card">Thẻ ngân hàng</label>
            </div>
          </div>
          <div className="policy">
            <input type="checkbox" />
            <p>
              Đồng ý với các <em>điều khoản và điều kiện</em> mua hàng của The
              Coffee House
            </p>
          </div>
        </div>
        <div className="right">
          <div className="receipt-container">
            <div className="orders">
              <h2 className="heading">Các món đã chọn</h2>
              <div className="item">
                <EditIcon className="edit-icon" />
                <h3 className="item-name">Coffee</h3>
                <p className="item-quantity">2</p>
                <p className="item-price">40.600đ</p>
                <div className="item-delete">Xóa</div>
              </div>
            </div>
            <div className="subtotal">
              <h2 className="heading">Tổng cộng</h2>
              <div className="price shipping">
                <p>Phí vận chuyển</p>
                <p>40.600đ</p>
              </div>
              <div className="price promote">
                <p>Khuyến mãi</p>
                <p>10.000đ</p>
              </div>
            </div>
            <div className="total">
              <div className="total-left">
                <p>Thành tiền</p>
                <p>50.600đ</p>
              </div>
              <div className="total-right">
                <button className="submit-order">Đặt hàng</button>
              </div>
            </div>
          </div>
          <div className="delete-order">
            <DeleteIcon className="delete-icon" />
            <p>Xóa đơn hàng</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CheckoutPage;
