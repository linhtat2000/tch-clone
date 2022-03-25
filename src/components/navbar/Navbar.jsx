import { Link } from "react-router-dom";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import logo from "../../assets/img/logo.png";

import "./navbar.scss";
import Cart from "../cart/Cart";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left">
        <Link to="/" className="link">
          <img src={logo} alt="logo " className="logo" />
        </Link>
      </div>
      <div className="center">
        <div className="links">
          <Link to="/menu/all" className="link">
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
      </div>

      <div className="right">
        <Link to="/checkout">
          <Cart />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
