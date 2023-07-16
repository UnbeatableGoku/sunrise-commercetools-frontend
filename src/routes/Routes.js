import { Navigate, Route, Routes } from "react-router-dom";
import ProductDetails from "../components/productDetails/ProductDetails";
import ProductListingPage from "../pages/ProductListingPage";
import Checkout from "../pages/Checkout";

const MainRoute = () => {
  return (
    <Routes>
      <Route path={"/product"} element={<ProductListingPage />} />
      <Route path={"/"} element={<Navigate replace to="/product" />} />
      <Route path={"/product/:id"} element={<ProductDetails />} />
      <Route path={"/*"} element={<div>PAGE NOT FOUND !!!</div>} />
      <Route path={"/product/c/checkout"} element={<Checkout />} />
    </Routes>
  );
};
export default MainRoute;
