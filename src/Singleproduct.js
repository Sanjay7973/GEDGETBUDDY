import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "./Context/ProductContext";
import PageNavigation from "./components/PageNavigation";
import ProductImages from "./components/ProductImages";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";
import { TbReplaceFilled } from "react-icons/tb";
import Star from "./components/Star";
import AddToCard from "./components/AddToCard";
import FormatPrice, { SinglePageFormatPrice } from "./Helpers/FormatPrice";

const API = "https://api.pujakaitem.com/api/products";

const Singleproduct = () => {
  const { getSinglePoduct, isSingleLoading, singleProduct } =
    useProductContext();

  const { id } = useParams();

  const {
    id: alise,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    image,
  } = singleProduct;
  

  useEffect(() => {
    getSinglePoduct(`${API}?id=${id}`);
  }, []);

  if (isSingleLoading) {
    return <div>Loading.....</div>;
  }
  return (
    <div>
      <PageNavigation title={name} />
      <div className="max-w-[1280px] grid mt-10 md:grid-cols-2 mx-auto">
        <div>
          <ProductImages imgs={image} />
        </div>
        <div className="p-5">
          <div className=" text-2xl">{name}</div>
          <div className="mt-2"><Star stars={stars} reviews={reviews}/></div>
          <div>
            <p className="mt-2">
              MRP:
              <del><FormatPrice price={price + 25000}/></del>
            </p>
            <p className=" text-blue-700 mt-1">deal of the day :<FormatPrice price={price} /></p>
            <p className=" text-slate-500 mt-2">{description}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 border-b-2 mt-5 mb-1">
          <div className="grid place-items-center ">
            <TbTruckDelivery className=" text-black text-2xl font-extrabold bg-white p-[2px] rounded-full"/>
            <p className="text-center text-slate-500">Free Delivery</p>
          </div>
          <div className="grid place-items-center">
            <TbReplaceFilled className=" text-black text-2xl font-extrabold bg-white p-[2px] rounded-full" />
            <p className="text-center text-slate-500">30 days replacement</p>
          </div>
          <div className="grid place-items-center">
            <TbTruckDelivery className="text-black text-2xl font-extrabold bg-white p-[2px] rounded-full" />
            <p className="text-center text-slate-500">sanjay Delivery</p>
          </div>
          <div className="grid place-items-center">
            <MdOutlineSecurity className="mb-1 text-black text-2xl font-extrabold bg-white p-[2px] rounded-full" />
            <p className=" text-slate-500 text-center">3 month Warrenty</p>
          </div>
          </div>
          <div className="mt-3">Available:<span className=" font-semibold">{stock>0?' In Stock':"Not Available"}</span></div>
          <div className="mt-2">id: <span className=" font-semibold ml-1 mt-1">{id}</span></div>
          <div className="mt-2">company:<span className="font-semibold ml-1 mt-1">{company}</span></div>
          <p className=" border-b-[2px] mt-3"></p>
          <div className="mt-2">{stock >0 && <AddToCard product={singleProduct} /> }</div>
          
        </div>
      </div>
    </div>
  );
};

export default Singleproduct;
