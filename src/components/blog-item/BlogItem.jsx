import React from "react";

import blog1 from "../../assets/img/blog-coffee-1.jpg";
import "./blogItem.scss";

const BlogItem = () => {
  return (
    <div className="blog">
      <div className="img-container">
        <img src={blog1} alt="blog post" className="img" />
      </div>
      <div className="info">
        <p className="date">18/01/2022</p>
        <h4 className="blog-header">TẠI SAO CÀ PHÊ CÓ VỊ CHUA?</h4>
        <p className="blog-description">
          Vị đắng của cà phê thì ai cũng đã biết, tuy nhiên bạn có biết cà phê
          còn có vị chua. Và vị chua này lại chính là vị đặc...
        </p>
      </div>
    </div>
  );
};

export default BlogItem;
