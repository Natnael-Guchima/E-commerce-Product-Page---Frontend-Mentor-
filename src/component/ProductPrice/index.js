import React from "react";

const ProductPrice = ({ price }) => {
  return (
    <span className="before:content-['$'] font-bold text-2xl">
      {price || "125.00"}
    </span>
  );
};

export default ProductPrice;
