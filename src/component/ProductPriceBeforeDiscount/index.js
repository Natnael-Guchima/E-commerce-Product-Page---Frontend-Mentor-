import React from "react";

const ProductPriceBeforeDiscount = ({ priceBeforeDiscount }) => {
  return (
    <span className="font-semibold text-secondary-dark-grayish-blue before:content-['$'] line-through">
      {priceBeforeDiscount || "250.00"}
    </span>
  );
};

export default ProductPriceBeforeDiscount;
