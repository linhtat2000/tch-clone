import ProductList from "../../components/product-list/ProductList";
import Sidebar from "../../components/sidebar/Sidebar";
import banner from "../../assets/img/menu-banner.jpg";
import { all } from "../../products-data";

import "./menuPage.scss";

const MenuPage = () => {
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
            <ProductList data={all} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuPage;
