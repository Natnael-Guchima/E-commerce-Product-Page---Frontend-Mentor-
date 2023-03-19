import React from "react";
import ProductDiscountPercentage from "../../component/ProductDiscountPercentage";
import ProductPrice from "../../component/ProductPrice";
import ProductPriceBeforeDiscount from "../../component/ProductPriceBeforeDiscount";

const Prices = ({ prices }) => {
  return (
    <div className="flex justify-between items-center md:flex-col md:items-start">
      <div className="flex gap-x-5">
        <ProductPrice />
        <ProductDiscountPercentage />
      </div>

      <ProductPriceBeforeDiscount />
    </div>
  );
};

export default Prices;
