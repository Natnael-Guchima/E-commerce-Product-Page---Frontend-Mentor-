import React from "react";

const ProductName = ({ productName }) => {
  return (
    <h2 className="text-3xl font-bold capitalize mb-3">
      {productName || "fall limited edition sneakers"}
    </h2>
  );
};

export default ProductName;
