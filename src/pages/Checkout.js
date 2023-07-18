import { TextField } from '@mui/material';
import React, { useState } from 'react';
import BillingAddress from '../components/checkout/BillingAddress';
import CheckOutCart from '../components/checkout/CheckOutCart';
import ShippingMethod from '../components/checkout/ShippingMethod';
import useCheckout from '../talons/useCheckout';
const Checkout = () => {
  const {
    register,
    handleSubmit,
    handleEmailSubmit,
    showEmail,
    setShowEmail,
    handleShippngAddressSubmit,
    cartItems,
    handleOrderCreate,
  } = useCheckout();
  const email = localStorage.getItem('customerEmail');
  return (
    <div className='bg-gray-200'>
      <div className='mx-auto  max-w-[800px]  w-full  '>
        <div className='flex flex-col  '>
          <div className=' py-6 px-3 bg-white mt-2 '>
            <h1 className='font-semibold text-2xl uppercase '>Checkout</h1>
          </div>
          <div className='flex'>
            <div className='max-w-[490px] w-full'>
              <div className='bg-white py-2 px-3 mt-2'>
                <div className='font-medium text-xl'>Email Address</div>
                {email && showEmail ? (
                  <div className='flex justify-between items-center'>
                    <div>{email}</div>
                    <div className='bg-black text-white border border-black cursor-pointer hover:bg-white hover:text-black transition-all duration-150'>
                      <button
                        className='w-full p-2 px-4'
                        onClick={() => setShowEmail(false)}
                      >
                        Change
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(handleEmailSubmit)}>
                    <div className='mt-3'>
                      <TextField
                        size='small'
                        id='outlined-basic'
                        label='Email'
                        fullWidth
                        variant='outlined'
                        {...register('email')}
                      />
                    </div>
                    <div className=' bg-black cursor-pointer py-2 mt-2 text-center border-2 transition-all duration-150  border-black  text-white font-bold text-base hover:bg-white  hover:text-black'>
                      <button
                        className='uppercase tracking-wide w-full h-full '
                        type='submit'
                      >
                        {' '}
                        Continue As guest
                      </button>
                    </div>
                  </form>
                )}
              </div>
              <div className='bg-white py-2 px-3 mt-2'>
                <div className='font-medium text-xl'>Shipping Address</div>
                <form onSubmit={handleSubmit(handleShippngAddressSubmit)}>
                  <div>
                    <div className='mt-3'>
                      <TextField
                        size='small'
                        id='outlined-basic'
                        label='FirstName'
                        fullWidth
                        variant='outlined'
                        {...register('firstName')}
                      />
                    </div>
                    <div className='mt-3'>
                      <TextField
                        size='small'
                        id='outlined-basic'
                        label='LastName'
                        fullWidth
                        variant='outlined'
                        {...register('lastName')}
                      />
                    </div>
                    <div className='mt-3'>
                      <TextField
                        size='small'
                        id='outlined-basic'
                        label='StreetNumber'
                        fullWidth
                        variant='outlined'
                        {...register('streetName')}
                      />
                    </div>
                    <div className='mt-3'>
                      <select
                        id='outlined-basic'
                        name='country'
                        defaultValue='' // Set the default value to an empty string
                        {...register('country')}
                        className='form-control'
                      >
                        <option value='' disabled>
                          Select a country
                        </option>
                        <option value='DE'>Germany (DE)</option>
                      </select>
                    </div>
                    <div className='mt-3'>
                      <TextField
                        size='small'
                        id='outlined-basic'
                        label='City'
                        fullWidth
                        variant='outlined'
                        {...register('city')}
                      />
                    </div>
                    <div className='mt-3'>
                      <TextField
                        size='small'
                        id='outlined-basic'
                        label='PostalCode'
                        fullWidth
                        variant='outlined'
                        {...register('postalCode')}
                      />
                    </div>
                    <div className='mt-3'>
                      <TextField
                        size='small'
                        id='outlined-basic'
                        label='PhoneNo'
                        fullWidth
                        variant='outlined'
                        {...register('phone')}
                      />
                    </div>
                  </div>
                  <div className=' bg-black cursor-pointer py-2 mt-2 text-center border-2 transition-all duration-150  border-black  text-white font-bold text-base hover:bg-white  hover:text-black'>
                    <button
                      className='uppercase tracking-wide w-full h-full '
                      type='submit'
                    >
                      {' '}
                      Add Shippng Address
                    </button>
                  </div>
                </form>
              </div>
              <div className='bg-white py-2 px-3 mt-2'>
                <ShippingMethod />
              </div>
              <div className='bg-white py-2 px-3 mt-2'>
                <div className='font-medium text-xl'>Billing Address</div>
                <BillingAddress />
              </div>
              {/* <div>Payment</div> */}
              <div className=' bg-black cursor-pointer py-2 mt-2 text-center border-2 transition-all duration-150  border-black  text-white font-bold text-base hover:bg-white  hover:text-black'>
                <button className='w-full' onClick={() => handleOrderCreate()}>
                  Order Generate
                </button>
              </div>
            </div>
            <div className=' max-w-[300px] w-full ms-3 '>
              <CheckOutCart cartItems={cartItems} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
