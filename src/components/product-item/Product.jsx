import { Link } from "react-router-dom";
import "./product.scss";

const Product = ({ name, price, salePrice, img }) => {
  return (
    <div className="product">
      <Link to="/products/product">
        <img
          src={"/image/" + img}
          alt={`${name}'s thumbnail`}
          className="img"
        />
      </Link>
      <div className="info">
        <p className="name">{name}</p>
        {salePrice ? (
          <>
            <p className="price">{salePrice}.000đ</p>
            <p className="price sale">{price}.000đ</p>
          </>
        ) : (
          <p className="price">{price}.000đ</p>
        )}
      </div>
    </div>
  );
};

export default Product;
