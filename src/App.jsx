import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import { useState } from "react";

export default function App() {
  const [cartItems, setCartItems] = useState([]);

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

  console.log("CART ITEMS GLOBAL: ", cartItems);

  return (
    <>
      <Header />

      <Outlet context={{ cartItems, addToCart }} />

      {/* Content in SideBar via Outlet*/}

      {/* <div style={{ padding: "16px 0", textAlign: "center" }}>
        © 2025 My Company
      </div> */}
    </>
  );
}
