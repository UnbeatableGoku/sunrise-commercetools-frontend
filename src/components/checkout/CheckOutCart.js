import React from 'react';

const CheckOutCart = ({cartItems}) => {
  // const { cartItems } = useCheckoutCart();

  return (
    <div className='w-full bg-white py-2 px-3 mt-2'>
      <div className='flex justify-between w-full '>
        <div>{cartItems.totalLineItemQuantity} Items</div>
        <div>Edit</div>
      </div>
      <div>
        {cartItems?.lineItems?.length > 0 &&
          cartItems.lineItems.map((item) => {
            return (
              <div className='w-full flex'>
                <div className='max-w-[100px]   '>
                  <img
                    className='object-cover p-2'
                    src={item.variant.images[0].url}
                  />
                </div>
                <div className='w-full'>
                  <div className=' text-black font-bold text-xs pt-2'>
                    ${item.price.value.centAmount}
                  </div>
                  <div className='text-gray-400 text-xs  '>{item.name.en}</div>
                  <div className='text-sm text-gray-500'>
                    Qty:{' '}
                    <span className='text-black font-bold'>
                      {item.quantity}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        <div>
          <div className='flex justify-between'>
            Subtotal:
            <span>{cartItems.taxedPrice?.totalNet?.centAmount}</span>
          </div>

          <div className='flex justify-between'>
            Total Tax:
            <span> + {cartItems.taxedPrice?.totalTax?.centAmount}</span>
          </div>
          <hr className='my-2'></hr>
          <div className='flex justify-between'>
            Subtotal(incl. Tax)
            <span>{cartItems.taxedPrice?.totalGross?.centAmount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutCart;
