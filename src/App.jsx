import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import { useEffect, useState } from "react";

export default function App() {
  const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  //local storage so that cart persists through reloads
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      //Update quantitiy if item already in cart
      const existingIndex = prev.findIndex((item) => item.id === product.id);
      if (existingIndex !== -1) {
        const newCart = [...prev];
        newCart[existingIndex] = {
          ...newCart[existingIndex],
          quantity: newCart[existingIndex].quantity + 1,
        };
        console.log("CART: ", newCart);
        return newCart;
      }
      //If product not in cart
      console.log("CART: ", [...prev, { ...product, quantity: 1 }]);
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    console.log("CART: ", cartItems);
  };

  const updateQuantity = (id, quantity) => {
    setCartItems((prev) => {
      const index = prev.findIndex((item) => item.id === id);

      const updatedCart = [...prev];
      updatedCart[index] = {
        ...updatedCart[index],
        quantity: quantity,
      };

      console.log("CART: ", cartItems);
      return updatedCart;
    });
  };

  console.log("CART ITEMS GLOBAL: ", cartItems);

  return (
    <>
      <Header />

      <Outlet
        context={{ cartItems, addToCart, removeFromCart, updateQuantity }}
      />

      {/* Content in SideBar via Outlet*/}

      {/* <div style={{ padding: "16px 0", textAlign: "center" }}>
        © 2025 My Company
      </div> */}
    </>
  );
}
