import "./product.scss";

const Product = ({ name, price, salePrice, img }) => {
  return (
    <div className="product">
      <img
        src={require("../../assets/product-img/cold-brew-sua-tuoi.jpg")}
        alt={`${name}'s thumbnail`}
        className="img"
      />
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
