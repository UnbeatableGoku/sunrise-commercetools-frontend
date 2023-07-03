import React from 'react';
import useProductList from '../../talons/useProductList';
import { size } from 'lodash';
import ProductCard from './ProductCard';
import ProductListLoader from '../loader/ProductListLoader';

const ProductList = () => {
  const { data, loading, error } = useProductList();
  if (loading) {
    return <ProductListLoader />;
  }
  if (error) {
    return <h1>No Products Found</h1>;
  }
  if (size(data?.products) > 0 || size(data?.searchProducts) > 0) {
    return (
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   p-2 container mx-auto '>
        {data.products
          ? data.products.map((item, index) => (
              <div key={index}>
                <ProductCard props={item} />
              </div>
            ))
          : data.searchProducts.map((item, index) => (
              <div key={index}>
                <ProductCard props={item} />
              </div>
            ))}
      </div>
    );
  } else {
    return <h1>No Products Found</h1>;
  }
};

export default ProductList;
