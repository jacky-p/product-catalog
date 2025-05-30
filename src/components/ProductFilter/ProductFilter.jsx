import React from "react";
import styles from "./ProductFilter.module.css";

function ProductFilter({
  filters,
  setFilters,
  handleFilterAction,
  //   category,
  //   setCategory,
  //   priceRange,
  //   setPriceRange,
}) {
  // Handle change of any filter input
  function handleChange(event) {
    //setCategory(event.target.value);

    const { name, value } = event.target;

    console.log(name, value);
    console.log("before: ", filters);

    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));

    console.log("after: ", filters);
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleFilterAction({ type: "submit" });
    console.log("Form Submitted!");
  }

  function handleReset(event) {
    event.preventDefault();
    //handleFilterSubmit(filters);
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
