import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price} ) =>{
    const priceForStripe = price *100;
    const publishableKey = 'pk_test_vkOPRaxqgGkDv2ln1QV89UcI';
    const  onToken  =token =>{
        console.log(token);
        alert('Payment is done');
    }
    return(
      <StripeCheckout 
        label = 'Pay Aboo'
        name ='Abhinav Pvt. Ltd. '
        billingAddress
        shippingAddress
        image ='https://svgshare.com/i/CUz.svg'
        description= {`Your total is $${price}`}
        amount ={priceForStripe}
        panelLabel ='Pay Now'
        token={onToken}
        stripeKey ={publishableKey}
      />  
    );

};
export default StripeCheckoutButton;