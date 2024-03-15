import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { MdPayments } from "react-icons/md";

const Services = () => {
  return (
    <div className=" p-10 mt-10 mb-6 bg-white w-full h-auto flex flex-col  lg:flex-row justify-around ">
      <div className=" bg-slate-50 flex flex-col items-center justify-center p-10">
        <h1 className="text-2xl mb-2 bg-white p-3 rounded-full text-red-700 font-extrabold">
          <TbTruckDelivery />
        </h1>
        <p>Super Fast and Free Delivery</p>
      </div>
      <div>
        <div className="flex items-center justify-center bg-slate-50 p-6   mt-3 mb-3">
          <h1 className="text-2xl  bg-white p-2 rounded-full text-red-700 font-extrabold">
            <MdOutlineSecurity />
          </h1>
          <p className="ml-3">Non-contact Shipping</p>
        </div>
        <div className="flex items-center justify-center bg-slate-50 p-6 mt-3 mb-3">
          <h1 className="text-2xl mb-2 bg-white p-2 rounded-full text-red-700 font-extrabold">
            <GiReceiveMoney />
          </h1>
          <p className="ml-3 mb-1">Money-back Guraranted</p>
        </div>
      </div>
      <div className="flex flex-col items-center text-center justify-center bg-slate-50 p-10">
        <h1 className="text-2xl mb-2 bg-white p-3 rounded-full text-red-700 font-extrabold">
          <MdPayments />
        </h1>
        <p>Super Secure Payment System</p>
      </div>
    </div>
  );
};

export default Services;
