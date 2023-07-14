import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import useProductCard from '../../talons/useProductCard';

/**
 * Product card component to display product information.
 *
 * @param {Object} props - The props containing product data.
 * @param {Object} props.props - The product data.
 * @param {string} props.props.id - The ID of the product.
 * @param {Array} props.props.masterVariant.images - The images of the product.
 * @param {string} props.props.masterVariant.images[].url - The URL of the image.
 * @param {Object} props.props.name - The name of the product.
 * @param {string} props.props.name.en - The English name of the product.
 * @returns {JSX.Element} The product card component.
 */

const ProductCard = ({ props }) => {
  const { handleAddToCart, handleRemoveFromCart } = useProductCard();
  return (
    <div className='bg-white dark:bg-gray-700  border shadow-sm rounded-md m-3 dark:shadow-slate-500  shadow-slate-400'>
      <div className='h-[250px] overflow-hidden'>
        <Link to={`/product/${props.id}`}>
          <img
            src={props.masterVariant.images[0].url}
            alt='Card Image'
            className=' object-contain w-full h-full hover:scale-110 duration-200 transition-all  '
          />
        </Link>
      </div>
      <div className='p-4'>
        <h2 className='text-md  font-light text-gray-900 dark:text-white h-10'>
          {props.name.en}
        </h2>
      </div>
      <div className='bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-b-md flex items-center  justify-between'>
        <Link to={`/product/${props.id}`}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width={24}
            height={24}
            viewBox='0 0 24 24'
          >
            <path d='M12.015 7c4.751 0 8.063 3.012 9.504 4.636-1.401 1.837-4.713 5.364-9.504 5.364-4.42 0-7.93-3.536-9.478-5.407 1.493-1.647 4.817-4.593 9.478-4.593zm0-2c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 7l-3.36-2.171c-.405.625-.64 1.371-.64 2.171 0 2.209 1.791 4 4 4s4-1.791 4-4-1.791-4-4-4c-.742 0-1.438.202-2.033.554l2.033 3.446z' />
          </svg>
        </Link>

        <div className='bg-indigo-700 dark:bg-white dark:text-black text-white p-2 rounded-md'>
          <button onClick={() => handleAddToCart(props.id)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  props: PropTypes.shape({
    id: PropTypes.string.isRequired,
    masterVariant: PropTypes.shape({
      images: PropTypes.arrayOf(
        PropTypes.shape({
          url: PropTypes.string.isRequired,
        })
      ).isRequired,
    }).isRequired,
    name: PropTypes.shape({
      en: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductCard;
