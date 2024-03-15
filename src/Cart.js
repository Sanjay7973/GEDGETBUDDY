import React from 'react'
import { useCartContext } from './Context/cart_Context';
import { MdDelete } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import FormatPrice from './Helpers/FormatPrice';


const Cart = () => {
  const {removeItem} = useCartContext();
  const {cart,clearCart} = useCartContext();
  if(cart.length===0){
    return <div className=' text-2xl'>No Item in cart</div>
  }
  return (
    <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="lg:w-2/3 w-full mx-auto overflow-auto">
        <table className="table-auto w-full text-left whitespace-no-wrap">
          <thead>
            <tr className='text-center'>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Item</th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Price</th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 ">Quantity</th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Subtotal</th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Remove</th>
            </tr>
          </thead>
          {
      cart.map((curElem) =>{
        let {id,name,image,price,amount}=curElem
        return (
          <tbody key={curElem.id} className='text-center'>
            <tr>
              <td className="px-4 py-3 grid place-items-center"><img src={image} alt='first' className='w-[40px] rounded'/> {name} </td>
              <td className="px-4 py-3"><FormatPrice price= {price} /></td>
              <td className="px-4 py-3 text-center">{amount}</td>

              <td className="px-4 py-3 text-lg text-gray-900">{amount*price}</td>
              <td className="w-20  px-7 py-3 text-red-700 text-xl"><MdDelete onClick={()=> removeItem(id)}/></td>
            </tr>
          </tbody>
        )
      })
    }
          
        </table>
        <hr/>
      </div>
  
      <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
        <NavLink to='/product' className='bg-slate-400 p-2 rounded text-white hover:bg-blue-500'>Continue Shopping</NavLink>
        <button onClick={()=>clearCart()} className="flex ml-auto text-white bg-slate-400 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">CLEAR CART</button>
      </div>
    </div>
  </section>
  )
}

export default Cart
