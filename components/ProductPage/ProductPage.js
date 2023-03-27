import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ProductPage.module.css';
import { useCart } from '/context/Context';
import Navbar from '../Navbar/Navbar';
import products from '../../data/products';



const ProductPage = ({ product }) => {
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
      <Navbar products={products} />
      <section className='text-gray-600 body-font overflow-hidden'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='lg:w-4/5 mx-auto flex justify-center flex-wrap'>
            <Image
              src={product.image}
              className='lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded'
              alt={product.name}
              width={300}
              height={300}
            />
            <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
              <h2 className='text-sm title-font text-gray-500 tracking-widest'>
                {product.category}
              </h2>
              <h1 className='text-gray-900 text-3xl title-font font-medium mb-1'>
                {product.name}
              </h1>
              <div className='flex mb-4'></div>
              <p className='leading-relaxed'>{product.description}</p>
              <div className='flex justify-between'>
                <span className='title-font font-medium text-2xl text-gray-900'>
                  ${product.price}
                </span>
                {isInCart(product.id) ? (
                  <div>
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
                  </div>
                ) : (
                  <button
                    className={styles.btn}
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                    <span className={styles.bg} />
                  </button>
                )}
              </div>
              <Link href={'/cart'}>
                View Cart
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className='text-2xl z-10'
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductPage;
