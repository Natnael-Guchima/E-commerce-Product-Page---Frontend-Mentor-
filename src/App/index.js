import React from "react";

import AddToCartButton from "../component/AddToCartButton";
import ProductQuantitySelector from "../component/ProductQuantitySelector";
import ProductPrice from "../component/ProductPrice";
import ProductDiscountPercentage from "../component/ProductDiscountPercentage";
import ProductPriceBeforeDiscount from "../component/ProductPriceBeforeDiscount";

const App = () => {
  return (
    <>
      <AddToCartButton />
      <ProductQuantitySelector />
      <ProductPrice />
      <ProductDiscountPercentage />
      <ProductPriceBeforeDiscount />
    </>
  );
};

export default App;
