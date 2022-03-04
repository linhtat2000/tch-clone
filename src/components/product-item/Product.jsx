import "./product.scss";

const Product = ({ name, price, salePrice, img }) => {
  return (
    <div className="product">
      <img
        src={require("../../assets/product-img/bac-xiu-da.jpg")}
        alt={`${name}'s thumbnail`}
        className="img"
      />
      <div className="info">
        <p className="name">{name}</p>
        <p className="price sale">{salePrice}.000đ</p>
        <p className="actual-price">{price}.000đ</p>
      </div>
    </div>
  );
};

export default Product;
