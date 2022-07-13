import { useState, useEffect, createContext, useRef } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  const renderRef = useRef(0);

  useEffect(() => {
    const cartSaved = localStorage.getItem("cart");
    const cartParsed = JSON.parse(cartSaved);

    setCart(cartParsed);
  }, []);

  useEffect(() => {
    if (renderRef.current > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    renderRef.current += 1;
  }, [cart]);

  useEffect(() => {
    let totalQuantity = 0;
    cart.forEach((prod) => {
      totalQuantity += prod.quantity;
    });
    setTotalQuantity(totalQuantity);
  }, [cart]);

  useEffect(() => {
    let total = 0;
    cart.forEach((prod) => {
      total += prod.quantity * prod.price;
    });
    setTotal(total);
  }, [cart]);

  const addItem = (productToAdd) => {
    if (!isInCart(productToAdd.id)) {
      setCart([...cart, productToAdd]);
    }
  };

  const removeItem = (id) => {
    const cartWithoutProduct = cart.filter((prod) => prod.id !== id);
    setCart(cartWithoutProduct);
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        totalQuantity,
        total,
        addItem,
        isInCart,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
