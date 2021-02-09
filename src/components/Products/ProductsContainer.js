import React, { useState } from "react";
import { useSelector } from "react-redux";
import Products from "./Products";

const ProductsContainer = () => {
  const selects = useSelector(state => state.products.selects);
  const activeSelect = useSelector(state => state.products.activeSelect);

  return <Products selects={selects} activeSelect={activeSelect} />;
};

export default ProductsContainer;
