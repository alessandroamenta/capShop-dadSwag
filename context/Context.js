import { useContext, createContext, useState, useEffect } from 'react'

const Context = createContext();

const CartContext = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
    };

    const reduceFromCart = (id) => {
        const newCart = [...cart];
        const index = newCart.findIndex((product) => product.id === id);
        if (index > -1) {
            newCart.splice(index, 1);
            setCart(newCart);
            localStorage.setItem('cart', JSON.stringify(newCart));
        }
    };

    const removeFromCart = (id) => {
        const newCart = cart.filter((product) => product.id !== id);
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
    };

    const clearCart = () => {
        setCart([]);
        localStorage.removeItem('cart');
    };

    const isInCart = (id) => {
        return cart.some((product) => product.id === id);
    };

    const itemQuantity = (id) => {
        return cart.reduce((quantity, product) => {
            if (product.id === id) {
                return quantity + 1;
            }
            return quantity;
        }, 0);
    };

    const getTotalItems = () => {
        return cart.reduce((total, product) => {
            return total + itemQuantity(product.id);
        }, 0);
    };

    const getTotalPrice = () => {
        return cart.reduce((total, product) => {
            // return total + product.price * itemQuantity(product.id);
            return total + product.price;
        }, 0);
    };

    useEffect(() => {
        if (localStorage.getItem('cart')) {
            setCart(JSON.parse(localStorage.getItem('cart')));

        } else {
            localStorage.setItem('cart', JSON.stringify([]));

        }

    }, []);

    return (
        <Context.Provider value={{ cart, addToCart, reduceFromCart, removeFromCart, clearCart, isInCart, itemQuantity, getTotalItems, getTotalPrice }}>
            {children}
        </Context.Provider>
    );

};


export const useCart = () => {
    return useContext(Context);
};


export default CartContext