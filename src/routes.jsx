import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import App from "./App";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import BrowseProducts from "./pages/BrowseProducts/BrowseProducts";
import CartPage from "./pages/CartPage/CartPage";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<BrowseProducts />} />
      <Route path="product/:id" element={<ProductDetail />} />
      <Route path="cart" element={<CartPage />} />
    </Route>
  ),
  {
    basename: "/product-catalog",
  }
);

export default routes;
