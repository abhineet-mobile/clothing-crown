import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'; 
import CheckoutItem from '../../Components/checkout-items/checkout-item.component';
import {seletCartItems , selectCartTotal} from '../../redux/cart/cart.selectors';

import './checkout.styles.scss'; 

const CheckoutPage =({cartItems, total})=>(
    <div className= 'checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem =>
                <CheckoutItem key = {cartItem.id} cartItem={cartItem}/>
                )
        }
        <div className='total'>
    <span>Total: ${total}</span>
        </div>
        
    </div>


); 

const mapStatesToProps = createStructuredSelector ({
    cartItems: seletCartItems, 
    total: selectCartTotal
})
export default connect(mapStatesToProps)(CheckoutPage); 