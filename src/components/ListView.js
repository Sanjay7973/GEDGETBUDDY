import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from '../Helpers/FormatPrice'

const ListView = ({ products }) => {
  return (
    <div>
      {
      products.map((curElem) => {
        const { id, name, image, price, description } = curElem;
        return (
          <div className="grid md:grid-cols-2 border rounded p-5 my-4">
            <div className="m-1">
              <img className="w-[75%] rounded" src={image} alt={name} />
            </div>
            <div className="">
              <p className="my-2">{name}</p>
              <p className="my-2"><FormatPrice price={price}/></p>
              <p className="my-2">{description.slice(0, 180)}...</p>
              <NavLink to={`/singleproduct/${id}`}>
                <div className=" cursor-pointer my-5 rounded w-[100%] md:w-[20%] p-2 text-center text-white bg-slate-500 hover:bg-blue-900">
                  Read More
                </div>
              </NavLink>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListView;
