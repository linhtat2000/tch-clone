import Product from "../product-item/Product";

import "./productList.scss";

const ProductList = ({ data }) => {
  return (
    <div className="product-list">
      {data.map((product, index) => {
        return (
          <Product
            key={index}
            name={product.name}
            price={product.price}
            salePrice={product.salePrice}
            img={product.img}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
