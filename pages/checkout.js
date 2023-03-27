import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import Navbar from '../components/Navbar/Navbar'; // import the Navbar component
const stripePromise = loadStripe(
  'pk_test_51MpragGo3Flm0AubQwLkL2FTEaX1EpkKm4lYXm5NfEUyygmxj6vKCzntdDENp7A6pgNnIr3jz3nrcRuqRiAFIz5N00MXx4PJHY'
);

import { cart, CartState, useCart } from '../context/Context';
import products from '../data/products';

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
      <Navbar products={products} /> 
      <br />
      <h1>Checkout Page</h1>
      <h1>
        For payment use card number: 5555 5555 5555 4444, cvv and expiration can be anything
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
