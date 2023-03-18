import React from "react";

import AddToCartButton from "../component/AddToCartButton";
import ProductQuantitySelector from "../component/ProductQuantitySelector";
import ProductPrice from "../component/ProductPrice";
import ProductDiscountPercentage from "../component/ProductDiscountPercentage";
import ProductPriceBeforeDiscount from "../component/ProductPriceBeforeDiscount";
import ProductDescription from "../component/ProductDescription";
import ProductName from "../component/ProductName";
import CompanyName from "../component/CompanyName";

const App = () => {
  return (
    <>
      <AddToCartButton />
      <ProductQuantitySelector />
      <ProductPrice />
      <ProductDiscountPercentage />
      <ProductPriceBeforeDiscount />
      <ProductDescription />
      <ProductName />
      <CompanyName />
    </>
  );
};

export default App;
