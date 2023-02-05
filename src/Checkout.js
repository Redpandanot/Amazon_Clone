import React from 'react'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from "./Subtotal.js";

function Checkout() {
    const [{basket}]=useStateValue();

  return (
    <div className='checkout'>
        <div className='checkout_left'>
            <img 
                className='checkout_ad'
                src='../Images/checkout_ad.jpg'
                alt='ad' 
            />
            <div>
                <h2 className='checkout_title'>
                    Your Checkout Basket
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </h2>

            </div>
        </div>
        <div className='checkout_right'>
            <Subtotal></Subtotal>
        </div>
    </div>
  )
}

export default Checkout;