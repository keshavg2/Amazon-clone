export const getBasketTotal=(basket)=>
    basket?.reduce((amount,item)=> item.price+amount,0);

    
export const initialState={
    basket:[],
    user:null,
}

const reducer=(state, action)=>{
    console.log(action);
    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user:action.user
            }
        case 'ADD_TO_BASKET':
            return {...state,
                basket:[...state.basket,action.item]
            };
        case 'REMOVE_FROM_BASKET':
             let newBasket=[...state.basket];
             const index = state.basket.findIndex((basketItem)=>basketItem.id===action.item);
             if(index>=0){
               newBasket.splice(index,1);
             }else{
                 console.warn(`cant remove the product (id:${action.item})`);
             }

            // basket:state.basket.filter((basketItem)=>basketItem!==action.item)
            return {...state, 
             basket:newBasket
            };
        default:
            return state;
    }
}

export default reducer;