import React from "react";
import styles from "./ProductFilter.module.css";

function ProductFilter({ filters, setFilters, handleFilterAction }) {
  // Handle change of any filter input
  function handleChange(event) {
    const { name, value } = event.target;

    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleFilterAction({ type: "submit" });
  }

  function handleReset(event) {
    event.preventDefault();
    handleFilterAction({ type: "reset" });
  }

  return (
    <form onSubmit={handleSubmit} className={styles.filterForm}>
      <label>
        Select A Category
        <select
          name="category"
          value={filters.category}
          className={styles.filterSelect}
          onChange={handleChange}
        >
          <option value="">All Categories</option>
          <option value="Accessories">Accessories</option>
          <option value="Apparel">Apparel</option>
          <option value="Electronics">Electronics</option>
        </select>
      </label>

      <label>
        Select A Price Range
        <select
          name="priceRange"
          value={filters.priceRange}
          className={styles.filterSelect}
          onChange={handleChange}
        >
          <option value="">All Prices</option>
          <option value="0-30">$0 - $30</option>
          <option value="30-50">$30 - $50</option>
        </select>
      </label>

      <button type="submit" className={styles.submitButton}>
        Apply Filters
      </button>
      <button
        type="button"
        className={styles.resetButton}
        onClick={handleReset}
      >
        Reset
      </button>
    </form>
  );
}

export default ProductFilter;
