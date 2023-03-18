import React from "react";

import AddToCartButton from "../component/AddToCartButton";
import ProductQuantitySelector from "../component/ProductQuantitySelector";
import ProductPrice from "../component/ProductPrice";

const App = () => {
  return (
    <>
      <AddToCartButton />
      <ProductQuantitySelector />
      <ProductPrice />
    </>
  );
};

export default App;
