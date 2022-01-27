import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/img/logo.png";
import "./navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="link">
        <img src={logo} alt="logo " className="logo" />
      </Link>
      <div className="links">
        <Link to="/menu" className="link">
          Menu
        </Link>
        <Link to="/blogs" className="link">
          Chuyện Cà phê và Trà
        </Link>
        <Link to="/store" className="link">
          Cửa hàng
        </Link>
        <Link to="/hiring" className="link">
          Tuyển dụng
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
