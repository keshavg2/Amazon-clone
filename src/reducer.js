import {INCREASE, DECREASE, CLEAR_CART, REMOVE, GET_TOTALS,} from './action.js';
import cartItems from './cart-items';

const initialStore={
    cart:cartItems,
    amount:0,
    total:0,
  }

const reducer =(state = initialStore, action)=>{
    // Increase
    if(action.type===INCREASE){
        let tempCart = state.cart.map((cartItem)=>{
            if(cartItem.id===action.payload.id){
                cartItem= {...cartItem, amount:cartItem.amount+1};
            }
            return cartItem;
        }) 
        return {...state, cart:tempCart};
    }

    // Decrease reducer
    if(action.type===DECREASE){
        let tempCart = [];
        console.log(state.amount);
        if(action.payload.amount===1){
         tempCart = state.cart.filter(
             cartItem=>cartItem.id!==action.payload.id
         );
         console.log('hey its one');
        }
        else{
         tempCart = state.cart.map((cartItem)=>{
           if(cartItem.id===action.payload.id){
               cartItem={...cartItem,amount:cartItem.amount-1};
           }
           return cartItem;
        });
    }
        return{...state, cart:tempCart};
    }
    
    // clear cart reducer
    if(action.type===CLEAR_CART){
        return{ ...state, cart:[]};
    }
    if(action.type===REMOVE){
        return{...state, cart:state.cart.filter(cartItems=>cartItems.id!==action.payload.id)}
    }
       
    // gettotals reducer
    if(action.type===GET_TOTALS){
        let{total, amount}=state.cart.reduce((cartTotal, cartItem)=>{
          const{price,amount}=cartItem;
          const itemTotal=price*amount;

          cartTotal.amount+=amount;
          cartTotal.total+=itemTotal;

          return cartTotal;
         },{
            total:0,
            amount:0,
        })
        total=parseFloat(total.toFixed(2));
        return {...state, total, amount};
    };
    return state;
}

export default reducer;