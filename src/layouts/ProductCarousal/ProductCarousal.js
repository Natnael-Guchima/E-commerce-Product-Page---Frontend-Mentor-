import React from "react";

import ImageProduct1 from "../../assets/image-product-1.jpg";

const ProductCarousal = ({ product }) => {
  //implement unordered list
  return (
    <div className="aspect-square w-full">
      <ul className="h-full">
        <li className="h-full">
          <img className="object-scale-down" src={ImageProduct1} />
        </li>
      </ul>
    </div>
  );
};

export default ProductCarousal;
