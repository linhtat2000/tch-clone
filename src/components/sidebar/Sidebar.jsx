import { useState } from "react";
import CoffeeIcon from "@mui/icons-material/Coffee";

import "./sidebar.scss";

const Sidebar = () => {
  const [category, setCategory] = useState("all");

  const handleClickCategory = (cate) => {
    setCategory(cate);
  };

  return (
    <ul className="sidebar">
      <li
        className={category === "all" ? "category active" : "category"}
        onClick={() => handleClickCategory("all")}
      >
        {/* <CoffeeIcon className="coffee-icon" /> */}
        <p>Tất cả</p>
      </li>
      <li
        className={category === "coffee" ? "category active" : "category"}
        onClick={() => handleClickCategory("coffee")}
      >
        <p>Cà phê</p>
        <li className="sub-category">Cà phê Việt Nam</li>
        <li className="sub-category">Cà phê máy</li>
        <li className="sub-category">Cold Brew</li>
      </li>
      <li
        className={category === "tea" ? "category active" : "category"}
        onClick={() => handleClickCategory("tea")}
      >
        <p>Trà</p>
        <li className="sub-category">Trà trái cây</li>
        <li className="sub-category">Trà sữa Macchiato</li>
      </li>
      <li
        className={category === "other" ? "category active" : "category"}
        onClick={() => handleClickCategory("other")}
      >
        <p>Món khác</p>
        <li className="sub-category">Đá xay</li>
        <li className="sub-category">Matcha - Chocolate</li>
      </li>
      <li
        className={category === "snack" ? "category active" : "category"}
        onClick={() => handleClickCategory("snack")}
      >
        <p>Bánh & Snack</p>
        <li className="sub-category">Bánh mặn</li>
        <li className="sub-category">Bánh ngọt</li>
        <li className="sub-category">Snack</li>
      </li>
      <li
        className={category === "at-home" ? "category active" : "category"}
        onClick={() => handleClickCategory("at-home")}
      >
        <p>Tại nhà</p>
        <li className="sub-category">Cà phê tại nhà</li>
        <li className="sub-category">Trà tại nhà</li>
      </li>
    </ul>
  );
};

export default Sidebar;
