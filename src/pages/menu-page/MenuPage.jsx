import { useLocation } from "react-router-dom";
import ProductList from "../../components/product-list/ProductList";
import Sidebar from "../../components/sidebar/Sidebar";
import banner from "../../assets/img/menu-banner.jpg";
import { all, coffee, snack, fruitTea, iceBlended } from "../../products-data";

import "./menuPage.scss";

const MenuPage = () => {
  const location = useLocation();
  const categories = location.pathname.split("/")[2];
  let data;

  switch (categories) {
    case "coffee":
      data = coffee;
      break;
    case "fruitTea":
      data = fruitTea;
      break;
    case "iceBlended":
      data = iceBlended;
      break;
    case "snack":
      data = snack;
      break;
    default:
      data = all;
      return data;
  }
  console.log(categories, data);

  return (
    <>
      <div className="menu-page">
        <div className="left">
          <Sidebar />
        </div>
        <div className="right">
          <img src={banner} alt="Promo product banner" className="banner" />
          <h2 className="category">Cà Phê Máy</h2>
          <div className="collections">
            <ProductList data={data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuPage;
