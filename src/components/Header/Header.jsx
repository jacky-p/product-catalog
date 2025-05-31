import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className={styles.title}>
      <Link to="/">
        <img className={styles.logo} src="/product-catalog/logo.svg" />
      </Link>
      <Link to="cart" className={styles.cart}>
        <FontAwesomeIcon icon={faCartShopping} />
      </Link>
    </header>
  );
}
