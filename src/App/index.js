import React from "react";
import ProductCarousal from "../layouts/ProductCarousal/ProductCarousal";

import ProductDetails from "../layouts/ProductDetails";
//comment test
const App = () => {
  return (
    <div className="flex flex-col">
      <ProductCarousal />
      <ProductDetails />
    </div>
  );
};

export default App;
