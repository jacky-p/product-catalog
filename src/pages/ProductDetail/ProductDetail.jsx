import React from "react";
import styles from "./ProductDetail.module.css";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProductDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state;

  const { addToCart } = useOutletContext();
  return (
    <div className={styles.pageContainer}>
      <div className={styles.backButtonContainer}>
        <button className={styles.backButton} onClick={() => navigate("/")}>
          <FontAwesomeIcon icon={faArrowLeft} /> Back to Products
        </button>
      </div>
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
            <button
              className={styles.cartButton}
              onClick={() => {
                addToCart(product);
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
