import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";

const Product = (curElem) => {
  const { id, name, image, price, category } = curElem;
 
  return (
    <NavLink to={`/singleproduct/${id}`}>
      <div className="relative bg-white p-1 m-2 group overflow-hidden">
        <figure className="relative overflow-hidden">
          <img className="w-[100%] md:w-80 rounded" src={image} alt="" />
          <div className="absolute top-0 right-full w-full h-full bg-blue-600 opacity-0 transition-transform group-hover:translate-x-80   group-hover:opacity-50 duration-700"></div>
          <figcaption className="absolute top-4 right-4 text-black bg-white rounded-2xl px-4 text-center">
            {category}
          </figcaption>
        </figure>
        <div className="flex flex-row justify-between mt-2">
          <div>{name}</div>
          <div><FormatPrice price={price}/></div>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;
