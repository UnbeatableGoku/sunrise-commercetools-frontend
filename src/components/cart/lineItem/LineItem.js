import React from 'react';
import { useState } from 'react';
import useLineItems from '../../../talons/useLineItems';
import { useContext } from 'react';
import { VersionContext } from '../../../context/versionContext';
const LineItem = ({ lineItems }) => {
  const { removeItem, setQty, qty, debouncedHandleQty } =
    useLineItems(lineItems);
  const color = lineItems.variant.attributes.filter(
    (item) => item.name === 'color'
  );
  const cartId = localStorage.getItem('cartId');
  const { state, dispatch } = useContext(VersionContext);
  const versionId = localStorage.getItem('versionId');
  const [cross, setCross] = useState(false);

  const handleCancel = async () => {
    setCross(!cross);
    const { data } = await removeItem({
      variables: {
        cartId,
        lineItemId: lineItems.id,
        versionId,
      },
    });
    console.log(data);
    dispatch({ type: 'SET_VERSION', payload: data.removeItemFromCart.version });
  };

  const crossClassName = cross ? 'rotate-90' : '';

  return (
    <div className='flex pb-3'>
      <div className='max-w-[100px] w-full '>
        <img
          className='object-cover p-2'
          src={lineItems.variant.images[0].url}
          alt='lineitem'
        />
      </div>
      <div className='ps-2 text-sm  text-gray-400 font-semibold'>
        <div className='  '>{lineItems.name.en}</div>
        <div className=' text-gray-600'>
          ${lineItems.price.value.centAmount}
        </div>
        <div>{color[0].value.key}</div>
        <div className='flex  justify-between border w-24 mt-2 p-2 '>
          <button
            onClick={() => {
              setQty(qty - 1);
              debouncedHandleQty(lineItems.id, qty - 1);
            }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width={16}
              height={16}
              fill='currentColor'
              className='bi bi-dash-lg'
              viewBox='0 0 16 16'
            >
              <path
                fillRule='evenodd'
                d='M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z'
              />
            </svg>
          </button>
          <span className='text-black'>{lineItems.quantity}</span>
          <button
            onClick={() => {
              setQty(qty + 1);
              debouncedHandleQty(lineItems.id, qty + 1);
            }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width={16}
              height={16}
              fill='currentColor'
              className='bi bi-plus-lg'
              viewBox='0 0 16 16'
            >
              <path
                fillRule='evenodd'
                d='M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z'
              />
            </svg>
          </button>
        </div>
      </div>
      <div className='ml-auto'>
        <button onClick={() => handleCancel()}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width={16}
            height={16}
            fill='currentColor'
            className={`bi bi-x-lg ${crossClassName}`}
            viewBox='0 0 16 16'
          >
            <path d='M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z' />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default LineItem;
