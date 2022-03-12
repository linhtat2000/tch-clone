import { useLocation } from "react-router-dom";
import ProductList from "../../components/product-list/ProductList";
import Sidebar from "../../components/sidebar/Sidebar";
import banner from "../../assets/img/menu-banner.jpg";
import {
  all,
  coffee,
  snack,
  tea,
  iceBlended,
  atHome,
} from "../../products-data";

import "./menuPage.scss";

const MenuPage = () => {
  const location = useLocation();
  const categories = location.pathname.split("/")[2];
  let data;
  let heading;

  switch (categories) {
    case "coffee":
      heading = "Cà Phê";
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

  return (
    <>
      <div className="menu-page">
        <div className="left">
          <Sidebar />
        </div>
        <div className="right">
          <img src={banner} alt="Promo product banner" className="banner" />
          <h2 className="category">{heading}</h2>
          <div className="collections">
            <ProductList data={data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuPage;
