const BASE_URL = "https://cart-api.alexrodriguez.workers.dev";

const getProducts = async () => {
  try {
    const data = await fetch(`${BASE_URL}/products`);
    const products = await data.json();
    console.log(products);
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export default getProducts;
