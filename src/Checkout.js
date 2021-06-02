import React from 'react';
import './Checkout.css';
import {useStateValue} from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

export default function Checkout(){
   const [{basket}]=useStateValue();
    
   return(
        <div className="checkout">
            <div className="checkout_Left">
          <img className="checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt=""/>
          
          {basket?.length===0 ?(
              <div>
                  <h1>Your Shopping basket is empty</h1>
                  <p>You have no items in your basket. To buy one or "add To Basket" next to the item.</p>
              </div>
          ):(
              <div>
                  <h2 className="checkout_title">
                    Your Shopping basket </h2>
                    {basket.map(item=>(
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        rating={item.rating}
                        image={item.image}
                        />
                    ))}
                  
              </div>
          )}
          </div>
          {basket.length>0 && (          
          <div className="checkout_Right">
             <Subtotal/>
          </div>
          )}

        </div>
    )
}