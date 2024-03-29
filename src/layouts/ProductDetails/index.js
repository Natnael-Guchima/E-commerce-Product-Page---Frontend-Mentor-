import React from "react";

import CompanyName from "../../component/CompanyName";
import ProductDescription from "../../component/ProductDescription";
import ProductName from "../../component/ProductName";
import Prices from "../Prices";
import AddToCartWithQuantity from "../AddToCartWithQuantity";

const ProductDetails = ({ productDetails }) => {
  return (
    <div className="flex flex-col-reverse max-w-md p-4 md:px-0 ">
      <AddToCartWithQuantity />
      <Prices />
      <ProductDescription />
      <ProductName />
      <CompanyName />
    </div>
  );
};
export default ProductDetails;
