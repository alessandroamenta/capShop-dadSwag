import CartContext from '/context/Context';
import '../styles/globals.css';
import Navbar from '/components/Navbar';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CartContext>
        <Component {...pageProps} />
      </CartContext>
    </>
  );
}

export default MyApp;
