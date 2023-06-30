import React from 'react';
import useProductList from '../../talons/useProductList';
import { size } from 'lodash';
import ProductCard from './ProductCard';
const ProductList = () => {
  const { data } = useProductList();

  if (size(data?.products) > 0) {
    return (
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   p-2 container mx-auto '>
        {data.products.map((item, index) => (
          <div key={index}>
            <ProductCard props={item} />
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div className='animate-pulse grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   p-2 container mx-auto'>
        <div className='rounded-md m-3 h-[370px] '>
          <div className='h-[250px] bg-slate-200'></div>
          <br></br>
          <div className='h-[15px] bg-slate-200'></div>
          <br></br>
          <div className=' flex w-full justify-between '>
            <div className='bg-slate-200 h-[40px] mt-3 ms-2 w-[40px] p-2'></div>
            <div className='bg-slate-200 h-[40px] mt-3 me-2 p-2 w-[90px]'></div>
          </div>
        </div>
        <div className='rounded-md m-3 h-[370px] '>
          <div className='h-[250px] bg-slate-200'></div>
          <br></br>
          <div className='h-[15px] bg-slate-200'></div>
          <br></br>
          <div className=' flex w-full justify-between '>
            <div className='bg-slate-200 h-[40px] mt-3 ms-2 w-[40px] p-2'></div>
            <div className='bg-slate-200 h-[40px] mt-3 me-2 p-2 w-[90px]'></div>
          </div>
        </div>
        <div className='rounded-md m-3 h-[370px] '>
          <div className='h-[250px] bg-slate-200'></div>
          <br></br>
          <div className='h-[15px] bg-slate-200'></div>
          <br></br>
          <div className=' flex w-full justify-between '>
            <div className='bg-slate-200 h-[40px] mt-3 ms-2 w-[40px] p-2'></div>
            <div className='bg-slate-200 h-[40px] mt-3 me-2 p-2 w-[90px]'></div>
          </div>
        </div>
        <div className='rounded-md m-3 h-[370px] '>
          <div className='h-[250px] bg-slate-200'></div>
          <br></br>
          <div className='h-[15px] bg-slate-200'></div>
          <br></br>
          <div className=' flex w-full justify-between '>
            <div className='bg-slate-200 h-[40px] mt-3 ms-2 w-[40px] p-2'></div>
            <div className='bg-slate-200 h-[40px] mt-3 me-2 p-2 w-[90px]'></div>
          </div>
        </div>
        <div className='rounded-md m-3 h-[370px] '>
          <div className='h-[250px] bg-slate-200'></div>
          <br></br>
          <div className='h-[15px] bg-slate-200'></div>
          <br></br>
          <div className=' flex w-full justify-between '>
            <div className='bg-slate-200 h-[40px] mt-3 ms-2 w-[40px] p-2'></div>
            <div className='bg-slate-200 h-[40px] mt-3 me-2 p-2 w-[90px]'></div>
          </div>
        </div>
        <div className='rounded-md m-3 h-[370px] '>
          <div className='h-[250px] bg-slate-200'></div>
          <br></br>
          <div className='h-[15px] bg-slate-200'></div>
          <br></br>
          <div className=' flex w-full justify-between '>
            <div className='bg-slate-200 h-[40px] mt-3 ms-2 w-[40px] p-2'></div>
            <div className='bg-slate-200 h-[40px] mt-3 me-2 p-2 w-[90px]'></div>
          </div>
        </div>
        <div className='rounded-md m-3 h-[370px] '>
          <div className='h-[250px] bg-slate-200'></div>
          <br></br>
          <div className='h-[15px] bg-slate-200'></div>
          <br></br>
          <div className=' flex w-full justify-between '>
            <div className='bg-slate-200 h-[40px] mt-3 ms-2 w-[40px] p-2'></div>
            <div className='bg-slate-200 h-[40px] mt-3 me-2 p-2 w-[90px]'></div>
          </div>
        </div>
        <div className='rounded-md m-3 h-[370px] '>
          <div className='h-[250px] bg-slate-200'></div>
          <br></br>
          <div className='h-[15px] bg-slate-200'></div>
          <br></br>
          <div className=' flex w-full justify-between '>
            <div className='bg-slate-200 h-[40px] mt-3 ms-2 w-[40px] p-2'></div>
            <div className='bg-slate-200 h-[40px] mt-3 me-2 p-2 w-[90px]'></div>
          </div>
        </div>
        <div className='rounded-md m-3 h-[370px] '>
          <div className='h-[250px] bg-slate-200'></div>
          <br></br>
          <div className='h-[15px] bg-slate-200'></div>
          <br></br>
          <div className=' flex w-full justify-between '>
            <div className='bg-slate-200 h-[40px] mt-3 ms-2 w-[40px] p-2'></div>
            <div className='bg-slate-200 h-[40px] mt-3 me-2 p-2 w-[90px]'></div>
          </div>
        </div>
        <div className='rounded-md m-3 h-[370px] '>
          <div className='h-[250px] bg-slate-200'></div>
          <br></br>
          <div className='h-[15px] bg-slate-200'></div>
          <br></br>
          <div className=' flex w-full justify-between '>
            <div className='bg-slate-200 h-[40px] mt-3 ms-2 w-[40px] p-2'></div>
            <div className='bg-slate-200 h-[40px] mt-3 me-2 p-2 w-[90px]'></div>
          </div>
        </div>
        <div className='rounded-md m-3 h-[370px] '>
          <div className='h-[250px] bg-slate-200'></div>
          <br></br>
          <div className='h-[15px] bg-slate-200'></div>
          <br></br>
          <div className=' flex w-full justify-between '>
            <div className='bg-slate-200 h-[40px] mt-3 ms-2 w-[40px] p-2'></div>
            <div className='bg-slate-200 h-[40px] mt-3 me-2 p-2 w-[90px]'></div>
          </div>
        </div>
        <div className='rounded-md m-3 h-[370px] '>
          <div className='h-[250px] bg-slate-200'></div>
          <br></br>
          <div className='h-[15px] bg-slate-200'></div>
          <br></br>
          <div className=' flex w-full justify-between '>
            <div className='bg-slate-200 h-[40px] mt-3 ms-2 w-[40px] p-2'></div>
            <div className='bg-slate-200 h-[40px] mt-3 me-2 p-2 w-[90px]'></div>
          </div>
        </div>
      </div>
    );
  }
};

export default ProductList;
