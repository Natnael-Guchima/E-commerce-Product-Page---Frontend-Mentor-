import React from "react";

import CartIcon from "../../assets/icon-cart.svg";
const AddToCartButton = () => {
  return (
    <button className="bg-primary-orange text-white w-full h-16 font-bold text-lg hover:opacity-50 rounded-xl md:basis-2/3">
      <span>
        <img
          alt="add to cart icon"
          src={CartIcon}
          className="inline-block mr-5"
        ></img>
      </span>
      Add to cart
    </button>
  );
};

export default AddToCartButton;
