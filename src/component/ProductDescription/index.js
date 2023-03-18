import React from "react";

const ProductDescription = ({ productDescription }) => {
  return (
    <p className="text-secondary-dark-mid-grayish-blue">
      {productDescription ||
        `These low-profile sneakers are your perfect casual wear companion.
      Featuring a durable rubber outer sole, they'll withstand everything the
      weather can offer.`}
    </p>
  );
};

export default ProductDescription;
