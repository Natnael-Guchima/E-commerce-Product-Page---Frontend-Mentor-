import React from "react";

import ImageProduct1 from "../../assets/image-product-1.jpg";

const ProductCarousal = ({ product }) => {
  //implement unordered list
  return (
    <div className="h-4/12overflow-hidden">
      <ul className="h-full">
        <li className="h-full">
          <img className="object-cover " src={ImageProduct1} />
        </li>
      </ul>
    </div>
  );
};

export default ProductCarousal;
