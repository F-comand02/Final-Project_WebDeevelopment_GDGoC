import { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [orders, setOrders] = useState([]);

  const addToWishlist = (product) => {
    if (!wishlist.find(item => item.id === product.id)) {
      setWishlist([...wishlist, product]);
    }
  };

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter(item => item.id !== id));
  };

  const placeOrder = (product) => {
    const newOrder = {
      ...product,
      orderId: `GDG-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
      date: new Date().toLocaleString()
    };
    setOrders([newOrder, ...orders]);
    
    removeFromWishlist(product.id);
    alert(`Berhasil order ${product.name}!`);
  };

  return (
    <AppContext.Provider value={{ wishlist, orders, addToWishlist, removeFromWishlist, placeOrder }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);