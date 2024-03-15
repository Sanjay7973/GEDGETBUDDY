import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/cartReducer'

const CartContext = createContext();

const getlocalcartdata = () =>{
    let setCartData = localStorage.getItem('localStroageCart');
    if(setCartData == []){
        return [];
    }else{
     return JSON.parse(setCartData)
    }
};

const initialState = {
    // cart:[],
    cart:getlocalcartdata(),
    total_item:'',
    total_fee:'',
    shipping_fee:500,
}

const CartProvider = ({children}) =>{

    const [state,dispatch] = useReducer(reducer,initialState)

    const addToCart = (id,color,amount,product) =>{
        dispatch({type:'ADD_TO_CART',payload:{id,color,amount,product}})
    }

    const removeItem = (id) =>{
        dispatch({type:"REMOVE_ITEM", payload:id})
    }

    // clear cart function 
    const clearCart = () =>{
        dispatch({type:"CLEAR_CART"})
    }
  // to add data in local stroage 
    useEffect(()=>{
        dispatch({type:'SHOW_CART_TOTAL_ITEM'})
      localStorage.setItem('localStroageCart', JSON.stringify(state.cart))
    },[state.cart])

     
    return( <CartContext.Provider value={{...state, addToCart, removeItem, clearCart}}>{children}</CartContext.Provider>
    );
};

const useCartContext= () =>{
    return useContext(CartContext)
}

export {CartProvider, useCartContext}