import { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = JSON.parse(localStorage.getItem('@foodexplorer:cart')) || [];
    return savedCart;
  });

  useEffect(() => {
    localStorage.setItem('@foodexplorer:cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.some(cartItem => cartItem.id === item.id);
      if (itemExists) return prevItems;
      return [...prevItems, item];
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== itemId)); 
  };

  const clearCart = () => {
    setCartItems([]); 
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children} 
    </CartContext.Provider>
  );
};
