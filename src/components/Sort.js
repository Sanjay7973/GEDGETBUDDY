import React from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from "../Context/Filter_Context";

const Sort = () => {
  const { filter_products, grid_view, setGridView, setListView,sorting } =
    useFilterContext();
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-row text-xl place-content-center">
        <button
          className={
            grid_view
              ? "mx-2 bg-slate-500 rounded p-2"
              : "mx-2 bg-slate-300 rounded p-2"
          }
          onClick={setGridView}
        >
          <BsFillGridFill />
        </button>
        <button
          className={
            grid_view
              ? "mx-2 bg-slate-300 rounded p-2 "
              : "mx-2 bg-slate-500 rounded p-2 "
          }
          onClick={setListView}
        >
          <BsList />
        </button>
      </div>
      <div className="hidden md:flex">{`${filter_products.length} total products`}</div>
      <div>
        <form action="">
          <label htmlFor="sort"></label>
          <select
            name="sort"
            id="sort"
            className="border rounded p-1 px-2"
            onClick={sorting}
          >
            <option value="lowest">price(lowest)</option>
            <option value="highest">price(highest)</option>
            <option value="a-z">price(a-z)</option>
            <option value="z-a">price(z-a)</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default Sort;
