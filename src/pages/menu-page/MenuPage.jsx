import Sidebar from "../../components/sidebar/Sidebar";
import banner from "../../assets/img/menu-banner.jpg";

import "./menuPage.scss";
import ProductList from "../../components/product-list/ProductList";
import Navbar from "../../components/navbar/Navbar";

const MenuPage = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="menu-page">
        <div className="left">
          <Sidebar />
        </div>
        <div className="right">
          <img src={banner} alt="Promo product banner" className="banner" />
          <h2 className="category">Cà Phê Máy</h2>
          <div className="collections">
            <ProductList />
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuPage;
