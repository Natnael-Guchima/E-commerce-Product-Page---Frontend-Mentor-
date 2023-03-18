import React from "react";

const ProductName = ({ productName }) => {
  return (
    <h2 className="text-3xl font-bold capitalize">
      {productName || "fall limited edition screen"}
    </h2>
  );
};

export default ProductName;
