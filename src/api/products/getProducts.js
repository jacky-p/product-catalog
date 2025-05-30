const BASE_URL = "https://cart-api.alexrodriguez.workers.dev";

const getProducts = async () => {
  try {
    const products = await fetch(`${BASE_URL}/products`);
    const data = await products.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export default getProducts;
