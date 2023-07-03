import useProductDetails from '../../talons/useProductDetails';
import { find } from 'lodash';
import Accordion from '../accordion/Accordion';
import { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
const ProductDetails = () => {
  const { data, navigate } = useProductDetails();

  const gender = find(data?.singleProduct?.masterVariant?.attributes, {
    name: 'gender',
  })?.value?.key;
  const color = find(data?.singleProduct?.masterVariant?.attributes, {
    name: 'color',
  })?.value?.key;
  const [cartQty, setCartQty] = useState(0);
  const [rating, setRating] = useState(0);
  const increment = () => {
    setCartQty(cartQty + 1);
  };

  const decrement = () => {
    setCartQty(cartQty - 1);
  };
  return (
    <section class='pt-12 pb-24 bg-blueGray-100 rounded-b-10xl overflow-hidden'>
      <div class='container px-4 mx-auto'>
        <div class='flex flex-wrap -mx-4'>
          <div class='w-full px-4'>
            <ul class='flex flex-wrap items-center mb-16'>
              <li class='mr-6'>
                <button
                  class='flex items-center text-sm font-medium text-gray-400 hover:text-gray-500'
                  onClick={() => navigate(-1)}
                >
                  <span>Home</span>
                  <svg
                    class='ml-6'
                    width='4'
                    height='7'
                    viewbox='0 0 4 7'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M0.150291 0.898704C-0.0500975 0.692525 -0.0500975 0.359292 0.150291 0.154634C0.35068 -0.0507836 0.674443 -0.0523053 0.874831 0.154634L3.7386 3.12787C3.93899 3.33329 3.93899 3.66576 3.7386 3.8727L0.874832 6.84594C0.675191 7.05135 0.35068 7.05135 0.150292 6.84594C-0.0500972 6.63976 -0.0500972 6.30652 0.150292 6.10187L2.49888 3.49914L0.150291 0.898704Z'
                      fill='currentColor'
                    ></path>
                  </svg>
                </button>
              </li>

              <li>
                <span
                  class='text-sm font-medium text-slate-700 hover:text-slate-900 capitalize'
                  href='#'
                >
                  {data?.singleProduct?.name?.en}
                </span>
              </li>
            </ul>
          </div>
          <div class='w-full lg:w-1/3 px-4 mb-16 lg:mb-0'>
            <div class='flex  flex-wrap items-center  lg:justify-center lg:items-center xl:items-center'>
              <div class='w-full sm:w-9/12 px-10'>
                <img
                  class='mb-5'
                  src={data?.singleProduct?.masterVariant?.images[0].url}
                  alt=''
                />
              </div>
            </div>
          </div>
          <div class='w-full lg:w-2/3 px-4'>
            <div class='max-w-md mb-6'>
              <span class='text-xs text-gray-400 tracking-wider'>
                {data?.singleProduct?.masterVariant?.sku}
              </span>
              <h2 class='mt-6 mb-4 text-2xl  font-heading  font-light'>
                {data?.singleProduct?.name?.en}
              </h2>
              <p class='flex items-center mb-6'>
                <span class='mr-2 text-sm text-slate-500 font-medium'>
                  {
                    data?.singleProduct?.masterVariant?.prices[0].value
                      .currencyCode
                  }
                </span>
                <span class='text-3xl text-slate-700 font-medium'>
                  {
                    data?.singleProduct?.masterVariant?.prices[0].value
                      .centAmount
                  }
                </span>
              </p>

              <p className='text-lg'>
                Gender :{' '}
                <span className='text-lg  text-gray-400 uppercase'>
                  {gender}
                </span>
              </p>
            </div>
            <div class='inline-flex mb-6 items-center '>
              <Rating
                allowFraction={true}
                size={23}
                fillColor='indigo'
                initialValue={4.4}
                readonly={true}
              />
              <span class='text-md text-gray-400 pt-1 ms-2'>(4.4)</span>
            </div>
            <div class='mb-6'>
              <h4 class='mb-3 font-heading font-medium'>
                <span>Color : </span>
                <span class='text-gray-400 uppercase'>{color}</span>
              </h4>
              <button class='inline-flex items-center justify-center p-1 rounded-full border border-gray-300'>
                <div
                  class='w-6 h-6 rounded-full bg-white'
                  style={{ backgroundColor: color }}
                ></div>
              </button>
            </div>
            <div className='w-full'>
              <div class='flex items-center  w-[400px] mb-12'>
                {cartQty > 0 ? (
                  <div className='flex  items-center justify-between  w-full px-2 mb-2 md:mb-0 border-2 border-slate-500 rounded-md'>
                    <button onClick={() => decrement()} className='text-4xl'>
                      -
                    </button>

                    <span className='px-4 font-semibold  text-2xl'>
                      {cartQty}
                    </span>

                    <button
                      onClick={() => increment()}
                      className='text-4xl py-1'
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <div class='md:w-full w-3/4    mb-2 md:mb-0'>
                    <span
                      onClick={() => increment()}
                      className='block py-3 font-heading font-medium  text-lg text-white text-center bg-slate-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-gray-700 rounded-sm cursor-pointer'
                    >
                      ADD TO CART
                    </span>
                  </div>
                )}
                <button className=' ms-1 mb-2 sm:mb-0 sm:ms-4  py-4  items-center justify-center leading-8 font-heading font-medium tracking-tighter text-xl text-center bg-slate-900 px-3 sm:px-4 focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50 hover:bg-opacity-60 rounded-sm'>
                  <svg
                    width='23'
                    height='22'
                    viewbox='0 0 23 22'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M11.3235 20.1324L2.52488 10.8515C1.75232 10.0706 1.24237 9.06367 1.06728 7.97339C0.8922 6.88311 1.06086 5.76477 1.54936 4.7768V4.7768C1.91837 4.03089 2.45739 3.3843 3.12201 2.89033C3.78663 2.39635 4.55781 2.06911 5.37203 1.93558C6.18626 1.80205 7.0202 1.86605 7.80517 2.1223C8.59013 2.37855 9.30364 2.81972 9.88691 3.40946L11.3235 4.86204L12.7601 3.40946C13.3434 2.81972 14.0569 2.37855 14.8419 2.1223C15.6269 1.86605 16.4608 1.80205 17.275 1.93558C18.0892 2.06911 18.8604 2.39635 19.525 2.89033C20.1897 3.3843 20.7287 4.03089 21.0977 4.7768V4.7768C21.5862 5.76477 21.7549 6.88311 21.5798 7.97339C21.4047 9.06367 20.8947 10.0706 20.1222 10.8515L11.3235 20.1324Z'
                      stroke='white'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    ></path>
                  </svg>
                </button>
              </div>
            </div>

            <div>
              <h4 class='mb-6 font-heading font-medium'>More information...</h4>
              <Accordion
                description={data?.singleProduct?.metaDescription?.en}
                attributes={data?.singleProduct?.masterVariant?.attributes}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
