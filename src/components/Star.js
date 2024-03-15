import React from "react";
import { FaRegStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const Star = ({ stars, reviews }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    const number = index + 0.5;
    return (
      <span key={index} className="p-[2px]">
        {stars >= index + 1 ? (
          <FaStar />
        ) : stars >= number ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
    );
  });
  return (
    <div className="grid grid-rows-2 text-2xl">
      <div className="text-orange-600 grid grid-flow-col place-content-start">
        {ratingStar}
      </div>
      <div>({reviews} customer reviews)</div>
    </div>
  );
};

export default Star;
