import React from 'react';
import { useState } from 'react';
import Header from '../components/header/Header';
import ProductList from '../components/product/ProductList';

const ProductListingPage = () => {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? 'dark' : ''}>
      <div className=' bg-white dark:bg-black '>
        <Header dark={dark} setDark={setDark} />
        <ProductList />
      </div>
    </div>
  );
};

export default ProductListingPage;
