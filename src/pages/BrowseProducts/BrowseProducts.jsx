import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import styles from "./BrowseProducts.module.css";
import getProducts from "../../api/products/getProducts";
import Sidebar from "../../components/SideBar/SideBar";

export default function BrowseProducts() {
  const [products, setProducts] = useState([]); //all products
  const [displayProducts, setdisplayProducts] = useState([]); //products to be displayed based on filters
  const [filters, setFilters] = useState({
    category: "",
    priceRange: "",
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();
        setProducts(response);
        setdisplayProducts(response);
      } catch (error) {
        console.log("Fetch error", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    filterProducts(filters);
  }, [filters]);

  function filterProducts(f) {
    let filteredProducts = products;
    console.log("before filter:", filteredProducts);

    if (f.category) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === f.category
      );
      console.log("category filter:", filteredProducts);
    }

    if (f.priceRange) {
      const [min, max] = f.priceRange.split("-").map(Number);
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= min && product.price <= max
      );
    }
    console.log("after filter:", filteredProducts);
    setdisplayProducts(filteredProducts); //resets the displayed products to those that fit the filters
  }

  // const handleFilterSubmit = () => {
  //   //function called if filter form is submitted
  //   filterProducts();
  // };

  const handleFilterAction = (action) => {
    if (action.type === "submit") {
      console.log("Apply Filters action received! Current filters:", filters);
    } else if (action.type === "reset") {
      console.log("Reset filters action received!");
      setFilters({
        category: "",
        priceRange: "",
      }); // Reset the UI dropdowns
    }
  };

  console.log("all products: ", products);
  console.log("display products: ", displayProducts);
  console.log("filters: ", filters);
  // console.log(products);

  return (
    <Sidebar
      filters={filters}
      setFilters={setFilters}
      handleFilterAction={handleFilterAction}
    >
      <div className={styles.pageContainer}>
        <h1>Products</h1>
        <div className={styles.productGrid}>
          {displayProducts.map((product) => {
            return <Card key={product.id} product={product} />;
          })}
        </div>
      </div>
    </Sidebar>
  );
}
