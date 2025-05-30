import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import styles from "./BrowseProducts.module.css";
import getProducts from "../../api/products/getProducts";
import Sidebar from "../../components/SideBar/SideBar";

function filterProducts(products, filters) {
  let filteredProducts = products;

  if (filters.category) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === filters.category
    );
  }

  if (filters.priceRange) {
    const [min, max] = filters.priceRange.split("-").map(Number);
    filteredProducts = filteredProducts.filter(
      (product) => product.price >= min && product.price <= max
    );
  }

  return filteredProducts;
}

export default function BrowseProducts() {
  const [products, setProducts] = useState([]); //all products
  const [displayProducts, setdisplayProducts] = useState([]); //products to be displayed based on filters
  const defaultFilters = {
    category: "",
    priceRange: "",
  };
  const [filters, setFilters] = useState(defaultFilters); //filters from the form UI

  const [appliedFilters, setAppliedFilters] = useState(defaultFilters); //filters that modify product list

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

  //Filters are onlu applied once all filters are applied and products are fetched
  useEffect(() => {
    if (products) {
      const result = filterProducts(products, appliedFilters);
      setdisplayProducts(result);
    }
  }, [appliedFilters, products]);

  //Handles both form Submit and Reset
  const handleFilterAction = (action) => {
    if (action.type === "submit") {
      console.log("Apply Filters action received! Current filters:", filters);
      setAppliedFilters(filters);
    } else if (action.type === "reset") {
      console.log("Reset filters action received!");
      setFilters(defaultFilters); // Reset the UI dropdowns
      setAppliedFilters(defaultFilters);
    }
  };

  console.log("all products: ", products);
  console.log("display products: ", displayProducts);
  console.log("filters: ", filters);

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
