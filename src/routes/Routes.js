import { Navigate, Route, Routes } from 'react-router-dom';
import ProductDetails from '../components/productDetails/ProductDetails';
import ProductListingPage from '../pages/ProductListingPage';
import Checkout from '../pages/Checkout';
import Orders from '../pages/Orders';

const MainRoute = () => {
  return (
    <Routes>
      <Route path={'/product'} element={<ProductListingPage />} />
      <Route path={'/'} element={<Navigate replace to='/product' />} />
      <Route path={'/product/:id'} element={<ProductDetails />} />
      <Route path={'/*'} element={<div>PAGE NOT FOUND !!!</div>} />
      <Route path={'/product/c/checkout'} element={<Checkout />} />
      <Route path={'/product/c/orders'} element={<Orders />} />
    </Routes>
  );
};
export default MainRoute;
