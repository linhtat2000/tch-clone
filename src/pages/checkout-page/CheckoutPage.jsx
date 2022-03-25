import React from "react";
import { useSelector } from "react-redux";
import { Container } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DeleteIcon from "@mui/icons-material/Delete";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

import "./checkoutPage.scss";

const CheckoutPage = () => {
  const cart = useSelector((state) => state.cart);

  const itemQuantity = cart.products.map((item) => {
    return item.quantity;
  });

  const totalItem = itemQuantity.reduce(
    (preValue, currentValue) => preValue + currentValue,
    0
  );

  console.log(totalItem);
  console.log(cart);

  return (
    <div className="checkout-page">
      <div className="header">
        <InsertDriveFileIcon className="heading-icon" />
        <h1>Xác nhận đơn hàng</h1>
      </div>

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
              <input
                type="radio"
                id="cod"
                name="payment"
                value="cod"
                defaultChecked
              />
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
            <input type="checkbox" className="policy-box" />
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
              {cart.products.map((product, index) => (
                <div className="item" key={index}>
                  <div className="item-thumbnail">
                    <EditIcon className="edit-icon" />
                    <img
                      src={`/image/${product.img}`}
                      alt={`${product.name}'s thumbnail'`}
                      className="item-img"
                    />
                  </div>
                  <div className="item-info">
                    <h3 className="item-name">{product.name}</h3>
                    <p className="item-size">
                      Vừa
                      <span className="item-quantity">x{product.quantity}</span>
                    </p>
                    <p className="item-delete">Xóa</p>
                  </div>
                  <p className="item-price">{product.price}.000đ</p>
                </div>
              ))}
            </div>
            <div className="subtotal">
              <h2 className="heading">Tổng cộng</h2>
              <div className="price shipping">
                <p>Phí vận chuyển</p>
                <p>10.000đ</p>
              </div>
              <div className="price promote">
                <p>Khuyến mãi</p>
                <p>15.000đ</p>
              </div>
            </div>
          </div>
          <div className="total">
            <div className="total-left">
              <p>Thành tiền</p>
              <p className="total-price">{cart.total}.000đ</p>
            </div>
            <div className="total-center">
              <p>Số lượng</p>
              <p className="total-quantity">x {totalItem}</p>
            </div>
            <div className="total-right">
              <button className="submit-order">Đặt hàng</button>
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
