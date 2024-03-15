import React from "react";
import { FaPlus,FaMinus } from "react-icons/fa6";

const CardAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  return (
    <div className="grid grid-flow-col place-content-start mt-3 ">
      <button onClick={() => setDecrease()}><FaMinus/></button>
      <div className="mx-4 text-2xl">{amount}</div>
      <button onClick={() => setIncrease()}><FaPlus/></button>
    </div>
  );
};

export default CardAmountToggle;
