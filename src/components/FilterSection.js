import React from "react";
import { useFilterContext } from "../Context/Filter_Context";

const FilterSection = () => {
  const {
    filters: { text },
    updateFilterValue,
  } = useFilterContext();
  return (
    <div className="flex justify-start">
      <form onSubmit={(e) => e.preventDefault()} >
        <input
        className="rounded p-[2px] w-[100%] border-2"
          type="text"
          name="text"
          value={text}
          onChange={updateFilterValue}
          placeholder="Search"
        />
      </form>
    </div>
  );
};

export default FilterSection;
