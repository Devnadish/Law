import { createContext, useContext, useEffect, useState } from "react";
// import ShoppingCart from "../components/ShoppingCart";

const ShoppingCartContext = createContext({});

const initialCartItems = localStorage.getItem("shopping-cart")
  ? JSON.parse(localStorage.getItem("shopping-cart"))
  : [];


const ShoppingCartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState(initialCartItems);

  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const openCart = () => {
    setIsOpen(true);
  };
  const closeCart = () => {
    setIsOpen(false);
  };
  /* ------------------------------------- */
  const getItemQuantity = (productId) => {
    return cartItems.find((item) => item.productId === productId)?.quantity || 0;
  };
/* ----------------------------------------- */
  const increaseCartQuantity = (productId) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.productId === productId) == null) {
        return [...currItems, { productId, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.productId === productId) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  /* --------------------------- */
  const decreaseCartQuantity = (productId) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.productId === productId)?.quantity === 1) {
        return currItems.filter((item) => item.productId !== productId);
      } else {
        return currItems.map((item) => {
          if (item.productId === productId) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  /* ---------------------------------- */
  const removeFromCart = (productId) => {
    setCartItems((currItems) => currItems.filter((item) => item.productId !== productId));
  };
/* --------------------------------------- */
  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        openCart,
        closeCart,
        cartQuantity,
        cartItems,
      }}
    >
      {children}
      {/* <ShoppingCart isOpen={isOpen} /> */}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};
