import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Accordion = ({ description, attributes }) => {
  const [productDetailsOpen, setProductDetailsOpen] = useState(false);

  const toggleProductDetails = () => {
    setProductDetailsOpen(!productDetailsOpen);
  };

  const attr = ['designer', 'commonSize', 'size', 'style', 'gender', 'season'];

  return (
    <div>
      <button
        className={`flex w-full pl-6 lg:pl-12 pr-6 py-4 justify-between items-center leading-7  border-2 border-blueGray-200 hover:border-blueGray-300 ${
          productDetailsOpen ? 'bg-gray-200' : ''
        }`}
        onClick={toggleProductDetails}
      >
        <h3 className='text-xl font-heading font-bold '>Product Details</h3>
        <span>
          <svg
            width='12'
            height='8'
            viewBox='0 0 12 8'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M10.4594 0.289848C10.8128 -0.096616 11.3841 -0.096616 11.7349 0.289848C12.0871 0.676312 12.0897 1.30071 11.7349 1.68718L6.63794 7.21015C6.28579 7.59662 5.71584 7.59662 5.36108 7.21015L0.264109 1.68718C-0.0880363 1.30215 -0.0880363 0.676312 0.264109 0.289848C0.617558 -0.096616 1.18882 -0.096616 1.53966 0.289848L6.00147 4.81927L10.4594 0.289848Z'
              fill='black'
            ></path>
          </svg>
        </span>
      </button>
      {productDetailsOpen && (
        <>
          <div className='pl-6 lg:pl-12  pr-6 py-10 mb-4 bg-gray-100 font-normal'>
            {description ? description : 'No Description Available!!!'}
            <table className=' my-3 w-1/2 sm:w-3/4 whitespace-nowrap'>
              {attributes ? (
                attributes
                  .filter((item) => attr.includes(item.name))
                  .map((item) => {
                    return (
                      <tr className=' border-b border-gray-300 text-md  capitalize  '>
                        <td className=' font-medium w-3 sm:w-full py-1'>
                          {item.name}
                        </td>
                        <td className='font-light'>
                          {item?.value?.key || item?.value?.en || item?.value}
                        </td>
                      </tr>
                    );
                  })
              ) : (
                <div>No attributes available</div>
              )}
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Accordion;
