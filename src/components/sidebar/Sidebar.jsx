import React from "react";

import CoffeeIcon from "@mui/icons-material/Coffee";
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <ul className="sidebar">
      <li className="category active">
        <CoffeeIcon className="coffee-icon" />
        Tất cả
      </li>
      <li className="category">
        Cà phê
        <li className="sub-category">Cà phê Việt Nam</li>
        <li className="sub-category">Cà phê máy</li>
        <li className="sub-category">Cold Brew</li>
      </li>
      <li className="category">
        Trà
        <li className="sub-category">Trà trái cây</li>
        <li className="sub-category">Trà sữa Macchiato</li>
      </li>
      <li className="category">
        Món khác
        <li className="sub-category">Đá xay</li>
        <li className="sub-category">Matcha - Chocolate</li>
      </li>
      <li className="category">
        Bánh & Snack
        <li className="sub-category">Bánh mặn</li>
        <li className="sub-category">Bánh ngọt</li>
        <li className="sub-category">Snack</li>
      </li>
      <li className="category">
        Tại nhà
        <li className="sub-category">Cà phê tại nhà</li>
        <li className="sub-category">Trà tại nhà</li>
      </li>
    </ul>
  );
};

export default Sidebar;
