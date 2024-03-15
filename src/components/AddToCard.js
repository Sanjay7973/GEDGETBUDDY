import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import CardAmountToggle from "./CardAmountToggle";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../Context/cart_Context";

const AddToCard = ({ product }) => {

  const {addToCart} = useCartContext();

  const { id, colors, stock } = product;
  const [color, setcolor] = useState(colors[0]);

  const [amount, setamount] = useState(1);

  const setDecrease = () => {
    amount > 1 ? setamount(amount - 1) : setamount(1);
  };

  const setIncrease = () => {
    amount < stock ? setamount(amount + 1) : setamount(stock);
  };

  return (
    <>
      <div className="grid grid-flow-col place-content-start">
        Colors:
        {colors.map((curColor, index) => {
          return (
            <button
              key={index}
              style={{ backgroundColor: curColor }}
              className="rounded-full w-5 h-5 m-[10%] ml-2 opacity-80 active:opacity-100"
              onClick={() => setcolor(curColor)}
            >
              {color === curColor ? (
                <FaCheck className="text-xl text-slate-100" />
              ) : null}
            </button>
          );
        })}
      </div>
      {/* add to card  */}
      <div>
        <CardAmountToggle
          amount={amount}
          setDecrease={setDecrease}
          setIncrease={setIncrease}
        />
        <NavLink to="/cart"
        onClick={()=>addToCart(id,color,amount,product)}>
          <div className=" md:w-[25%]  cursor-pointer mt-3 rounded  p-2 text-center text-white bg-slate-500 hover:bg-blue-900">
            Add To Card
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default AddToCard;
