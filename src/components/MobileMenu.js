import { CgClose } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useCartContext } from "../Context/cart_Context";


const MobileMenu = ({ Links, toggleMenu }) =>{
const {total_item} = useCartContext(); 
  return(
  <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-30">
    <div className="bg-white p-20 rounded shadow-lg  z-40">
      <CgClose
        className="text-4xl cursor-pointer absolute top-0 right-0 m-4 z-50"
        onClick={toggleMenu}
      />
      
      {/* Your menu items */}
      <ul className="list-none z-20">
        {Links.map((link) => (
          <li key={link.name} className="mb-6 text-4xl cursor-pointer">
            <NavLink to={link.link} onClick={toggleMenu}>
              {link.name}
            </NavLink>
          </li>
        ))}
        <li className="mt-10">
          <NavLink
            className="py-2 px-4 bg-slate-400 text-3xl cursor-pointer rounded hover:bg-slate-600"
            to="/Lodin"
            onClick={toggleMenu}
          >
            Login
          </NavLink>
        </li>
        <li className="mt-10 mr-3 text-6xl flex justify-center cursor-pointer relative">
          <NavLink to="/cart" onClick={toggleMenu}>
            <FiShoppingCart className="mr-1" />
            <span className="absolute text-3xl -top-3 right-2 text-white bg-slate-600 rounded-full w-12 flex justify-center">
              {total_item}
            </span>
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
);
};

export default MobileMenu;
