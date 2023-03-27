import { useCart } from '/context/Context';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar/Navbar';
import styles from './Cart.module.css';
import products from '../../data/products';


const Cart = () => {
  const {
    cart,
    addToCart,
    reduceFromCart,
    removeFromCart,
    clearCart,
    isInCart,
    itemQuantity,
    getTotalItems,
    getTotalPrice,
  } = useCart();

  return (
    <>
      <Navbar products={products}/>
      <div>
        <span>My Cart</span>
        <br />
        <span>Total: ${getTotalPrice()}</span>
        {cart.length === 0 && <div>Cart is empty</div>}
        <br />
        <div className='flex gap-2'>
          <button className='btn' onClick={clearCart}>
            Clear Cart
            <span className='bg' />
          </button>
          <br />
          <Link href='/checkout'>
              <button className='btn'>
                Checkout
                <span className='bg' />
              </button>
          </Link>
        </div>

        {cart.map((product, index) => {
          return (
            <div key={index} className={styles.shopCard}>
              <div className={styles.title}>{product.name}</div>
              <div className={styles.slider}>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={280}
                />
              </div>
              <div className={styles.cta}>
                <div className={styles.price}>${product.price}</div>
                {isInCart(product.id) ? (
                  <>
                    <button
                      className={styles.quantityValue}
                      onClick={() => reduceFromCart(product.id)}
                    >
                      -
                    </button>
                    <span className={styles.value}>
                      {itemQuantity(product.id)}
                    </span>
                    <button
                      className={styles.quantityValue}
                      onClick={() => addToCart(product)}
                    >
                      +
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className={styles.btn}
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                      <span className={styles.bg} />
                    </button>
                    <button
                      className={styles.btn}
                      onClick={() => removeFromCart(product.id)}
                    >
                      Remove
                      <span className={styles.bg} />
                    </button>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cart;