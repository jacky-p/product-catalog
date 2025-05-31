import React from "react";

import styles from "./CartPage.module.css";
import { useNavigate, useOutletContext } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function CartPage() {
  const { cartItems, removeFromCart, updateQuantity } = useOutletContext();
  const navigate = useNavigate();

  let total = 0;
  cartItems.forEach((item) => {
    total += item.price * item.quantity;
  });

  return (
    <div className={styles.pageContainer}>
      <div className={styles.backButtonContainer}>
        <button className={styles.backButton} onClick={() => navigate("/")}>
          <FontAwesomeIcon icon={faArrowLeft} /> Continue Shopping
        </button>
      </div>
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
                <div className={styles.controls}>
                  <p>Quantity: </p>
                  <select
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, Number(e.target.value))
                    }
                  >
                    {[...Array(100)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  className={styles.removeButton}
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className={styles.total}>Total: ${total.toFixed(2)}</div>
          <button
            className={styles.checkoutButton}
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
}

export default CartPage;
