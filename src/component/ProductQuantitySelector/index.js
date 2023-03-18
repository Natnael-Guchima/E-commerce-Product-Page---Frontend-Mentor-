import React from "react";

import PlusIcon from "../../assets/icon-plus.svg";
import MinusIcon from "../../assets/icon-minus.svg";

const ProductQuantitySelector = ({ quantity }) => {
  return (
    <div className="flex items-center justify-between p-5 bg-primary-pale-orange rounded-xl">
      <button>
        <img
          className="w-3 h-3 hover:opacity-50"
          src={PlusIcon}
          alt="add quantity icon"
        />
      </button>

      <span className="font-bold text-secondary-dark-blue">
        {quantity || 1}
      </span>
      <button>
        <img
          className="w-3 h-1 hover:opacity-50"
          src={MinusIcon}
          alt="decrease quantity icon"
        />
      </button>
    </div>
  );
};

export default ProductQuantitySelector;
