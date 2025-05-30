import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import styles from "./BrowseProducts.module.css";
import getProducts from "../../api/products/getProducts";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/SideBar/SideBar";

export default function BrowseProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();
        setProducts(response);
      } catch (error) {
        console.log("Fetch error", error);
      }
    };

    fetchProducts();
  }, []);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/product");
  };

  console.log(products);
  return (
    <Sidebar>
      <div className={styles.pageContainer}>
        <h1>Products</h1>
        <div className={styles.productGrid}>
          {products.map((product) => {
            return (
              <Card
                onClick={() => handleClick()}
                key={product.id}
                product={product}
              />
            );
          })}
        </div>
      </div>
    </Sidebar>
  );
}
