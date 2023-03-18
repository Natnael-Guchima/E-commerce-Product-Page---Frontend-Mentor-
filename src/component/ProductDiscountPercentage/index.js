import React from "react";

const ProductDiscountPercentage = ({ discountPercentage }) => {
  return (
    <span className="after:content-['%'] font-bold bg-primary-pale-orange text-primary-orange p-1 rounded-lg">
      {discountPercentage || "50"}
    </span>
  );
};

export default ProductDiscountPercentage;
