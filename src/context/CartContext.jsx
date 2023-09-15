import { createContext, useState } from "react";
export const CartContext = createContext({ cart: [] });
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  console.log(cart);

  const addItem = (item, quantity) => {
    const ItemAdded = { ...item, quantity };

    const newCart = [...cart];
    const isOnCart = newCart.find((product) => product.id === ItemAdded.id);

    if (isOnCart) {
      isOnCart.quantity += quantity;
    } else {
      newCart.push(ItemAdded);
    }
    setCart(newCart);
  };

  const quantityOnCart = () => {
    return cart.reduce((acc, prod) => acc + prod.quantity, 0);
  };
  const totalPrice = () => {
    return cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);
  };

  const clearCart = () => {
    setCart([]);
  };
  function removeItem(idDelete) {
    setCart(cart.filter((item) => item.id !== idDelete));
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        clearCart,
        quantityOnCart,
        totalPrice,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
