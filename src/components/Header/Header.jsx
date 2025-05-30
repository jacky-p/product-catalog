import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className={styles.title}>
      <Link to="/">NestShop</Link>
      <FontAwesomeIcon icon={faCartShopping} />
    </header>
  );
}
