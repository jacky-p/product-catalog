import React from "react";

import styles from "./CartPage.module.css";
import { useOutletContext } from "react-router-dom";

const CartPage = () => {
  const { cartItems } = useOutletContext();

  let total = 0;
  cartItems.forEach((item) => {
    total += item.price * item.quantity;
  });

  return (
    <div className={styles.pageContainer}>
      <h2 className={styles.cartHeader}>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className={styles.cartGrid}>
          {cartItems.map((item) => (
            <div key={item.id} className={styles.item}>
              <div className={styles.productImgContainer}>
                <img className={styles.productImg} src={item.image} />
              </div>
              <div className={styles.details}>
                <div className={styles.productName}>{item.name}</div>
                <div className={styles.price}>${item.price.toFixed(2)}</div>
                <div className={styles.quantity}>Quantity: {item.quantity}</div>
              </div>
            </div>
          ))}

          <div className={styles.total}>Total: ${total.toFixed(2)}</div>
          <button
            className={styles.checkoutBtn}
            onClick={() =>
              alert("You have insufficient funds! :(\nTime to start saving up!")
            }
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
