import { createContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const cartItemsFromStorage = localStorage.getItem('cartItems')
            ? JSON.parse(localStorage.getItem('cartItems'))
            : [];
        setCartItems(cartItemsFromStorage);
    }, []);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product, qty, size) => {
        const existItem = cartItems.find((x) => x.product === product._id && x.size === size);

        if (existItem) {
            setCartItems(
                cartItems.map((x) =>
                    x.product === existItem.product && x.size === size ? { ...x, qty: x.qty + qty } : x
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, product: product._id, qty, size }]);
        }
    };

    const removeFromCart = (id, size) => {
        setCartItems(cartItems.filter((x) => !(x.product === id && x.size === size)));
    };

    const clearCart = () => {
        setCartItems([]);
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;
