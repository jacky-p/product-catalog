import React from "react";

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
    handleFilterAction({ type: "submit" });
  }

  return (
    <form onSubmit={handleSubmit}>
      <select name="category" value={filters.category} onChange={handleChange}>
        <option value="">All Categories</option>
        <option value="Accessories">Accessories</option>
        <option value="Apparel">Apparel</option>
        <option value="Electronics">Electronics</option>
      </select>

      <select
        name="priceRange"
        value={filters.priceRange}
        onChange={handleChange}
      >
        <option value="">All Prices</option>
        <option value="0-30">$0 - $30</option>
        <option value="30-50">$30 - $50</option>
      </select>

      <button type="submit">Apply Filters</button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
}

export default ProductFilter;
