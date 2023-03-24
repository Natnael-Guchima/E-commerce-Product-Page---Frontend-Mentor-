import React from "react";

import AddToCartButton from "../../component/AddToCartButton";
import ProductQuantitySelector from "../../component/ProductQuantitySelector";

const AddToCartWithQuantity = ({ quantity }) => {
  return (
    <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-4">
      <ProductQuantitySelector />
      <AddToCartButton />
    </div>
  );
};

export default AddToCartWithQuantity;
