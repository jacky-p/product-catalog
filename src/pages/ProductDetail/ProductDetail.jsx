import React from "react";
//import reactLogo from "./assets/react.svg";
import styles from "./ProductDetail.module.css";
import { useLocation } from "react-router-dom";

function ProductDetail() {
  const location = useLocation();
  const product = location.state;
  //console.log(product);
  return (
    <div className={styles.pageContainer}>
      <div className={styles.productContainer}>
        <div className={styles.imgContainer}>
          <img src={product.image} className={styles.productImage} />
        </div>
        <div className={styles.detailsContainer}>
          <div className={styles.descriptionContianer}>
            <h1>{product.name}</h1>
            <h2>${product.price}</h2>
            <p>{product.description}</p>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.cartButton}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
