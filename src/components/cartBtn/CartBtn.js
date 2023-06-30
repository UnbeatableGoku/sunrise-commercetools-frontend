import React, { useState } from 'react';

export const CartBtn = () => {
  const [cartQty, setCartQty] = useState(0);

  const increment = () => {
    setCartQty(cartQty + 1);
  };

  const decrement = () => {
    setCartQty(cartQty - 1);
  };

  return (
    <div>
      {cartQty > 0 ? (
        <div className='flex items-center justify-between '>
          <button
            onClick={() => decrement()}
            className='bg-green-600 rounded-full h-10 w-10 font-bold text-xl text-white hover:bg-green-800'
          >
            -
          </button>

          <span className='px-4 font-semibold text-xl'>{cartQty}</span>

          <button
            onClick={() => increment()}
            className='bg-green-600 rounded-full h-10 w-10 font-bold text-xl text-white hover:bg-green-800'
          >
            +
          </button>
        </div>
      ) : (
        <button
          onClick={() => increment()}
          class='block py-4 font-heading font-medium  text-xl text-white text-center bg-slate-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-gray-700 rounded-md cursor-pointer'
        >
          Add To Cart
        </button>
      )}
    </div>
  );
};
