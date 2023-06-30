import { Navigate, Route, Routes } from 'react-router-dom';
import ProductDetails from '../components/productDetails/ProductDetails';
import ProductListingPage from '../pages/ProductListingPage';

const MainRoute = () => {
  return (
    <Routes>
      <Route path={'/product'} element={<ProductListingPage />} />
      <Route path={'/'} element={<Navigate replace to='/product' />} />
      <Route path={'/product/:id'} element={<ProductDetails />} />
      <Route path={'/*'} element={<div>PAGE NOT FOUND !!!</div>} />
    </Routes>
  );
};
export default MainRoute;
