
const cartReducer = (state,action) => {
    if(action.type === 'ADD_TO_CART') {
        let {id,color,amount,product} = action.payload; 

        
        let cartProduct ;

        cartProduct ={
            id:id+color,
            name : product.name,
            color,
            amount,
            image: product.image[0].url,
            price:product.price,
            max:product.stock,
        }

        return {
            ...state,
            cart:[...state.cart, cartProduct]
        };
    }

        if(action.type === "REMOVE_ITEM"){
            let updateCart = state.cart.filter((curItem)=> curItem.id !==action.payload)
            return{
                ...state,
                cart:updateCart,
            };
        
    }
    if(action.type ==="CLEAR_CART"){
        return{
            ...state,
            cart:[]
        }
    }

    if(action.type === 'SHOW_CART_TOTAL_ITEM'){
        let updatedItemVal = state.cart.reduce((initialVal,curElem)=>{
         let {amount} = curElem;

         initialVal = initialVal + amount;
         return initialVal
        },0)
        return{
           ...state,
           total_item:updatedItemVal,
        }
    }
  return state;
}

export default cartReducer
 