import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

function Card({ product }) {
  return (
    <Link to={`/product/${product.id}`} state={product} className={styles.card}>
      <img src={product.image} className={styles.cardImg} />
      <div className={styles.cardContent}>
        <h2>{product.name}</h2>
        <p>${product.price.toFixed(2)}</p>
      </div>
    </Link>
  );
}

export default Card;
