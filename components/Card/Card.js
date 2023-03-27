import Image from "next/image";
import Link from "next/link";
import styles from "./Card.module.css";
import { useCart } from "/context/Context";

const Card = ({ products }) => {
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
    <div className={styles.containerMain}>
      {products.map((product) => (
        <div key={product.id} className={styles.shopCard}>
          <Link href={`/products/${product.id}`}>
            {/* wrap the content of the link tag in a div */}
            <div>
              <div className={styles.title}>{product.name}</div>
              <div className={styles.desc}>{product.description}</div>
              <div className={styles.slider}>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={280}
                />
              </div>
            </div>
          </Link>

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
              <button
                className={styles.btn}
                onClick={() => addToCart(product)}
              >
                Add to Cart
                <span className={styles.bg} />
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
