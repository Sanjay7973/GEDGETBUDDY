import React from "react";
import FilterSection from "./components/FilterSection";
import Sort from "./components/Sort";
import ProductList from "./components/ProductList";

const Product = () => {
  return (
    <div className="max-w-[1280px] grid grid-cols-12 md:grid-flow-col mx-auto">
  {/* First column (takes 2 columns) */}
  <div className="col-span-2 grid place-content-start p-5 m-2 hidden md:flex">
    <FilterSection />
    
  </div>

  {/* Second column (takes 10 columns) */}
  <div className="col-span-12 p-5 gap-11 ">
    <div className="grid grid-flow-col">
      <Sort />
    </div>
    <div>
      <ProductList />
    </div>
  </div>
</div>

  );
};

export default Product;
