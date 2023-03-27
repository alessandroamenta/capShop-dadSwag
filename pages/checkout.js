import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY)
// const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY);
import { cart, CartState, useCart } from '../context/Context';

function Checkout() {
  const { getTotalItems, getTotalPrice, cart } = useCart();
  const items = cart.map((item) => ({
    name: item.name,
    price: item.price,
    id: item.id,
    image: item.image,
  }));
  const createCheckoutSession = async () => {
    const stripe = await stripePromise;
    //backend:
    const checkoutSession = await axios.post('/api/create-checkout-session', {
      items: items,
    });

    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    // redirect to stripe checkout
    if (result.error) {
      alert(result.error.message);
    }
  };

  return (
    <>
      <br />
      <h1>Checkout Page</h1>
      <h1>
        For payment use card number- 4242 4242 4242 4242, cvv and doe could be
        whatever
      </h1>
      <br />
      <button onClick={createCheckoutSession} className='btn'>
        Proceed to Checkout
        <span className='bg' />
      </button>
    </>
  );
}

export default Checkout;
