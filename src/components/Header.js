import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu } from "react-icons/cg";
import MobileMenu from "./MobileMenu";
import { useCartContext } from "../Context/cart_Context";

const Header = () => {
  const {total_item} = useCartContext()
  let Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "product", link: "/Product" },
    { name: "contact", link: "/Contact" },
  ];
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="w-full h-12 bg-slate-100 flex justify-between px-4 md:px-6 items-center ">
      <div className="text-2xl text-slate-800 font-extrabold">
        <NavLink to="/">GEDGETBUDDY</NavLink>
      </div>
      <ul className="md:flex font-semibold hidden">
        {Links.map((Link) => (
          <li className="mx-5 text-base cursor-pointer" key={Link.name}>
            <NavLink to={Link.link}>{Link.name}</NavLink>
          </li>
        ))}
        <li className="ml-8 text-white">
          <NavLink
            className="py-[5px] px-2 bg-slate-400 cursor-pointer rounded hover:bg-slate-600"
            to="/Lodin"
          >
            Login
          </NavLink>
        </li>
        <li className="mx-5 mt-1 text-2xl cursor-pointer relative flex justify-center">
          <NavLink to="/cart">
            <FiShoppingCart className="mr-1" />{" "}
            <span className="absolute text-xl -top-3 -right-3 bg-slate-600 text-white rounded-full w-7 flex items-center justify-center">
              {total_item}
            </span>
          </NavLink>
        </li>
      </ul>
      <div className="md:hidden">
        {isOpen ? (
          <MobileMenu Links={Links} toggleMenu={toggleMenu} />
        ) : (
          <CgMenu className="text-4xl cursor-pointer" onClick={toggleMenu} />
        )}
      </div>
    </nav>
  );
};

export default Header;
