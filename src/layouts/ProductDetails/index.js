import React from "react";
import AddToCartButton from "../../component/AddToCartButton";
import CompanyName from "../../component/CompanyName";
import ProductDescription from "../../component/ProductDescription";
import ProductName from "../../component/ProductName";
import ProductQuantitySelector from "../../component/ProductQuantitySelector";
import Prices from "../Prices";

const ProductDetails = ({ productDetails }) => {
  return (
    <div className="flex flex-col-reverse">
      <AddToCartButton />
      <ProductQuantitySelector />
      <Prices />
      <ProductDescription />
      <ProductName />
      <CompanyName />
    </div>
  );
};
export default ProductDetails;
