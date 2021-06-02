import React from 'react';
import './CheckoutProduct.css';
import {useStateValue} from './StateProvider';

export default function CheckoutProduct({id,title,image,rating,price}){
    const [dispatch]=useStateValue();
    const removeFromBasket=()=>{
       dispatch({
           type:"REMOVE_FROM_BASKET",
           item:id,
       })
    }
  return(
    <div className="checkoutProduct">
        <img className="checkoutProduct_image" src={image} alt=""/>
        {/* {console.log(image,price)} */}
         <div className="checkoutProduct_info">
             <p className="checkoutProduct_title">{title}</p>
             <p className="checkoutProduct_price">
              <small>$</small>
              <strong>{price}</strong>
              </p>
          <div className="checkoutProduct_rating">
              {Array(rating)
              .fill()
              .map((_)=>(
                <p>🌟</p>
              ))}
          </div>
          <button onClick={removeFromBasket}>Remove from Basket</button>
         </div>
    </div>
  );
}